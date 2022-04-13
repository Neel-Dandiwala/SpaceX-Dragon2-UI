<template>
    <div class="back-boxClass" id="back-box">
        <div style="" id="nebula" ref="startcanvas"></div>
    </div>
</template>

<script>
import * as THREE from 'three'
import gsap from 'gsap'

export default {
  name: 'Start',
  props: [],
  components: {},
  data() {
    return {
    
    }
  },
  beforeMount() {
    const textureLoader = new THREE.TextureLoader()
    this.nebulaTexture = textureLoader.load(require('../assets/nebula.jpg'))
    this.nebulaTexture.wrapT = THREE.RepeatWrapping
    this.nebulaTexture.wrapS = THREE.RepeatWrapping
  },
  created() {
    const textureLoader = new THREE.TextureLoader()
    this.clock = new THREE.Clock()
    this.startParameters = {
      moveTo: [0, 0, 200, -200],
      lookAt: [0, 0, 0],
      ready: false,
      ease: 12,
      cycle: 0.0002,
      normal: 0.0005,
      slow: 0.0005,
      scale: 1,
      speed: 10,
      upRatio: 1.06,
      upScale: 1.06,
      downRatio: 1.85,
      downScale: 1.85
    }

    this.startSizes = {
      width: window.innerWidth * 0.999,
      height: window.innerHeight * 0.95
    }

    this.startScene = new THREE.Scene()

    this.startCamera = new THREE.PerspectiveCamera(
      60,
      this.startSizes.width / this.startSizes.height,
      0.1,
      10000
    )

    this.startCamera.position.set(
      this.startParameters.moveTo[0],
      this.startParameters.moveTo[1],
      this.startParameters.moveTo[2]
    )
    this.startCamera.rotation.set(
      this.startParameters.lookAt[0],
      this.startParameters.lookAt[1],
      this.startParameters.lookAt[2]
    )
    this.startCamera.lookAt(this.startScene.position)

    this.group = new THREE.Group()
    this.group.position.z = this.startCamera.position.z
    // this.group.rotation.set(this.startParameters.lookAt[0], this.startParameters.lookAt[1], this.startParameters.lookAt[2])

    this.nebulaTexture = textureLoader.load(require('../assets/nebula.jpg'))
    this.nebulaTexture.wrapT = THREE.RepeatWrapping
    this.nebulaTexture.wrapS = THREE.RepeatWrapping

    const nebulaMaterial = new THREE.MeshLambertMaterial({
      color: 0xffffff,
      opacity: 0,
      map: this.nebulaTexture,
      // blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      transparent: false,
      depthTest: false
    })

    this.nebula = new THREE.Mesh(
      new THREE.CylinderGeometry(100, 5, 300, 20, 20, true),
      nebulaMaterial
    )
    this.nebula.position.set(0, 0, 0)
    this.nebula.rotation.x = Math.PI / 2

    this.pointLight = new THREE.PointLight(0xffffff, 4, 100)
    this.pointLight.position.set(0, 0, 0)
    this.changeColor()
    this.group.add(this.nebula)
    this.group.add(this.pointLight)

    const ambientLight = new THREE.AmbientLight(0x050505)

    const spotLight = new THREE.SpotLight(0xffffff, 1, 5000, 0.4, 0.5, 1)
    spotLight.position.set(
      this.startParameters.moveTo[0],
      this.startParameters.moveTo[1],
      this.startParameters.moveTo[2]
    )

    this.startScene.fog = new THREE.FogExp2(0x000000, 0.02)
    this.startScene.add(spotLight)
    this.startScene.add(ambientLight)
    this.startScene.add(this.startCamera)
    this.startScene.add(this.group)

    this.startRenderer = new THREE.WebGLRenderer({ antialias: true })
    this.startRenderer.setSize(this.startSizes.width, this.startSizes.height)
    this.startRenderer.setClearColor(0x000000)
    this.startRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    // this.startRenderer.outputEncoding = THREE.sRGBEncoding
    // this.startRenderer.autoClear = false
  },

  mounted() {
    console.log(this.startScene)
    this.$refs.startcanvas.appendChild(this.startRenderer.domElement)
    this.startAnimate()

    console.log(this.startCamera.position)
    window.addEventListener('resize', this.resizeScreen)
  },

  beforeUnmount() {
    // this.disposeHierarchy(this.scene, this.disposeNode)
    // this.disposeHierarchy(this.renderer, this.disposeNode)
    this.startScene = null
    this.startRenderer.dispose()
  },
  methods: {
    startAnimate() {
      //   const delta = this.clock.getDelta()
      //   const elapsedTime = this.clock.getElapsedTime()

      this.startRenderer.render(this.startScene, this.startCamera)
      //    console.log(this.startCamera)

      this.staticNebula()
    // this.cameraWander()
    //   this.startNebula()

      requestAnimationFrame(this.startAnimate)

      //   this.startComposer.render()
    },
    resizeScreen(e) {
      this.startSizes.width = e.target.innerWidth * 0.999
      this.startSizes.height = e.target.innerHeight * 0.95

      this.startCamera.aspect = this.startSizes.width / this.startSizes.height
      this.startCamera.updateProjectionMatrix()

      this.startRenderer.setSize(this.startSizes.width, this.startSizes.height)
      this.startRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    },
    changeColor() {
      var color = new THREE.Color()
      color.setHSL(Math.random(), 1, 0.5)
      console.log(color)
      this.pointLight.color = color
    },
    cameraWander() {
      gsap.to(this.startCamera.position, {
          duration: 5,
          z: 10,
        })
    },
    
    startNebula() {
           
        this.startParameters.slow =
          this.startParameters.slow >= this.startParameters.speed
            ? this.startParameters.speed
            : this.startParameters.slow * this.startParameters.upRatio
        this.startParameters.scale =
          this.startParameters.scale <= 0.1
            ? 0.1
            : this.startParameters.scale / this.startParameters.upScale

        if (this.nebulaTexture) {
          this.nebulaTexture.offset.y -=
            this.startParameters.normla * this.startParameters.slow
          this.nebulaTexture.needsUpdate = true
        }

        this.group.scale.set(
          this.startParameters.scale,
          this.startParameters.scale,
          1
        )

        this.cameraWander()
        return
      

    },
    staticNebula() {
      this.group.rotation.z += 0.01
      setTimeout(()=> { this.startNebula() }, 500)
    
    }
  },
  beforeRouteUpdate() {},
  computed: {}
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

#nebula {
  /* height: 100%; */
  /* width: 100%; */
  /* border-radius: 30px; */
  top: 47.5%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  /* overflow: hidden; */
  z-index: 0;
  box-sizing: border-box;
  border-radius: 0 0 30px 30px;
  border: 1px solid white;
}


#back-box {
  overflow: hidden;
  background-color: #020738;
  height: 95vh;
  width: 100%;
  bottom: 30px;
  border-radius: 0 0 30px 30px;
  box-sizing: border-box;
  border-bottom: 0.5px solid white;
  border-left: 1px solid white;
  border-right: 1px solid white;
}

.back-boxClass {
    overflow: hidden;
}

body {
  display: block;
  margin: 0;
  background-color: #111b52;
}
</style>
