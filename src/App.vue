<template>
  <div id="app">
    <div id="flashMessage" v-if="GStore.flashMessage">
      {{ GStore.flashMessage }}
    </div>
    <div ref="marker" id="marker" class="marker" />
    <router-view />
    <Start id="divtest" style="z-index: 5; border-radius: 0 0 30px 30px;" v-if="loading" />
    <p v-if="loading" id="divtest2" style="z-index: 5; font-size: 2em; position: absolute; top: 45%; left: 50%; transform: translate(-50%, -50%);">Welcome to the Dragon</p>
    <nav>
      <router-link :to="{ name: 'First' }" @click="indicator(0)"
        ><button id="panelButton" ref="firstPanel" type="submit">
          <svg
            class="main-views-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
          >
            <path
              d="M 8 15 A 7 7 0 1 1 8 1 a 7 7 0 0 1 0 14 z m 0 1 A 8 8 0 1 0 8 0 a 8 8 0 0 0 0 16 z M 13 8.1 a 3 3 0 1 1 -10 -0.1 a 3 3 0 0 1 10 0.1 z M 1.5 1.5 A 1 1 0 0 0 3.4 3.5 A 1 1 0 0 0 1.5 1.5 M 11.5 12.5 A 1 1 0 0 0 13.4 15.5 A 1 1 0 0 0 11.5 12.5"
            />
          </svg></button
      ></router-link>
      <router-link :to="{ name: 'Second' }" @click="indicator(1)"
        ><button id="panelButton" ref="secondPanel" type="submit">
          <svg
            class="main-views-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
            />
            <path
              d="M 8 4 a 0.5 0.5 0 0 1 0.5 0.5 v 3 h 3 a 0.5 0.5 0 0 1 0 1 h -3 v 3 a 0.5 0.5 0 0 1 -1 0 v -3 h -3 a 0.5 0.5 0 0 1 0 -1 h 3 v -3 A 0.5 0.5 0 0 1 8 4 z M 7.5 7.5 A 1 1 0 0 0 7.5 8.5 A 1 1 0 0 0 8.5 8.5 A 1 1 0 0 0 8.5 7.5 A 1 1 0 0 0 7.5 7.5 M 8 7.6 C 7.5 7.7 7.5 8.3 8 8.4 C 8.5 8.3 8.5 7.7 8 7.6"
            />
          </svg></button
      ></router-link>
      <router-link :to="{ name: 'Third' }" @click="indicator(2)"
        ><button id="panelButton" ref="thirdPanel" type="submit">
          <svg
            class="main-views-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
          >
            <path
              d="M 14 15 q -6 3 -12 0 C 0.5 7.5 6.5 0 8 0 s 7.5 7.5 6 15 z M 8 1.5 C 5 4.5 3.5 7.5 3.5 10.5 Q 6.5 12 6.5 15 L 9.5 15 Q 9.5 12 12.5 10.5 C 12.5 7.5 11 4.5 8 1.5 M 6.5 6 Q 5.75 7.5 6.5 9 Q 8 9.75 9.5 9 Q 10.25 7.5 9.5 6 Q 8 5.1 6.5 6 Z"
            />
          </svg></button
      ></router-link>
      <router-link :to="{ name: 'Fourth' }" @click="indicator(3)"
        ><button id="panelButton" ref="fourthPanel" type="submit">
          <svg
            class="main-views-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
          >
            <path
              d="M 9.828 3 h 3.982 a 2 2 0 0 1 1.19 2 l 0 7 A 2 2 0 0 1 13.174 14 H 2.825 a 2 2 0 0 1 -1.825 -2 l 0 -7 l 0 -1 L 1 3 l 0 -2 h 7 L 9.828 3 z z M 8 5 A 1 1 0 0 0 8 12 A 1 1 0 0 0 8 5 M 8 12 L 5 7 L 11 7 Z"
            />
          </svg></button
      ></router-link>
      <router-link :to="{ name: 'Fifth' }" @click="indicator(4)"
        ><button id="panelButton" ref="fifthPanel" type="submit">
          <svg
            class="main-views-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
          >
            <path
              d="M 8.932 0.727 c -0.243 -0.97 -1.62 -0.97 -1.864 0 l -0.071 0.286 a 0.96 0.96 0 0 1 -1.622 0.434 l -0.205 -0.211 c -0.695 -0.719 -1.888 -0.03 -1.613 0.931 l 0.08 0.284 a 0.96 0.96 0 0 1 -1.186 1.187 l -0.284 -0.081 c -0.96 -0.275 -1.65 0.918 -0.931 1.613 l 0.211 0.205 a 0.96 0.96 0 0 1 -0.434 1.622 l -0.286 0.071 c -0.97 0.243 -0.97 1.62 0 1.864 l 0.286 0.071 a 0.96 0.96 0 0 1 0.434 1.622 l -0.211 0.205 c -0.719 0.695 -0.03 1.888 0.931 1.613 l 0.284 -0.08 a 0.96 0.96 0 0 1 1.187 1.187 l -0.081 0.283 c -0.275 0.96 0.918 1.65 1.613 0.931 l 0.205 -0.211 a 0.96 0.96 0 0 1 1.622 0.434 l 0.071 0.286 c 0.243 0.97 1.62 0.97 1.864 0 l 0.071 -0.286 a 0.96 0.96 0 0 1 1.622 -0.434 l 0.205 0.211 c 0.695 0.719 1.888 0.03 1.613 -0.931 l -0.08 -0.284 a 0.96 0.96 0 0 1 1.187 -1.187 l 0.283 0.081 c 0.96 0.275 1.65 -0.918 0.931 -1.613 l -0.211 -0.205 a 0.96 0.96 0 0 1 0.434 -1.622 l 0.286 -0.071 c 0.97 -0.243 0.97 -1.62 0 -1.864 l -0.286 -0.071 a 0.96 0.96 0 0 1 -0.434 -1.622 l 0.211 -0.205 c 0.719 -0.695 0.03 -1.888 -0.931 -1.613 l -0.284 0.08 a 0.96 0.96 0 0 1 -1.187 -1.186 l 0.081 -0.284 c 0.275 -0.96 -0.918 -1.65 -1.613 -0.931 l -0.205 0.211 a 0.96 0.96 0 0 1 -1.622 -0.434 L 8.932 0.727 z M 8 12.997 a 4.998 4.998 0 1 1 0 -9.995 a 4.998 4.998 0 0 1 0 9.996 z M 8 4 L 5 10 L 11 10 Z"
            />
          </svg></button
      ></router-link>
      <div
        style="position: absolute; border-right: 1px solid white; top: 0%; right: 55%; width: 15%; height: 100%;"
      >
        <p
          style="position: absolute; color: white; right: 0%;  font-size: 0.5vw; top: 0%;"
        >
          CURRENT STATE
        </p>
        <p
          style="position: absolute; color: white; right: 0%; font-size: 0.6vw; top: 20%;"
        >
          Far Field Pointing Deorbit
        </p>
      </div>
      <div
        style="position: absolute; border-left: 1px solid white; top: 0%; left: 55%; width: 10%; height: 100%;"
      >
        <p
          style="position: absolute; color: white; left: 0%;  font-size: 0.5vw; top: 0%;"
        >
          POINTING MODE
        </p>
        <p
          style="position: absolute; color: white; left: 0%; font-size: 0.6vw; top: 20%;"
        >
          Sun + GEO
        </p>
      </div>
      <div
        style="position: absolute; border: 0px solid white; top: 0%; right: 150px; width: 10%; height: 100%;"
      >
        <svg
          style="position: absolute; top: 25%; left: 0%;"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#20fbfd"
          class="bi bi-disc"
          viewBox="0 0 16 16"
        >
          <path
            d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
          />
          <path
            d="M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM8 4a4 4 0 0 0-4 4 .5.5 0 0 1-1 0 5 5 0 0 1 5-5 .5.5 0 0 1 0 1zm4.5 3.5a.5.5 0 0 1 .5.5 5 5 0 0 1-5 5 .5.5 0 0 1 0-1 4 4 0 0 0 4-4 .5.5 0 0 1 .5-.5z"
          />
        </svg>
        <p
          style="position: absolute; color: #20fbfd; left: 17.5%;  font-size: 0.55vw; top: 10%;"
        >
          SPX
        </p>
        <div
          style="position: absolute; border: 0px solid white; top: 0%; right: 0%; width: 60%; height: 50%;"
        >
          <svg
            style="position: absolute; top: 25%; left: 0%;"
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="8"
            fill="#20fbfd"
            class="bi bi-camera-video-fill"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5z"
            />
          </svg>
          <p
            style="position: absolute; color: #20fbfd; left: 25%;  font-size: 0.55vw; top: -30%; border-bottom: 0.5px solid #20fbfd"
          >
            22:33
          </p>
          <p
            style="position: absolute; color: #20fbfd; left: 67.5%;  font-size: 0.55vw; top: -30%; border-bottom: 0.5px solid #20fbfd"
          >
            0.00
          </p>
        </div>
        <div
          style="position: absolute; border: 0px solid white; top: 50%; right: 0%; width: 60%; height: 50%;"
        >
          <svg
            style="position: absolute; top: 25%; left: 0%;"
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="8"
            fill="#20fbfd"
            class="bi bi-camera-video-fill"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M 7.247 13.14 L 2.451 7.658 C 1.885 7.013 2.345 6 3.204 6 h 9.592 a 1 1 0 0 1 0.753 1.659 l -4.796 5.48 a 1 1 0 0 1 -1.506 0 z M 11 6 L 11 3 A 1 1 0 0 0 10 2 L 6 2 A 1 1 0 0 0 5 3 L 5 6 Z"
            />
          </svg>
          <p
            style="position: absolute; color: #20fbfd; left: 25%;  font-size: 0.55vw; top: -30%;"
          >
            GND
          </p>
          <p
            style="position: absolute; color: #20fbfd; left: 65%;  font-size: 0.55vw; top: -30%;"
          >
            TDRS
          </p>
        </div>
      </div>
      <div
        style="position: absolute; border: 0px solid white; top: 0%; right: 60px; width: 5%; height: 100%;"
      >
        <svg
          style="position: absolute; top: 25%; left: 0%;"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#20fbfd"
          class="bi bi-disc"
          viewBox="0 0 16 16"
        >
          <path
            d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
          />
          <path
            d="M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM8 4a4 4 0 0 0-4 4 .5.5 0 0 1-1 0 5 5 0 0 1 5-5 .5.5 0 0 1 0 1zm4.5 3.5a.5.5 0 0 1 .5.5 5 5 0 0 1-5 5 .5.5 0 0 1 0-1 4 4 0 0 0 4-4 .5.5 0 0 1 .5-.5z"
          />
        </svg>
        <p
          style="position: absolute; color: rgba(255,255,255,0.5); left: 35%;  font-size: 0.55vw; top: 10%;"
        >
          ISS
        </p>
        <div
          style="position: absolute; border: 0px solid white; top: 0%; right: 0%; width: 25%; height: 50%;"
        >
          <svg
            style="position: absolute; top: 25%; left: 0%;"
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="8"
            fill="#ffffff"
            class="bi bi-camera-video-fill"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5z"
            />
          </svg>
        </div>
        <div
          style="position: absolute; border: 0px solid white; top: 50%; right: 0%; width: 25%; height: 50%;"
        >
          <svg
            style="position: absolute; top: 25%; left: 0%;"
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="8"
            fill="#ffffff"
            class="bi bi-camera-video-fill"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M 7.247 13.14 L 2.451 7.658 C 1.885 7.013 2.345 6 3.204 6 h 9.592 a 1 1 0 0 1 0.753 1.659 l -4.796 5.48 a 1 1 0 0 1 -1.506 0 z M 11 6 L 11 3 A 1 1 0 0 0 10 2 L 6 2 A 1 1 0 0 0 5 3 L 5 6 Z"
            />
          </svg>
        </div>
      </div>
      <p
          style="position: absolute; color: white; right: 0px;  font-size: 0.5vw; top: 5%;"
        >
          79/1450122
        </p>
    </nav>
  </div>
</template>
<script>
// import { isObjectMember } from '@babel/types'
// import { useRouter } from 'vue-router';
import Start from './views/Start.vue'
import gsap from 'gsap'

export default {

  inject: ['GStore'],
  data() {
    return {
      activePanel: [false, false, false, false, false],
      loading: true
    }
  },
  components: {
    Start
  },
  mounted() {
    // setTimeout(() => {
    //             this.loading = false
    //             const tl = gsap.timeline({  paused: true, defaults: { duration: 3 }})
    //             tl.to("#divtest", { opacity: 0 })
    //         }, 7000)
    // console.log(this.$refs.secondPanel.offsetLeft)
    
    // const zeroSS = sessionStorage.length
  if(sessionStorage.length !== 0){
    this.loading = false
  }
  this.startTransition()
       
    let str = sessionStorage.getItem('Visit')
    if (str === undefined || str === null) {

      const winloc = window.location.pathname
      switch (winloc) {
        case '/first':
          str = '0'
          break
        case '/second':
          str = '1'
          break
        case '/third':
          str = '2'
          break
        case '/fourth':
          str = '3'
          break
        case '/fifth':
          str = '4'
          break
        case '/':
          str = '0'
          break
      }
    }
    this.checkPanelReload(str)
    // this.$refs.marker.style.left = this.$refs.firstPanel.offsetLeft - 2 + 'px'
  },
  methods: {
    updateActivePanel(number) {
      for (var i = 0; i < this.activePanel.length; i++) {
        this.activePanel[i] = false
      }
      this.activePanel[number] = true
    },
    startTransition(){
       gsap.to('#divtest', {
          duration: 15,
          opacity: 0,
          autoAlpha: 0,
          onComplete: () => {this.loading = false}
        })
      gsap.to('#divtest2', {
          duration: 5,
          opacity: 0,
          autoAlpha: 0,
          attr: { transform: "scale(0.2, 0.2)" },
          onComplete: () => {this.loading = false}
        })
    },
    indicator(number) {
      switch (number) {
        case 0:
          this.$refs.marker.style.left =
            this.$refs.firstPanel.offsetLeft - 2 + 'px'
          this.updateActivePanel(number)
          sessionStorage.setItem('Visit', 0)
          break
        case 1:
          this.$refs.marker.style.left =
            this.$refs.secondPanel.offsetLeft - 2 + 'px'
          this.updateActivePanel(number)
          console.log('DONEENE')
          sessionStorage.setItem('Visit', 1)
          break
        case 2:
          this.$refs.marker.style.left =
            this.$refs.thirdPanel.offsetLeft - 2 + 'px'
          this.updateActivePanel(number)
          sessionStorage.setItem('Visit', 2)
          break
        case 3:
          this.$refs.marker.style.left =
            this.$refs.fourthPanel.offsetLeft - 2 + 'px'
          this.updateActivePanel(number)
          sessionStorage.setItem('Visit', 3)
          break
        case 4:
          this.$refs.marker.style.left =
            this.$refs.fifthPanel.offsetLeft - 2 + 'px'
          this.updateActivePanel(number)
          sessionStorage.setItem('Visit', 4)
          break
      }
    },
    checkPanelReload(str) {
      console.log(str)
      switch (str) {
        case '0':
          this.$refs.marker.style.left =
            this.$refs.firstPanel.offsetLeft - 2 + 'px'
          break
        case '1':
          this.$refs.marker.style.left =
            this.$refs.secondPanel.offsetLeft - 2 + 'px'
          console.log('DONEENE')
          break
        case '2':
          this.$refs.marker.style.left =
            this.$refs.thirdPanel.offsetLeft - 2 + 'px'
          break
        case '3':
          this.$refs.marker.style.left =
            this.$refs.fourthPanel.offsetLeft - 2 + 'px'
          break
        case '4':
          this.$refs.marker.style.left =
            this.$refs.fifthPanel.offsetLeft - 2 + 'px'
          break
      }
    }, 
    
  }
}
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: Montserrat, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: white;
  margin: 0;
}

router-link * {
  /* text-align: center; */
  /* position: absolute; */
  height: 100%;
  width: 100%;
  /* top: 0%;
  left: 100%;  */
  /* padding-left: 5%;
  margin-right: 50%; */
}

.main-views-svg {
  fill: white;
  height: max(1.5vw, 3.5vh);
  width: max(1.5vw, 3.5vh);
  /* top: 20%; */
  /* transform: translate(15%, 0); */
  /* position: absolute;
  height: 90%;
  width: 90%; */
  /* text-align: center; */
}

#svg-marker {
  position: absolute;
  height: 100%;
  width: 2.5%;
  background-image: linear-gradient(
    to bottom,
    rgba(255, 0, 0, 0),
    rgba(255, 255, 255, 1)
  );
  bottom: 0;
  /* animation: fadeIn 0.5s linear; */
  transition: all 0.7s ease-in;
  opacity: 1;
}

body {
  margin: 0;
  background-color: #111b52;
}

nav {
  padding-bottom: 0.125%;
  padding-left: 1.5%;
  left: 0;
  position: absolute;
  display: block;
  bottom: 0;
  width: 97%;
  overflow: hidden;
  /* height: 100%; */
}

@media screen and (max-width: 350px) {
  #marker {
    width: 20px;
  }
}

@media screen and (max-width: 650px) {
  #marker {
    width: 40px;
  }
  nav * {
    margin-right: 1px;
    margin-left: 1px;
  }
  .main-views-svg {
    height: 2.5vw;
    width: 2.5vw;
  }
}

nav * {
  font-weight: bold;
  color: grey;
  /* padding-left: 0%; */
  margin-right: 4.65px;
  margin-left: 4.65px;
  text-align: center;
}
nav *.router-link-exact-active {
  color: white;
}

/* #nav a:nth-child(1) ~ #marker{
  left: 10;
  opacity: 1;
  background-image: linear-gradient(to bottom, rgba(255,0,0,0), rgba(255,255,255,1)); 
} */

.marker {
  position: absolute;
  /* padding-left: 7%; */
  height: 5%;
  width: 50px;
  background-image: linear-gradient(
    to bottom,
    rgba(255, 0, 0, 0),
    rgba(255, 255, 255, 1)
  );
  bottom: 0;
  /* animation: fadeIn 0.5s linear; */
  transition: all 0.7s ease-in;

  /* left: 37px; */
  /* left: 41.75%; */
  /* z-index: -3; */
  /*
  25
  69
  112
  155
  199
  */
}

#panelButton {
  /* width: 4.35%; */
  border: none;
  background: transparent;
}

h4 {
  font-size: 20px;
}

@keyframes fadeIn {
  from {
    height: 0%;
  }
  to {
    height: 5%;
  }
}

#flashMessage {
  animation-name: yellowfade;
  animation-duration: 3s;
}



</style>
