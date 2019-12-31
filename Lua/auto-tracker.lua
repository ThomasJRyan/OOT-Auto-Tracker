local http = require("socket.http")

local locations = {}

local events = mainmemory.readbyterange(0x11B4A3, 97)
local skulls = mainmemory.readbyterange(0x11B46B, 25)

local checkType, checkBits

local items = mainmemory.readbyterange(0x11A643, 25)
local equipment = mainmemory.readbyterange(0x11A66B, 3)
local upgrades = mainmemory.readbyterange(0x11A670, 4)
local questitems = mainmemory.readbyterange(0x11A673, 5)
local skulltulas = mainmemory.read_u16_be(0x11A6A0)
local age = mainmemory.read_u16_be(0x11A5D6)

-- Send check to GUI
function sendCheckToServer ()
    local data, err = http.request('http://localhost:3000/send_check?'
    .. 'location=' .. mainmemory.read_u16_be(0x1C8544) .. '&'
    .. 'type=' .. checkType .. '&'
    .. 'bits=' .. checkBits
)
end

-- Send inventory item to GUI
function sendInvToServer(invType, invData)
    if invType == "items" and invData[23] == 255 then
      invData[23] = 0
    end
    local msg = ""
    if invData[0] == nil then
      msg = '[' .. invData[1]
      for i=2,table.getn(invData) do
        msg = msg .. "," .. invData[i]
        emu.yield()
        emu.yield()
      end
    else
      msg = '[' .. invData[0]
      for i=1,table.getn(invData) do
        msg = msg .. "," .. invData[i]
        emu.yield()
        emu.yield()
      end
    end
    msg = msg .. "]"
  local data, err = http.request('http://localhost:3000/send_inv?'
  .. 'invType=' .. invType .. '&'
  .. 'invData=' .. msg
)
end

-- Convert to bits
function toBits(num,bits)
    -- returns a table of bits, most significant first.
    bits = bits or math.max(1, select(2, math.frexp(num)))
    local t = {} -- will contain the bits
    for b = bits, 1, -1 do
        t[b] = math.fmod(num, 2)
        num = math.floor((num - t[b]) / 2)
    end
    return t
end

-- TODO: Start GUI automatically
-- os.execute("./OOT_Spoilerlog_Viewer.exe")

-- Main loop
print("Starting Auto Tracker...")
while true do
  -- Checks

  -- Update if current location changes
  if currentLocation ~= mainmemory.read_u16_be(0x1C8544) then
    currentLocation = mainmemory.read_u16_be(0x1C8544)
    -- local s = os.time()
    -- while true do
    --   local n = os.time()
    --   emu.yield()
    --   if os.difftime(n, s) >= 1 then
    --     break
    --   end
    -- end
  end


  -- If it doesn't already exist, create it
  if locations[mainmemory.read_u16_be(0x1C8544)] == nil then
    locations[mainmemory.read_u16_be(0x1C8544)] = {}
    locations[mainmemory.read_u16_be(0x1C8544)]['Chests'] = mainmemory.readbyterange(0x1CA1D7, 5)
    locations[mainmemory.read_u16_be(0x1C8544)]['Items'] = mainmemory.readbyterange(0x1CA1E3, 5)
  end

  -- If a chest is opened, send to GUI
  if table.concat(locations[mainmemory.read_u16_be(0x1C8544)]['Chests']) ~= table.concat(mainmemory.readbyterange(0x1CA1D7, 5)) then
    local data = ""
    for i=1,4 do
      data = data .. table.concat(toBits(mainmemory.readbyterange(0x1CA1D7, 5)[i] - locations[mainmemory.read_u16_be(0x1C8544)]['Chests'][i], 8))
    end
    locations[mainmemory.read_u16_be(0x1C8544)]['Chests'] = mainmemory.readbyterange(0x1CA1D7, 5)
    checkBits = data
    checkType = "Chest"
    sendCheckToServer()
  end

  -- If an item is picked up, send to GUI
  if table.concat(locations[mainmemory.read_u16_be(0x1C8544)]['Items']) ~= table.concat(mainmemory.readbyterange(0x1CA1E3, 5)) then
    local data = ""
    for i=1,4 do
      data = data .. table.concat(toBits(mainmemory.readbyterange(0x1CA1E3, 5)[i] - locations[mainmemory.read_u16_be(0x1C8544)]['Items'][i], 8))
    end
    locations[mainmemory.read_u16_be(0x1C8544)]['Items'] = mainmemory.readbyterange(0x1CA1E3, 5)
    checkBits = data
    checkType = "Item"
    sendCheckToServer()
  end

  -- If a skull is obtained, send to GUI
  if table.concat(skulls) ~= table.concat(mainmemory.readbyterange(0x11B46B, 25)) then
    local data = ""
    for i=1,24 do
      data = data .. table.concat(toBits(mainmemory.readbyterange(0x11B46B, 25)[i] - skulls[i], 8))
    end
    skulls = mainmemory.readbyterange(0x11B46B, 25)
    checkBits = data
    checkType = "Skull"
    sendCheckToServer()
  end

  -- If an event occurs, send to GUI
  if table.concat(events) ~= table.concat(mainmemory.readbyterange(0x11B4A3, 97)) then
    local data = ""
    for i=1,96 do
      data = data .. table.concat(toBits(mainmemory.readbyterange(0x11B4A3, 97)[i] - events[i], 8))
    end
    events = mainmemory.readbyterange(0x11B4A3, 97)
    checkBits = data
    checkType = "Event"
    sendCheckToServer()
  end


  -- Inventory

  -- When a new item is obtained, send it
  if table.concat(items) ~= table.concat(mainmemory.readbyterange(0x11A643, 25)) then
    items = mainmemory.readbyterange(0x11A643, 25)
    sendInvToServer('items', mainmemory.readbyterange(0x11A644, 24))
  end

  -- When new equipment is obtained, send it
  -- TODO: Optimize this and reduce send time
  if table.concat(equipment) ~= table.concat(mainmemory.readbyterange(0x11A66B,3)) then
    equipment = mainmemory.readbyterange(0x11A66B,3)
    local tmp = toBits(equipment[1], 8)
    for i=9,16 do
      tmp[i] = toBits(equipment[2], 8)[i - 8]
      emu.yield()
      emu.yield()
    end
    sendInvToServer('equipments', tmp)
  end

  -- When an upgrade is obtained, send it
  -- TODO: Optimize this and reduce send time
  if table.concat(upgrades) ~= table.concat(mainmemory.readbyterange(0x11A670, 4)) then
    upgrades = mainmemory.readbyterange(0x11A670, 4)
    local tmp = toBits(upgrades[1], 8)
    for i=9,16 do
      tmp[i] = toBits(upgrades[2], 8)[i - 8]
      emu.yield()
      emu.yield()
    end
    for i=17,24 do
      tmp[i] = toBits(upgrades[3], 8)[i - 16]
      emu.yield()
      emu.yield()
    end
    sendInvToServer('upgrades', tmp)
  end

  -- When a quest item is obtained, send it
  -- TODO: Optimize this and reduce send time
  if table.concat(questitems) ~= table.concat(mainmemory.readbyterange(0x11A673, 5)) then
    questitems = mainmemory.readbyterange(0x11A673, 5)
    local tmp = toBits(questitems[1], 8)
    for i=9,16 do
      tmp[i] = toBits(questitems[2], 8)[i - 8]
      emu.yield()
      emu.yield()
    end
    for i=17,24 do
      tmp[i] = toBits(questitems[3], 8)[i - 16]
      emu.yield()
      emu.yield()
    end
    for i=25,32 do
      tmp[i] = toBits(questitems[4], 8)[i - 24]
      emu.yield()
      emu.yield()
    end
    sendInvToServer('questitems', tmp)
  end

  -- When a skulltula is collected
  if skulltulas ~= mainmemory.read_u16_be(0x11A6A0) then
    skulltulas = mainmemory.read_u16_be(0x11A6A0)
    sendInvToServer('skulls', {skulltulas})
  end

  -- When age changes
  if age ~= mainmemory.read_u16_be(0x11A5D6) then
    age = mainmemory.read_u16_be(0x11A5D6)
    sendInvToServer('age', {age})
  end
  emu.yield()
end
