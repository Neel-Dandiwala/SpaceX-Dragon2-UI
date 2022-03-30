<template>
  <div id="inner-screen">
      <button type="submit" @click="toggleCamera">Click</button>
      <div v-if="cameraOn" class="webcam-box">
          <video ref="webcam" :width="650" :height="487.5" autoplay></video>
      </div>
      <div class="camera-box">
          <div id="camera-background"></div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Video',
  props: [],
  data() {
    return {
        cameraOn: false
    }
  },
  mounted() {
    
  },
  methods: {
    toggleCamera() {
        if(this.cameraOn) {
            this.cameraOn = false;
            this.destroyWebcam()
        } else {
            this.cameraOn = true;
            this.createWebcam()
        }
    },

    createWebcam() {
        const constraints = (window.constraints = {
            audio: false,
            video: true
        })

        navigator.mediaDevices.getUserMedia(constraints).then(stream => {
            this.$refs.webcam.srcObject = stream
        }).catch(e => {
            alert("Browser does not support")
            console.log(e)
        })
    },

    destroyWebcam() {
        let tracks = this.$refs.webcam.srcObject.getTracks()
        tracks.forEach(track => {
            track.stop()
        })
    }
  }
}
</script>

<style scoped>

#inner-screen {
  position: absolute;
  background: #111b52;
  height: 91.75vh;
  width: 98.325vw;
  bottom: 30px;
  top: 50%;
  left: 50%;
  /* bottom: 7em; */
  transform: translate(-50%, -50%);
  border-radius: 25px 25px 25px 25px;
  box-sizing: border-box;
  clip-path: polygon(0 0, 0 100%, 42.5% 100%, 45% 95%, 55% 95%, 57.5% 100%, 100% 100%, 100% 0)
}
.webcam-box, .camera-box {
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
    height: 74.5%;
    width: 65%;
    border: 1px solid white;
    mask-image: radial-gradient(80% 100% at 50% 50%, transparent, rgba(0, 0, 0, 1.0) 50% );
}

#camera-background {
    position: absolute;
    height:100%;
    width:100%;
    background-size: contain;
    background-image: url(http://localhost:8080/dragon_video.webp);
}

</style>
