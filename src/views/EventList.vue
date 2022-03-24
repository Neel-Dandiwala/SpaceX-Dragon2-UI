<template>
  <body>
    <!-- <img id="hud-darken" src="../assets/hud-darken.png" />
    <div id="hud-ring">
      <img id="hud-white-outer" src="../assets/hud-ring.png" />
      <img id="hud-white-inner" src="../assets/hud-ring-inner.png" />
    </div> -->
    <!-- <svg viewBox="0 0 650 650" class="hud-svg">
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
    </svg> -->

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
import atmosphereShader from '../shaders/atmosphereShader'
import luminanceShader from '../shaders/luminanceShader'

import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js'
import { AdaptiveToneMappingPass } from 'three/examples/jsm/postprocessing/AdaptiveToneMappingPass.js'
import { BloomPass } from 'three/examples/jsm/postprocessing/BloomPass.js'
import { GammaCorrectionShader } from 'three/examples/jsm/shaders/GammaCorrectionShader.js'

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

    this.navSize =
      (window.innerWidth <= 1200 && window.innerWidth > 850) ||
      (window.innerHeight <= 650 && window.innerHeight > 450)
        ? 150
        : window.innerWidth < 850 || window.innerHeight < 450
        ? 100
        : 200

    this.sizes = {
      width: window.innerWidth,
      height: window.innerHeight
    }
    this.camera = new THREE.PerspectiveCamera(
      75,
      this.sizes.width / this.sizes.height,
      0.1,
      1000
    )
    this.camera.position.set(700, 400, 800)
    this.scene = new THREE.Scene()
    this.scene.add(this.camera)
    this.ambientLight = new THREE.AmbientLight(0x050505)
    this.sunLight = new THREE.DirectionalLight(0xffffff, 4.0)
    this.sunLight.position.set(2, 0, 10).normalize()
    this.scene.add(this.ambientLight)
    this.scene.add(this.sunLight)

    const earthAtmosphereMaterial = new THREE.ShaderMaterial(atmosphereShader)
    console.log(earthAtmosphereMaterial)
    const earthMaterial = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      shininess: 20
    })
    textureLoader.load(
      require('../assets/earth/earth_atmos_4096.jpg'),
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
    const earthLightsTexture = textureLoader.load(
      require('../assets/earth/earth_lights_2048.png')
    )
    earthLightsTexture.encoding = THREE.sRGBEncoding

    const earthLightsMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      blending: THREE.AdditiveBlending,
      transparent: true,
      depthTest: false,
      map: earthLightsTexture
    })
    const cloudsTexture = textureLoader.load(
      require('../assets/earth/earth_clouds_2048.png')
    )
    cloudsTexture.encoding = THREE.sRGBEncoding

    const earthCloudsMaterial = new THREE.MeshLambertMaterial({
      color: 0xffffff,
      blending: THREE.NormalBlending,
      transparent: true,
      depthTest: false,
      map: cloudsTexture
    })

    const earthGeometry = new THREE.SphereBufferGeometry(600, 30, 24)

    const earth = new THREE.Mesh(earthGeometry, earthMaterial)
    this.scene.add(earth)
    const sphereLightsMesh = new THREE.Mesh(earthGeometry, earthLightsMaterial)
    this.scene.add(sphereLightsMesh)
    const sphereCloudsMesh = new THREE.Mesh(earthGeometry, earthCloudsMaterial)
    this.scene.add(sphereCloudsMesh)
    
    const sphereAtmosphereMesh = new THREE.Mesh(
      earthGeometry,
      earthAtmosphereMaterial
    )
    sphereAtmosphereMesh.scale.set(1.05, 1.05, 1.05)
    this.scene.add(sphereAtmosphereMesh)

    this.luminanceMaterial = new THREE.ShaderMaterial(luminanceShader)
    this.currentLuminanceMaterial = new THREE.ShaderMaterial(luminanceShader)

    const environmentMap = new THREE.CubeTextureLoader().load([
      require('../assets/milkyWay/dark-s_px.jpg'),
      require('../assets/milkyWay/dark-s_nx.jpg'),
      require('../assets/milkyWay/dark-s_py.jpg'),
      require('../assets/milkyWay/dark-s_ny.jpg'),
      require('../assets/milkyWay/dark-s_pz.jpg'),
      require('../assets/milkyWay/dark-s_nz.jpg')
    ])
    environmentMap.encoding = THREE.sRGBEncoding
    const sceneMap = new THREE.Scene()
    sceneMap.background = environmentMap

    this.ring = new THREE.Mesh(
      new THREE.CylinderGeometry(50, 50, 10, 100, 1, true),
      new THREE.MeshStandardMaterial({ color: 0xff0000 })
    )
    this.scene.add(this.ring)
    console.log(this.ring.position)
    
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
    // this.renderer.setClearColor(0x000000)
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    this.renderer.shadowMap.enabled = true
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap
    this.renderer.outputEncoding = THREE.sRGBEncoding
    this.renderer.autoClear = false
    this.controls = new OrbitControls(this.camera, this.renderer.domElement)
    this.controls.enableDamping = true

    const renderTarget = new THREE.WebGLRenderTarget(
      this.sizes.width,
      this.sizes.height,
      {
        minFilter: THREE.LinearFilter,
        magFilter: THREE.LinearFilter,
        format: THREE.RGBAFormat
      }
    )
    this.dynamicHDREffectComposer = new EffectComposer(
      this.renderer,
      renderTarget
    )
    this.dynamicHDREffectComposer.setPixelRatio(
      Math.min(window.devicePixelRatio, 2)
    )
    this.dynamicHDREffectComposer.setSize(this.sizes.width, this.sizes.height)
    const scenePass = new RenderPass(this.scene, this.camera)
    const environmentPass = new RenderPass(sceneMap, this.camera)
    scenePass.clear = false

    this.toneMapping = new AdaptiveToneMappingPass(true, 256)
    this.toneMapping.needsSwap = true
    this.bloomPass = new BloomPass()
    const gammaCorrectionPass = new ShaderPass(GammaCorrectionShader)

    this.dynamicHDREffectComposer.addPass(environmentPass)
    this.dynamicHDREffectComposer.addPass(scenePass)
    this.dynamicHDREffectComposer.addPass(this.toneMapping)
    this.dynamicHDREffectComposer.addPass(this.bloomPass)
    this.dynamicHDREffectComposer.addPass(gammaCorrectionPass)

    this.navCamera = new THREE.PerspectiveCamera(
      25,
      this.navSize / this.navSize,
      0.1,
      100
    )
    this.navCamera.position.set(0, 0, 5)
    this.navLight = new THREE.DirectionalLight('#ffffff', 0.55)
    this.navLight.position.set(0, 1, 4)
    const navballTexture = textureLoader.load(require('../assets/navball.png'))
    this.navBall = new THREE.Mesh(
      new THREE.SphereBufferGeometry(1, 16, 16),
      new THREE.MeshStandardMaterial({
        map: navballTexture
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
      this.dynamicHDREffectComposer.render(0.017)
      // this.earth.rotation.y += 0.01
      // this.cube.rotation.y += 0.1
      if (this.bloomPass) {
        this.bloomPass.copyUniforms['opacity'].value = 1.0
      }
      if (this.toneMapping) {
        this.toneMapping.setAdaptionRate(2.0)
        this.luminanceMaterial.uniforms[
          'map'
        ].value = this.toneMapping.luminanceRT
        this.currentLuminanceMaterial.uniforms[
          'map'
        ].value = this.toneMapping.currentLuminanceRT

        this.toneMapping.setMaxLuminance(16)
        this.toneMapping.setMiddleGrey(0.04)
      }

      this.sunLight.intensity = 4.0
      this.controls.update()
      const fixed = new THREE.Vector3(40, 5, 20)
      this.ring.position.sub(this.camera.position, fixed)
      this.ring.rotation.y += 0.1
      console.log(this.ring.position)
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
        console.log(this.navSize + 'FIRST')
      }
      if (e.target.innerWidth < 850 || e.target.innerHeight < 450) {
        this.navSize = 100
        console.log(this.navSize + 'SECOND')
      }
      console.log(this.navSize + 'FINAL')
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
  bottom: 15px;
  right: 15px;
  z-index: 1;
}

#upper-left {
  position: absolute;
  top: 15px;
  left: 15px;
  z-index: 1;
}

#upper-right {
  position: absolute;
  top: 15px;
  right: 15px;
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
    /* left: 20px; */
  }
  #lower-right {
    height: 100px;
    width: 100px;
    /* right: 20px; */
  }
  #upper-left {
    height: 100px;
    width: 100px;
    /* left: 20px; */
  }
  #upper-right {
    height: 100px;
    width: 100px;
    /* right: 20px; */
  }
  #navball {
    /* left: 20px; */
    height: 100;
    width: 100;
  }
}

body {
  display: block;
  margin: 0;
}
</style>
