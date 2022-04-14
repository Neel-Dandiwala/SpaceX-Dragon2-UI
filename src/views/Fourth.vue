<template>
  <div id="back-box">
    <div id="left-inner-screen">
      <p id="left-main-heading">4.011 - Suit Leak Check</p>
      <p id="blue-heading">SUIT</p>
      <p id="left-sub-heading" style="top: 20%;">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="left-svg"
          viewBox="0 0 16 16"
        >
          <path
            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
          /></svg
        >1. PREPARE SUIT FOR LEAK CHECK
      </p>
      <p id="left-sub-heading" style="top: 25%;">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="left-svg"
          viewBox="0 0 16 16"
        >
          <path
            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
          /></svg
        >2. EXECUTE SUIT FOR LEAK CHECK
      </p>
      <div id="left-buttons">
        <button style="left: 20%;" id="button-square">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#ffffff"
            class="button-svg"
            viewBox="0 0 16 16"
          >
            <path
              d="M 2 2 a 2 2 0 0 0 -2 2 v 8 a 2 2 0 0 0 2 2 h 12 a 2 2 0 0 0 2 -2 V 4 a 2 2 0 0 0 -2 -2 z z m 6.14 0 z"
            />
          </svg>
        </button>
        <button style="left: 50%;" id="button-square">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#ffffff"
            class="button-svg"
            viewBox="0 0 16 16"
          >
            <path
              d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"
            />
            <path
              d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"
            />
          </svg>
        </button>
        <p id="left-sub-heading" style="border: none; top: 90%;">ENTER READ-ONLY</p>
      </div>
    </div>

    <div id="main-inner-screen">
      <p id="main-blue-heading" style="top: 2.5%; left: 10%; ">
        SECTION 2 IN PROGRESS<svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="blue-svg"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"
          />
          <path
            d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"
          />
        </svg>
      </p>
      <p id="main-center-heading">Execute Suit Leak Check</p>
      <div class="main-panel">
        <p id="main-sub-heading" style="top:2. 5%;">
          2.3<span id="main-sub-sub-heading"
            >On SpaceX Ꝏ to pressurize • command</span
          >
        </p>
        <button
          style=" border: 3px solid #ffffff; left: 75%; top: 12.5%;"
          id="button-rectangle" @click="TimeoutAnimation"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            style="position: relative; fill: #ffffff"
            class="bi bi-grid-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z"
            />
          </svg>
          <span
            style="position: relative; text-align: center; top: -5%; padding: 5%;"
            >START SUIT LEAK CHECK</span
          >
        </button>
        <p id="main-sub-heading" style="top: 22.5%;">
          2.4
          <span id="main-sub-sub-heading"
            >Monitor suit delta pressure. Confirm all four suit statuses are
            executed after them reaching to 0.</span
          >
        </p>

        <!-- Table Grid -->
        <div class="log-grid">
          <div class="grid-row">
            <p style="top: 0%;" class="grid-row-heading">
              SUIT PRESSURE & LEAK CHECK On
              <span class="animate1" style="position: relative; left: 25%">{{ countdown }}</span>
              <svg
                style="position: relative; left: 50.5%; right: 0;"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-check-circle-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
                />
              </svg>
            </p>
          </div>
          <div class="grid-row" style="top: 10%;">
            <p class="grid-row-heading">
              SUIT 1 DELTA PRESSURE
              <span style="position: relative; left: 37.5%;">0.01psi</span>
              <svg
                style="position: relative; left: 56.5%; right: 0; opacity: 0.5;"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-check-circle-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7z"
                />
              </svg>
            </p>
          </div>
          <div class="grid-row" style="top: 20%;">
            <p class="grid-row-heading">
              SUIT 2 DELTA PRESSURE
              <span style="position: relative; left: 37.5%;">0.01psi</span>
              <svg
                style="position: relative;  left: 56.5%; right: 0; opacity: 0.5;"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-check-circle-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7z"
                />
              </svg>
            </p>
          </div>
          <div class="grid-row" style="top: 30%;">
            <p class="grid-row-heading">
              SUIT 3 DELTA PRESSURE
              <span style="position: relative; left: 37.5%;">0.01psi</span>
              <svg
                style="position: relative;  left: 56.5%;  right: 0;  opacity: 0.5;"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-check-circle-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7z"
                />
              </svg>
            </p>
          </div>
          <div class="grid-row" style="top: 40%;">
            <p class="grid-row-heading">
              SUIT 4 DELTA PRESSURE
              <span style="position: relative; left: 37.5%;">0.01psi</span>
              <svg
                style="position: relative;  left: 56.5%; right: 0; opacity: 0.5;"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-check-circle-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7z"
                />
              </svg>
            </p>
          </div>
          <div class="grid-row" style="top: 50%;">
            <p class="grid-row-heading">
              SUIT 1 STATUS
              <span style="position: relative; left: 50%">HANDLED</span>
              <svg
                style="position: relative; left: 65%; right: 0;"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-check-circle-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
                />
              </svg>
            </p>
          </div>
          <div class="grid-row" style="top: 60%;">
            <p class="grid-row-heading">
              SUIT 2 STATUS
              <span style="position: relative; left: 50%">HANDLED</span>
              <svg
                style="position: relative; left: 65%; right: 0;"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-check-circle-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
                />
              </svg>
            </p>
          </div>
          <div class="grid-row" style="top: 70%;">
            <p class="grid-row-heading">
              SUIT 3 STATUS
              <span style="position: relative;  left: 50%">HANDLED</span>
              <svg
                style="position: relative; left: 65%; right: 0;"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-check-circle-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
                />
              </svg>
            </p>
          </div>
          <div class="grid-row" style="top: 80%;">
            <p class="grid-row-heading">
              SUIT 4 STATUS
              <span style="position: relative;  left: 50%">HANDLED</span>
              <svg
                style="position: relative; left: 65%; right: 0;"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-check-circle-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
                />
              </svg>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div id="right-inner-screen">
      <div id="caution-panel">
        <p id="caution-text">
          <span style="color: #ffb74b;">Caution:</span> It is advised to remain
          still during first 15 minutes of leak check to ensure articulate
          automated evaluation of suit delta pressure volume
        </p>
      </div>
      <button
        style=" border: 3px solid #d12c30; left: 50%; top: 85%;"
        id="button-rectangle"
        @click="StopAnimation"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          style="position: relative; fill: #d12c30"
          class="bi bi-grid-fill"
          viewBox="0 0 16 16"
        >
          <path
            d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z"
          />
        </svg>
        <span
          style="position: relative; text-align: center; top: -5%; padding: 5%;"
          >HALT SUIT LEAK CHECK</span
        >
      </button>
    </div>
    <Transition name="fade" mode="out-in">
      <SuitLeak v-if="suitLeakCheck" :ToggleSuitLeak="() => ToggleSuitLeak()">
    </SuitLeak>
    </Transition>
    
  </div>
</template>

<script>
import SuitLeak from '../components/SuitLeak.vue'

export default {
  name: 'Fourth',
  data() {
    return {
      suitLeakCheck: false,
      countdown: 5,
      haltSignal: false,
      timeInterval: null,
      timeouts: [],
    
    }
  },
  methods: {
    TimeoutAnimation(){

      this.timeouts.push(setTimeout(() => { this.countdown = 4 }, 900))
      this.timeouts.push(setTimeout(() => { this.countdown = 3 }, 1800))
      this.timeouts.push(setTimeout(() => { this.countdown = 2}, 2700))
      this.timeouts.push(setTimeout(() => { this.countdown = 1 }, 3600))
      this.timeouts.push(setTimeout(() => { this.countdown = 0 }, 4500))
      this.timeInterval = setInterval(() => {
        this.ToggleSuitLeak()
        this.countdown = 5
      }, 5000)
    },
    StopAnimation(){
      clearInterval(this.timeInterval)
      alert('Suit Leak Check halted')
      for (var i=0; i<this.timeouts.length; i++) {
        clearTimeout(this.timeouts[i])
      }
      this.countdown = 5
     
    },
    ToggleSuitLeak(){
      this.suitLeakCheck = !this.suitLeakCheck
      clearInterval(this.timeInterval)
    },

  },
  components: {
    SuitLeak
  },
  mounted() {}
}
</script>

<style scoped>
svg {
  /* border: 1px solid tomato; */
  top: 0%;
  left: 0%;
  /* bottom: 7em; */
  /* transform: translate(-50%, -50%); */
  position: relative;
  padding-bottom: 0;
  z-index: 2;
  fill: white;
  /* stroke: white; */
}

p {
  top: 0%;
  left: 50%;
  /* bottom: 7em; */
  transform: translate(-50%, -50%);
  position: relative;
  padding-bottom: 0;
  z-index: 2;
  fill: white;
}

#back-box {
  position: absolute;
  background-color: #020738;
  height: 95vh;
  width: 100%;
  /* bottom: 30px; */
  top: 0;
  border-radius: 0 0 30px 30px;
  box-sizing: border-box;
  border-bottom: 0.5px solid white;
  border-left: 1px solid white;
  border-right: 1px solid white;
  z-index: -3;
  overflow: hidden;
  /* display: flex; */
}

#left-inner-screen {
  overflow: hidden;
  position: absolute;
  background: #020738;
  border: 3px solid #111b52;
  height: 91.5vh;
  width: 22.25vw;
  /* bottom: 30px; */
  top: 50%;
  left: 12%;
  /* bottom: 7em; */
  transform: translate(-50%, -50%);
  border-radius: 0 0 0 25px;
  box-sizing: border-box;
  text-align: center;
}

#left-main-heading {
  position: absolute;
  top: 7.5%;
  left: 47.5%;
  font-size: 1.35em;
  width: 100%;
  color: white;
  transform: translate(-50%, -50%);
}

#left-sub-heading {
  position: absolute;
  /* top: 50%; */
  border-top: 0.25px solid rgba(255, 255, 255, 0.5);
  font-size: 0.65em;
  width: 75%;
  color: white;
  padding-top: 2.5%;
}

#blue-heading {
  color: #20fbfd;
  font-size: 0.75em;
  position: absolute;
  top: 12.5%;
  left: 17%;
  transform: translate(-50%, -50%);
}

#main-blue-heading {
  color: #20fbfd;
  font-size: 0.75em;
  position: absolute;
  top: 2.5%;
  left: 40.75%;
  transform: translate(-50%, -50%);
}

#main-center-heading {
  position: absolute;
  top: 5%;
  left: 40.75%;
  transform: translate(-50%, -50%);
  font-size: 2em;
  width: 75%;
  color: white;
}

#main-sub-heading {
  position: absolute;
  left: 40.75%;
  transform: translate(-50%, -50%);
  font-size: 1em;
  width: 75%;
  color: white;
}

#main-sub-sub-heading {
  position: absolute;
  left: 5.75%;
  /* transform: translate(-50%, -50%); */
  /* font-size: 1em;
   width: 75%;
   color: white; */
}

.left-svg {
  position: absolute;
  top: 30%;
  /* left: 50%; */
  padding-right: 5%;
}

.blue-svg {
  position: absolute;
  top: 0%;
  left: 105%;
  fill: #20fbfd;
  /* padding-right: 5%; */
}

#main-inner-screen {
  overflow: hidden;
  position: absolute;
  background: #020738;
  border: 3px solid #111b52;
  height: 91.5vh;
  width: 75vw;
  /* bottom: 30px; */
  top: 50%;
  left: 61.5%;
  /* bottom: 7em; */
  transform: translate(-50%, -50%);
  border-radius: 0 0 25px 0;
  box-sizing: border-box;
}

#right-inner-screen {
  position: absolute;
  height: 80%;
  width: 27.5%;
  top: 56.5%;
  left: 85%;
  /* bottom: 7em; */
  transform: translate(-50%, -50%);
  border-radius: 0 0 25px 0;
  /* border: 1px solid orange; */
  /* text-align: center; */
}

.main-panel {
  overflow: hidden;
  position: absolute;
  width: 60%;
  height: 77.5%;
  /* border: 1px solid red; */
  border-top: 2px solid rgba(255, 255, 255, 0.5);
  border-bottom: 2px solid rgba(255, 255, 255, 0.5);
  top: 53.5%;
  left: 32.5%;
  /* bottom: 7em; */
  transform: translate(-50%, -50%);
}

.log-grid {
  position: absolute;
  height: 70%;
  width: 80%;
  /* border: 1px solid green; */
  top: 71%;
  left: 47.5%;
  /* bottom: 7em; */
  transform: translate(-50%, -50%);
  overflow: hidden;
}

.grid-row {
  width: 100%;
  left: 0%;
  height: 7.5%;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  position: absolute;
  /* border: 1px solid blue; */
}

.grid-row-heading {
  position: absolute;
  width: 100%;
  font-size: 0.85em;
  left: 50%;
  transform: translate(-50%, -50%);
  color: rgba(255, 255, 255, 0.75);
}

#caution-panel {
  position: absolute;
  top: 12.5%;
  left: 50%;
  width: 90%;
  height: 25%;
  background-color: #313d7b;
  transform: translate(-50%, -50%);
  overflow: hidden;
}

#caution-text {
  position: relative;
  top: 35%;
  left: 50%;
  padding-left: 2%;
  transform: translate(-50%, -50%);
  font-size: 1.1em;
  /* border: 1px solid yellow; */
  border-left: 10px solid #ffb74b;
  width: 80%;
}

#button-square {
  position: absolute;
  border: 1px solid white;
  text-align: center;
  width: 20%;
  height: 0;
  bottom: 3.5%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  padding-bottom: 20%;
  overflow: hidden;
  border-radius: 10%;
  background-color: rgba(2, 7, 56, 0.75);
  color: white;
}

.button-svg {
  width: 30px;
  height: 30px;
  left: 50%;
  top: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
}

#left-buttons {
  position: absolute;
  top: 85%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  height: 15%;
  /* border: 1px solid green; */
  border-top: 1px solid rgba(255, 255, 255, 0.5);
}

#button-rectangle {
  position: absolute;
  border: 1px solid white;
  text-align: center;
  height: 50px;
  width: 210px;
  bottom: 3.5%;
  /* top: 80%; */
  /* padding-bottom: 30%; */
  font-size: 0.75em;
  font-weight: 600;
  overflow: hidden;
  border-radius: 5px;
  background-color: rgba(2, 7, 56, 0.75);
  color: white;
  transform: translate(-50%, -50%);
}

#button-rectangle:active {
  background-color: white;
  border: none;
  /* transform: scale(1.1); */
  color: #020738;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
