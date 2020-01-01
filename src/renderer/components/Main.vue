<template>
  <div id="wrapper">
    <main>
      <div class="container">
        <div class="regionContainer" v-if="!settings.items_only">
          <div class="region" v-for="region in checks" v-bind:style="{backgroundColor: region['backgroundColour'], color: region['colour']}">
            <span class="regionHeader">{{region['region']}}</span>
            <div v-for="area in region['areas']">
              <div class="areaDiv" v-if="checkRequirements(area.access_requirements)">
                <span class="areaHeader" v-if="handleArea(area['checks'])">{{area['area']}}</span>
                <div v-for="check in area['checks']">
                  <span class="check" onclick="this.parentNode.removeChild(this)" v-if="handleCheck(check, region, area)"><span v-if="check.type == 'Skull'">[GS] </span>{{check.check}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="extraContainer">
          <div class="itemGrid">
            <img src="../assets/images/DEKU_STICK.png" v-bind:class="{dim:!has_item('deku_stick')}">
            <img src="../assets/images/DEKU_NUTS.png" v-bind:class="{dim:!has_item('deku_nut')}">
            <img src="../assets/images/BOMBS.png" v-bind:class="{dim:!has_item('bombs')}">
            <img src="../assets/images/FAIRY_BOW.png" v-bind:class="{dim:!has_item('bow')}">
            <img src="../assets/images/FIRE_ARROWS.png" v-bind:class="{dim:!has_item('fire_arrow')}">
            <img src="../assets/images/DINS_FIRE.png" v-bind:class="{dim:!has_item('dins_fire')}">
            
            <img src="../assets/images/FAIRY_SLINGSHOT.png" v-bind:class="{dim:!has_item('slingshot')}">
            <img src="../assets/images/FAIRY_OCARINA.png" v-bind:class="{dim:!has_item('ocarina')}" v-if="!has_item('ocarina_of_time')">
            <img src="../assets/images/OCARINA_OF_TIME.png" v-bind:class="{dim:!has_item('ocarina_of_time')}" v-if="has_item('ocarina_of_time')">
            <img src="../assets/images/BOMBCHU.png" v-bind:class="{dim:!has_item('bombchus')}">
            <img src="../assets/images/HOOKSHOT.png" v-bind:class="{dim:!has_item('hookshot')}" v-if="!has_item('longshot')">
            <img src="../assets/images/LONGSHOT.png" v-bind:class="{dim:!has_item('longshot')}" v-if="has_item('longshot')">
            <img src="../assets/images/ICE_ARROWS.png" v-bind:class="{dim:!has_item('ice_arrow')}">
            <img src="../assets/images/FARORES_WIND.png" v-bind:class="{dim:!has_item('farores_wind')}">
            
            <img src="../assets/images/BOOMERANG.png" v-bind:class="{dim:!has_item('boomerang')}">
            <img src="../assets/images/LENS_OF_TRUTH.png" v-bind:class="{dim:!has_item('lens_of_truth')}">
            <img src="../assets/images/MAGIC_BEANS.png" v-bind:class="{dim:!has_item('beans')}">
            <img src="../assets/images/MEGATON_HAMMER.png" v-bind:class="{dim:!has_item('hammer')}">
            <img src="../assets/images/LIGHT_ARROWS.png" v-bind:class="{dim:!has_item('light_arrow')}">
            <img src="../assets/images/NAYRUS_LOVE.png" v-bind:class="{dim:!has_item('nayrus_love')}">

            <div v-for="bottle in player.items.bottles">
              <img src="../assets/images/BOTTLE.png" v-bind:class="{dim:bottle == 255}" v-if="bottle == 255">
              <img src="../assets/images/BOTTLE.png" v-if="bottle == 20">
              <img src="../assets/images/RED_POTION.png" v-if="bottle == 21">
              <img src="../assets/images/GREEN_POTION.png" v-if="bottle == 22">
              <img src="../assets/images/BLUE_POTION.png" v-if="bottle == 23">
              <img src="../assets/images/BOTTLED_FAIRY.png" v-if="bottle == 24">
              <img src="../assets/images/FISH.png" v-if="bottle == 25">
              <img src="../assets/images/MILK.png" v-if="bottle == 26">
              <img src="../assets/images/RUTOS_LETTER.png" v-if="bottle == 27">
              <img src="../assets/images/BLUE_FIRE.png" v-if="bottle == 28">
              <img src="../assets/images/BUG.png" v-if="bottle == 29">
              <img src="../assets/images/BIG_POE.png" v-if="bottle == 30">
              <img src="../assets/images/MILK_HALF.png" v-if="bottle == 31">
              <img src="../assets/images/POE.png" v-if="bottle == 32">
            </div>

            <div>
              <img src="../assets/images/POCKET_EGG.png" class="dim" v-if="player.items.adult_quest == 0">
              <img src="../assets/images/POCKET_EGG.png" v-if="player.items.adult_quest == 45">
              <img src="../assets/images/POCKET_CUCCO.png" v-if="player.items.adult_quest == 46">
              <img src="../assets/images/COJIRO.png" v-if="player.items.adult_quest == 47">
              <img src="../assets/images/ODD_MUSHROOM.png" v-if="player.items.adult_quest == 48">
              <img src="../assets/images/ODD_POTION.png" v-if="player.items.adult_quest == 49">
              <img src="../assets/images/POACHERS_SAW.png" v-if="player.items.adult_quest == 50">
              <img src="../assets/images/BROKEN_GORONS_SWORD.png" v-if="player.items.adult_quest == 51">
              <img src="../assets/images/PRESCRIPTION.png" v-if="player.items.adult_quest == 52">
              <img src="../assets/images/EYEBALL_FROG.png" v-if="player.items.adult_quest == 53">
              <img src="../assets/images/EYE_DROPS.png" v-if="player.items.adult_quest == 54">
              <img src="../assets/images/CLAIM_CHECK.png" v-if="player.items.adult_quest == 55">
            </div>

            <div>
              <img src="../assets/images/WEIRD_EGG.png" class="dim" v-if="player.items.child_quest == 0">
              <img src="../assets/images/WEIRD_EGG.png" v-if="player.items.child_quest == 33">
              <img src="../assets/images/CHICKEN.png" v-if="player.items.child_quest == 34">
              <img src="../assets/images/ZELDAS_LETTER.png" v-if="player.items.child_quest == 35">
              <img src="../assets/images/KEATON_MASK.png" v-if="player.items.child_quest == 36">
              <img src="../assets/images/SKULL_MASK.png" v-if="player.items.child_quest == 37">
              <img src="../assets/images/SPOOKY_MASK.png" v-if="player.items.child_quest == 38">
              <img src="../assets/images/BUNNY_HOOD.png" v-if="player.items.child_quest == 39">
              <img src="../assets/images/GORON_MASK.png" v-if="player.items.child_quest == 40">
              <img src="../assets/images/ZORA_MASK.png" v-if="player.items.child_quest == 41">
              <img src="../assets/images/GERUDO_MASK.png" v-if="player.items.child_quest == 42">
              <img src="../assets/images/MASK_OF_TRUTH.png" v-if="player.items.child_quest == 43">
            </div>

            <img src="../assets/images/KOKIRI_SWORD.png" v-bind:class="{dim:!has_equipment('kokiri_sword')}">
            <img src="../assets/images/MASTER_SWORD.png" v-bind:class="{dim:!has_equipment('master_sword')}">
            <img src="../assets/images/BIGGORONS_SWORD.png" v-bind:class="{dim:!has_equipment('biggoron_sword')}">
            
            <img src="../assets/images/DEKU_SHIELD.png" v-bind:class="{dim:!has_equipment('deku_shield')}">
            <img src="../assets/images/HYLIAN_SHIELD.png" v-bind:class="{dim:!has_equipment('hylian_shield')}">
            <img src="../assets/images/MIRROR_SHIELD.png" v-bind:class="{dim:!has_equipment('mirror_shield')}">
            
            <img src="../assets/images/KOKIRI_TUNIC.png" v-bind:class="{dim:!has_equipment('kokiri_tunic')}">
            <img src="../assets/images/GORON_TUNIC.png" v-bind:class="{dim:!has_equipment('goron_tunic')}">
            <img src="../assets/images/ZORA_TUNIC.png" v-bind:class="{dim:!has_equipment('zora_tunic')}">

            <img src="../assets/images/KOKIRI_BOOTS.png" v-bind:class="{dim:!has_equipment('kokiri_boots')}">
            <img src="../assets/images/IRON_BOOTS.png" v-bind:class="{dim:!has_equipment('iron_boots')}">
            <img src="../assets/images/HOVER_BOOTS.png" v-bind:class="{dim:!has_equipment('hover_boots')}">
            
            <img src="../assets/images/ZELDAS_LULLABY_ALT.png" v-bind:class="{dim:!player.songs.zeldas_lullaby}">
            <img src="../assets/images/EPONAS_SONG_ALT.png" v-bind:class="{dim:!player.songs.eponas_song}">
            <img src="../assets/images/SARIAS_SONG_ALT.png" v-bind:class="{dim:!player.songs.sarias_song}">
            <img src="../assets/images/SUNS_SONG_ALT.png" v-bind:class="{dim:!player.songs.suns_song}">
            <img src="../assets/images/SONG_OF_TIME_ALT.png" v-bind:class="{dim:!player.songs.song_of_time}">
            <img src="../assets/images/SONG_OF_STORMS_ALT.png" v-bind:class="{dim:!player.songs.song_of_storms}">
            
            <img src="../assets/images/MINUET_OF_FOREST.png" v-bind:class="{dim:!player.songs.minuet_of_forest}">
            <img src="../assets/images/BOLERO_OF_FIRE.png" v-bind:class="{dim:!player.songs.bolero_of_fire}">
            <img src="../assets/images/SERENADE_OF_WATER.png" v-bind:class="{dim:!player.songs.serenade_of_water}">
            <img src="../assets/images/REQUIEM_OF_SPIRIT.png" v-bind:class="{dim:!player.songs.requiem_of_spirits}">
            <img src="../assets/images/NOCTURNE_OF_SHADOW.png" v-bind:class="{dim:!player.songs.nocture_of_shadow}">
            <img src="../assets/images/PRELUDE_OF_LIGHT.png" v-bind:class="{dim:!player.songs.prelude_of_light}">

            <img src="../assets/images/FOREST_MEDALLION.png" v-bind:class="{dim:!has_medallion('forest')}">
            <img src="../assets/images/FIRE_MEDALLION.png" v-bind:class="{dim:!has_medallion('fire')}">
            <img src="../assets/images/WATER_MEDALLION.png" v-bind:class="{dim:!has_medallion('water')}">
            <img src="../assets/images/SPIRIT_MEDALLION.png" v-bind:class="{dim:!has_medallion('spirit')}">
            <img src="../assets/images/SHADOW_MEDALLION.png" v-bind:class="{dim:!has_medallion('shadow')}">
            <img src="../assets/images/LIGHT_MEDALLION.png" v-bind:class="{dim:!has_medallion('light')}">

            <img src="../assets/images/KOKIRI_EMERALD.png" v-bind:class="{dim:!has_jewel('emerald')}">
            <img src="../assets/images/GORONS_RUBY.png" v-bind:class="{dim:!has_jewel('ruby')}">
            <img src="../assets/images/ZORAS_SAPPHIRE.png" v-bind:class="{dim:!has_jewel('sapphire')}">

            <div>
              <img src="../assets/images/GORONS_BRACELET.png" v-bind:class="{dim:player.upgrades.strength == 0}" v-if="player.upgrades.strength == 0">
              <img src="../assets/images/GORONS_BRACELET.png" v-if="player.upgrades.strength == 1">
              <img src="../assets/images/SILVER_GAUNTLETS.png" v-if="player.upgrades.strength == 2">
              <img src="../assets/images/GOLDEN_GAUNTLETS.png" v-if="player.upgrades.strength == 3">
            </div>

            <div>
              <img src="../assets/images/SILVER_SCALE.png" v-bind:class="{dim:player.upgrades.scale == 0}" v-if="player.upgrades.scale == 0">
              <img src="../assets/images/SILVER_SCALE.png" v-if="player.upgrades.scale == 1">
              <img src="../assets/images/GOLDEN_SCALE.png" v-if="player.upgrades.scale == 2">
            </div>

            <div style="position:relative">
              <img src="../assets/images/GOLD_SKULLTULA.png" v-bind:class="{dim:!player.skulls}">
              <div v-if="player.skulls" class="itemNumber">
                <span>{{player.skulls}}</span>
              </div>
            </div>

            <div>
              <img src="../assets/images/MAGIC.png" v-bind:class="{dim:!player.upgrades.magic}" v-if="player.upgrades.magic <= 1">
              <img src="../assets/images/DOUBLE_MAGIC.png" v-if="player.upgrades.magic >= 2">
            </div>

            <img src="../assets/images/GERUDOS_CARD.png" v-bind:class="{dim:!has_equipment('gerudo_card')}">
            <img src="../assets/images/STONE_OF_AGONY.png" v-bind:class="{dim:!has_equipment('stone_of_agony')}">

          </div>
          <div class="logicSettings" v-if="!settings.items_only">
            <div>
              <span>Deku Logic</span>
              <select v-model="settings.open_deku">
                <option>Open</option>
                <option>Closed</option>
              </select>
            </div>
            <div>
              <span>Forest Logic</span>
              <select v-model="settings.open_forest">
                <option>Open</option>
                <option>Closed</option>
              </select>
            </div>
            <div>
              <span>Fountain Logic</span>
              <select v-model="settings.open_fountain">
                <option>Open</option>
                <option>Closed</option>
              </select>
            </div>
            <div>
              <span>Temple Logic</span>
              <select v-model="settings.open_temple">
                <option>Open</option>
                <option>Closed</option>
              </select>
            </div>
            <div>
              <span>Ganon Logic</span>
              <select v-model="settings.open_ganon">
                <option>Medallions</option>
                <option>Open</option>
                <option>Vanilla</option>
              </select>
            </div>
          </div>
          <button v-on:click="toggle_checks" class="toggleButton">
            Toggle Checks
          </button>
        </div>

      </div>
    </main>
  </div>
</template>

<script>
  const { ipcRenderer } = require('electron')

  export default {
    name: 'main',
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      },
      toggle_checks() {
        this.settings.items_only = !this.settings.items_only
        ipcRenderer.send('toggle_checks', (event, data) => {})
      },
      has_item (item) {
        const items = this.player.items
        return items[item]
      },
      has_equipment(equipment){
        const equipments = this.player.equipments
        return equipments[equipment]
      },
      has_magic() {
        const upgrades = this.player.upgrades
        return upgrades.magic
      },
      has_scale(lvl) {
        const upgrades = this.player.upgrades
        return upgrades.scale >= lvl
      },
      has_strength(lvl) {
        const upgrades = this.player.upgrades
        return upgrades.strength >= lvl
      },
      has_jewel(jewel) {
        const jewels = this.player.jewels
        return jewels[jewel]
      },
      has_medallion(medallion) {
        const medallions = this.player.medallions
        return medallions[medallion]
      },
      has_skulls(num) {
        return this.player.skulls >= num
      },
      can_use_explosives () {
        const items = this.player.items
        return (items.bombs | items.bombchus)
      },
      can_play (song) {
        const songs = this.player.songs
        const items = this.player.items
        return songs[song] & (items.ocarina | items.ocarina_of_time)
      },
      can_child_attack (){
        const items = this.player.items
        const equipments = this.player.equipments
        return (this.can_use_explosives() | items.deku_stick | equipments.kokiri_sword | items.slingshot | items.boomerang)
      },
      can_use_fire (){
        const items = this.player.items
        return (((items.fire_arrow & items.bow) | items.dins_fire) & this.has_magic())
      },
      can_leave_forest(){
        const items = this.player.items
        return this.is_open('forest') | (this.can_use_explosives() | this.has_scale(1) | this.can_play('serenade_of_water') | this.can_play('nocture_of_shadow') | this.can_play('prelude_of_light'))
      },
      is_child() {
        return this.player.is_child
      },
      is_adult() {
        return !this.player.is_child
      },
      is_open(location) {
        return this.world[location]()
      },
      is_deku_open(){
        return (
          this.settings.open_deku == "Open" |
          (this.has_equipment('kokiri_sword') & this.has_equipment('deku_shield'))
          )
      },
      is_forest_open(){
        return (this.settings.open_forest  == "Open" |
        this.gottenChecks.includes('17:Event:000000101000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000')
      )},
      is_fountain_open(){
        return (this.settings.open_fountain  == "Open" |
        (this.has_item('rutos_letter'))
      )},
      is_temple_open(){
        return (this.settings.open_temple  == "Open" |
        (this.has_jewel('emerald') & this.has_jewel('ruby') & this.has_jewel('sapphire') & can_play('song_of_time'))
      )},
      is_ganons_castle_open(){
        return (
          this.settings.open_ganon == "Open" |
        (
          this.settings.open_ganon == "Medallions" &
          this.has_medallion('forest') &
          this.has_medallion('water') &
          this.has_medallion('fire') &
          this.has_medallion('shadow') &
          this.has_medallion('spirit') &
          this.has_medallion('light')
        ) |
        (
          this.settings.open_ganon == "Vanilla" &
          this.has_medallion('shadow') &
          this.has_medallion('spirit') &
          this.has_item('light_arrow')
        ) 
        // (
        //   this.settings.open_gate == "No Logic" &

        // )
        // TODO: Add logic for all dungeon completion to access Ganon's Castle
        // (
        //   this.settings.open_ganon == "All Dungeons" &
        //   this.gottenChecks.includes('20:Event:000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000') &
        //   this.gottenChecks.includes('21:Event:000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000') &
        //   this.gottenChecks.includes('22:Event:000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000') &
        //   this.gottenChecks.includes('') &
        //   this.gottenChecks.includes('68:Event:000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000')
        // )
      )},
      is_gate_open(){
        return (
          this.settings.open_gate  == "Open" |
          this.has_item('zeldas_letter')
        )
      },
      checkRequirements (requirements) {
        const items = this.player.items
        if (requirements === true) {
          return true
        } 
        else {
          for (let i = 0; i < requirements.length; i++) {
            try {
              const check = requirements[i].replace(/has_/g, 'this.has_').replace(/can_/g, 'this.can_').replace(/is_/g, 'this.is_')
              if (eval(check) == false) {
              return false
              break
            }  
            } catch (error) {
              console.log("hit")
              console.log(error)
              console.log(requirements)
            }
                    
          }
          return true
        }
      },
      handleCheck(check){
          // if (check.location == "56") {
          //   console.log(check)
          //   console.log(check.location + ':' + check.type + ':' + check.bits)
          // }
          // console.log(check.location)
          // console.log(check)
          // console.log(check.location + ':' + check.type + ':' + check.bits)
          if (
            !this.gottenChecks.includes(check.location + ':' + check.type + ':' + check.bits) &
            this.checkRequirements(check.requirements) & 
            check.type !== 'Skull' &
            !check.check.includes('Cow')
          ) {
            return true
          } else {
            return false
          }
      },
      handleArea(checks){
        for (let i = 0; i < checks.length; i++) {
          if (this.handleCheck(checks[i])){
            return true
          }
        }
      }
    },
    data () {
      return {
        gottenChecks: [],
        checks: null,
        player: {
          items: {
            deku_stick: false,
            deku_nut: false,
            bombs: false,
            bow: false,
            fire_arrow: false,
            ice_arrow: false,
            light_arrow: false,
            dins_fire: false,
            farores_wind: false,
            nayrus_love: false,
            slingshot: false,
            ocarina: false,
            ocarina_of_time: false,
            bombchus: false,
            hookshot: false,
            longshot: false,
            boomerang: false,
            lens_of_truth: false,
            beans: false,
            hammer: false,
            rutos_letter: false,
            bottle: false,
            bottles: [
              255,
              255,
              255,
              255
            ],
            child_egg: false,
            zeldas_letter: false,
            skull_mask: false,
            mask_of_truth: false,
            child_quest: 0,
            claim_check: false,
            adult_quest: 0
          },
          is_child: true,
          skulls: 0,
          songs: {
            zeldas_lullaby: false,
            sarias_song: false,
            eponas_song: false,
            suns_song: false,
            song_of_time: false,
            song_of_storms: false,
            minuet_of_forest: false,
            bolero_of_fire: false,
            serenade_of_water: false,
            nocture_of_shadow: false,
            requiem_of_spirits: false,
            prelude_of_light: false,
          },
          medallions: {
            forest: false,
            fire: false,
            water: false,
            shadow: false,
            spirit: false,
            light: false
          },
          jewels: {
            ruby: false,
            emerald: false,
            sapphire: false,
          },
          equipments: {
            kokiri_sword: false,
            master_sword: false,
            biggoron_sword: false,
            deku_shield: false,
            hylian_shield: false,
            mirror_shield: false,
            kokiri_tunic: true,
            goron_tunic: false,
            zora_tunic: false,
            kokiri_boots: true,
            iron_boots: false,
            hover_boots: false,
            gerudo_card: false,
            stone_of_agony: false,
          },
          upgrades: {
            scale: 0,
            strength: 0,
            magic: 0,
          },
        },
        settings: {
          cowsanity: false,
          skullsanity: false,
          scrubsanity: false,
          open_deku: "Closed",
          open_forest: "Closed",
          open_fountain: "Closed",
          open_temple: "Closed",
          open_ganon: "Medallions",
          open_gate: false,
          items_only: false,
        },
        world: {
          deku_tree: false,
          forest: false,
          temple: false,
          fountain: false,
          ganons_castle: false,
          dm_gate: false,
        },
      }
    },
    created: function() {
      ipcRenderer.send('startup', (event, data) => {})
    },
    mounted () {
        this.world.deku_tree = this.is_deku_open
        this.world.forest = this.is_forest_open
        this.world.temple = this.is_temple_open
        this.world.fountain = this.is_fountain_open
        this.world.dm_gate = this.is_gate_open
        this.world.ganons_castle = this.is_ganons_castle_open
        ipcRenderer.on('send_file_checks', (event, data) => {
          this.checks = data[0]
          this.gottenChecks = data[1]
        })
        ipcRenderer.on('send_checks', (event, data) => {
          this.gottenChecks = data
        })
        ipcRenderer.on('send_inv:items', (event, data) => {
          var items = this.player.items

          items.deku_stick = ((data[0] === 0) ?  true : false)
          items.deku_nut = ((data[1] === 1) ? true : false)
          items.bombs = ((data[2] === 2) ? true : false)
          items.bow = ((data[3] === 3) ? true : false)
          items.fire_arrow = ((data[4] === 4) ? true : false)
          items.dins_fire = ((data[5] === 5) ? true : false)
          
          items.slingshot = ((data[6] === 6) ? true : false)
          items.ocarina = ((data[7] === 7) ? true : false)
          items.ocarina_of_time = ((data[7] === 8) ? true : false)
          items.bombchus = ((data[8] === 9) ? true : false)
          items.hookshot = ((data[9] === 10) ? true : false)
          items.longshot = ((data[9] === 11) ? true : false)
          items.ice_arrow = ((data[10] === 12) ? true : false)
          items.farores_wind = ((data[11] === 13) ? true : false)
          
          items.boomerang = ((data[12] === 14) ? true : false)
          items.lens_of_truth = ((data[13] === 15) ? true : false)
          items.beans = ((data[14] === 16) ? true : false)
          items.hammer = ((data[15] === 17) ? true : false)
          items.light_arrow = ((data[16] === 18) ? true : false)
          items.nayrus_love = ((data[17] === 19) ? true : false)

          items.bottles = [
            data[18],
            data[19],
            data[20],
            data[21]
            ]

          items.bottle = ((items.bottles == [255, 255, 255, 255]) ? false : true)
          items.rutos_letter = ((items.bottles.includes(27) | items.rutos_letter) ? true : false)

          items.child_quest = ((data[22] == 255) ? 0 : data[22])

          items.child_egg = ((items.child_quest >= 33) ? true : false)
          items.zeldas_letter = ((items.child_quest >= 35) ? true : false)
          items.skull_mask = ((items.child_quest >= 37) ? true : false)
          items.mask_of_truth = ((items.child_quest >= 43) ? true : false)

          items.adult_quest = ((data[23] == 255) ? 0 : data[23])

          items.claim_check = ((data[23] == 55 | items.claim_check) ? true : false)
        })
        ipcRenderer.on('send_inv:equipments', (event, data) => {
          const equipments = this.player.equipments
          
          equipments.kokiri_tunic = ((data[7] == 1) ? true : false)
          equipments.goron_tunic = ((data[6] == 1) ? true : false)
          equipments.zora_tunic = ((data[5] == 1) ? true : false)
          
          equipments.kokiri_boots = ((data[3] == 1) ? true : false)
          equipments.iron_boots = ((data[2] == 1) ? true : false)
          equipments.hover_boots = ((data[1] == 1) ? true : false)

          equipments.kokiri_sword = ((data[15] == 1) ? true : false)
          equipments.master_sword = ((data[14] == 1) ? true : false)
          equipments.biggoron_sword = ((data[13] == 1) ? true : false)
          
          equipments.deku_shield = ((data[11] == 1) ? true : false)
          equipments.hylian_shield = ((data[10] == 1) ? true : false)
          equipments.mirror_shield = ((data[9] == 1) ? true : false)
        })
        ipcRenderer.on('send_inv:questitems', (event, data) => {
          const songs = this.player.songs
          const medallions = this.player.medallions
          const jewels = this.player.jewels
          
          songs.zeldas_lullaby = data[19]
          songs.eponas_song = data[18]
          songs.sarias_song = data[17]
          songs.suns_song = data[16]
          songs.song_of_time = data[15]
          songs.song_of_storms = data[14]

          songs.minuet_of_forest = data[25]
          songs.bolero_of_fire = data[24]
          songs.serenade_of_water = data[23]
          songs.requiem_of_spirits = data[22]
          songs.nocture_of_shadow = data[21]
          songs.prelude_of_light = data[20]

          medallions.forest = data[31]
          medallions.fire = data[30]
          medallions.water = data[29]
          medallions.spirit = data[28]
          medallions.shadow = data[27]
          medallions.light = data[26]

          jewels.emerald = data[13]
          jewels.ruby = data[12]
          jewels.sapphire = data[11]

          this.player.equipments.gerudo_card = ((data[9] == 1) ? true : false)
          this.player.equipments.stone_of_agony = ((data[10] == 1) ? true : false)
        })
        ipcRenderer.on('send_inv:upgrades', (event, data) => {
          const upgrades = this.player.upgrades
          
          upgrades.strength = ((data[17] == 1) ? 1 : 0)
          upgrades.strength = ((data[16] == 1) ? 2 : upgrades.strength)
          upgrades.strength = ((data[17] == 1 & data[16] == 1) ? 3 : upgrades.strength)

          upgrades.scale = ((data[14] == 1) ? 1 : 0)
          upgrades.scale = ((data[13] == 1) ? 2 : upgrades.scale)

        })
        ipcRenderer.on('send_inv:skulls', (event, data) => {
          this.player.skulls = data[0]
        })
        ipcRenderer.on('send_inv:age', (event, data) => {
          this.player.is_child = data[0]
        })
        ipcRenderer.on('send_inv:magic', (event, data) => {
          this.player.upgrades.magic = data[0]
        })
    }
  }
</script>

<style>
  .container {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: aqua;
    display: flex;
    flex-direction: row;
  }

  .extraContainer {
    background-color: rgb(60, 0, 97);
    width: 300px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    padding-top: 10px;
  }

  .regionContainer {
    background-color: rgb(33, 0, 53);
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-flow: wrap;
    justify-content: center;
    align-items: flex-start;
    overflow-y: auto;
  }

  .region {
    min-width: 265px;
    margin: 5px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    min-height: 40px;
    padding-bottom: 10px;
    border-radius: 10px;
    box-shadow: 3px 3px 6px rgba(0,0,0,0.5);
  }

  .regionHeader {
    font-weight: 800;
    font-size: 1.8em;
    align-self: center;
    text-decoration: underline;
  }

  .areaHeader {
    font-weight: 600;
    font-size: 1.2em;
    margin-left: 5px;
  }

  .check {
    font-weight: 200;
    font-size: 1em;
    margin-left: 10px;
    cursor: pointer;
  }

  .itemGrid {
    display: grid;
    grid-template-columns: 32px 32px 32px 32px 32px 32px;
    grid-auto-rows: 32px;
    grid-gap: 5px;
  }

  .equipmentGrid {
    display: grid;
    grid-template-columns: 32px 32px 32px 32px 32px 32px;
    grid-template-rows: 32px 32px;
    grid-gap: 5px;
  }

  .itemNumber {
    background-color: black;
    color: white;
    border-radius: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 0;
    bottom: 0;
    font-size: 11px;
    min-width: 14px;
    padding: 2px;
  }

  .dim {
    opacity: 0.5;
  }

  .logicSettings {
    margin-top: 20px;
    width: 80%;
    display: flex;
    flex-direction: column;
  }

  .logicSettings div{
    color: white;
    display: flex;
    justify-content: space-between;
  }

  .toggleButton {
    width: 100%;
    height: 40px;
    border: none;
    color: white;
    background-color: rgb(78, 0, 126);
  }

  .toggleButton:hover {
    background-color: rgb(96, 0, 156);
  }

  span {
    user-select: none;
  }
</style>
