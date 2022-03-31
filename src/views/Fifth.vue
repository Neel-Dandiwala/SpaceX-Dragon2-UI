<template>
  <div id="back-box">
    <!-- <svg class="hud-svg">
      <defs>
        <clipPath id="clipMask">
          <path
            d="M 607 293.5 l 14.7 -9.2 c -18.1 -132.8 -123.2 -237.9 -256 -256 L 356.5 43 h -63 l -9.3 -14.7 c -132.8 18.1 -237.9 123.2 -256 256 l 14.7 9.2 v 63 l -14.7 9.2 c 18.1 132.8 123.2 237.9 256 256 l 9.3 -14.7 h 63 l 9.3 14.7 c 132.8 -18.1 237.9 -123.2 256 -256 l -14.7 -9.2 V 293.5 Z"
          />
        </clipPath>
      </defs>
      <rect x="0" y="0" rx="20" width="98%" height="75%" 
        style="stroke: white; fill: black"
      />
    </svg> -->
    <div id="white-border"></div>
    <keep-alive>
       <component :is="currentComponent"></component>
      </keep-alive>
    <div id="buttons">
      <button @click="changeComponent(`audio`)" style="left: 44.5%" type="submit"><img id="options-img" src="audio.png" />Audio</button>
      <button @click="changeComponent(`cabin`)" style="left: 48.25%" type="submit"><img id="options-img" src="egg.png" />Cabin</button>
      <button @click="changeComponent(`video`)" style="left: 52%" type="submit"><img id="options-img" src="video.png" />Video</button>
    </div>
  </div>
</template>

<script>
import Audio from '../components/Audio.vue'
import Cabin from '../components/Cabin.vue'
import Video from '../components/Video.vue'
// let View02 = {}
// let View03 = {}
export default {
  name: 'Fifth',
  data() {
    return {
      currentComponent: 'audio'
    }
  },
  methods: {
    changeComponent(name){
      this.currentComponent = name
    }
  },
  components: {
    'audio': Audio,
    'cabin': Cabin,
    'video': Video
  },
  mounted() {
    // console.log(View03 + View02)
  }
}
</script>

<style scoped>
svg {
  /* border: 1px solid tomato; */
  top: 0.9em;
  left: 0.9em;
  /* bottom: 7em; */
  /* transform: translate(-50%, -50%); */
  position: relative;
  padding-bottom: 0;
  z-index: 2;
}

#back-box {
  position: absolute;
  background-color: #020738;
  height: 95vh;
  width: 100%;
  bottom: 30px;
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

#white-border {
  position: absolute;
  background-color: #ffffff;
  height: 92vh;
  width: 98.5vw;
  bottom: 30px;
  top: 50%;
  left: 50%;
  /* bottom: 7em; */
  transform: translate(-50%, -50%);
  border-radius: 25px 25px 25px 25px;
  box-sizing: border-box;
  clip-path: polygon(0 0, 0 100%, 42.5% 100%, 45% 95%, 55% 95%, 57.5% 100%, 100% 100%, 100% 0)
}

button {
  position: absolute;
  top: 94%;
  height: 3%;
  width: 3.5%;
  font-size: 60%;
  color: white;
  background: none;
  border: none;
}

#options-img {
  filter: invert(99%) sepia(0%) saturate(2%) hue-rotate(312deg) brightness(108%) contrast(101%);
  height: 95%;
}

</style>
