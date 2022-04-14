<template>
  <div ref="earthWrapper" id="scroll-earth-wrapper">
    <div
      id="scroll-earth"
      ref="scrollEarth"
      :style="{ transform: transformValue }"
    ></div>
    <button v-bind:class="[toggle?'zoomInTrue':'zoomInFalse']" style="" type="submit" @click="zoomIn">
      <svg viewBox="0 0 4 4" width="30" height="15">   
          <path class="zooms" d="M0,2 L4,2 M2,0 L2,4"></path>
        </svg>
    </button>
    <button
    v-bind:class="[toggle?'zoomOutTrue':'zoomOutFalse']"
      style=""
      type="submit"
      @click="zoomOut"
    >
       <svg viewBox="0 0 4 4" width="30" height="15">   
          <path class="zooms" d="M0,2 L4,2"></path>
        </svg>
    </button>
    <button
      style="right: 7em; top: 7em;"
      type="submit"
      @click="toggle=!toggle"
    >
       <svg viewBox="0 0 4 4" width="15" height="15">   
          <path class="center-svg" v-bind:d="[toggle? 'M0,0 L4,0 4,4 0,4 Z' : 'M0,0 L1,0 1,1 0,1 Z M3,0 L4,0 4,1 3,1 Z M0,3 L1,3 1,4 0,4 Z M3,3 L4,3 4,4 3,4 Z']"></path>
        </svg>
    </button>
    <Transition name="hide-right">
      <button
      v-if="toggle"
      style="transition-delay: 0.6s; right: 2em; top: 7em; "
      type="submit"
      @click="goRight"
    >
      <svg viewBox="0 0 2 4" width="15" height="15">   
          <path class="arrows" d="M0,0 L2,2 0,4"></path>
        </svg>
    </button>
    </Transition>
    <Transition name="hide-left">
      <button
      v-if="toggle"
      style="transition-delay: 0.2s; right: 12em; top: 7em;"
      type="submit"
      @click="goLeft"
    >
         <svg viewBox="0 0 2 4" width="15" height="15">   
          <path class="arrows" d="M2,0 L0,2 2,4"></path>
        </svg>
    </button>
    </Transition>
    <Transition name="hide-up">
      <button
      v-if="toggle"
      style="transition-delay: 0.4s; right: 7em; top: 2em; "
      type="submit"
      @click="goUp"
    >
         <svg viewBox="0 0 4 2" width="15" height="15">   
          <path class="arrows" d="M0,2 L2,0 4,2"></path>
        </svg>
    </button>
    </Transition>
    <Transition name="hide-down">
      <button
      v-if="toggle"
      style="transition-delay: 0s; right: 7em; top: 12em; "
      type="submit"
      @click="goDown"
    >
       <svg viewBox="0 0 4 2" width="15" height="15">   
          <path class="arrows" d="M0,0 L2,2 4,0"></path>
        </svg>
      </button>
    </Transition>
  </div>
</template>

<script>
export default {
  name: 'NavEarth',
  props: [],
  data() {
    return {
     

      toggle: true,
      zoomArray: [1.0, 1.25, 1.5, 1.75, 2.0],
      zoomSub: [0, 0, 1, 2, 3],
      selectedZoom: 0,
      translateXValue: 0,
      translateYValue: 0,
      transformValue: `scale(1.0) translateX(0px)`,
      navLeft: 0,
      navRight: 0,
      navUp: 0,
      navDown: 0,
      leftSteps: 0,
      rightSteps: 0,
      upSteps: 0,
      downSteps: 0
    }
  },
  mounted() {
    // this.transformer = this.$refs.earthWrapper.children[0].scrollHeight
    this.scrollEarthRef = this.$refs.scrollEarth
    this.sizerX = this.scrollEarthRef.scrollWidth
    this.sizerY = this.scrollEarthRef.scrollHeight
    this.zoomMinus = this.zoomSub[this.selectedZoom]
    this.zoomValue = this.zoomArray[this.selectedZoom]
    this.XGoal = [
      0,
      // eslint-disable-next-line prettier/prettier
      (this.sizerX * 1.25 - this.sizerX * 1) / 2 + ((this.sizerX * 2 - this.sizerX * 1.75) / 6) * (-0),
      (this.sizerX * 1.5 - this.sizerX * 1.25) / 2 + ((this.sizerX * 2 - this.sizerX * 1.75) / 6) * 1,
      (this.sizerX * 1.75 - this.sizerX * 1.5) / 2 + ((this.sizerX * 2 - this.sizerX * 1.75) / 6) * 2,
      (this.sizerX * 2 - this.sizerX * 1.75) / 2 + ((this.sizerX * 2 - this.sizerX * 1.75) / 6) * 3
    ]
    this.YGoal = [
      0,
      // eslint-disable-next-line prettier/prettier
      (this.sizerY * 1.25 - this.sizerY * 1) / 2 + ((this.sizerY * 2 - this.sizerY * 1.75) / 6) * (-0),
      (this.sizerY * 1.5 - this.sizerY * 1.25) / 2 + ((this.sizerY * 2 - this.sizerY * 1.75) / 6) * 1,
      (this.sizerY * 1.75 - this.sizerY * 1.5) / 2 + ((this.sizerY * 2 - this.sizerY * 1.75) / 6) * 2,
      (this.sizerY * 2 - this.sizerY * 1.75) / 2 + ((this.sizerY * 2 - this.sizerY * 1.75) / 6) * 3
    ]
    // console.log(this.transformer)
  },
  methods: {
    enter(el){
      el.style.right = `8em`
      el.style.top = '8em'
    },


    zoomIn() {
      this.selectedZoom = Math.min(
        this.selectedZoom + 1,
        this.zoomArray.length - 1
      )
      console.log(this.selectedZoom)
      this.zoomValue = this.zoomArray[this.selectedZoom]
      this.zoomMinus = this.zoomSub[this.selectedZoom]
      this.transformValue =
        `scale(` +
        this.zoomArray[this.selectedZoom] +
        `) translate(` +
        this.translateXValue +
        `px, ` +
        this.translateYValue +
        `px)`
      this.navLeft = this.XGoal[this.selectedZoom] - this.leftSteps * 10
      this.navRight = this.XGoal[this.selectedZoom] - this.rightSteps * 10
      this.navUp = this.YGoal[this.selectedZoom] - this.upSteps * 10
      this.navDown = this.YGoal[this.selectedZoom] - this.downSteps * 10
      console.log(this.navLeft+'L')
      console.log(this.navRight+'R')
      console.log(this.navUp+'U')
      console.log(this.navDown+'D')
    },
    zoomOut() {
      this.selectedZoom = Math.max(this.selectedZoom - 1, 0)
      console.log(this.selectedZoom)
      this.zoomValue = this.zoomArray[this.selectedZoom]
      this.zoomMinus = this.zoomSub[this.selectedZoom]
      // eslint-disable-next-line prettier/prettier
      if(((this.XGoal[this.selectedZoom] / 2 ) < Math.min(this.navLeft , this.navRight)) && this.XGoal[this.selectedZoom] !== 0){
          console.log('X Okay for now')
      } else {
        //   this.translateXValue = (navIndicator * (10 * (stepsIndicator / 2)))
        this.translateXValue = 0
        this.rightSteps = 0
        this.leftSteps = 0
        this.navLeft = 0
        this.navRight = 0
      }
      // eslint-disable-next-line prettier/prettier
      if(((this.YGoal[this.selectedZoom] / 2 ) < Math.min(this.navUp , this.navDown)) && this.YGoal[this.selectedZoom] !== 0) {
        console.log('Y Okay for now')
      } else {
        this.translateYValue = 0
        this.upSteps = 0
        this.downSteps = 0
        this.navUp = 0
        this.navDown = 0
      }
      this.transformValue =
        `scale(` +
        this.zoomArray[this.selectedZoom] +
        `) translate(` +
        this.translateXValue +
        `px, ` +
        this.translateYValue +
        `px)`
      console.log(this.transformValue)
      this.navLeft = this.XGoal[this.selectedZoom] - this.leftSteps * 10
      this.navRight = (this.XGoal[this.selectedZoom]) - this.rightSteps * 10
      this.navUp = (this.YGoal[this.selectedZoom]) - this.upSteps * 10
      this.navDown = (this.YGoal[this.selectedZoom]) - this.downSteps * 10
      console.log(this.navLeft)
      console.log(this.navRight)
    },
    goLeft() {
      this.translateXValue = this.translateXValue + 10
      this.navLeft = this.navLeft - 10
      this.leftSteps = this.leftSteps + 1
      this.navRight = this.navRight + 10
      this.rightSteps = this.rightSteps - 1
      if (this.navLeft <= 0) {
        this.translateXValue = 0
        this.leftSteps = 0
        this.rightSteps = 0
        this.navRight = this.XGoal[this.selectedZoom] - this.rightSteps * 10
        this.navLeft = this.XGoal[this.selectedZoom] - this.leftSteps * 10
      }
      console.log(this.navLeft + ' Left')
      // console.log(this.translateXValue)
      this.transformValue =
        `scale(` +
        this.zoomArray[this.selectedZoom] +
        `) translate(` +
        this.translateXValue +
        `px, ` +
        this.translateYValue +
        `px)`
      // console.log(this.transformValue)
      // console.log(this.transformer)
    },
    goRight() {
      this.translateXValue = this.translateXValue - 10
      this.navLeft = this.navLeft + 10
      this.leftSteps = this.leftSteps - 1
      this.navRight = this.navRight - 10
      this.rightSteps = this.rightSteps + 1
      if (this.navRight <= 0) {
        this.translateXValue = 0
        this.leftSteps = 0
        this.rightSteps = 0
        this.navRight = this.XGoal[this.selectedZoom] - this.rightSteps * 10
        this.navLeft = this.XGoal[this.selectedZoom] - this.leftSteps * 10
      }
      console.log(this.navRight + ' Right')
      // console.log(this.translateXValue)
      this.transformValue =
        `scale(` +
        this.zoomArray[this.selectedZoom] +
        `) translate(` +
        this.translateXValue +
        `px, ` +
        this.translateYValue +
        `px)`
      // console.log(this.transformValue)
    },
    goUp() {
      this.translateYValue = this.translateYValue + 10
      this.navUp = this.navUp - 10
      this.upSteps = this.upSteps + 1
      this.navDown = this.navDown + 10
      this.downSteps = this.downSteps - 1
      if (this.navUp <= 0) {
        this.translateYValue = 0
        this.upSteps = 0
        this.downSteps = 0
        this.navDown = this.YGoal[this.selectedZoom] - this.downSteps * 10
        this.navUp = this.YGoal[this.selectedZoom] - this.upSteps * 10
      }
      console.log(this.translateYValue)
      this.transformValue =
        `scale(` +
        this.zoomArray[this.selectedZoom] +
        `) translate(` +
        this.translateXValue +
        `px, ` +
        this.translateYValue +
        `px)`
      console.log(this.transformValue)
    },
    goDown() {
      this.translateYValue = this.translateYValue - 10
       this.navUp = this.navUp + 10
      this.upSteps = this.upSteps - 1
      this.navDown = this.navDown - 10
      this.downSteps = this.downSteps + 1
      if (this.navDown <= 0) {
        this.translateYValue = 0
        this.upSteps = 0
        this.downSteps = 0
        this.navDown = this.YGoal[this.selectedZoom] - this.downSteps * 10
        this.navUp = this.YGoal[this.selectedZoom] - this.upSteps * 10
      }
      console.log(this.translateYValue)
      this.transformValue =
        `scale(` +
        this.zoomArray[this.selectedZoom] +
        `) translate(` +
        this.translateXValue +
        `px, ` +
        this.translateYValue +
        `px)`
      console.log(this.transformValue)
    }
  }
}
</script>

<style scoped>
#scroll-earth-wrapper {
  overflow: hidden;
  top: 10%;
  left: 40.5%;
  position: absolute;
  /* transform: translate(10%, -50%); */
  height: 90%;
  width: 60%;
  /* border: 1px solid tomato; */
  /* z-index: -1; */
}

#scroll-earth {
  background-image: url('../assets/earth_modified_map.jpg');
  position: absolute;
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  background-size: cover;
  background-position: center;
  top: 0;
  right: 0;
  transition: all 1s;
  background-repeat: repeat;
  /* overflow: hidden; */
}

button {
  position: absolute;
  border: 1px solid white;
  text-align: center;
  width: 6%;
  height: 0;
  text-align: center;
  padding-bottom: 6%;
  top: 1.5em;
  right: 0em;
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
.arrows, .zooms{
  fill: none;
  stroke: white;
  stroke-width: 1;
}
.white-svg {
  fill: white;
  stroke: white;
}

.hide-down-enter-active, .hide-up-enter-active, .hide-left-enter-active, .hide-right-enter-active {
  transition: all 0.5s ease-out;
}

.hide-down-leave-active, .hide-up-leave-active, .hide-left-leave-active, .hide-right-leave-active {
  transition: all 0.5s ease-in;
}

.hide-down-enter-from, .hide-down-leave-to {
  transform: translateY(-3em);
  opacity: 0;
}

.hide-up-enter-from, .hide-up-leave-to {
  transform: translateY(3em);
  opacity: 0;
}

.hide-left-enter-from, .hide-left-leave-to {
  transform: translateX(3em);
  opacity: 0;
}

.hide-right-enter-from, .hide-right-leave-to {
  transform: translateX(-3em);
  opacity: 0;
}

.zoomInTrue {
  right: 9em; 
  top: 17em;
  transition: all 0.5s linear 0s;
}

.zoomOutTrue {
  right: 4.5em; 
  top: 17em;
  transition: all 0.5s linear 0s;
}

.zoomInFalse {
  right: 12em; 
  top: 7em;
  transition: all 0.5s linear 0.7s;
}

.zoomOutFalse {
  right: 2em; 
  top: 7em; 
  transition: all 0.5s linear 0.7s;
}

.center-svg {
  fill: white;
  stroke: white;
  transition: all 0.8s linear;
}


</style>
