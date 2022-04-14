<template>
  <div id="inner-screen">
    <p id="title">CABIN SETTINGS</p>
    <div id="inner-box-white"></div>
    <div id="inner-box">
      <p id="lighting">LIGHTING</p>
      <div class="column" id="C1" style="left: 0;">
        <p style="margin-left:25%">Back</p>
        <button v-bind:class="[active[0]?'buttonOn':'buttonOff']" @click="toggleClick(0)" style="border-top: 1px solid white" type="submit">Left</button> <div id="hr" style="top: 18%" />
        <button v-bind:class="[active[1]?'buttonOn':'buttonOff']" @click="toggleClick(1)" style="" type="submit">Right</button> <div id="hr" style="top: 36%" />
        <button v-bind:class="[active[2]?'buttonOn':'buttonOff']" @click="toggleClick(2)" style="" type="submit">Up</button> <div id="hr" style="top: 53.75%" />
        <button v-bind:class="[active[3]?'buttonOn':'buttonOff']" @click="toggleClick(3)" style="border-bottom: 1px solid white" type="submit">Down</button>
      </div>
       <div class="column" id="C2" style="left: 25%;">
        <p style="margin-left:17.5%">Front</p>
        <button v-bind:class="[active[4]?'buttonOn':'buttonOff']" @click="toggleClick(4)" style="border-top: 1px solid white" type="submit">Left</button> <div id="hr" style="top: 18%" />
        <button v-bind:class="[active[5]?'buttonOn':'buttonOff']" @click="toggleClick(5)" type="submit">Right</button> <div id="hr" style="top: 36%" />
        <button v-bind:class="[active[6]?'buttonOn':'buttonOff']" @click="toggleClick(6)" type="submit">Up</button> <div id="hr" style="top: 53.75%" />
        <button v-bind:class="[active[7]?'buttonOn':'buttonOff']" @click="toggleClick(7)" style="border-bottom: 1px solid white" type="submit">Down</button>
      </div>
      <div class="column" id="C3" style="left: 50%;">
        <p style="margin-right:17.5%">Tip</p>
        <button v-bind:class="[active[8]?'buttonOn':'buttonOff']" @click="toggleClick(8)" style="border-top: 1px solid white" type="submit">Left</button>  <div id="hr" style="top: 18%" />
        <button v-bind:class="[active[9]?'buttonOn':'buttonOff']" @click="toggleClick(9)" type="submit">Right</button> <div id="hr" style="top: 36%" />
        <button v-bind:class="[active[10]?'buttonOn':'buttonOff']" @click="toggleClick(10)" type="submit">Up</button> <div id="hr" style="top: 53.75%" />
        <button v-bind:class="[active[11]?'buttonOn':'buttonOff']" @click="toggleClick(11)" style="border-bottom: 1px solid white" type="submit">Down</button>
      </div>
      <div class="column" id="C4" style="left: 75%;">
        <p style="margin-right:25%">Outside</p>
        <button v-bind:class="[active[12]?'buttonOn':'buttonOff']" @click="toggleClick(12)" style="border-top: 1px solid white" type="submit">Left</button>  <div id="hr" style="top: 18%" />
        <button v-bind:class="[active[13]?'buttonOn':'buttonOff']" @click="toggleClick(13)" type="submit">Right</button> <div id="hr" style="top: 36%" />
        <button v-bind:class="[active[14]?'buttonOn':'buttonOff']" @click="toggleClick(14)" type="submit">Up</button> <div id="hr" style="top: 53.75%" />
        <button v-bind:class="[active[15]?'buttonOn':'buttonOff']" @click="toggleClick(15)" style="border-bottom: 1px solid white" type="submit">Down</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cabin',
  props: [],
  data() {
    return {
      active: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
      ]
    }
  },
  mounted() {
    
  },
  methods: {
    toggleClick(index){
      this.active[index] = !this.active[index]
      console.log(this.active[index])
    }
    
  }
}
</script>

<style scoped>

#inner-screen {
  position: absolute;
  background-image:  radial-gradient(50% 90% at 50% 50%, transparent , #020738), url('../assets/dragon_seats.jpg');
  background-size: cover;
  background-position: center, center;
  height: 91.75vh;
  width: 98.325vw;
  overflow: hidden;
  /* bottom: 30px; */
  top: 50%;
  left: 50%;
  /* bottom: 7em; */
  transform: translate(-50%, -50%);
  border-radius: 25px 25px 25px 25px;
  box-sizing: border-box;
  clip-path: polygon(0 0, 0 100%, 42.5% 100%, 45% 95%, 55% 95%, 57.5% 100%, 100% 100%, 100% 0)
}

#inner-box-white {
  overflow: hidden;
  position: absolute;
  background: white;
  background-position: center, center;
  height: 50.25%;
  width: 45.125%;
  /* bottom: -15%; */
  top: 67.5%;
  left: 50%;
  /* bottom: 7em; */
  transform: translate(-50%, -50%);
  border-radius: 5px 5px 5px 5px;
  box-sizing: border-box;
  clip-path: polygon(45% 0, 42.5% 5%, 0.5% 5%, 0.25% 5.5%, 0 6%, 0 100%, 100% 100%, 100% 6%, 99.75% 5.5%, 99.5% 5%, 57.5% 5%, 55% 0)
}

#inner-box {
  overflow: hidden;
  position: absolute;
  background: #020738;
  background-position: center, center;
  height: 50%;
  width: 45%;
  /* bottom: -15%; */
  top: 67.5%;
  left: 50%;
  /* bottom: 7em; */
  transform: translate(-50%, -50%);
  border-radius: 5px 5px 5px 5px;
  box-sizing: border-box;
  clip-path: polygon(45% 0, 42.5% 5%, 0.5% 5%, 0.25% 5.5%, 0 6%, 0 100%, 100% 100%, 100% 6%, 99.75% 5.5%, 99.5% 5%, 57.5% 5%, 55% 0)
}

.column {
  position: absolute;
  height: 95%;
  width: 25%;
  top: 5%;
  /* border: 0.15px solid red; */
  text-align: center;
  
}

.column p {
  font-size: 0.85em;
  margin: 13%;
}

button {
  width: 85%;
  height: 18.125%;
}

.buttonOff {
  background-color: #020738;
  color: white;
}

.buttonOn {
  background-color: white;
  color:#020738;
}


#C1 button{
  position: relative;
  right: 2%;
  float: right;
  border: none;
  border-left: 1px solid white;
  border-right: 1px solid white;
}
#C2 button {
  position: relative;
  float: right;
  right: 5.5%;
  border: none;
  border-left: 1px solid white;
  border-right: 1px solid white;
}
#C3 button {
  position: relative;
  float: left;
  left: 5.5%;
  border: none;
  border-left: 1px solid white;
  border-right: 1px solid white;
}
#C4 button {
  position: relative;
  /* right: 6%; */
  left: 2%;
  float: left;
  border: none;
  border-left: 1px solid white;
  border-right: 1px solid white;
}
#hr {
  position: relative;
  left: 55%;
  /* bottom: 7em; */
  transform: translate(-50%, -50%);
  height: 0.125%;
  border: none;
  width: 70%;
  border-width: 0%;
  background-color: white;
  color: white;
  padding: 0;
  z-index: 1;
}

#C2 #hr {
  left: 52.5%
}
#C3 #hr {
  left: 47.5%;
}
#C4 #hr {
  left: 45%;
}

#lighting {
  position: absolute;
  color: white;
  font-size: 0.75em;
  top: 0.5%;
  left: 50%;
  /* bottom: 7em; */
  transform: translate(-50%, -50%);
}

#title {
  position: absolute;
  color: white;
  font-size: 1em;
  top: 0.5%;
  left: 50%;
  /* bottom: 7em; */
  transform: translate(-50%, -50%);
}

</style>
