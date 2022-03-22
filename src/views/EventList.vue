<template>
  <body>
    <img id="hud-darken" src="../assets/hud-darken.png" />
    <div id="hud-ring">
      <img id="hud-white-outer" src="../assets/hud-ring.png" />
      <img id="hud-white-inner" src="../assets/hud-ring-inner.png" />
    </div>
    <svg viewBox="0 0 650 650" class="hud-svg">
      <defs>
        <clipPath id="clipMask">
          <path
            d="M 607 293.5 l 14.7 -9.2 c -18.1 -132.8 -123.2 -237.9 -256 -256 L 356.5 43 h -63 l -9.3 -14.7 c -132.8 18.1 -237.9 123.2 -256 256 l 14.7 9.2 v 63 l -14.7 9.2 c 18.1 132.8 123.2 237.9 256 256 l 9.3 -14.7 h 63 l 9.3 14.7 c 132.8 -18.1 237.9 -123.2 256 -256 l -14.7 -9.2 V 293.5 Z"
          />
        </clipPath>
      </defs>
      <g clip-path="url(#clipMask)">
        <circle
          cx="325"
          cy="350"
          r="175"
          transform="matrix(-1, 0, 0, -1, 650, 650)"
          style="stroke-dasharray:102.0 1000.0; stroke-dashoffset: -20.0"
        />
      </g>
    </svg>

    <div style="float:right;" id="canvas" ref="canvas1"></div>
    <div id="navball" ref="canvas2"></div>
    <svg id="circle-svg" viewBox="0 0 100 100">
      <circle
        cx="50"
        cy="50"
        r="8"
        stroke="white"
        stroke-width="0.5"
        fill="black"
      />
    </svg>
  </body>
</template>

<script>
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
export default {
  name: 'EventList',
  props: [],
  components: {},
  data() {
    return {}
  },
  created() {
    const textureLoader = new THREE.TextureLoader()
    // eslint-disable-next-line no-unused-vars
    const gltfLoader = new GLTFLoader()
    this.navballTexture = textureLoader.load(require('../assets/navball.png'))

    this.sizes = {
      width: window.innerWidth,
      height: window.innerHeight
    }
    this.camera = new THREE.PerspectiveCamera(
      75,
      this.sizes.width / this.sizes.height,
      0.1,
      100
    )
    this.camera.position.set(4, 2, 5)
    this.scene = new THREE.Scene()
    this.scene.add(this.camera)
    this.ambientLight = new THREE.AmbientLight('#b9d5ff', 0.12)
    this.moonLight = new THREE.DirectionalLight('#b9d5ff', 0.52)
    this.scene.add(this.ambientLight)
    this.scene.add(this.moonLight)
    this.cube = new THREE.Mesh(
      new THREE.BoxBufferGeometry(1, 1, 1),
      new THREE.MeshStandardMaterial({ color: '#ff0000' })
    )
    this.scene.add(this.cube)
    // gltfLoader.load(
    //   './ISS_stationary.glb',
    //   gltf => {
    //     console.log(gltf.scene)
    //     const iss = gltf.scene
    //     iss.scale.set(0.025, 0.025, 0.025)
    //     this.scene.add(iss)
    //   },
    //   progress => {
    //     console.log('ISS in progress' + progress)
    //   },
    //   error => {
    //     console.log('ISS crashed' + error)
    //   }
    // )

    this.renderer = new THREE.WebGLRenderer({ antialias: true })
    this.renderer.setSize(this.sizes.width, this.sizes.height)
    this.renderer.setClearColor(0x262837)
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    this.renderer.shadowMap.enabled = true
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap
    this.renderer.outputEncoding = THREE.sRGBEncoding
    this.controls = new OrbitControls(this.camera, this.renderer.domElement)
    this.controls.enableDamping = true

    this.navCamera = new THREE.PerspectiveCamera(
      25,
      200 / 2 / (200 / 2),
      0.1,
      100
    )
    this.navCamera.position.set(0, 0, 5)
    this.navLight = new THREE.DirectionalLight('#ffffff', 0.55)
    this.navLight.position.set(0, 1, 4)
    this.navBall = new THREE.Mesh(
      new THREE.SphereBufferGeometry(1, 16, 16),
      new THREE.MeshStandardMaterial({
        map: this.navballTexture
      })
    )
    this.navScene = new THREE.Scene()
    this.navScene.add(this.navCamera)
    this.navScene.add(this.navLight)
    this.navScene.add(this.navBall)
    this.navRenderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    this.navRenderer.setSize(200, 200)
    this.navRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  },

  mounted() {
    console.log(this.scene)
    this.$refs.canvas1.appendChild(this.renderer.domElement)
    this.$refs.canvas2.appendChild(this.navRenderer.domElement)
    this.animate()
    window.addEventListener('resize', this.resizeScreen)
  },

  methods: {
    animate() {
      requestAnimationFrame(this.animate)
      this.renderer.render(this.scene, this.camera)
      this.navRenderer.render(this.navScene, this.navCamera)
      this.navBall.rotation.x += 0.01
      this.navBall.rotation.z += 0.01
      this.cube.rotation.y += 0.1
      this.controls.update()
    },
    resizeScreen(e) {
      this.sizes.width = e.target.innerWidth
      this.sizes.height = e.target.innerHeight

      this.camera.aspect = this.sizes.width / this.sizes.height
      this.camera.updateProjectionMatrix()

      this.renderer.setSize(this.sizes.width, this.sizes.height)
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
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

#canvas {
  height: 100%;
  width: 100%;
  overflow: hidden;
  z-index: 0;
}

#navball {
  right: 5px;
  height: 200px;
  width: 100%;
  position: absolute;
  top: 70%;
  left: 3%;
  z-index: 2;
}

#hud-darken {
  /* position: absolute;
    display: block; */
  height: 1350px;
  width: 1350px;
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  overflow: hidden;
}

@media screen and (max-width: 1200px), (max-height: 650px) {
  #hud-darken {
    height: 900px;
    width: 900px;
  }
}

@media screen and (max-width: 850px), (max-height: 450px) {
  #hud-darken {
    height: 650px;
    width: 650px;
  }
}

#hud-ring {
  /* position: absolute;
  display: block; */
  top: 50%;
  left: 50%;
  width: 675px;
  height: 675px;
  position: absolute;
  transform: translate(-50%, -50%);
}

@media screen and (max-width: 1200px), (max-height: 650px) {
  #hud-ring {
    width: 450px;
    height: 450px;
  }
}

@media screen and (max-width: 850px), (max-height: 450px) {
  #hud-ring {
    width: 335px;
    height: 335px;
  }
}

#hud-white-inner,
#hud-white-outer {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.try {
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  justify-content: center;
  -ms-align-items: center;
  align-items: center;
}

circle {
  transform-origin: 0 0;
}

.hud-svg {
  fill: none;
  stroke: #7700aa;
  stroke-width: 10;
  transition-property: stroke;
  transition-duration: 1s;
  transition-timing-function: ease-in-out;
  transition-delay: 0s;
  position: absolute;
  top: 0;
  left: 0;
}

#circle-svg {
  position: absolute;
  top: -7%;
  left: -39%;
  z-index: 1;
}
</style>
