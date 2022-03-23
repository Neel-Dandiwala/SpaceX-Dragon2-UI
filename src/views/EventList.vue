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

    <div style="float:right;" id="space" ref="canvas1"></div>
    <div id="navball" ref="canvas2"></div>
    <div id="corner-circles-base">
      <svg id="lower-left" width="200" height="200" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="49"
          stroke="white"
          stroke-width="0.5"
          fill="black"
        />
      </svg>
      <svg id="lower-right" width="200" height="200" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="49"
          stroke="white"
          stroke-width="0.5"
          fill="black"
        />
      </svg>
      <svg id="upper-left" width="200" height="200" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="49"
          stroke="white"
          stroke-width="0.5"
          fill="black"
        />
      </svg>
      <svg id="upper-right" width="200" height="200" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="49"
          stroke="white"
          stroke-width="0.5"
          fill="black"
        />
      </svg>
    </div>
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

    this.navSize = (window.innerWidth <= 1200 && window.innerWidth > 850) ||
        (window.innerHeight <= 650 && window.innerHeight > 450) ? 150 : ((window.innerWidth < 850 || window.innerHeight < 450) ? 100 : 200)
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
    // gltfLoader.load(
    //   './Earth.glb',
    //   gltf => {
    //     console.log(gltf)
    //     const earth = gltf.scene
    //     earth.scale.set(0.0025, 0.0025, 0.0025)
    //     this.earth = earth
    //     this.scene.add(earth)
    //   },
    //   progress => {
    //     console.log('Earth in progress' + progress)
    //   },
    //   error => {
    //     console.log('Earth crashed' + error)
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
      this.navSize / this.navSize,
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
    this.navRenderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true
    })
    this.navRenderer.setSize(this.navSize, this.navSize)
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
      // this.earth.rotation.y += 0.01
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
      console.log(this.navSize)
      this.navSize = 200
      if (
        (e.target.innerWidth <= 1200 && e.target.innerWidth > 850) ||
        (e.target.innerHeight <= 650 && e.target.innerHeight > 450)
      ) {
        this.navSize = 150
        console.log(this.navSize+ 'FIRST')
      }
      if (e.target.innerWidth < 850 || e.target.innerHeight < 450) {
        this.navSize = 100
        console.log(this.navSize+'SECOND')
      }
      console.log(this.navSize+'FINAL')
      this.navCamera.aspect = this.navSize / this.navSize
      this.navCamera.updateProjectionMatrix()

      this.navRenderer.setSize(this.navSize, this.navSize)
      this.navRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
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

#space {
  height: 100%;
  width: 100%;
  overflow: hidden;
  /* z-index: 0; */
}

#navball {
  /* height: 200px;
  width: 200px; */
  position: absolute;
  bottom: 15px;
  left: 15px;
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

#hud-ring {
  /* position: absolute;
  display: block; */
  top: 50%;
  left: 50%;
  width: 675px;
  height: 675px;
  position: absolute;
  transform: translate(-50%, -50%);
  overflow: hidden;
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

#corner-circles-base {
}

#lower-left {
  position: absolute;
  bottom: 15px;
  left: 15px;
  z-index: 1;
}

#lower-right {
  position: absolute;
  bottom: 40px;
  right: 50px;
  z-index: 1;
}

#upper-left {
  position: absolute;
  top: 40px;
  left: 50px;
  z-index: 1;
}

#upper-right {
  position: absolute;
  top: 40px;
  right: 50px;
  z-index: 1;
}

@media screen and (max-width: 1200px), (max-height: 650px) {
  #hud-darken {
    height: 900px;
    width: 900px;
    overflow: hidden;
  }
  #hud-ring {
    width: 450px;
    height: 450px;
  }
  #lower-left {
    height: 150px;
    width: 150px;
    /* left: 25px; */
  }
  #lower-right {
    height: 150px;
    width: 150px;
    /* right: 25px; */
  }
  #upper-left {
    height: 150px;
    width: 150px;
    /* left: 25px; */
  }
  #upper-right {
    height: 150px;
    width: 150px;
    /* right: 25px; */
  }
  #navball {
    height: 150;
    width: 150;
    /* left: 25px; */
  }
}

@media screen and (max-width: 850px), (max-height: 450px) {
  #hud-darken {
    height: 650px;
    width: 650px;
    overflow: hidden;
  }
  #hud-ring {
    width: 335px;
    height: 335px;
  }
  #lower-left {
    height: 100px;
    width: 100px;
    left: 20px;
  }
  #lower-right {
    height: 100px;
    width: 100px;
    right: 20px;
  }
  #upper-left {
    height: 100px;
    width: 100px;
    left: 20px;
  }
  #upper-right {
    height: 100px;
    width: 100px;
    right: 20px;
  }
  #navball {
    left: 20px;
    height: 100;
    width: 100;
  }
}

body {
  display: block;
  margin: 0;
}
</style>
