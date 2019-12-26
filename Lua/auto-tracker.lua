local http = require("socket.http")

-- local data, err = http.request('http://localhost:3000/')

local locations = {}

-- local currentLocation = mainmemory.read_u16_be(0x1C8544)
local events = mainmemory.readbyterange(0x11B4A3, 97)
local skulls = mainmemory.readbyterange(0x11B46B, 25)

local mainform, dataTxt, dataBtn
local checkType, checkBits

local items = mainmemory.readbyterange(0x11A643, 25)
local equipment = mainmemory.readbyterange(0x11A66B, 3)
local upgrades = mainmemory.readbyterange(0x11A670, 4)
local questitems = mainmemory.readbyterange(0x11A674, 4)
local skulltulas = mainmemory.read_u16_be(0x11A6A0)

-- Write data to file
function sendCheckToServer ()
--   local file = io.open('checks.txt', 'a')
--   file:write(mainmemory.read_u16_be(0x1C8544) .. '|||' .. checkType .. '|||' .. forms.gettext(dataTxt) .. '|||' .. checkBits .. '\n')
--   file:close()
--   forms.setproperty(dataTxt, 'Enabled', false)
--   forms.setproperty(dataBtn, 'Enabled', false)
--   forms.settext(dataTxt, "")
--   client.unpause()
    local data, err = http.request('http://localhost:3000/send_check?'
    .. 'location=' .. mainmemory.read_u16_be(0x1C8544) .. '&'
    .. 'type=' .. checkType .. '&'
    .. 'bits=' .. checkBits
)
    -- print(data, err)
end

function sendInvToServer(invType, invData)
  if mainmemory.read_u16_be(0x1C8544) < 120 then
    local msg = ""
    if invData[0] == nil then
      msg = '[' .. invData[1]
      for i=2,table.getn(invData) do
        -- print(invData[i])
        -- print(msg)
        msg = msg .. "," .. invData[i]
        emu.yield()
        emu.yield()
      end
    else
      msg = '[' .. invData[0]
      for i=1,table.getn(invData) do
        -- print(invData[i])
        -- print(msg)
        msg = msg .. "," .. invData[i]
        emu.yield()
        emu.yield()
      end
    end
    msg = msg .. "]"
    print(msg)
  local data, err = http.request('http://localhost:3000/send_inv?'
  .. 'invType=' .. invType .. '&'
  .. 'invData=' .. msg
)
  print(data, err)
  end
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

-- Wait for input to be entered
-- function waitForInput (msg)
--   gui.drawBox(50, 50, client.bufferwidth()-50, client.bufferheight()-50, "black", "white")
--   gui.drawString(client.bufferwidth()/2, client.bufferheight()/2, msg, "black", nil, 30, nil, "bold", "center", "middle")
--   forms.setproperty(dataTxt, 'Enabled', true)
--   forms.setproperty(dataBtn, 'Enabled', true)
--   client.pause()
-- end

-- Close things if script ended
-- event.onexit(function ()
-- 	forms.destroy(mainform)
-- end)

-- Form
-- mainform = forms.newform(300, 130, "Data Input")
--   dataTxt = forms.textbox(mainform, "", 240, 20, nil, 20, 20, false, false)
--   dataBtn = forms.button(mainform, "Enter", writeToFile, 20, 45, 240, 20)
--   forms.setproperty(dataTxt, 'Enabled', false)
--   forms.setproperty(dataBtn, 'Enabled', false)

-- Main loop
-- print("Before Main")
while true do
--   if forms.gettext(mainform) == "" then
-- 		return
-- 	end

  -- Checks

  -- Update if current location changes
  if currentLocation ~= mainmemory.read_u16_be(0x1C8544) then
    currentLocation = mainmemory.read_u16_be(0x1C8544)
    -- print("Location Changed")
    local s = os.time()
    while true do
      local n = os.time()
      emu.yield()
      if os.difftime(n, s) >= 1 then
        break
      end
    end
  end
  -- If it doesn't already exist, create it
  if locations[mainmemory.read_u16_be(0x1C8544)] == nil then
    locations[mainmemory.read_u16_be(0x1C8544)] = {}
    locations[mainmemory.read_u16_be(0x1C8544)]['Chests'] = mainmemory.readbyterange(0x1CA1D7, 5)
    locations[mainmemory.read_u16_be(0x1C8544)]['Items'] = mainmemory.readbyterange(0x1CA1E3, 5)
  end

  -- If a chest is opened, prompt player
  if table.concat(locations[mainmemory.read_u16_be(0x1C8544)]['Chests']) ~= table.concat(mainmemory.readbyterange(0x1CA1D7, 5)) then
    local data = ""
    for i=1,4 do
      data = data .. table.concat(toBits(mainmemory.readbyterange(0x1CA1D7, 5)[i] - locations[mainmemory.read_u16_be(0x1C8544)]['Chests'][i], 8))
    end
    locations[mainmemory.read_u16_be(0x1C8544)]['Chests'] = mainmemory.readbyterange(0x1CA1D7, 5)
    checkBits = data
    checkType = "Chest"
    sendCheckToServer()
    -- waitForInput("What chest was this?")
  end

  -- If an item is picked up, prompt player
  if table.concat(locations[mainmemory.read_u16_be(0x1C8544)]['Items']) ~= table.concat(mainmemory.readbyterange(0x1CA1E3, 5)) then
    -- print(locations[mainmemory.read_u16_be(0x1C8544)]['Items'])
    local data = ""
    for i=1,4 do
      data = data .. table.concat(toBits(mainmemory.readbyterange(0x1CA1E3, 5)[i] - locations[mainmemory.read_u16_be(0x1C8544)]['Items'][i], 8))
    end
    locations[mainmemory.read_u16_be(0x1C8544)]['Items'] = mainmemory.readbyterange(0x1CA1E3, 5)
    checkBits = data
    checkType = "Item"
    sendCheckToServer()
    -- waitForInput("What item was this?")
  end

  -- If a skull is obtained, prompt player
  if table.concat(skulls) ~= table.concat(mainmemory.readbyterange(0x11B46B, 25)) then
    local data = ""
    for i=1,24 do
      data = data .. table.concat(toBits(mainmemory.readbyterange(0x11B46B, 25)[i] - skulls[i], 8))
    end
    skulls = mainmemory.readbyterange(0x11B46B, 25)
    checkBits = data
    checkType = "Skull"
    sendCheckToServer()
    -- waitForInput("What skull was this?")
  end

  -- If an event occurs, prompt player
  if table.concat(events) ~= table.concat(mainmemory.readbyterange(0x11B4A3, 97)) then
    -- print(events)
    -- print(mainmemory.readbyterange(0x11B4A3, 49))
    local data = ""
    for i=1,96 do
      data = data .. table.concat(toBits(mainmemory.readbyterange(0x11B4A3, 97)[i] - events[i], 8))
    end
    events = mainmemory.readbyterange(0x11B4A3, 97)
    checkBits = data
    checkType = "Event"
    sendCheckToServer()
    -- waitForInput("What event was this?")
  end


  -- Inventory

  -- When a new item is obtained, send it
  if table.concat(items) ~= table.concat(mainmemory.readbyterange(0x11A643, 25)) then
    items = mainmemory.readbyterange(0x11A643, 25)
    -- msg = 'items'
    -- for i=0,23 do
    --   msg = msg .. "," .. items[i]
    --   emu.yield()
    --   emu.yield()
    -- end
    sendInvToServer('items', mainmemory.readbyterange(0x11A644, 24))
  end
  -- When new equipment is obtained, send it
  if table.concat(equipment) ~= table.concat(mainmemory.readbyterange(0x11A66B,3)) then
    equipment = mainmemory.readbyterange(0x11A66B,3)
    -- for i=0,table.getn(equipment) do
    --   print(toBits(equipment[i], 8))
    -- end
    -- local tmp = table.concat(toBits(equipment[1], 8), toBits(equipment[2], 8))
    -- print(equipment[1])
    -- print(toBits(equipment[1], 8))
    -- print(table.concat(toBits(equipment[1]), ""))
    local tmp = toBits(equipment[1], 8)
    for i=9,16 do
      tmp[i] = toBits(equipment[2], 8)[i - 8]
      emu.yield()
      emu.yield()
    end
    -- print(tmp)
    sendInvToServer('equipments', tmp)
  end
  -- When an upgrade is obtained, send it
  if table.concat(upgrades) ~= table.concat(mainmemory.readbyterange(0x11A670, 4)) then
    upgrades = mainmemory.readbyterange(0x11A670, 4)
    -- msg = 'upgrades'
    -- for i=0,3 do
    --   msg = msg .. "," .. upgrades[i]
    --   emu.yield()
    --   emu.yield()
    -- end
    sendInvToServer('upgrades', upgrades)
  end
  -- When a quest item is obtained, send it
  if table.concat(questitems) ~= table.concat(mainmemory.readbyterange(0x11A674, 4)) then
    questitems = mainmemory.readbyterange(0x11A674, 4)
    -- msg = 'questitems'
    -- for i=0,3 do
    --   msg = msg .. "," .. questitems[i]
    --   emu.yield()
    --   emu.yield()
    -- end
    sendInvToServer('questitems', questitems)
  end
  -- When a skulltula is collected
  if skulltulas ~= mainmemory.read_u16_be(0x11A6A0) then
    skulltulas = mainmemory.read_u16_be(0x11A6A0)
    sendInvToServer('skulls', skulltulas)
  end
  emu.yield()
end
