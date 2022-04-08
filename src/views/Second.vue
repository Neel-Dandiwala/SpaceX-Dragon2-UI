<template>
  <body>
    <div id="back-box"></div>
    <img class="hud-darken-ring" src="../assets/hud-darken.png" />
    <div id="hud-ring">
      <img id="hud-white-outer" src="../assets/hud-ring.png" />
      <img id="hud-white-inner" src="../assets/hud-ring-inner.png" />
    </div>
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

    <div id="space" ref="canvas1"></div>
    <div id="navball" ref="canvas2"></div>

    <div class="corner-circles-base">
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

    <div class="circular-progress">
      <p id="main-circular-heading">ACCELERATION</p>
      <p id="number-circular-heading" class="c1">{{ accelerationValue }}g</p>
      <svg
        class="circle-big-svg"
        id="meter-svg"
        viewBox="0 0 150 150"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <clipPath id="cut-off-bottom">
            <path
              d="M0,0 L150,0 150,25 25,150 0,150 Z"
              fill="transparent"
              stroke="#ff0000"
              stroke-width="1.5"
            />
          </clipPath>
        </defs>
        <circle
          r="70"
          cx="75"
          cy="75"
          stroke="#777777"
          stroke-width="1.5"
          stroke-dasharray="0 4"
          stroke-linecap="round"
          fill="transparent"
          clip-path="url(#cut-off-bottom)"
        />
        <circle
          class="animation-circle"
          r="70"
          cx="75"
          cy="75"
          fill="transparent"
          v-bind:style="{ animationDuration: 5 + 's' }"
          stroke-dasharray="500"
          stroke-dashoffset="0"
          clip-path="url(#cut-off-bottom)"
        ></circle>
        <circle
          class="animation-circle"
          style="stroke: #d7b733;"
          v-bind:style="{ animationDuration: 5 + 's' }"
          r="70"
          cx="75"
          cy="75"
          fill="transparent"
          stroke-dasharray="500"
          stroke-dashoffset="0"
          clip-path="url(#cut-off-bottom)"
        ></circle>
      </svg>
    </div>

    <div class="upper-right-ring">
      <svg
      class="upper-right-ringClass"
        id="upper-right-svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 18 18"
      >
        <path
          id="upper-right-svg-path"
          d="M 9.6 10.1 A 2 2 90 1 1 6.4 5.7 A 2 2 90 1 1 9.6 10.1 Z M 9.9 10.5 A 3 3 90 1 0 6.1 5.3 A 3 3 90 1 0 9.9 10.5 Z M 8 13.5 A 5 5 0 1 1 8 2.5 A 5 5 0 0 1 8 13.5 Z M 8 14 A 6 6 0 1 0 8 2 A 6 6 0 0 0 8 14 Z M 10.4 2.5 Q 11.3 2.7 11.7 2.3 L 14.2 5.1 Q 13.7 5.4 13.8 6.5 Q 13.1 3.8 10.4 2.5 M 5.6 2.5 Q 4.6 2.8 4.3 2.3 L 1.8 5.1 Q 2.3 5.4 2.2 6.5 Q 3 3.7 5.6 2.5 M 2.2 9.6 Q 2.3 10.4 1.8 10.9 L 4.3 13.7 Q 4.7 13.3 5.6 13.5 Q 3.1 12.4 2.2 9.6 M 13.8 9.6 Q 13.8 10.6 14.3 10.9 L 11.7 13.8 Q 11.3 13.4 10.4 13.5 Q 13.1 12.2 13.8 9.6 Z M 6.5 6.5 A 1 1 0 0 0 6.5 7.5 A 1 1 0 0 0 7.5 7.5 A 1 1 0 0 0 7.5 6.5 A 1 1 0 0 0 6.5 6.5 M 9.5 6.5 A 1 1 0 0 0 8.5 6.5 A 1 1 0 0 0 8.5 7.5 A 1 1 0 0 0 9.5 7.5 A 1 1 0 0 0 9.5 6.5 M 9.5 9.5 A 1 1 0 0 0 9.5 8.5 A 1 1 0 0 0 8.5 8.5 A 1 1 0 0 0 8.5 9.5 A 1 1 0 0 0 9.5 9.5 M 6.5 8.5 A 1 1 0 0 0 6.5 9.5 A 1 1 0 0 0 7.5 9.5 A 1 1 0 0 0 7.5 8.5 A 1 1 0 0 0 6.5 8.5 M 4.5 4.4 A 1 1 0 0 0 3.8 5.2 A 1 1 0 0 0 4.5 5.8 A 1 1 0 0 0 5.2 5.1 A 1 1 0 0 0 4.5 4.4 M 11.5 4.4 A 1 1 0 0 0 10.8 5 A 1 1 0 0 0 11.5 5.8 A 1 1 0 0 0 12.2 5.3 A 1 1 0 0 0 11.5 4.4 M 12.2 10.5 A 1 1 0 0 0 11.5 9.9 A 1 1 0 0 0 10.9 10.6 A 1 1 0 0 0 11.7 11.2 A 1 1 0 0 0 12.2 10.5 M 3.7 10.5 A 1 1 0 0 0 4.4 11.5 A 1 1 0 0 0 5.2 10.9 A 1 1 0 0 0 4.5 10 A 1 1 0 0 0 3.7 10.5"
        />
      </svg>
    </div>

    <div class="lower-right-ring">
      <svg
      class="lower-right-ringClass"
        id="lower-right-svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 18 18"
      >
        <path
          id="lower-right-svg-path"
          d="M 9 16 A 7 7 0 1 1 9 2 a 7 7 0 0 1 0 14 z m 0 1 A 8 8 0 1 0 9 1 a 8 8 0 0 0 0 16 z M 4.5 3.6 Q 5.8 4.6 7 6 Q 9 6 11 6 Q 12.2 4.7 13.3 3.5 Q 9 0.5 4.5 3.6 M 12 15.3 Q 11.5 13.6 11 11.8 Q 11.6 10.8 12.5 8.8 Q 14 8.4 15.9 8 Q 16.4 12.9 12 15.3 M 6.1 15.4 Q 6.5 13.4 7 11.7 Q 6.5 10.7 5.5 8.8 Q 3.6 8.4 2.1 8 Q 1.6 13 6.1 15.4 M 7 3.5 L 11 3.5 L 10 5.1 L 8 5.1 Z M 13 13.2 L 14.6 9.8 L 13 10 L 12.2 11.6 Z M 5 10 L 5.8 11.5 L 5 13.2 L 3.4 9.8 Z"
        />
      </svg>
    </div>
  </body>
</template>

<script>
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
// eslint-disable-next-line no-unused-vars
import { FlyControls } from 'three/examples/jsm/controls/FlyControls.js'
import atmosphereShader from '../shaders/atmosphereShader'
import luminanceShader from '../shaders/luminanceShader'

import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js'
import { AdaptiveToneMappingPass } from 'three/examples/jsm/postprocessing/AdaptiveToneMappingPass.js'
import { BloomPass } from 'three/examples/jsm/postprocessing/BloomPass.js'
import { GammaCorrectionShader } from 'three/examples/jsm/shaders/GammaCorrectionShader.js'

export default {
  name: 'Second',
  props: [],
  components: {},
  data() {
    return {
      acceleration: 350,
      accelerationValue: 0.01
    }
  },
  created() {
    const textureLoader = new THREE.TextureLoader()
    // eslint-disable-next-line no-unused-vars
    const gltfLoader = new GLTFLoader()
    this.clock = new THREE.Clock()
    this.miscellaneous = {
      radius: 6371,
      tilt: 0.41,
      rotationSpeed: 0.02,
      cloudsScale: 1.005
    }

    this.navSize =
      (window.innerWidth <= 1200 && window.innerWidth > 850) ||
      (window.innerHeight <= 650 && window.innerHeight > 450)
        ? 150
        : window.innerWidth < 850 || window.innerHeight < 450
        ? 100
        : 200

    this.sizes = {
      width: window.innerWidth * 0.71428571,
      height: window.innerHeight * 0.9
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
    const ambientLight = new THREE.AmbientLight(0x050505)
    this.sunLight = new THREE.DirectionalLight(0xffffff, 4.0)
    this.sunLight.position.set(2, 0, 10).normalize()
    this.scene.add(ambientLight)
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

    this.earth = new THREE.Mesh(earthGeometry, earthMaterial)
    this.earth.rotation.y = 0
    this.earth.rotation.z = this.miscellaneous.tilt
    this.scene.add(this.earth)
    this.sphereLightsMesh = new THREE.Mesh(earthGeometry, earthLightsMaterial)
    this.sphereLightsMesh.rotation.y = 0
    this.sphereLightsMesh.rotation.z = this.miscellaneous.tilt
    this.scene.add(this.sphereLightsMesh)
    this.sphereCloudsMesh = new THREE.Mesh(earthGeometry, earthCloudsMaterial)
    this.sphereCloudsMesh.rotation.y = 0
    this.sphereCloudsMesh.rotation.z = this.miscellaneous.tilt
    this.scene.add(this.sphereCloudsMesh)

    this.sphereAtmosphereMesh = new THREE.Mesh(
      earthGeometry,
      earthAtmosphereMaterial
    )
    this.sphereAtmosphereMesh.scale.set(1.05, 1.05, 1.05)
    this.sphereAtmosphereMesh.rotation.y = 0
    this.sphereAtmosphereMesh.rotation.z = this.miscellaneous.tilt
    this.scene.add(this.sphereAtmosphereMesh)

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
    this.scene.background = environmentMap

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
    this.renderer.outputEncoding = THREE.sRGBEncoding
    this.renderer.autoClear = false
    this.controls = new FlyControls(this.camera, this.renderer.domElement)
    // this.controls.enableDamping = true
    this.controls.movementSpeed = 48
    this.controls.rollSpeed = Math.PI / 48
    this.controls.autoForward = false
    this.controls.dragToLook = false

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
    const navLight = new THREE.DirectionalLight('#ffffff', 0.55)
    navLight.position.set(0, 1, 4)
    const navballTexture = textureLoader.load(require('../assets/navball.png'))
    this.navBall = new THREE.Mesh(
      new THREE.SphereBufferGeometry(1, 16, 16),
      new THREE.MeshStandardMaterial({
        map: navballTexture
      })
    )
    this.navBall.rotation.y = 0
    this.navBall.rotation.z = this.miscellaneous.tilt
    this.navScene = new THREE.Scene()
    this.navScene.add(this.navCamera)
    this.navScene.add(navLight)
    this.navScene.add(this.navBall)
    this.navRenderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true
    })
    this.navRenderer.setSize(this.navSize, this.navSize)
    this.navRenderer.setPixelRatio(1)
  },

  mounted() {
    console.log(this.scene)
    this.$refs.canvas1.appendChild(this.renderer.domElement)
    this.$refs.canvas2.appendChild(this.navRenderer.domElement)
    this.animate()
    window.addEventListener('resize', this.resizeScreen)
    window.addEventListener('keydown', this.keyDown)
  },

  beforeUnmount() {
    this.disposeHierarchy(this.scene, this.disposeNode)
    this.navRenderer.dispose()
    console.log(this.scene)
    // this.renderer.dispose()
    // this.renderer = null
    // this.scene = null
    // this.camera = null
    // this.navRenderer.dispose()
    // this.navRenderer = null
    // this.navScene = null
    // this.navCamera = null
    // console.log(this.renderer)
  },
  unmount() {
    console.log('UNMOUNT UNMOUNT')
  },
  methods: {
    animate() {
      requestAnimationFrame(this.animate)
      const delta = this.clock.getDelta()
      // this.renderer.render(this.scene, this.camera)
      this.navRenderer.render(this.navScene, this.navCamera)
      this.navBall.rotation.x = this.camera.rotation.x
      this.navBall.rotation.y = this.camera.rotation.y
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

      this.earth.rotation.y += this.miscellaneous.rotationSpeed * delta
      this.sphereLightsMesh.rotation.y +=
        this.miscellaneous.rotationSpeed * delta
      this.sphereCloudsMesh.rotation.y +=
        1.25 * this.miscellaneous.rotationSpeed * delta
      this.sphereAtmosphereMesh.rotation.y +=
        1.25 * this.miscellaneous.rotationSpeed * delta

      const cameraPos = this.camera.position.length()
      const slowdown = cameraPos - 600 * 1.01
      this.controls.movementSpeed = 0.33 * slowdown
      this.sunLight.intensity = 4.0
      this.controls.update(delta)

      this.acceleration = this.acceleration > 350 ? 350 : this.acceleration + 1
      // const fixed = new THREE.Vector3(40, 5, 20)
      // this.ring.position.sub(this.camera.position, fixed)
      // this.ring.rotation.y += 0.1
      // console.log(this.ring.position)
    },
    resizeScreen(e) {
      this.sizes.width = e.target.innerWidth * 0.71426571
      this.sizes.height = e.target.innerHeight * 0.9

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
    },
    keyDown() {
      this.acceleration = this.acceleration < 100 ? 100 : this.acceleration - 10
      this.accelerationValue = this.accelerationValue + 10.03
    },
    disposeNode(node) {
      if (node instanceof THREE.Mesh) {
        if (node.geometry) {
          node.geometry.dispose()
          node.geometry = undefined // fixed problem
        }

        if (node.material) {
          if (
            node.material instanceof THREE.MeshFaceMaterial ||
            node.material instanceof THREE.MultiMaterial
          ) {
            // eslint-disable-next-line no-unused-vars
            node.material.materials.forEach(function(mtrl, idx) {
              if (mtrl.map) mtrl.map.dispose()
              if (mtrl.lightMap) mtrl.lightMap.dispose()
              if (mtrl.bumpMap) mtrl.bumpMap.dispose()
              if (mtrl.normalMap) mtrl.normalMap.dispose()
              if (mtrl.specularMap) mtrl.specularMap.dispose()
              if (mtrl.envMap) mtrl.envMap.dispose()

              mtrl.dispose()
              mtrl = undefined // fixed problem
            })
          } else {
            if (node.material.map) node.material.map.dispose()
            if (node.material.lightMap) node.material.lightMap.dispose()
            if (node.material.bumpMap) node.material.bumpMap.dispose()
            if (node.material.normalMap) node.material.normalMap.dispose()
            if (node.material.specularMap) node.material.specularMap.dispose()
            if (node.material.envMap) node.material.envMap.dispose()

            node.material.dispose()
            node.material = undefined // fixed problem
          }
        }
        console.log('node before removal: ', node)
        this.scene.remove(node)
        this.renderer.dispose() // ***EDIT*** improved even memory more original scene heap is 12.4 MB; add objects increases to 116 MB or 250 MB (different models), clearing always brings down to 13.3 MB ... there still might be some artifacts.
        node = undefined // unnecessary
      }
    },
    disposeHierarchy(node, callback) {
      for (var i = node.children.length - 1; i >= 0; i--) {
        var child = node.children[i]
        this.disposeHierarchy(child, callback)
        callback(child)
      }
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
  /* height: 100%; */
  /* width: 100%; */
  border-radius: 30px;
  top: 47.5%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  overflow: hidden;
  z-index: 0;
  box-sizing: border-box;
  border: 1px solid white;
}

#navball {
  /* height: 200px;
  width: 200px; */
  position: absolute;
  bottom: 8%;
  left: 14.59%;
  z-index: 2;
}

#hud-darken {
  position: absolute;
  top: 0;
  left: 0;
  height: 200px;
  width: 100px;
}

.hud-darken-ring {
  height: min(85vh, calc(100vw * 0.714));
  width: min(85vh, calc(100vw * 0.714));
  object-fit: cover;
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  overflow: hidden;
  /* border: 5px solid red; */
  z-index: 1;
}

#hud-ring {
  /* position: absolute;
  display: block; */
  top: 50%;
  left: 50%;
  width: calc((min(85vh, calc(100vw * 0.714))) / 2);
  height: calc((min(85vh, calc(100vw * 0.714))) / 2);
  position: absolute;
  transform: translate(-50%, -50%);
  overflow: hidden;
  /* border: 5px solid blue; */
  z-index: 1;
}

#hud-white-inner,
#hud-white-outer {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
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

.corner-circles-base {
}

#lower-left {
  position: absolute;
  bottom: 8%;
  /* left: 15px; */
  z-index: 1;
  left: 14.59%;
}

#lower-right {
  position: absolute;
  bottom: 8%;
  right: 14.59%;
  z-index: 1;
}

#upper-left {
  position: absolute;
  top: 3%;
  left: 14.59%;
  z-index: 1;
  border: 1px solid orange;
}

#upper-right {
  position: absolute;
  top: 3%;
  /* right: 14.285714%; */
  right: 14.59%;
  z-index: 1;
}

@media screen and (max-width: 1200px), (max-height: 650px) {
  /* #hud-darken-ring {
    height: 750px;
    width: 750px;
    overflow: hidden;
  }
  #hud-ring {
    width: 375px;
    height: 375px;
  } */
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
  #meter-svg {
    height: 150px;
    width: 150px;
  }
  #lower-right-svg {
    height: 150px;
    width: 150px;
  }
}

@media screen and (max-width: 850px), (max-height: 450px) {
  /* #hud-darken-ring {
    height: 650px;
    width: 650px;
    overflow: hidden;
  }
  #hud-ring {
    width: 335px;
    height: 335px;
  } */
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
  #meter-svg {
    height: 100px;
    width: 100px;
  }
  #lower-right-svg {
    height: 100px;
    width: 100px;
  }
}

.circular-progress {
  /* position: absolute;
  width: min(15vw, 32.5vh);
  height: min(12.5vw, 27vh); */
  /* width: 200px;
  height: 200px; */
  /* top: 3%;
  text-align: center; */
  /* transform: translate(-50%, -50%); */
  /* border: 1px solid pink;
  z-index: 2; */
  /* left: 50%; */
  /* left: 14.59%; */
}

.circle-big-svg {
  position: absolute;
  /* width: max(11vw, 23.5vh);
  height: max(11vw, 23.5vh); */
  /* width:  150px;
  height:  150px; */
  border: 0.25px solid green;
  /* transform: translate(-50%, -50%); */
  text-align: center;
  width: 200px;
  height: 200px;
}

.animation-circle {
  stroke-dashoffset: 170;
  animation-name: progressingCircular;
  animation-iteration-count: infinite;
  stroke: #666;
  stroke-width: 0.35em;
}

#meter-svg {
  /* transform: rotate(135deg); */
  left: 14.59%;
  top: 3%;
  z-index: 2;
}

#meter-svg circle {
  /* top: 50%;
  left: 50%; /* */
  transform: translate(12.5%, 12.5%) scale(0.75);
}
.animation-circle {
  stroke-dashoffset: 170;
  animation-name: progressingCircular;
  animation-iteration-count: infinite;
  stroke: #666;
  stroke-width: 0.35em;
}

@keyframes progressingCircular {
  0% {
    stroke-dashoffset: v-bind(acceleration);
  }
  50% {
    stroke-dashoffset: 350;
  }
  100% {
    stroke-dashoffset: v-bind(acceleration);
  }
}

#main-circular-heading {
  font-size: 0.65em;
  position: absolute;
  top: 13%;
  left: 20%;
  z-index: 2;
  opacity: 0.5;
  /* transform: translate(-50%, -50%); */
}

#number-circular-heading {
  font-size: 2em;
  position: absolute;
  top: 15%;
  left: 18.5%;
  z-index: 2;
  /* transform: translate(-50%, -50%); */
}

.lower-right-ringClass{
  position: absolute;
   width: 200px;
  height: 200px;
  border: 1px solid tomato;
}

#lower-right-svg {
  bottom: 8%;
  right: 14.59%;
  z-index: 2;
}

#lower-right-svg-path {
  stroke: white;
  stroke-width: 0.0625;
  fill: #111b52;
  transform: translate(6%, 6%) scale(0.9);
}

.upper-right-ringClass{
  position: absolute;
   width: 200px;
  height: 200px;
  border: 1px solid tomato;
}

#upper-right-svg {
  top: 3%;
  right: 14.59%;
  z-index: 2;
}

#upper-right-svg-path {
  stroke: white;
  stroke-width: 0.0625;
  fill: #111b52;
  transform: translate(5%, 5%) scale(1);
}

#back-box {
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

body {
  display: block;
  margin: 0;
  background-color: #111b52;
}
</style>
