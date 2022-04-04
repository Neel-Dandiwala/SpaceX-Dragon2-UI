<template>
  <div id="inner-screen">
    <p id="title">CABIN SETTINGS</p>
    <div id="shadow" />
    
    <div class="connections-panel">

    </div>

    <div id="dragon-crew">
      <img src="dragon_crew.png" />
    </div>

    <div class="circular-progess-menu">
      <div id="sub-slot" style="left: 8.75%;">
        <p id="first-heading">PPO2</p>
        <p id="number-heading">2.69</p>
        <p id="unit-heading">psia</p>
        <svg
          class="circle-big-svg"
          id="meter-svg"
          viewBox="0 0 150 150"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <clipPath id="cut-off-bottom">
              <circle cx="0" cy="150" r="162.5" fill="transparent" />
            </clipPath>
          </defs>
          <circle
            r="70"
            cx="75"
            cy="75"
            stroke=#777777
            stroke-width="1.5"
            stroke-dasharray="0 4"
            stroke-linecap="round"
            fill="transparent"
            clip-path="url(#cut-off-bottom)"
          />
          <circle
            class="animation-circle"
            r="70"
            cx="75"
            cy="75"
            fill="transparent"
            v-bind:style="{ animationDuration: durationCircular[0] + 's' }"
            stroke-dasharray="500"
            stroke-dashoffset="0"
          ></circle>
          <circle
            class="animation-circle"
            id="meter-bar"
            style="stroke: #d7b733;"
            v-bind:style="{ animationDuration: durationCircular[0] + 's' }"
            r="70"
            cx="75"
            cy="75"
            fill="transparent"
            stroke-dasharray="500"
            stroke-dashoffset="0"
          ></circle>
        </svg>
      </div>
      <div id="sub-slot" style="left: 36.25%;">
        <p id="first-heading">CABIN TEMP</p>
        <p id="number-heading">2.41</p>
        <p id="unit-heading"> °C</p>
        <svg
          class="circle-big-svg"
          id="meter-svg"
          viewBox="0 0 150 150"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <clipPath id="cut-off-bottom">
              <circle cx="0" cy="150" r="162.5" fill="transparent" />
            </clipPath>
          </defs>
          <circle
            r="70"
            cx="75"
            cy="75"
            stroke=#777777
            stroke-width="1.5"
            stroke-dasharray="0 4"
            stroke-linecap="round"
            fill="transparent"
            clip-path="url(#cut-off-bottom)"
          />
          <circle
            class="animation-circle"
            r="70"
            cx="75"
            cy="75"
            fill="transparent"
            v-bind:style="{ animationDuration: durationCircular[1] + 's' }"
            stroke-dasharray="500"
            stroke-dashoffset="0"
          ></circle>
          <circle
            class="animation-circle"
            id="meter-bar"
            style="stroke: #d12c30;"
            v-bind:style="{ animationDuration: durationCircular[1] + 's' }"
            r="70"
            cx="75"
            cy="75"
            fill="transparent"
            stroke-dasharray="500"
            stroke-dashoffset="0"
          ></circle>
        </svg>
      </div>
       <div id="sub-slot" style="left: 63.75%;">
        <p id="first-heading">CABIN PRESSURE</p>
        <p id="number-heading">14.00</p>
        <p id="unit-heading">psia</p>
        <svg
          class="circle-big-svg"
          id="meter-svg"
          viewBox="0 0 150 150"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <clipPath id="cut-off-bottom">
              <circle cx="0" cy="150" r="162.5" fill="transparent" />
            </clipPath>
          </defs>
          <circle
            r="70"
            cx="75"
            cy="75"
            stroke=#777777
            stroke-width="1.5"
            stroke-dasharray="0 4"
            stroke-linecap="round"
            fill="transparent"
            clip-path="url(#cut-off-bottom)"
          />
          <circle
            class="animation-circle"
            r="70"
            cx="75"
            cy="75"
            fill="transparent"
            v-bind:style="{ animationDuration: durationCircular[2] + 's' }"
            stroke-dasharray="500"
            stroke-dashoffset="0"
          ></circle>
          <circle
            class="animation-circle"
            id="meter-bar"
            style="stroke: #fcd533;"
            v-bind:style="{ animationDuration: durationCircular[2] + 's' }"
            r="70"
            cx="75"
            cy="75"
            fill="transparent"
            stroke-dasharray="500"
            stroke-dashoffset="0"
          ></circle>
        </svg>
      </div>
       <div id="sub-slot" style="left: 91.25%;">
        <p id="first-heading">CO2</p>
        <p id="number-heading">0.07</p>
        <p id="unit-heading">mmHg</p>
        <svg
          class="circle-big-svg"
          id="meter-svg"
          viewBox="0 0 150 150"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <clipPath id="cut-off-bottom">
              <circle cx="0" cy="150" r="162.5" fill="transparent" />
            </clipPath>
          </defs>
          <circle
            r="70"
            cx="75"
            cy="75"
            stroke=#777777
            stroke-width="1.5"
            stroke-dasharray="0 4"
            stroke-linecap="round"
            fill="transparent"
            clip-path="url(#cut-off-bottom)"
          />
          <circle
            class="animation-circle"
            r="70"
            cx="75"
            cy="75"
            fill="transparent"
            v-bind:style="{ animationDuration: durationCircular[3] + 's' }"
            stroke-dasharray="500"
            stroke-dashoffset="0"
          ></circle>
          <circle
            class="animation-circle"
            id="meter-bar"
            style="stroke: #2983ed;"
            v-bind:style="{ animationDuration: durationCircular[3] + 's' }"
            r="70"
            cx="75"
            cy="75"
            fill="transparent"
            stroke-dasharray="500"
            stroke-dashoffset="0"
          ></circle>
        </svg>
      </div>

      <div id="sub-sub-slot" style="left: 0%;">
        <p id="first-sub-heading">LOOP A</p>
        <p id="number-sub-heading">26.53</p>
        <p id="unit-sub-heading">°C</p>
        <svg
          class="circle-small-svg"
          id="meter-svg"
          viewBox="0 0 150 150"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <clipPath id="cut-off-bottom">
              <circle cx="0" cy="150" r="162.5" fill="transparent" />
            </clipPath>
          </defs>
          <circle
            r="70"
            cx="75"
            cy="75"
            stroke=#777777
            stroke-width="1.5"
            stroke-dasharray="0 4"
            stroke-linecap="round"
            fill="transparent"
            clip-path="url(#cut-off-bottom)"
          />
          <circle
            class="animation-circle"
            r="70"
            cx="75"
            cy="75"
            fill="transparent"
            v-bind:style="{ animationDuration: durationCircular[4] + 's' }"
            stroke-dasharray="500"
            stroke-dashoffset="0"
          ></circle>
          <circle
            class="animation-circle"
            id="meter-bar"
            style="stroke: #2886f6;"
            v-bind:style="{ animationDuration: durationCircular[4] + 's' }"
            r="70"
            cx="75"
            cy="75"
            fill="transparent"
            stroke-dasharray="500"
            stroke-dashoffset="0"
          ></circle>
        </svg>
      </div>
      <div id="sub-sub-slot" style="left: 20%;">
        <p id="first-sub-heading">LOOP A</p>
        <p id="number-sub-heading">20.00</p>
        <p id="unit-sub-heading">°C</p>
        <svg
          class="circle-small-svg"
          id="meter-svg"
          viewBox="0 0 150 150"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <clipPath id="cut-off-bottom">
              <circle cx="0" cy="150" r="162.5" fill="transparent" />
            </clipPath>
          </defs>
          <circle
            r="70"
            cx="75"
            cy="75"
            stroke=#777777
            stroke-width="1.5"
            stroke-dasharray="0 4"
            stroke-linecap="round"
            fill="transparent"
            clip-path="url(#cut-off-bottom)"
          />
          <circle
            class="animation-circle"
            r="70"
            cx="75"
            cy="75"
            fill="transparent"
            v-bind:style="{ animationDuration: durationCircular[5] + 's' }"
            stroke-dasharray="500"
            stroke-dashoffset="0"
          ></circle>
          <circle
            class="animation-circle"
            id="meter-bar"
            style="stroke: #2886f6;"
            v-bind:style="{ animationDuration: durationCircular[5] + 's' }"
            r="70"
            cx="75"
            cy="75"
            fill="transparent"
            stroke-dasharray="500"
            stroke-dashoffset="0"
          ></circle>
        </svg>
      </div>
       <div id="sub-sub-slot" style="left: 80%;">
        <p id="first-sub-heading">NET PWR 1</p>
        <p id="number-sub-heading">0.00</p>
        <p id="unit-sub-heading">W</p>
        <svg
          class="circle-small-svg"
          id="meter-svg"
          viewBox="0 0 150 150"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <clipPath id="cut-off-bottom">
              <circle cx="0" cy="150" r="162.5" fill="transparent" />
            </clipPath>
          </defs>
          <circle
            r="70"
            cx="75"
            cy="75"
            stroke=#777777
            stroke-width="1.5"
            stroke-dasharray="0 4"
            stroke-linecap="round"
            fill="transparent"
            clip-path="url(#cut-off-bottom)"
          />
          <circle
            class="animation-circle"
            r="70"
            cx="75"
            cy="75"
            fill="transparent"
            v-bind:style="{ animationDuration: durationCircular[6] + 's' }"
            stroke-dasharray="500"
            stroke-dashoffset="0"
          ></circle>
          <circle
            class="animation-circle"
            id="meter-bar"
            style="stroke: #2886f6;"
            v-bind:style="{ animationDuration: durationCircular[6] + 's' }"
            r="70"
            cx="75"
            cy="75"
            fill="transparent"
            stroke-dasharray="500"
            stroke-dashoffset="0"
          ></circle>
        </svg>
      </div>
       <div id="sub-sub-slot" style="left: 100%;">
        <p id="first-sub-heading">NET PWR 2</p>
        <p id="number-sub-heading">0.00</p>
        <p id="unit-sub-heading">W</p>
        <svg
          class="circle-small-svg"
          id="meter-svg"
          viewBox="0 0 150 150"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <clipPath id="cut-off-bottom">
              <circle cx="0" cy="150" r="162.5" fill="transparent" />
            </clipPath>
          </defs>
          <circle
            r="70"
            cx="75"
            cy="75"
            stroke=#777777
            stroke-width="1.5"
            stroke-dasharray="0 4"
            stroke-linecap="round"
            fill="transparent"
            clip-path="url(#cut-off-bottom)"
          />
          <circle
            class="animation-circle"
            r="70"
            cx="75"
            cy="75"
            fill="transparent"
            v-bind:style="{ animationDuration: durationCircular[7] + 's' }"
            stroke-dasharray="500"
            stroke-dashoffset="0"
          ></circle>
          <circle
            class="animation-circle"
            id="meter-bar"
            style="stroke: #2886f6;"
            v-bind:style="{ animationDuration: durationCircular[7] + 's' }"
            r="70"
            cx="75"
            cy="75"
            fill="transparent"
            stroke-dasharray="500"
            stroke-dashoffset="0"
          ></circle>
        </svg>
      </div>
    </div>

    <div class="right-menu">
      <div class="right-slot" style="top: 10%;">
        <p id="right-main-heading">Inertial Velocity</p>
        <div id="horizontal-bar"><span id="progress-horizontal-bar" v-bind:style="{ animationDuration: durationHorizontal[0] + 's' }"></span></div>
        <p id="right-unit-heading">7.68 km/s</p>
      </div>
      <div class="right-slot" style="top: 20%;">
        <p id="right-main-heading">Altitude</p>
        <div id="horizontal-bar"><span id="progress-horizontal-bar" v-bind:style="{ animationDuration: durationHorizontal[1] + 's' }"></span></div>
        <p id="right-unit-heading">390.0 km</p>
      </div>
      <div class="right-slot" style="top: 30%;">
        <p id="right-main-heading">Apogle</p>
        <div id="horizontal-bar"><span id="progress-horizontal-bar" v-bind:style="{ animationDuration: durationHorizontal[2] + 's' }"></span></div>
        <p id="right-unit-heading">404.4 km</p>
      </div>
      <div class="right-slot" style="top: 40%;">
        <p id="right-main-heading">Perigee</p>
        <div id="horizontal-bar"><span id="progress-horizontal-bar" v-bind:style="{ animationDuration: durationHorizontal[3] + 's' }"></span></div>
        <p id="right-unit-heading">389.4 km</p>
      </div>
      <div class="right-slot" style="top: 60%;">
        <p id="right-main-heading">Inclination</p>
        <div id="horizontal-bar"><span id="progress-horizontal-bar" v-bind:style="{ animationDuration: durationHorizontal[4] + 's' }"></span></div>
        <p id="right-unit-heading">51.67°</p>
      </div>
      <div class="right-slot" style="top: 70%;">
        <p id="right-main-heading">Range to ISS</p>
        <div id="horizontal-bar"><span id="progress-horizontal-bar" v-bind:style="{ animationDuration: durationHorizontal[5] + 's' }"></span></div>
        <p id="right-unit-heading">0.02 km</p>
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
      activeButton: true,
      durationHorizontal: [10, 2, 9, 5, 7, 3],
      durationCircular: [9, 7, 10, 2, 15, 3, 12, 5]
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
    radial-gradient(40% 25% at 50% 75%, rgba(167, 185, 235, 0.75), #020738);
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

#dragon-crew {
  position: absolute;
  height: 50%;
  width: 15%;
  top: 57.5%;
  left: 50%;
  transform: translate(-50%, -50%);
}

#shadow {
  position: absolute;
  height: 100%;
  width: 100%;
  background: radial-gradient(
    7.5% 5% at 50% 86%,
    rgba(0, 0, 0, 0.75),
    rgba(0, 0, 0, 0)
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

.circle-big-svg {
  position: absolute;
  width: max(11vw, 23.5vh);
  height: max(11vw, 23.5vh);
  /* border: 0.25px solid green; */
  top: 12.5%;
  transform: translate(-50%, -50%);
  text-align: center;
  left: 12.5%;
}

.circle-small-svg {
  position: absolute;
  width: 7vw;
  height: 7vw;
  border: 0.25px solid green;
  top: 13.5%;
  transform: translate(-50%, -50%);
  text-align: center;
  left: 13.5%;
}

#meter-svg {
  transform: rotate(135deg);
}

.animation-circle {
  stroke-dashoffset: 170;
  animation-name: progressingCircular; 
  animation-iteration-count: infinite;
  stroke: #666;
  stroke-width: 0.35em;
}

@keyframes progressingCircular {
  0% {
    stroke-dashoffset: 170;
  }
  50% {
    stroke-dashoffset: 500;
  }
  100% {
    stroke-dashoffset: 170;
  }
}


#sub-slot {
  position: absolute;
  width: 30%;
  padding-bottom: 30%;
  /* height: 53%; */
  top: 27.5%;
  text-align: center;
  transform: translate(-50%, -50%);
  border: 1px solid pink;
}

#sub-sub-slot {
  position: absolute;
  width: 20%;
  padding-bottom: 20%;
  /* height: 53%; */
  top: 77.5%;
  text-align: center;
  transform: translate(-50%, -50%);
  border: 1px solid pink;
}

#first-heading {
  font-size: 0.65em;
  position: absolute;
  top: 30%;
  left: 50%;
  opacity: 0.5;
  transform: translate(-50%, -50%);
}

#number-heading {
  font-size: 2em;
  position: absolute;
  top: 33.5%;
  left: 50%;
  transform: translate(-50%, -50%);
}

#unit-heading {
  font-size: 1em;
  position: absolute;
  top: 60%;
  left: 50%;
  opacity: 0.75;
  transform: translate(-50%, -50%);
}

#first-sub-heading {
  font-size: 0.55em;
  position: absolute;
  top: 30%;
  left: 50%;
  opacity: 0.5;
  transform: translate(-50%, -50%);
}

#number-sub-heading {
  font-size: 1.5em;
  position: absolute;
  top: 36%;
  left: 50%;
  transform: translate(-50%, -50%);
}

#unit-sub-heading {
  font-size: 0.75em;
  position: absolute;
  top: 60%;
  left: 50%;
  opacity: 0.75;
  transform: translate(-50%, -50%);
}

.right-menu {
  position: absolute;
  width: 20%;
  height: 100%;
  border: 0.25px solid orange;
  /* background: #020738; */
  top: 50%;
  left: 90%;
  transform: translate(-50%, -50%);
}

#horizontal-bar {
  position: absolute;
  width: 50%;
  background: rgba(255, 255, 255, 0.25);
  height: 5%;
  top: 60%;
  left: 30%;
  border-radius: 50px;
  transform: translate(-50%, -50%); 
  text-align: center;
}

#progress-horizontal-bar {
  position: absolute;
  width: 10%;
  background: #35a9eb;
  height: 100%;
  top: 0%;
  left: 0%;
  border-radius: 50px;
  /* transform: translate(-50%, -50%);  */
  /* border: 1px solid red; */
  animation-name: progressingHorizontal;
  animation-iteration-count: infinite;
  /* animation-duration: v-bind(duration + 's'); */
}

@keyframes progressingHorizontal {
  0% {width: 10%;}
  50% {width: 90%;}
  100% {width: 10%;}
}

.right-slot {
  border: 1px solid green;
  position: absolute;
  width: 90%;
  height: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
}

#right-main-heading {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 55%;
  font-size: 0.75em;
  opacity: 0.9;
  transform: translate(-50%, -50%);
}

#right-unit-heading {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 70%;
  left: 110%;
  font-size: 1em;
  opacity: 0.9;
  transform: translate(-50%, -50%);
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


img {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  height: 100%;
  width: 100%;
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


svg {
  /* border: 1px solid tomato; */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  padding-bottom: 0;
}


</style>
