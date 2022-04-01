<template>
  <div id="inner-screen">
    <p id="title">CABIN SETTINGS</p>
    <div class="selected" ref="selected">
      <div id="curtain" />
      <div id="white-ring" />
    </div>
    <div class="slot" id="S1">
      <p id="heading">Seat 1</p>
      <div class="seat_complete">
        <div id="shadow" />
        <img id="clear_picture" src="seat_clear.png" />
        <img id="mask_picture" src="seat_mask.png" />
      </div>
    </div>
    <div class="slot" id="S2">
      <p id="heading">Seat 2</p>
      <p id="sub-heading">PASSENGER</p>
      <div class="seat_complete">
        <div id="shadow" />
        <img id="clear_picture" src="seat_clear.png" />
        <img id="mask_picture" src="seat_mask.png" />
      </div>
    </div>
    <div class="slot" id="S3">
      <p id="heading">Cabin</p>
      <div id="shadow" />
      <img
        style="top: 40%;"
        id="clear_picture"
        class="cabin-speaker"
        src="cabin_speaker.png"
      />
      <img
        style="top: 40%;"
        id="mask_picture"
        class="cabin-speaker"
        src="cabin_speaker_mask.png"
      />
      <img
        style="top: 60%;"
        id="clear_picture"
        class="cabin-speaker"
        src="cabin_speaker.png"
      />
      <img
        style="top: 60%;"
        id="mask_picture"
        class="cabin-speaker"
        src="cabin_speaker_mask.png"
      />
    </div>
    <div class="slot" id="S4">
      <p id="heading">Seat 3</p>
      <p id="sub-heading">PILOT</p>
      <div class="seat_complete">
        <div id="shadow" />
        <img id="clear_picture" src="seat_clear.png" />
        <img id="mask_picture" src="seat_mask.png" />
      </div>
    </div>
    <div class="slot" id="S5">
      <p id="heading">Seat 4</p>
      <div class="seat_complete">
        <div id="shadow" />
        <img id="clear_picture" src="seat_clear.png" />
        <img id="mask_picture" src="seat_mask.png" />
      </div>
    </div>
  </div>
  <div
    id="selection_option"
    style="left: 10.5%; leftIndicator: 10%; index: 0; name: SEAT 1;"
    @click="indicator"
  />
  <div
    id="selection_option"
    style="left: 30.25%; leftIndicator: 30%; index: 1; name: SEAT 2;"
    @click="indicator"
  />
  <div
    id="selection_option"
    style="left: 50%; leftIndicator: 50%; index: 2; name: CABIN;"
    @click="indicator"
  />
  <div
    id="selection_option"
    style="left: 69.75%; leftIndicator: 70%; index: 3; name: SEAT 3;"
    @click="indicator"
  />
  <div
    id="selection_option"
    style="left: 89.25%; leftIndicator: 90%; index: 4; name: SEAT 4;"
    @click="indicator"
  />

  <div id="inner-box-white">
       <p id="box-title">{{ selectedSlot }} AUDIO</p>
  </div>
  <div id="inner-box">
    <div class="inner-slot" id="IS1">
      <p id="inner-slot-heading">GROUND</p>
      <p id="sound">{{ground[indexValue]}}<span style="font-size: 4vw;">dB</span></p>
      <button style="left: 3%;" type="submit" @click="ground[indexValue] = 12">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-broadcast-pin"
          viewBox="0 0 16 16"
        >
          <path
            class="white-svg"
            d="M3.05 3.05a7 7 0 0 0 0 9.9.5.5 0 0 1-.707.707 8 8 0 0 1 0-11.314.5.5 0 0 1 .707.707zm2.122 2.122a4 4 0 0 0 0 5.656.5.5 0 1 1-.708.708 5 5 0 0 1 0-7.072.5.5 0 0 1 .708.708zm5.656-.708a.5.5 0 0 1 .708 0 5 5 0 0 1 0 7.072.5.5 0 1 1-.708-.708 4 4 0 0 0 0-5.656.5.5 0 0 1 0-.708zm2.122-2.12a.5.5 0 0 1 .707 0 8 8 0 0 1 0 11.313.5.5 0 0 1-.707-.707 7 7 0 0 0 0-9.9.5.5 0 0 1 0-.707zM6 8a2 2 0 1 1 2.5 1.937V15.5a.5.5 0 0 1-1 0V9.937A2 2 0 0 1 6 8z"
          />
        </svg>
      </button>
      <button style="left: 35%;" type="submit" @click="ground[indexValue]--">
        <svg viewBox="0 0 4 4" width="30" height="15">
          <path class="zooms" d="M0,2 L4,2"></path>
        </svg>
      </button>
      <button style="left: 67%;" type="submit" @click="ground[indexValue]++">
        <svg viewBox="0 0 4 4" width="30" height="15">
          <path class="zooms" d="M0,2 L4,2 M2,0 L2,4"></path>
        </svg>
      </button>
    </div>
    <div class="inner-slot" id="IS2">
      <p id="inner-slot-heading">AUX</p>
      <p id="sound">{{aux[indexValue]}}<span style="font-size: 4vw;">dB</span></p>
      <button style="left: 3%;" type="submit" @click="aux[indexValue] = 0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-broadcast-pin"
          viewBox="0 0 16 16"
        >
          <path
            class="white-svg"
            d="M3.05 3.05a7 7 0 0 0 0 9.9.5.5 0 0 1-.707.707 8 8 0 0 1 0-11.314.5.5 0 0 1 .707.707zm2.122 2.122a4 4 0 0 0 0 5.656.5.5 0 1 1-.708.708 5 5 0 0 1 0-7.072.5.5 0 0 1 .708.708zm5.656-.708a.5.5 0 0 1 .708 0 5 5 0 0 1 0 7.072.5.5 0 1 1-.708-.708 4 4 0 0 0 0-5.656.5.5 0 0 1 0-.708zm2.122-2.12a.5.5 0 0 1 .707 0 8 8 0 0 1 0 11.313.5.5 0 0 1-.707-.707 7 7 0 0 0 0-9.9.5.5 0 0 1 0-.707zM6 8a2 2 0 1 1 2.5 1.937V15.5a.5.5 0 0 1-1 0V9.937A2 2 0 0 1 6 8z"
          />
        </svg>
      </button>
      <button style="left: 35%;" type="submit" @click="aux[indexValue]--">
        <svg viewBox="0 0 4 4" width="30" height="15">
          <path class="zooms" d="M0,2 L4,2"></path>
        </svg>
      </button>
      <button style="left: 67%;" type="submit" @click="aux[indexValue]++">
        <svg viewBox="0 0 4 4" width="30" height="15">
          <path class="zooms" d="M0,2 L4,2 M2,0 L2,4"></path>
        </svg>
      </button>
    </div>
    <div class="inner-slot" id="IS3">
      <p id="inner-slot-heading">MAIN</p>
      <p id="sound">100</p>
      <p style="position: relative; color: white; font-size: 0.7em; top: -42%;">Vox</p>
      <p style="position: relative; color: white;font-weight: 750; font-size: 1em; top: -47%;">{{ground[indexValue] + aux[indexValue] + intercom[indexValue] + alerts[indexValue]}}</p>
    </div>
    <div class="inner-slot" id="IS4">
      <p id="inner-slot-heading">INTERCOM</p>
      <p id="sound">{{intercom[indexValue] > 0 ? `+`+intercom[indexValue] : intercom[indexValue]}}<span style="font-size: 4vw;">dB</span></p>
      <button style="left: 19%;" type="submit" @click="intercom[indexValue]--">
        <svg viewBox="0 0 4 4" width="30" height="15">
          <path class="zooms" d="M0,2 L4,2"></path>
        </svg>
      </button>
      <button style="left: 51%;" type="submit" @click="intercom[indexValue]++">
        <svg viewBox="0 0 4 4" width="30" height="15">
          <path class="zooms" d="M0,2 L4,2 M2,0 L2,4"></path>
        </svg>
      </button>
    </div>
    <div class="inner-slot" id="IS5">
      <p id="inner-slot-heading">ALERTS</p>
      <p id="sound">{{alerts[indexValue]}}</p>
      <button style="left: 19%;" type="submit" @click="alerts[indexValue]--">
        <svg viewBox="0 0 4 4" width="30" height="15">
          <path class="zooms" d="M0,2 L4,2"></path>
        </svg>
      </button>
      <button style="left: 51%;" type="submit" @click="alerts[indexValue]++">
        <svg viewBox="0 0 4 4" width="30" height="15">
          <path class="zooms" d="M0,2 L4,2 M2,0 L2,4"></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Audio',
  props: [],
  data() {
    return {
      selectedSlot: `CABIN`,
      ground: [0, 0, 1, 0, 0],
      aux: [0, 0, 1, 0, 0],
      intercom: [0, 0, 1, 0, 0],
      alerts: [0, 0, 1, 0, 0],
      indexValue: 2
    }
  },
  mounted() {
      // this.selectedGround = this.ground[2]
      // this.selectedAux = this.aux[2]
      // this.selectedIntercom = this.intercom[2]
      // this.selectedAlerts = this.alerts[2]
  },
  methods: {
    indicator(e) {
      // let marker = this.$el.querySelector('.marker')
      this.$refs.selected.style.left = e.target.style.leftIndicator
      console.log(this.$refs.selected.style.left)
      console.log(e.target.style.leftIndicator)
      console.log(e.target.style.index)
      this.indexValue = e.target.style.index
      console.log(e.target.style.name)
      console.log(e.target)
    }
  }
}
</script>

<style scoped>
#inner-screen {
  overflow: hidden;
  position: absolute;
  background: linear-gradient(to bottom, #020738, transparent),
    radial-gradient(55% 30% at 50% 75%, #a7b9eb, #020738);
  height: 91.75vh;
  width: 98.325vw;
  /* bottom: 30px; */
  top: 50%;
  left: 50%;
  /* bottom: 7em; */
  transform: translate(-50%, -50%);
  border-radius: 25px 25px 25px 25px;
  box-sizing: border-box;
  clip-path: polygon(
    0 0,
    0 100%,
    42.5% 100%,
    45% 95%,
    55% 95%,
    57.5% 100%,
    100% 100%,
    100% 0
  );
}

#inner-box-white {
  overflow: hidden;
  position: absolute;
  background: #111b52;
  background-position: center, center;
  height: 32%;
  width: 71%;
  /* bottom -15%; */
  top: 74.5%;
  left: 50%;
  /* bottom: 7em; */
  transform: translate(-50%, -50%);
  border-radius: 5px 5px 5px 5px;
  box-sizing: border-box;
  clip-path: polygon(
    40% 0,
    37.5% 10%,
    0.5% 10%,
    0.25% 10.5%,
    0 12%,
    0 100%,
    100% 100%,
    100% 12%,
    99.75% 10.5%,
    99.5% 10%,
    62.5% 10%,
    60% 0
  );
}

#inner-box {
  overflow: hidden;
  position: absolute;
  background: #020738;
  background-position: center, center;
  height: 30%;
  width: 70%;
  /* bottom: -15%; */
  top: 74.5%;
  left: 50%;
  /* bottom: 7em; */
  transform: translate(-50%, -50%);
  border-radius: 5px 5px 5px 5px;
  box-sizing: border-box;
  clip-path: polygon(
    45% 10%,
    42.5% 10%,
    0.5% 10%,
    0.25% 10.5%,
    0 12%,
    0 100%,
    100% 100%,
    100% 12%,
    99.75% 10.5%,
    99.5% 10%,
    57.5% 10%,
    55% 10%
  );
}

.slot {
  overflow: hidden;
  position: absolute;
  width: 16.4%;
  height: 55%;
  top: 32%;
  transform: translate(-50%, -50%);
  text-align: center;
  /* border: .5px solid red; */
}

#S1 {
  left: 10%;
}

#S2 {
  left: 30%;
}

#S3 {
  left: 50%;
}

#S4 {
  left: 70%;
}

#S5 {
  left: 90%;
}

img {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  height: 60%;
  width: 60%;
}

#mask_picture {
  opacity: 0.45;
}

#shadow {
  position: absolute;
  height: 100%;
  width: 100%;
  background: radial-gradient(
    35% 5% at 50% 92.5%,
    rgba(0, 0, 0, 0.45),
    rgba(0, 0, 0, 0)
  );
}

.selected {
  left: 50%;
  overflow: hidden;
  position: absolute;
  width: 16.4%;
  height: 52%;
  top: 33%;
  transform: translate(-50%, -50%);
  transition: all 0.7s ease-in-out;
  /* -webkit-transform: translate3d(1,0,0); */
}

#white-ring {
  position: absolute;
  top: 85%;
  height: 15%;
  width: 100%;
  border-radius: 100%;
  background: linear-gradient(
    rgba(255, 255, 255, 0.25),
    rgba(255, 255, 255, 0.25),
    white,
    white
  );
  mask: radial-gradient(transparent 59%, #000 60%);
}

#curtain {
  height: 100%;
  width: 100%;
  border-radius: 5%;
  background: linear-gradient(
    rgba(255, 255, 255, 0.25),
    rgba(255, 255, 255, 0.125),
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0)
  );
}

#selection_option {
  overflow: hidden;
  position: absolute;
  width: 16.4%;
  height: 53%;
  top: 33.5%;
  transform: translate(-50%, -50%);
  /* border: 1px solid rgba(255, 255, 255, 1); */
}

.cabin-speaker {
  overflow: hidden;
  position: absolute;
  width: max(3.5vw, 7vh);
  height: max(3.5vw, 7vh);
  transform: translate(-50%, -50%);
}

#heading {
  position: absolute;
  /* width: 20%; */
  /* height: 53%; */
  top: 4%;
  font-size: 1em;
  font-weight: 775;
  left: 50%;
  transform: translate(-50%, -50%);
}

#sub-heading {
  position: absolute;
  /* width: 20%; */
  /* height: 53%; */
  top: 10%;
  font-size: 0.7em;
  left: 50%;
  opacity: 0.5;
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

.inner-slot {
  position: absolute;
  height: 100%;
  width: 20%;
  border-width: 1px;
  border-style: solid;
  border-image: 
    linear-gradient(
      to bottom, 
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0),
      white,
      rgba(0, 0, 0, 0), 
      rgba(0, 0, 0, 0)
    ) 1 100%; 
  border-right: 1px solid white;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

#IS1 {
  left: 10%;
}

#IS2 {
  left: 30%;
}

#IS3 {
  left: 50.25%;
}

#IS4 {
  left: 70.25%;
}

#IS5 {
  left: 90.30%;
}

button {
  position: absolute;
  border: 1px solid white;
  text-align: center;
  width: 30%;
  height: 0;
  bottom: 3.5%;
  /* top: 80%; */
  text-align: center;
  padding-bottom: 30%;
  overflow: hidden;
  border-radius: 10%;
  background-color: rgba(2, 7, 56, 0.75);
  color: white;
}

svg {
  /* border: 1px solid tomato; */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  padding-bottom: 0;
}
.arrows,
.zooms {
  fill: none;
  stroke: white;
  stroke-width: 1;
}
.white-svg {
  fill: white;
  stroke: white;
}

#box-title {
  position: absolute;
  color: white;
  font-size: 0.9em;
  font-weight: 750;
  top: 0%;
  left: 50%;
  /* bottom: 7em; */
  transform: translate(-50%, -50%);
}

#inner-slot-heading {
  position: relative;
  color: white;
  font-size: 0.7em;
  top: 10%;
}

#sound {
  position: relative;
  color: white;
  font-size: 5.25vw;
  /* font-weight: 700; */
  top: -7.5%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
