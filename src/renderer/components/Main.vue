<template>
  <div id="wrapper">
    <main>
      <div class="container">
        <div class="regionContainer">
          <div class="region" v-for="region in checks" v-bind:style="{backgroundColor: region['backgroundColour'], color: region['colour']}">
            <span class="regionHeader">{{region['region']}}</span>
            <div v-for="area in region['areas']">
              <!-- <div v-if="checkRequirements(area.access_requirements) & areaVisibility[region][area].includes(true)" :ref="region.region+'/'+area.area"> -->
              <div class="areaDiv" v-if="checkRequirements(area.access_requirements)">
              <!-- <div v-if="checkRequirements(area.access_requirements)"> -->
                <span class="areaHeader" v-if="handleArea(area['checks'])">{{area['area']}}</span>
                <div v-for="check in area['checks']">
                  <!-- <span v-if="!gottenChecks.includes(check.location + ':' + check.type + ':' + check.bits) & checkRequirements(check.requirements) & check.type !== 'Skull'"><span v-if="check.type == 'Skull'">[GS] </span>{{check.check}}</span> -->
                  <span class="check" v-if="handleCheck(check, region, area)"><span v-if="check.type == 'Skull'">[GS] </span>{{check.check}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="extraContainer">
          <div class="itemGrid">
            <img src="../assets/images/stick.png" v-bind:class="{dim:!has_item('deku_stick')}">
            <img src="../assets/images/nut.png" v-bind:class="{dim:!has_item('deku_nut')}">
            <img src="../assets/images/Bombs0.png" v-bind:class="{dim:!has_item('bombs')}">
            <img src="../assets/images/Bow0.png" v-bind:class="{dim:!has_item('bow')}">
            <img src="../assets/images/Fire.png" v-bind:class="{dim:!has_item('fire_arrow')}">
            <img src="../assets/images/Dins.png" v-bind:class="{dim:!has_item('dins_fire')}">
            
            <img src="../assets/images/Slingshot0.png" v-bind:class="{dim:!has_item('slingshot')}">
            <img src="../assets/images/Ocarina1.png" v-bind:class="{dim:!has_item('ocarina')}" v-if="!has_item('ocarina_of_time')">
            <img src="../assets/images/Ocarina2.png" v-bind:class="{dim:!has_item('ocarina_of_time')}" v-if="has_item('ocarina_of_time')">
            <img src="../assets/images/Bombchus.png" v-bind:class="{dim:!has_item('bombchus')}">
            <img src="../assets/images/Hookshot1.png" v-bind:class="{dim:!has_item('hookshot')}" v-if="!has_item('longshot')">
            <img src="../assets/images/Hookshot2.png" v-bind:class="{dim:!has_item('longshot')}" v-if="has_item('longshot')">
            <img src="../assets/images/Ice.png" v-bind:class="{dim:!has_item('ice_arrow')}">
            <img src="../assets/images/Farores.png" v-bind:class="{dim:!has_item('farores_wind')}">
            
            <img src="../assets/images/Boomerang.png" v-bind:class="{dim:!has_item('boomerang')}">
            <img src="../assets/images/Lens.png" v-bind:class="{dim:!has_item('lens_of_truth')}">
            <img src="../assets/images/Beans.png" v-bind:class="{dim:!has_item('beans')}">
            <img src="../assets/images/Hammer.png" v-bind:class="{dim:!has_item('hammer')}">
            <img src="../assets/images/Light.png" v-bind:class="{dim:!has_item('light_arrow')}">
            <img src="../assets/images/Nayrus.png" v-bind:class="{dim:!has_item('nayrus_love')}">
            
            <img src="../assets/images/Bottle1.png" v-bind:class="{dim:player.items.bottles <= 0}">
            <img src="../assets/images/Bottle2.png" v-bind:class="{dim:player.items.bottles <= 1}">
            <img src="../assets/images/Bottle3.png" v-bind:class="{dim:player.items.bottles <= 2}">
            <img src="../assets/images/Bottle4.png" v-bind:class="{dim:player.items.bottles <= 3}">
            <!-- <img src="../assets/images/stick.png" v-bind:class="{dim:!has_item('deku_stick')}">
            <img src="../assets/images/stick.png" v-bind:class="{dim:!has_item('deku_stick')}"> -->
          </div>
          <div class="equipmentGrid">
            <img src="../assets/images/KokiriSword.png" v-bind:class="{dim:!has_equipment('kokiri_sword')}">
            <img src="../assets/images/Sword2.png" v-bind:class="{dim:!has_equipment('master_sword')}">
            <img src="../assets/images/BiggoronSword.png" v-bind:class="{dim:!has_equipment('biggoron_sword')}">
            
            <img src="../assets/images/KokiriShield.png" v-bind:class="{dim:!has_equipment('deku_shield')}">
            <img src="../assets/images/HylianShield.png" v-bind:class="{dim:!has_equipment('hylian_shield')}">
            <img src="../assets/images/MirrorShield.png" v-bind:class="{dim:!has_equipment('mirror_shield')}">
            
            <img src="../assets/images/KokiriTunic.png" v-bind:class="{dim:!has_equipment('kokiri_tunic')}">
            <img src="../assets/images/GoronTunic.png" v-bind:class="{dim:!has_equipment('goron_tunic')}">
            <img src="../assets/images/ZoraTunic.png" v-bind:class="{dim:!has_equipment('zora_tunic')}">

            <img src="../assets/images/KokiriBoots.png" v-bind:class="{dim:!has_equipment('kokiri_boots')}">
            <img src="../assets/images/IronBoots.png" v-bind:class="{dim:!has_equipment('iron_boots')}">
            <img src="../assets/images/HoverBoots.png" v-bind:class="{dim:!has_equipment('hover_boots')}">
          </div>
        </div>
        <!-- <div v-for="(area_data, area) in checks">
          <div>
            <h3>{{area}}</h3>
            <div v-for="(check_data, location) in area_data">
              <div v-if="checkRequirements(check_data.access_requirements)">
                <h5>{{location}}</h5>
                <div v-for="check in check_data.checks">
                  <span v-if="!gottenChecks.includes(check.location + ':' + check.type + ':' + check.bits) & checkRequirements(check.requirements)"><span v-if="check.type == 'Skull'">[GS] </span>{{check.check}}</span>
                </div>
              </div>
            </div>
          </div>
        </div> -->
      </div>
    </main>
  </div>
</template>

<script>
  const { ipcRenderer } = require('electron')

  // ipcRenderer.send('startup', (event, data) => {
  //   console.log(data)
  // })

  // ipcRenderer.on('send_file_checks', (event, data) => {
  //   console.log(data)
  // })

  // ipcRenderer.on('test', (event, data) => {
  //   console.log(data)
  // })

  export default {
    name: 'main',
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
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
        return songs[song] & this.ocarina
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
        return this.player.world[location]
      },
      checkRequirements (requirements) {
        const items = this.player.items
        if (requirements === true) {
          return true
        } 
        else {
          for (let i = 0; i < requirements.length; i++) {
            // console.log(requirements[i] + " --- " + eval("this." + requirements[i]))
            try {
              const check = requirements[i].replace(/has_/g, 'this.has_').replace(/can_/g, 'this.can_').replace(/is_/g, 'this.is_')
              if (eval(check) == false) {
              // console.log("hit")
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
        // return (
        //   (requirements.includes('has_explosives')) ? eval("has_explosives()") : true &
        //   (requirements.includes('has_sticks')) ? items.deku_stick : true
        // )
      },
      handleCheck(check){
          if (
            !this.gottenChecks.includes(check.location + ':' + check.type + ':' + check.bits) &
            this.checkRequirements(check.requirements) & 
            check.type !== 'Skull' &
            !check.location.includes('Cow')
          ) {
            return true
          } else {
            return false
          }
      },
      handleArea(checks){
        // console.log(checks)
        for (let i = 0; i < checks.length; i++) {
          if (this.handleCheck(checks[i])){
            // console.log('hit')
            return true
          }
        }
        // checks.forEach(check => {
        //   // console.log(check)
        //   if (this.handleCheck(check)){
        //     console.log('hit')
        //     return true
        //   }
        // });
      }
    },
    data () {
      return {
        gottenChecks: [],
        checks: null,
        loading: true,
        // areaVisibility = {},
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
            bottles: 0,
            zeldas_letter: false,
            child_egg: false,
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
          },
          upgrades: {
            scale: 0,
            strength: 0,
            magic: 0,
          },
          world: {
            deku_tree: false,
            forest: false,
            temple: false,
            fountain: false,
            ganons_tower: false,
            ganons_castle: false,
          }
        }
      }
    },
    created: function() {
      // var self = this;
      // setInterval(() => {
      //   self.gottenChecks = ipcRenderer.sendSync('get_check')
      //   // console.log(this.$refs)
      // }, 1000)
      ipcRenderer.send('startup', (event, data) => {})
    },
    mounted () {
        ipcRenderer.on('send_file_checks', (event, data) => {
          this.checks = data[0]
          this.gottenChecks = data[1]
        })
        ipcRenderer.on('send_checks', (event, data) => {
          // console.log(data)
          this.gottenChecks = data
        })
        ipcRenderer.on('send_inv:items', (event, data) => {
          const items = this.player.items

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
          
          items.bottles = 0
          items.bottles += ((data[18] !== 255) ? 1 : 0)
          items.bottles += ((data[19] !== 255) ? 1 : 0)
          items.bottles += ((data[20] !== 255) ? 1 : 0)
          items.bottles += ((data[21] !== 255) ? 1 : 0)
          // (data[22] === ) ? this. = true : this. = false
          // (data[23] === ) ? this. = true : this. = false
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
        // this.loading = false
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
    background-color: white;
    width: 300px;
    height: 100%;
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

  .areaDiv {
    /* margin-top: 20px; */
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
  }

  .itemGrid {
    display: grid;
    grid-template-columns: 32px 32px 32px 32px 32px 32px;
    grid-template-rows: 32px 32px 32px 32px;
    grid-gap: 5px;
  }

  .equipmentGrid {
    display: grid;
    grid-template-columns: 32px 32px 32px;
    grid-template-rows: 32px 32px 32px 32px;
    grid-gap: 5px;
  }

  .dim {
    opacity: 0.5;
  }
</style>
