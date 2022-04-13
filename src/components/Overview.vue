<template>
  <div id="inner-screen">
    <p id="title">VEHICLE OVERVIEW</p>
    <div id="shadow" />

    <div class="connections-panel">
      <p id="connections-heading">CONNECTIONS</p>
      <p id="connections-sub-heading" style="top: 17.5%;">Manual Rings <span id="connections-sub-sub-heading">Connected</span></p>
      <p id="connections-sub-heading" style="top: 32.5%;">Changelog<span id="connections-sub-sub-heading">Connected</span></p>
      <p id="connections-sub-heading" style="top: 47.5%;">Airlock <span id="connections-sub-sub-heading">Connected</span></p>
      <p id="connections-sub-heading" style="top: 62.5%;">Wing<span id="connections-sub-sub-heading">Connected</span></p>
    </div>

    <div id="dragon-crew">
      <img src="dragon_crew.png" />
    </div>
    <p id="dragon-main-heading">CABIN MICS: <span style="color: #d12c30;">RECORDING</span></p>

    <div class="circular-progess-menu">
      <div id="sub-slot" style="left: 8.75%;">
        <p id="first-heading">PPO2</p>
        <p id="number-heading" class="c1">{{ maximumCircularLimit[0] }}</p>
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
            stroke="#777777"
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
        <p id="number-heading" class="c2">{{ maximumCircularLimit[1] }}</p>
        <p id="unit-heading">°C</p>
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
            stroke="#777777"
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
        <p id="number-heading" class="c3">{{ maximumCircularLimit[2] }}</p>
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
            stroke="#777777"
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
        <p id="number-heading" class="c4">{{ maximumCircularLimit[3] }}</p>
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
            stroke="#777777"
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
        <p id="number-sub-heading" class="c5">{{ maximumCircularLimit[4] }}</p>
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
            stroke="#777777"
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
        <p id="number-sub-heading" class="c6">{{ maximumCircularLimit[5] }}</p>
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
            stroke="#777777"
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
        <p id="number-sub-heading" class="c7">{{ maximumCircularLimit[6] }}</p>
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
            stroke="#777777"
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
        <p id="number-sub-heading" class="c8">{{ maximumCircularLimit[7] }}</p>
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
            stroke="#777777"
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
        <div id="horizontal-bar">
          <span
            id="progress-horizontal-bar"
            v-bind:style="{ animationDuration: durationHorizontal[0] + 's' }"
          ></span>
        </div>
        <p id="right-unit-heading" class="h1">{{ maximumHorizontalLimit[0] }}</p><p style="left: 125%;" id="right-unit-heading">km/s</p>
      </div>
      <div class="right-slot" style="top: 20%;">
        <p id="right-main-heading">Altitude</p>
        <div id="horizontal-bar">
          <span
            id="progress-horizontal-bar"
            v-bind:style="{ animationDuration: durationHorizontal[1] + 's' }"
          ></span>
        </div>
        <p id="right-unit-heading" class="h2">{{ maximumHorizontalLimit[1] }}</p><p style="left: 125%;" id="right-unit-heading">km</p>
      </div>
      <div class="right-slot" style="top: 30%;">
        <p id="right-main-heading">Apogle</p>
        <div id="horizontal-bar">
          <span
            id="progress-horizontal-bar"
            v-bind:style="{ animationDuration: durationHorizontal[2] + 's' }"
          ></span>
        </div>
        <p id="right-unit-heading" class="h3">{{ maximumHorizontalLimit[2] }}</p><p style="left: 125%;" id="right-unit-heading">km</p>
      </div>
      <div class="right-slot" style="top: 40%;">
        <p id="right-main-heading">Perigee</p>
        <div id="horizontal-bar">
          <span
            id="progress-horizontal-bar"
            v-bind:style="{ animationDuration: durationHorizontal[3] + 's' }"
          ></span>
        </div>
        <p id="right-unit-heading" class="h4">{{ maximumHorizontalLimit[3] }}</p><p style="left: 125%;" id="right-unit-heading">km</p>
      </div>
      <div class="right-slot" style="top: 60%;">
        <p id="right-main-heading">Inclination</p>
        <div id="horizontal-bar">
          <span
            id="progress-horizontal-bar"
            v-bind:style="{ animationDuration: durationHorizontal[4] + 's' }"
          ></span>
        </div>
        <p id="right-unit-heading" class="h5">{{ maximumHorizontalLimit[4] }}</p><p style="left: 125%;" id="right-unit-heading">°</p>
      </div>
      <div class="right-slot" style="top: 70%;">
        <p id="right-main-heading">Range to ISS</p>
        <div id="horizontal-bar">
          <span
            id="progress-horizontal-bar"
            v-bind:style="{ animationDuration: durationHorizontal[5] + 's' }"
          ></span>
        </div>
        <p id="right-unit-heading" class="h6">{{ maximumHorizontalLimit[5] }}</p><p style="left: 125%;" id="right-unit-heading">km</p>
      </div>
      <p id="left-sub-heading" style="top: 86.5%; width: 50%; font-size: 0.75em; left: 0%">Power, Engine, Comms</p>
      <button
        v-bind:style="[
          !moreToggle
            ? ` background-color: white; color:#020738; border-radius: 10%; z-index:1;`
            : ` background-color: #020738; transform: scale(90%); color: white; border-radius: 10% 10% 10% 10%; z-index:0;`
        ]"
        @click="moreToggle = !moreToggle"
        style="left: 47%;"
      >
        MORE
      </button>
    </div>

    <div class="left-menu">
      <p id="left-heading" style="top:4%;">
        <svg
          class="left-menu-svg"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#818395"
          viewBox="0 0 16 16"
        >
          <path
            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
          /></svg
        >ALL SYSTEMS CHECK<span style="top:100%;" id="left-sub-heading"
          >Normal</span
        >
      </p>
      <p id="left-heading" style="top:15%;">
        <svg
          class="left-menu-svg"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#818395"
          viewBox="0 0 16 16"
        >
          <path
            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
          /></svg
        >RENDEZVOUS BURN SLOW<span style="top:100%;" id="left-sub-heading"
          >Normal</span
        >
      </p>
       <p id="left-heading" style="top:26%;">
        <svg
          class="left-menu-svg"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#818395"
          viewBox="0 0 16 16"
        >
          <path
            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
          /></svg
        >PREPARE RENDEZVOUS BURN<span style="top:100%;" id="left-sub-heading"
          >Normal</span
        >
      </p>
       <p id="left-heading" style="top:37%;">
        <svg
          class="left-menu-svg"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#40c110"
          viewBox="0 0 16 16"
        >
          <path
            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
          /></svg
        >THERMAL SHIELD<span style="top:100%; color: white; font-size: 1.1em;" id="left-sub-heading"
          >Applied</span
        >
      </p>
       <p id="left-heading" style="top:48%;">
        <svg
          class="left-menu-svg"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#818395"
          viewBox="0 0 16 16"
        >
          <path
            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
          /></svg
        >BURN GO/NO-GO<span style="top:100%;" id="left-sub-heading"
          >Normal</span
        >
      </p>
       <p id="left-heading" style="top:59%;">
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
        >POWER COMPLETION<span style="top:100%; color: white; font-size: 1.1em;" id="left-sub-heading"
          >Awaiting</span
        >
      </p>
       <p id="left-heading" style="top:70%;">
        <svg
          class="left-menu-svg"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#818395"
          viewBox="0 0 16 16"
        >
          <path
            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
          /></svg
        >STATION DECK CHECK<span style="top:100%;" id="left-sub-heading"
          >Normal</span
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
        style="left: 57%;"
      >
        CABIN
      </button>
     
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'
export default {
  name: 'Overview',
  props: [],
  data() {
    return {
      activeButton: true,
      moreToggle: true,
      durationHorizontal: [10, 2, 9, 5, 7, 3],
      durationCircular: [9, 7, 10, 2, 15, 3, 12, 5],
      maximumCircularLimit: [2.47, 20.11, 12.0, 1.00, 24.53, 21.7, 1.0, 2.0],
      maximumHorizontalLimit: [7.68, 390.0, 404.0, 389.4, 51.67, 0.07]
    }
  },
  mounted() {
    // this.selectedGround = this.ground[2]
    // this.selectedAux = this.aux[2]
    // this.selectedIntercom = this.intercom[2]
    // this.selectedAlerts = this.alerts[2]
    this.animateCircularNumbers()
    this.animateHorizontalNumbers()
    
  },
  methods: {
    animateCircularNumbers(){
      gsap.from('.c1',{
          repeat: -1,
          repeatDelay: 0,
          textContent: 2.69,
          yoyo: true,
          duration: this.durationCircular[0] / 2,
          ease: 'power1.in',
          modifiers: {
            textContent: this.roundify
          },
          stagger: { each: 0 }
        },0).reverse();

    gsap.from('.c2',{
          repeat: -1,
          repeatDelay: 0,
          textContent: 16.41,
          yoyo: true,
          duration: this.durationCircular[1] / 2,
          ease: 'power1.in',
          modifiers: {
            textContent: this.roundify
          },
          stagger: { each: 0 }
        },0).reverse();

      gsap.from('.c3',{
          repeat: -1,
          repeatDelay: 0,
          textContent: 14.00,
          yoyo: true,
          duration: this.durationCircular[2] / 2,
          ease: 'power1.in',
          modifiers: {
            textContent: this.roundify
          },
          stagger: { each: 0 }
        },0).reverse();

        gsap.from('.c4',{
          repeat: -1,
          repeatDelay: 0,
          textContent: 1.05,
          yoyo: true,
          duration: this.durationCircular[3] / 2,
          ease: 'power1.in',
          modifiers: {
            textContent: this.roundify
          },
          stagger: { each: 0 }
        },0).reverse();


        gsap.from('.c5',{
          repeat: -1,
          repeatDelay: 0,
          textContent: 26.05,
          yoyo: true,
          duration: this.durationCircular[4] / 2,
          ease: 'power1.in',
          modifiers: {
            textContent: this.roundify
          },
          stagger: { each: 0 }
        },0).reverse();

         gsap.from('.c6',{
          repeat: -1,
          repeatDelay: 0,
          textContent: 21.05,
          yoyo: true,
          duration: this.durationCircular[5] / 2,
          ease: 'power1.in',
          modifiers: {
            textContent: this.roundify
          },
          stagger: { each: 0 }
        },0).reverse();

        gsap.from('.c7',{
          repeat: -1,
          repeatDelay: 0,
          textContent: 0.03,
          yoyo: true,
          duration: this.durationCircular[6] / 2,
          ease: 'power1.in',
          modifiers: {
            textContent: this.roundify
          },
          stagger: { each: 0 }
        },0).reverse();

        gsap.from('.c8',{
          repeat: -1,
          repeatDelay: 0,
          textContent: 3.03,
          yoyo: true,
          duration: this.durationCircular[7] / 2,
          ease: 'power1.in',
          modifiers: {
            textContent: this.roundify
          },
          stagger: { each: 0 }
        },0).reverse();
    },

    animateHorizontalNumbers(){
      gsap.from('.h1',{
          repeat: -1,
          repeatDelay: 0,
          textContent: 6.68,
          yoyo: true,
          duration: this.durationHorizontal[0] / 2,
          ease: 'power1.in',
          modifiers: {
            textContent: this.roundify
          },
          stagger: { each: 0 }
        },0).reverse();

    gsap.from('.h2',{
          repeat: -1,
          repeatDelay: 0,
          textContent: 380.0,
          yoyo: true,
          duration: this.durationHorizontal[1] / 2,
          ease: 'power1.in',
          modifiers: {
            textContent: this.roundifySingle
          },
          stagger: { each: 0 }
        },0).reverse();

      gsap.from('.h3',{
          repeat: -1,
          repeatDelay: 0,
          textContent: 377.0,
          yoyo: true,
          duration: this.durationHorizontal[2] / 2,
          ease: 'power1.in',
          modifiers: {
            textContent: this.roundifySingle
          },
          stagger: { each: 0 }
        },0).reverse();

        gsap.from('.h4',{
          repeat: -1,
          repeatDelay: 0,
          textContent: 365.9,
          yoyo: true,
          duration: this.durationHorizontal[3] / 2,
          ease: 'power1.in',
          modifiers: {
            textContent: this.roundifySingle
          },
          stagger: { each: 0 }
        },0).reverse();


        gsap.from('.h5',{
          repeat: -1,
          repeatDelay: 0,
          textContent: 60.05,
          yoyo: true,
          duration: this.durationHorizontal[4] / 2,
          ease: 'power1.in',
          modifiers: {
            textContent: this.roundify
          },
          stagger: { each: 0 }
        },0).reverse();

         gsap.from('.h6',{
          repeat: -1,
          repeatDelay: 0,
          textContent: 0.01,
          yoyo: true,
          duration: this.durationHorizontal[5] / 2,
          ease: 'power1.in',
          modifiers: {
            textContent: this.roundify
          },
          stagger: { each: 0 }
        },0).reverse();

    },

    roundify(num) {
      return Math.round(num * 100) / 100
    },
    roundifySingle(num) {
      return Math.round(num * 10) / 10
    },

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

.connections-panel {
  position: absolute;
  width: 10%;
  height: 20%;
  /* border: 0.5px solid yellow; */
  top: 70%;
  left: 35%;
  transform: translate(-50%, -50%);
  /* text-align: center; */
}

#connections-heading {
  position: absolute;
  width: 100%;
  left: 0%;
  font-size: 0.75em;
  top: 0%;
  padding-bottom: 5%;
  border-bottom: 0.5px solid rgba(255, 255, 255, 0.5); 
  /* transform: translate(-50%, -50%); */
  /* font-weight: 600; */
  color: rgba(255, 255, 255, 1);
  opacity: 0.5;
}

#connections-sub-heading{
  position: absolute;
  width: 100%;
  padding-top: 0.5em;
  /* height: 53%; */
  /* top: 50%; */
  /* border: 1px solid white; */
  font-size: 0.65em;
  color: rgba(255, 255, 255, 0.5);
   /* opacity: 0.5; */
}

#connections-sub-sub-heading{
  position: absolute;
  color: rgba(255, 255, 255, 1.0);
  opacity: 1;
  right: 0px;
}

#dragon-crew {
  position: absolute;
  height: 50%;
  width: 13.5%;
  top: 57.5%;
  left: 50%;
  transform: translate(-50%, -50%);
}

#dragon-main-heading {
  top: 82.5%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  position: absolute;
  font-size: 0.65em;
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
  /* border: 0.25px solid purple; */
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
  /* border: 0.25px solid green; */
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
  /* border: 1px solid pink; */
}

#sub-sub-slot {
  position: absolute;
  width: 20%;
  padding-bottom: 20%;
  /* height: 53%; */
  top: 77.5%;
  text-align: center;
  transform: translate(-50%, -50%);
  /* border: 1px solid pink; */
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
  /* border: 0.25px solid orange; */
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
  0% {
    width: 10%;
  }
  50% {
    width: 90%;
  }
  100% {
    width: 10%;
  }
}

.right-slot {
  /* border: 1px solid green; */
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
  /* border: 0.25px solid orange; */
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
  color: rgba(255, 255, 255, 0.5);
  /* opacity: 0.5; */
  /* transform: translate(-50%, -50%); */
}

button {
  position: absolute;
  border: 1px solid white;
  text-align: center;
  width: 40%;
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
