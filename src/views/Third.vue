<template>
 <div ref="indicatorThird" style="transition: all 0.5s ease-in-out;" id="indicatorThird">
      <div style="position: absolute; height: 0.75%; width: 2.5%; top: 94.5vh; left: 47%; z-index: 9; background: white; border-radius: 10%; transition: all 0.5s ease-in-out;"></div>
      <div style="position: absolute; height: 4%; width: 2.5%; top: 90.5vh; left: 47%; z-index: 9; background: linear-gradient(to top, rgba(255,255,255, 0.25), transparent); transition: all 0.5s ease-in-out;"></div>
    </div>
  <div id="back-box">
    <div id="white-border"></div>
    <keep-alive>
       <component :is="currentComponent"></component>
      </keep-alive>
    <div id="buttons">
      <button @click="changeComponent(`overview`)" style="left: 46.5%" type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-volume-up-fill" viewBox="0 0 16 16">
  <path d="M 14 10 a 6 6 0 0 1 -12 0 C 2 5.686 6 0 8 0 s 6 5.686 6 10 z M 13.6 12 Q 16 13.1 15.5 16 Q 13 14.6 10.5 15.5 M 2.4 12 Q 0 13 0.5 16 Q 3 14.5 5.5 15.5 Q 3.1 14.2 2.4 12 M 8 5 A 1 1 0 0 0 8 10 A 1 1 0 0 0 8 5"/>
</svg><p>Overview</p></button>
      <button @click="changeComponent(`mech`)" style="left: 50.25%" type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-egg-fill" viewBox="0 0 16 16">
  <path d="M 8.515 1.019 A 7 7 0 0 0 8 1 V 0 a 8 8 0 0 1 0.589 0.022 l -0.074 0.997 z m 2.004 0.45 a 7.003 7.003 0 0 0 -0.985 -0.299 l 0.219 -0.976 c 0.383 0.086 0.76 0.2 1.126 0.342 l -0.36 0.933 z m 1.37 0.71 a 7.01 7.01 0 0 0 -0.439 -0.27 l 0.493 -0.87 a 8.025 8.025 0 0 1 0.979 0.654 l -0.615 0.789 a 6.996 6.996 0 0 0 -0.418 -0.302 z m 1.834 1.79 a 6.99 6.99 0 0 0 -0.653 -0.796 l 0.724 -0.69 c 0.27 0.285 0.52 0.59 0.747 0.91 l -0.818 0.576 z m 0.744 1.352 a 7.08 7.08 0 0 0 -0.214 -0.468 l 0.893 -0.45 a 7.976 7.976 0 0 1 0.45 1.088 l -0.95 0.313 a 7.023 7.023 0 0 0 -0.179 -0.483 z m 0.53 2.507 a 6.991 6.991 0 0 0 -0.1 -1.025 l 0.985 -0.17 c 0.067 0.386 0.106 0.778 0.116 1.17 l -1 0.025 z m -0.131 1.538 c 0.033 -0.17 0.06 -0.339 0.081 -0.51 l 0.993 0.123 a 7.957 7.957 0 0 1 -0.23 1.155 l -0.964 -0.267 c 0.046 -0.165 0.086 -0.332 0.12 -0.501 z m -0.952 2.379 c 0.184 -0.29 0.346 -0.594 0.486 -0.908 l 0.914 0.405 c -0.16 0.36 -0.345 0.706 -0.555 1.038 l -0.845 -0.535 z m -0.964 1.205 c 0.122 -0.122 0.239 -0.248 0.35 -0.378 l 0.758 0.653 a 8.073 8.073 0 0 1 -0.401 0.432 l -0.707 -0.707 z M 8 1 a 7 7 0 1 0 4.95 11.95 l 0.707 0.707 A 8.001 8.001 0 1 1 8 0 v 1 z M 8 5 A 1 1 0 0 0 8 11 A 1 1 0 0 0 8 5"/>
</svg><p>Mech</p></button>
    </div>
  </div>
</template>

<script>
import Overview from '../components/Overview.vue'
import Mech from '../components/Mech.vue'

export default {
  name: 'Third',
  data() {
    return {
      currentComponent: 'overview'
    }
  },
  methods: {
    changeComponent(name){
      this.currentComponent = name
      if(name === 'overview') {
        this.$refs.indicatorThird.children[0].style.left = 47+`%`
        this.$refs.indicatorThird.children[1].style.left = 47+`%`
      }
      if(name === 'mech') {
        this.$refs.indicatorThird.children[0].style.left = 50.75+`%`
        this.$refs.indicatorThird.children[1].style.left = 50.75+`%`
      }

    }
  },
  components: {
    'overview': Overview,
    'mech': Mech,
    // 'video': Video
  },
  mounted() {
    // console.log(View03 + View02)
    // console.log(this.$refs.indicatorThird.children[0].style.left)
  }
}
</script>

<style scoped>
svg {
  /* border: 1px solid tomato; */
  top: 10%;
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

#white-border {
  position: absolute;
  background-color: #111b52;
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
  height: 6%;
  width: 3.5%;
  font-size: 60%;
  color: white;
  background: none;
  /* border: 1px solid red; */
  border: none;
}


</style>
