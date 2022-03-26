<template>
  <div id="back-box">
    <div id="top-menu">
      <div id="top-left-square">
        <svg width="25" height="25" viewBox="0 0 10 8">
          <rect rx="1" ry="1" width="10" height="8" class="topLeftSquare" />
        </svg>
      </div>
    </div>
    <div id="side-menu"></div>
    <div id="side-panel">
      <div id="left-arrow">
        <svg width="30" height="30">
          <defs>
            <marker
              id="arrow"
              viewBox="0 -5 10 10"
              refX="5"
              refY="0"
              markerWidth="4"
              markerHeight="4"
              orient="auto"
            >
              <path class="arrows" d="M0,-5L7,0L0,5"></path>
            </marker>
          </defs>
          <line
            class="arrows"
            x1="27"
            y1="15"
            x2="7"
            y2="15"
            stroke-width="4"
            marker-end="url(#arrow)"
          ></line>
        </svg>
      </div>
      <div id="right-arrow">
        <svg width="30" height="30">
          <defs>
            <marker
              id="arrow"
              viewBox="0 -5 10 10"
              refX="5"
              refY="0"
              markerWidth="4"
              markerHeight="4"
              orient="auto"
            >
              <path class="arrows" d="M0,-5L7,0L0,5"></path>
            </marker>
          </defs>
          <line
            class="arrows"
            x1="3"
            y1="15"
            x2="23"
            y2="15"
            stroke-width="4"
            marker-end="url(#arrow)"
          ></line>
        </svg>
      </div>
    </div>
    <div id="earth" ref="canvas1"></div>
  </div>
</template>

<script>
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

export default {
  name: 'About',
  props: [],
  components: {},
  data() {
    return {}
  },
  created() {
    const textureLoader = new THREE.TextureLoader()
    // eslint-disable-next-line no-unused-vars
    const gltfLoader = new GLTFLoader()
    this.earthSizes = {
      small: 300,
      medium: 400,
      large: 500
    }
    this.size =
      (window.innerWidth <= 1200 && window.innerWidth > 850) ||
      (window.innerHeight <= 650 && window.innerHeight > 450)
        ? this.earthSizes.medium
        : window.innerWidth < 850 || window.innerHeight < 450
        ? Math.min(
            this.earthSizes.small,
            Math.min(window.innerWidth, window.innerHeight)
          )
        : this.earthSizes.large
    this.camera = new THREE.PerspectiveCamera(
      65,
      this.size / this.size,
      0.1,
      100
    )
    this.camera.position.set(70, 40, 80)
    this.scene = new THREE.Scene()
    this.scene.add(this.camera)
    this.ambientLight = new THREE.AmbientLight(0x050505)
    this.sunLight = new THREE.DirectionalLight(0xffffff, 4.0)
    this.sunLight.position.set(2, 0, 10).normalize()
    this.scene.add(this.ambientLight)
    this.scene.add(this.sunLight)

    const earthMaterial = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      shininess: 20
    })
    textureLoader.load(
      require('../assets/earth/earth_atmos_2048.jpg'),
      function(texture) {
        earthMaterial.map = texture
        earthMaterial.map.encoding = THREE.sRGBEncoding
        earthMaterial.needsUpdate = true
      }
    )
    textureLoader.load(
      require('../assets/earth/earth_normal_2048.jpg'),
      function(texture) {
        earthMaterial.normalMap = texture
        earthMaterial.needsUpdate = true
      }
    )
    textureLoader.load(
      require('../assets/earth/earth_specular_2048.jpg'),
      function(texture) {
        earthMaterial.specularMap = texture
        earthMaterial.specularMap.encoding = THREE.sRGBEncoding
        earthMaterial.needsUpdate = true
      }
    )

    const earthGeometry = new THREE.SphereBufferGeometry(60, 30, 24)

    const earth = new THREE.Mesh(earthGeometry, earthMaterial)
    this.scene.add(earth)

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    this.renderer.setSize(this.size, this.size)
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    this.renderer.outputEncoding = THREE.sRGBEncoding
    this.renderer.autoClear = false
    this.controls = new OrbitControls(this.camera, this.renderer.domElement)
    this.controls.enableDamping = true
  },

  mounted() {
    console.log(this.scene)
    this.$refs.canvas1.appendChild(this.renderer.domElement)
    this.animate()
    window.addEventListener('resize', this.resizeScreen)
  },

  methods: {
    animate() {
      requestAnimationFrame(this.animate)
      this.renderer.render(this.scene, this.camera)
      this.sunLight.intensity = 4.0
      this.controls.update()
    },
    resizeScreen(e) {
      this.size =
        (e.target.innerWidth <= 1200 && e.target.innerWidth > 850) ||
        (e.target.innerHeight <= 650 && e.target.innerHeight > 450)
          ? this.earthSizes.medium
          : e.target.innerWidth < 850 || e.target.innerHeight < 450
          ? Math.min(
              this.earthSizes.small,
              Math.min(e.target.innerWidth, e.target.innerHeight)
            )
          : this.earthSizes.large

      this.camera.aspect = this.size / this.size
      this.camera.updateProjectionMatrix()

      this.renderer.setSize(this.size, this.size)
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    }
  },
  beforeRouteUpdate() {},
  computed: {}
}
</script>

<style scoped>
svg {
  /* border: 1px solid tomato; */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  padding-bottom: 0;
}
.arrows, .topLeftSquare {
  fill: white;
  stroke: white;
  
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

#earth {
  top: 51.5%;
  left: 50%;
  position: absolute;
  transform: translate(10%, -50%);
  overflow: hidden;
}

#side-panel {
  position: absolute;
  /* flex:1; */
  top: calc(100vh * 0.0952);
  height: calc(100% - min(100px, calc(100% * 0.1)));
  /* border-radius: 0 0 0 30px; */
  width: 35%;
  left: min(100px, calc(100vw * 0.055));
  border: 1px solid white;
  box-sizing: border-box;
}

#left-arrow {
  position: absolute;
  border: 1px solid white;
  text-align: center;
  width: 10%;
  height: 0;
  padding-bottom: 10%;
  top: 1.5em;
  left: 1.5em;
  overflow: hidden;
  border-radius: 10%;
}

#right-arrow {
  position: absolute;
  border: 1px solid white;
  text-align: center;
  width: 10%;
  height: 0;
  padding-bottom: 10%;
  top: 1.5em;
  left: 5.5em;
  overflow: hidden;
  border-radius: 10%;
}

#top-menu {
  position: relative;
  top: 0;
  width: 100%;
  height: min(100px, calc(100% * 0.1));
  border: 1px solid white;
  box-sizing: border-box;
  overflow: hidden;
}

#top-left-square {
  position: absolute;
  border: 1px solid white;
  text-align: center;
  /* width: 4%; */
  /* height: 1; */
  padding: 1.5%;
  top: 0.5em;
  left: 0.5em;
  bottom: 0.5em;
  overflow: hidden;
  border-radius: 10%;
  /* box-sizing: border-box; */
}

#side-menu {
  position: relative;
  flex: 1;
  /* top: calc(100vh * 0.1); */
  height: calc(100% - min(100px, calc(100% * 0.1)));
  border-radius: 0 0 0 30px;
  width: min(100px, calc(100vw * 0.055));
  border: 1px solid white;
  box-sizing: border-box;
}
</style>
