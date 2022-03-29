<template>
  <div ref="earthWrapper" id="scroll-earth-wrapper">
    <div
      id="scroll-earth"
      ref="scrollEarth"
      :style="{ transform: transformValue }"
    ></div>
    <button style="position: absolute; top: 0;" type="submit" @click="zoomIn">
      Zoom In
    </button>
    <button
      style="position: absolute; top: 0; left: 10%;"
      type="submit"
      @click="zoomOut"
    >
      Zoom Out
    </button>
    <button
      style="position: absolute; top: 0; left: 20%;"
      type="submit"
      @click="goRight"
    >
      Go Right
    </button>
    <button
      style="position: absolute; top: 0; left: 30%;"
      type="submit"
      @click="goLeft"
    >
      Go Left
    </button>
    <button
      style="position: absolute; top: 0; left: 40%;"
      type="submit"
      @click="goUp"
    >
      Go Up
    </button>
    <button
      style="position: absolute; top: 0; left: 50%;"
      type="submit"
      @click="goDown"
    >
      Go Down
    </button>
  </div>
</template>

<script>
export default {
  name: 'NavEarth',
  props: [],
  data() {
    return {
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
      (this.sizerX * 1.25 - this.sizerX * 1) / 2 + ((this.sizerX * 2 - this.sizerX * 1.75) / 6) * (-0.25),
      (this.sizerX * 1.5 - this.sizerX * 1.25) / 2 + ((this.sizerX * 2 - this.sizerX * 1.75) / 6) * 1,
      (this.sizerX * 1.75 - this.sizerX * 1.5) / 2 + ((this.sizerX * 2 - this.sizerX * 1.75) / 6) * 2,
      (this.sizerX * 2 - this.sizerX * 1.75) / 2 + ((this.sizerX * 2 - this.sizerX * 1.75) / 6) * 3
    ]
    this.YGoal = [
      0,
      (this.sizerY * 1.25 - this.sizerY * 1) / 2 + ((this.sizerY * 2 - this.sizerY * 1.75) / 6) * (-0.25),
      (this.sizerY * 1.5 - this.sizerY * 1.25) / 2 + ((this.sizerY * 2 - this.sizerY * 1.75) / 6) * 1,
      (this.sizerY * 1.75 - this.sizerY * 1.5) / 2 + ((this.sizerY * 2 - this.sizerY * 1.75) / 6) * 2,
      (this.sizerY * 2 - this.sizerY * 1.75) / 2 + ((this.sizerY * 2 - this.sizerY * 1.75) / 6) * 3
    ]
    // console.log(this.transformer)
  },
  methods: {
    updateZoom(){

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
      // eslint-disable-next-line no-unused-vars
      var navIndicator = this.navLeft < this.navRight ? -1 : 1
      // eslint-disable-next-line no-unused-vars
      var stepsIndicator = this.leftSteps < this.rightSteps ? this.rightSteps : this.leftSteps
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
      this.navLeft = (this.XGoal[this.selectedZoom]) - this.leftSteps * 10
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
  border: 1px solid tomato;
  /* z-index: -1; */
}

#scroll-earth {
  background-image: url(http://localhost:8080/earth_atmos_2048.jpg);
  position: absolute;
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  background-size: cover;
  top: 0;
  right: 0;
  transition: all 1s;
  background-repeat: repeat-x;
  overflow: hidden;
}

@keyframes move {
  from {
    transform: translate(0%);
  }
  to {
    transform: translateX(100%);
  }
}

.event-link {
  color: #2c3e50;
  text-decoration: none;
}
</style>
