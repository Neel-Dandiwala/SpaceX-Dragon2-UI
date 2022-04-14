<template>
  <div id="inner-screen">
    <p id="title">VIDEO SETTINGS</p>
    <div class="camera-box">
      <div
        style="background: black; background-position: center; position: absolute; height:100%; width:100%; text-align: center; color: white;"
      >
        <p>
          Select a camera from the left panel. <br />
          Please give access to your webcam for the front camera option.
        </p>
      </div>
    </div>
    <div v-if="webcamOn" class="webcam-box">
      <video ref="webcam" :width="650" :height="487.5" autoplay></video>
    </div>
    <div class="camera-box">
      <div v-if="webcamOn" id="front-cam"></div>
      <div v-if="active[0]" id="rear-cam"></div>
      <div v-if="active[1]" id="left-cam"></div>
      <div v-if="active[2]" id="right-cam"></div>
    </div>
    <div class="column" id="C2" style="left: 2.5%;">
      <p style=" top: 5%; right: -20%;">Camera</p>
      <button
        v-bind:class="[webcamOn ? 'cameraOn' : 'cameraOff']"
        @click="toggleCamera"
        style="border-top: 1px solid white"
        type="submit"
      >
        Front
        <div id="hr" />
      </button>
      <button
        v-bind:class="[active[0] ? 'cameraOn' : 'cameraOff']"
        @click="toggleClick(0)"
        type="submit"
      >
        Rear
        <div id="hr" />
      </button>
      <button
        v-bind:class="[active[1] ? 'cameraOn' : 'cameraOff']"
        @click="toggleClick(1)"
        type="submit"
      >
        Left
        <div id="hr" />
      </button>
      <button
        v-bind:class="[active[2] ? 'cameraOn' : 'cameraOff']"
        @click="toggleClick(2)"
        style="border-bottom: 1px solid white"
        type="submit"
      >
        Right
      </button>
    </div>
    <div class="column" id="C3" style="left: 82.5%;">
      <p style="top: 5%; left: -12.5%;">Resolution</p>
      <button
        id="resolution-button"
        @click="toggleResolution(0)"
        style="border-top: 1px solid white"
        type="submit"
      >
        <div
          v-bind:class="[resolution[0] ? 'resolutionOn' : 'resolutionOff']"
          id="light"
        />
        <div id="hr" />
      </button>
      <button id="resolution-button" @click="toggleResolution(1)" type="submit">
        <div
          v-bind:class="[resolution[1] ? 'resolutionOn' : 'resolutionOff']"
          id="light"
        />
        <div id="hr" />
      </button>
      <button id="resolution-button" @click="toggleResolution(2)" type="submit">
        <div
          v-bind:class="[resolution[2] ? 'resolutionOn' : 'resolutionOff']"
          id="light"
        />
        <div id="hr" />
      </button>
      <button
        id="resolution-button"
        @click="toggleResolution(3)"
        style="border-bottom: 1px solid white"
        type="submit"
      >
        <div
          v-bind:class="[resolution[3] ? 'resolutionOn' : 'resolutionOff']"
          id="light"
        />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Video',
  props: [],
  data() {
    return {
      active: [false, false, false],
      resolution: [false, false, false, false],
      webcamOn: false
    }
  },
  mounted() {},
  methods: {
    toggleCamera() {
      if (this.webcamOn) {
        this.webcamOn = false
        this.destroyWebcam()
      } else {
        this.webcamOn = true
        this.createWebcam()
        for (var i = 0; i < this.active.length; i++) {
          this.active[i] = false
        }
      }
    },

    createWebcam() {
      const constraints = (window.constraints = {
        audio: false,
        video: true
      })

      navigator.mediaDevices
        .getUserMedia(constraints)
        .then(stream => {
          this.$refs.webcam.srcObject = stream
        })
        .catch(e => {
          alert('Browser does not support')
          console.log(e)
        })
    },

    destroyWebcam() {
      let tracks = this.$refs.webcam.srcObject.getTracks()
      tracks.forEach(track => {
        track.stop()
      })
    },

    toggleClick(index) {
      const booleanValue = this.active[index]
      
      if (!booleanValue) {
        for (var i = 0; i < this.active.length; i++) {
          this.active[i] = false
        }
        this.active[index] = true
        if (this.webcamOn) {
          this.webcamOn = false
          this.destroyWebcam()
        }
       
      } else {
        this.active[index] = false
      }
      
    },

    toggleResolution(index) {
      const booleanValue = this.resolution[index]
      
      if (!booleanValue) {
        for (var i = 0; i < this.resolution.length; i++) {
          this.resolution[i] = false
        }
        this.resolution[index] = true
        
      } else {
        this.resolution[index] = false
      }
     
    }
  }
}
</script>

<style scoped>
#inner-screen {
  overflow: hidden;
  position: absolute;
  background: #111b52;
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
.webcam-box,
.camera-box {
  top: 50%;
  left: 50%;
  /* bottom: 7em; */
  transform: translate(-50%, -50%);
  position: absolute;
  overflow: hidden;
}
.webcam-box {
}

.camera-box {
  top: 49.6125%;
  height: 487.5px;
  width: 979px;
  border: 1px solid white;
  /* mask-image: radial-gradient(80% 100% at 50% 50%, transparent, rgba(0, 0, 0, 1.0) 50% ); */
}

#front-cam {
  position: absolute;
  height: 100%;
  width: 100%;
  background-size: contain;
  background-image: url('../assets/video_bg.png');
}

#rear-cam {
  position: absolute;
  height: 100%;
  width: 100%;
  background-size: cover;
  background-image: url('../assets/rear_camera.jpg');
}

#left-cam {
  position: absolute;
  height: 100%;
  width: 100%;
  background-size: cover;
  background-image: url('../assets/left_camera.jpg');
}

#right-cam {
  position: absolute;
  height: 100%;
  width: 100%;
  background-size: cover;
  background-image: url('../assets/right_camera.jpg');
}

.column {
  position: absolute;
  height: 65%;
  width: 15%;
  top: 12.25%;
  left: 0%;
  text-align: center;
}

.column p {
  /* position: relative; */
  font-size: 1.5em;
  font-weight: 500;
}

button {
  width: 85%;
  height: 20%;
  overflow: hidden;
  text-align: center;
  /* border-top: 1px dashed green; */
}

.cameraOff {
  background-color: #020738;
  color: white;
}

.cameraOn {
  background-color: white;
  color: #020738;
}

.resolutionOff {
  background: rgba(255, 255, 255, 0.25);
}

.resolutionOn {
  background: white;
}

#resolution-button {
  background-color: #020738;
}

#C2 button {
  position: relative;
  border: none;
  border-left: 1px solid white;
  border-right: 1px solid white;
}
#C3 button {
  position: relative;
  border: none;
  border-left: 1px solid white;
  border-right: 1px solid white;
}

#light {
  height: 7.5%;
  width: 70%;
  border-radius: 2em 2em 2em 2em;
  position: relative;
  /* background:  white; */
  z-index: 2;
  top: 0%;
  left: 50%;
  /* bottom: 7em; */
  transform: translate(-50%, -50%);
}

#hr {
  position: relative;
  /* left: 50%; */
  top: 40.6%;
  height: 0.125%;
  border: none;
  background-color: white;
  color: white;
  padding: 0;
  z-index: 1;
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
</style>
