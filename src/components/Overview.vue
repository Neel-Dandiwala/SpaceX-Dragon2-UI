<template>
  <div id="inner-screen">
    <p id="title">CABIN SETTINGS</p>
    <div class="circular-progess-menu">
      <div class="circle-wrap">
        <div class="circle">
        </div>
      </div>
    </div>
    <div class="left-menu">
      <p id="left-heading" style="top:4%;">
        <svg
          class="left-menu-svg"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#ea7b15"
          viewBox="0 0 16 16"
        >
          <path
            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
          /></svg
        >ALL SYSTEMS CHECK<span style="top:100%;" id="left-sub-heading"
          >Awaiting</span
        >
      </p>
      <p id="left-heading" style="top:15%;">
        <svg
          class="left-menu-svg"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#ea7b15"
          viewBox="0 0 16 16"
        >
          <path
            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
          /></svg
        >ALL SYSTEMS CHECK<span style="top:100%;" id="left-sub-heading"
          >Awaiting</span
        >
      </p>
      <button
        v-bind:style="[
          activeButton
            ? ` background-color: white; color:#020738; border-radius: 10%; z-index:1;`
            : ` background-color: #020738; transform: scale(90%); color: white; border-radius: 10% 0 0 10%; z-index:0;`
        ]"
        @click="activeButton = !activeButton"
        style="left: 20%;"
      >
        SYSTEMS
      </button>
      <button
        v-bind:style="[
          !activeButton
            ? ` background-color: white; color:#020738; border-radius: 10%; z-index:1;`
            : ` background-color: #020738; transform: scale(90%); color: white; border-radius: 0 10% 10% 0; z-index:0;`
        ]"
        @click="activeButton = !activeButton"
        style="left: 47%;"
      >
        CABIN
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Overview',
  props: [],
  data() {
    return {
      activeButton: true
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
  background: linear-gradient(to bottom, #020738, rgba(2, 7, 56, 0)),
    radial-gradient(40% 25% at 50% 75%, rgba(167, 185, 235, 0.75),#020738);
  height: 91.5vh;
  width: 98.125vw;
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

.circular-progess-menu {
  position: absolute;
  width: 50%;
  height: 50%;
  border: 0.25px solid purple;
  /* background: #020738; */
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.circle-wrap {
  position: absolute;
  top: 20%;
  left: 8.5%;
  transform: translate(-50%, -50%);
  width: 7.5vw;
  height: 7.5vw;
  background: blue;
  border-radius: 50%;
  border: 1px solid red;
}
.left-menu {
  position: absolute;
  width: 20%;
  height: 100%;
  border: 0.25px solid orange;
  /* background: #020738; */
  top: 50%;
  left: 10%;
  transform: translate(-50%, -50%);
}

.left-menu-svg {
  position: absolute;
  width: max(1vw, 2vh);
  height: max(1vw, 2vh);
  left: -10%;
  /* border: 0.25px solid rgba(255, 255, 255, 1); */
  transform: translate(-50%, -50%);
}

#left-heading {
  position: absolute;
  width: 50%;
  /* padding-left: 5%; */
  /* height: 53%; */
  font-size: 0.65em;
  left: 30%;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.5);
  opacity: 1;
  /* transform: translate(-50%, -50%); */
  /* border: 1px solid blue; */
}

#left-sub-heading {
  position: absolute;
  width: 20%;
  padding-top: 0.5em;
  /* height: 53%; */
  /* top: 50%; */
  /* border: 1px solid white; */
  font-size: 1em;
  left: 0%;
  opacity: 0.5;
  /* transform: translate(-50%, -50%); */
}

button {
  position: absolute;
  border: 1px solid white;
  text-align: center;
  width: 30%;
  height: 10%;
  bottom: 4%;
  /* top: 80%; */
  text-align: center;
  /* padding-bottom: 30%; */
  overflow: hidden;
  color: white;
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
