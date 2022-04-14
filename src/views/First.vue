<template>
  <div id="back-box">
    <div id="top-menu">
      <div style="background: #111b52;" id="top-left-square">
        <svg class="svg" width="25" height="25" viewBox="0 0 10 8">
          <rect rx="1" ry="1" width="10" height="8" class="topLeftSquare" />
        </svg>
      </div>
      <p id="top-menu-heading" style="left: 4.15%;">ACTIVE PHASE</p>
      <p
        id="top-menu-number"
        style="font-size: 1em; font-weight: 600; left: 4%;"
      >
        Deorbit Coast
      </p>
      <p id="top-menu-heading" style="left: 20%;">SPLASHDOWN TIME</p>
      <p id="top-menu-number" style="left: 20%;">T-01:24:{{ splashDown }}</p>
      <p id="top-menu-heading" style="left: 42.5%;">INERTIAL VELOCITY</p>
      <p id="top-menu-number" style="left: 42.5%;">{{ inertial }}km/s</p>
      <p id="top-menu-heading" style="left: 55%;">ALTITUDE</p>
      <p id="top-menu-number" style="left: 55%;">{{ altitude }}km</p>
      <p id="top-menu-heading" style="left: 67.5%;">APOGEE</p>
      <p id="top-menu-number" style="left: 67.5%;">{{ apogee }}km</p>
      <p id="top-menu-heading" style="left: 80%;">PERIGEE</p>
      <p id="top-menu-number" style="left: 80%;">{{ perigee }}km</p>
      <p id="top-menu-heading" style="left: 92.5%;">INCLINATION</p>
      <p id="top-menu-number" style="left: 92.5%;">{{ inclination }}°</p>
    </div>
    <div id="side-menu">
      <button
        @click="centerMainHeadingSelection = 0"
        v-bind:style="[
          centerMainHeadingSelection === 0
            ? `border: 1px solid white`
            : `border: none`
        ]"
        style="top: 6.5%;"
        id="side-button"
      >
        <svg
          class="svg"
          style="top: 15%;"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
        >
          <path
            class="white-svg"
            d="M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM8 4a4 4 0 0 0-4 4 .5.5 0 0 1-1 0 5 5 0 0 1 5-5 .5.5 0 0 1 0 1zm4.5 3.5a.5.5 0 0 1 .5.5 5 5 0 0 1-5 5 .5.5 0 0 1 0-1 4 4 0 0 0 4-4 .5.5 0 0 1 .5-.5z"
          /></svg
        >Deport & burn
        <div
          style="top: 85%; left: 50%; transform: translate(-50%, -50%); position: absolute; height: 7%; width: 85%; background: #20fbfd;"
          v-if="centerMainHeadingSelection === 0"
        />
      </button>
      <button
        @click="centerMainHeadingSelection = 1"
        v-bind:style="[
          centerMainHeadingSelection === 1
            ? `border: 1px solid white`
            : `border: none`
        ]"
        style="top: 18%;"
        id="side-button"
      >
        <svg
          class="svg"
          style="top: 15%;"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
        >
          <path
            class="white-svg"
            d="M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM8 4a4 4 0 0 0-4 4 .5.5 0 0 1-1 0 5 5 0 0 1 5-5 .5.5 0 0 1 0 1zm4.5 3.5a.5.5 0 0 1 .5.5 5 5 0 0 1-5 5 .5.5 0 0 1 0-1 4 4 0 0 0 4-4 .5.5 0 0 1 .5-.5z"
          /></svg
        >Coat to Trunk...
        <div
          style="top: 85%; left: 50%; transform: translate(-50%, -50%); position: absolute; height: 7%; width: 85%; background: #20fbfd;"
          v-if="centerMainHeadingSelection === 1"
        />
      </button>
      <button
        @click="centerMainHeadingSelection = 2"
        v-bind:style="[
          centerMainHeadingSelection === 2
            ? `border: 1px solid white`
            : `border: none`
        ]"
        style="top: 30%;"
        id="side-button"
      >
        <svg
          class="svg"
          style="top: 15%;"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
        >
          <path
            class="white-svg"
            d="M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM8 4a4 4 0 0 0-4 4 .5.5 0 0 1-1 0 5 5 0 0 1 5-5 .5.5 0 0 1 0 1zm4.5 3.5a.5.5 0 0 1 .5.5 5 5 0 0 1-5 5 .5.5 0 0 1 0-1 4 4 0 0 0 4-4 .5.5 0 0 1 .5-.5z"
          /></svg
        >Claw Separati...
        <div
          style="top: 85%; left: 50%; transform: translate(-50%, -50%); position: absolute; height: 7%; width: 85%; background: #20fbfd;"
          v-if="centerMainHeadingSelection === 2"
        />
      </button>
      <button
        @click="centerMainHeadingSelection = 3"
        v-bind:style="[
          centerMainHeadingSelection === 3
            ? `border: 1px solid white`
            : `border: none`
        ]"
        style="top: 42%;"
        id="side-button"
      >
        <svg
          class="svg"
          style="top: 15%;"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
        >
          <path
            class="white-svg"
            d="M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM8 4a4 4 0 0 0-4 4 .5.5 0 0 1-1 0 5 5 0 0 1 5-5 .5.5 0 0 1 0 1zm4.5 3.5a.5.5 0 0 1 .5.5 5 5 0 0 1-5 5 .5.5 0 0 1 0-1 4 4 0 0 0 4-4 .5.5 0 0 1 .5-.5z"
          /></svg
        >Procedure
        <div
          style="top: 85%; left: 50%; transform: translate(-50%, -50%); position: absolute; height: 7%; width: 85%; background: #20fbfd;"
          v-if="centerMainHeadingSelection === 3"
        />
      </button>
      <button
        @click="centerMainHeadingSelection = 4"
        v-bind:style="[
          centerMainHeadingSelection === 4
            ? `border: 1px solid white`
            : `border: none`
        ]"
        style="top: 54%;"
        id="side-button"
      >
        <svg
          class="svg"
          style="top: 15%;"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
        >
          <path
            class="white-svg"
            d="M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM8 4a4 4 0 0 0-4 4 .5.5 0 0 1-1 0 5 5 0 0 1 5-5 .5.5 0 0 1 0 1zm4.5 3.5a.5.5 0 0 1 .5.5 5 5 0 0 1-5 5 .5.5 0 0 1 0-1 4 4 0 0 0 4-4 .5.5 0 0 1 .5-.5z"
          /></svg
        >Manual Chute...
        <div
          style="top: 85%; left: 50%; transform: translate(-50%, -50%); position: absolute; height: 7%; width: 85%; background: #20fbfd;"
          v-if="centerMainHeadingSelection === 4"
        />
      </button>
    </div>
    <div id="center-panel">
      <div
        style="background: #111b52;"
        @click="
          centerMainHeadingSelection =
            centerMainHeadingSelection - 1 < 0
              ? centerMainHeading.length - 1
              : (centerMainHeadingSelection - 1) % centerMainHeading.length
        "
        id="left-arrow"
      >
        <svg class="svg" width="30" height="30">
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
      <div
        style="background: #111b52;"
        @click="
          centerMainHeadingSelection =
            (centerMainHeadingSelection + 1) % centerMainHeading.length
        "
        id="right-arrow"
      >
        <svg class="svg" width="30" height="30">
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
      <p id="center-main-heading">
        {{ centerMainHeading[centerMainHeadingSelection] }}
      </p>
      <p style="top: 4.5%;" id="center-main-sub-heading">
        RUNNING
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          style="left: 120%;"
          fill="currentColor"
          class="svg"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"
          />
          <path
            d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"
          />
        </svg>
      </p>
      <p style="top: 7.5%;" id="center-main-sub-heading">00:22:57</p>
      <div style="top: 27.5%;" class="center-main-slot">
        <p id="center-main-slot-heading">
          <svg
            class="svg"
            style="left: 0%; top: 15%;"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
          >
            <path
              style="fill: #ffb74b;"
              d="M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM8 4a4 4 0 0 0-4 4 .5.5 0 0 1-1 0 5 5 0 0 1 5-5 .5.5 0 0 1 0 1zm4.5 3.5a.5.5 0 0 1 .5.5 5 5 0 0 1-5 5 .5.5 0 0 1 0-1 4 4 0 0 0 4-4 .5.5 0 0 1 .5-.5z"
            /></svg
          >Crew Interrupt Conditions
        </p>
        <p id="center-main-slot-sub-heading">
          30° sustained altitude error
          <span style="position: relative; right: -44%;"
            >FAR FIELD POINTING</span
          >
        </p>
        <p id="center-main-slot-sub-heading">
          600° /m altitude rate
          <span style="position: relative; right: -51.5%;"
            >FAR FIELD POINTING</span
          >
        </p>
      </div>
      <div style="top: 52.5%;" class="center-main-slot">
        <p id="center-main-slot-heading">
          <svg
            class="svg"
            style="left: 0%; top: 15%;"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
          >
            <path
              style="fill: #20fbfd;"
              d="M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM8 4a4 4 0 0 0-4 4 .5.5 0 0 1-1 0 5 5 0 0 1 5-5 .5.5 0 0 1 0 1zm4.5 3.5a.5.5 0 0 1 .5.5 5 5 0 0 1-5 5 .5.5 0 0 1 0-1 4 4 0 0 0 4-4 .5.5 0 0 1 .5-.5z"
            /></svg
          >Crew Deorbit Preparation
        </p>
        <p id="center-main-slot-sub-heading">
          Deorbit burn - -3 hrs
          <span style="position: relative; right: -33%;"
            >On SpaceX, On, begin procedure 4.700</span
          >
        </p>
        <p id="center-main-slot-sub-heading">
          NLT Deorbit Burn - 1hr
          <span style="position: relative; right: -54%;"
            >Deorbit Burn Brief</span
          >
        </p>
        <p id="center-main-slot-sub-heading">
          NLT Deorbit Burn - 30 min<span
            style="position: relative; right: -41%;"
            >Review Reference Content</span
          >
        </p>
        <p id="center-main-slot-sub-heading">
          Deorbit, entry and landing Go/No-Go<span
            style="position: relative; right: -44%;"
            >Acknowledge</span
          >
        </p>
      </div>
      <div style="top: 82.5%;" class="center-main-slot">
        <p id="center-main-slot-heading" style="border: none;">
          1 Monitor slow to free-flight altitude (Sun+GEO pointing)
        </p>
        <p id="center-main-slot-heading" style="border: none;">
          2 After SpaceX GO for deorbit, verify entry is enabled:
        </p>
        <p
          style="width: 100%; left: 0%; font-size: 0.65em; padding-top: 1.5%; padding-bottom: 1.5%; color: rgba(255, 255, 255, 0.5); height: 7.5%; border-top: 1px solid rgba(255, 255, 255, 0.75); border-bottom: 1px solid rgba(255, 255, 255, 0.75); position: relative;"
        >
          ENTRY ENABLED
          <span style="position: relative; right: -35%;">True</span>
          <span
            style="color: white; font-size: 1em; position: relative; right: -67.5%;"
            >False</span
          >
        </p>
        <p id="center-main-slot-heading" style="border: none;">
          3 After entry is enabled, Dragon transitions to Claw
        </p>
      </div>
    </div>
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>
    <p
      style="position: absolute; color: white; right: 0%;  font-size: 0.5vw; right: 9%; top: 82.5%;"
    >
      Camera
    </p>
    <p
      style="position: absolute; color: white; right: 0%; font-size: 0.6vw; transform: translate(-50%, -50%); left: 91.7%; top: 86%;"
    >
      {{ viewHeading }}
    </p>
    <p
      v-if="currentComponent === 'view-00'"
      id="top-menu-heading"
      style="left: 60%; top: 87.5%;"
    >
      TARGET LATITUDE
    </p>
    <p
      v-if="currentComponent === 'view-00'"
      id="top-menu-number"
      style="font-size: 1.25em; font-weight: 500; left: 60%; top: 90%;"
    >
      26° 15.00° N
    </p>
    <p
      v-if="currentComponent === 'view-00'"
      id="top-menu-heading"
      style="left: 72.5%; top: 87.5%;"
    >
      TARGET LONGITUDE
    </p>
    <p
      v-if="currentComponent === 'view-00'"
      id="top-menu-number"
      style="font-size: 1.25em; font-weight: 500; left: 72.5%; top: 90%;"
    >
      26° 15.00° N
    </p>
    <button @click="swapComponent()" type="submit" id="swap-view">
      <svg id="view-dash" width="15" height="5" viewBox="0 0 10 3">
        <rect width="10" height="10" class="white-svg" />
      </svg>
      NEXT VIEW
    </button>
  </div>
</template>

<script>
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import NavEarth from '../components/NavEarth.vue'
import Capsule from '../components/Capsule.vue'

var View01 = {
  template: `<div id="earth" ref="canvas1"></div>`,
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
      200
    )
    this.camera.position.set(70, 40, 80)
    this.scene = new THREE.Scene()
    this.scene.add(this.camera)
    this.ambientLight = new THREE.AmbientLight(0x050505)
    this.sunLight = new THREE.DirectionalLight(0xffffff, 4.0)
    this.sunLight.position.set(2, 0, 10).normalize()

    const torus = new THREE.Mesh(
      new THREE.TorusGeometry(12, 0.1, 6, 90),
      new THREE.MeshStandardMaterial({ color: 0x020738 })
    )
    torus.rotation.set(5, 2.125, 0)
    torus.scale.set(5, 5, 5)
    this.scene.add(torus)

    this.scene.add(this.ambientLight)
    this.scene.add(this.sunLight)

    const earthMaterial = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      shininess: 20
    })
    textureLoader.load(
      require('../assets/earth/earth_atmos_2048_edited.jpg'),
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

    const earthGeometry = new THREE.SphereBufferGeometry(55, 30, 24)

    // eslint-disable-next-line no-unused-vars
    const earth = new THREE.Mesh(earthGeometry, earthMaterial)
    this.scene.add(earth)

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    this.renderer.setSize(this.size, this.size)
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    this.renderer.outputEncoding = THREE.sRGBEncoding
    this.renderer.autoClear = false
    this.controls = new OrbitControls(this.camera, this.renderer.domElement)
    this.controls.enableDamping = true
    this.controls.enableZoom = false
    this.controls.enableRotate = true
    this.controls.enablePan = false
    this.controls.minZoom = Math.PI
    this.controls.maxZoom = Math.PI
  },
  data(){
    return {
      active: true
    }
  },
  mounted() {
   
    this.$refs.canvas1.appendChild(this.renderer.domElement)
    this.animate()
    this.active = true
    window.addEventListener('resize', this.resizeScreen)
  },
   beforeUnmount() {
     this.active = false
    this.scene = null
    this.renderer.dispose()
    
  },
  methods: {
    animate() {
      if(this.active){requestAnimationFrame(this.animate)}
      this.renderer.render(this.scene, this.camera)
      this.sunLight.intensity = 4.0
      // this.controls.update()
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
  }
}

// eslint-disable-next-line no-unused-vars

export default {
  name: 'First',
  props: [],
  data() {
    return {
      currentComponent: 'view-01',
      count: 1,
      centerMainHeading: [
        'Deport & Burn',
        'Coast to Trunk Jettison',
        'Claw Separation',
        'Procedure',
        'Manual Chute'
      ],
      centerMainHeadingSelection: 1,
      splashDown: 51,
      inertial: 7.69,
      altitude: 393.3,
      apogee: 416.2,
      perigee: 379.4,
      inclination: 51.62,
      viewHeading: 'Auto - Map IO'
    }
  },
  components: {
    'view-00': View01,
    'view-01': NavEarth,
    'view-02': Capsule
  },
  created() {},

  mounted() {
    this.topNumbers()
  },

  methods: {
    swapComponent() {
      this.count = (this.count + 1) % 3
   
      this.currentComponent = 'view-0' + this.count
      switch (this.currentComponent) {
        case 'view-00':
          this.viewHeading = 'Auto - Earth IO'
          break
        case 'view-01':
          this.viewHeading = 'Auto - Map IO'
          break
        case 'view-02':
          this.viewHeading = 'Auto - Capsule IO'
          break
      }
    },
    topNumbers() {
      const randomizer = Math.random()
    
      this.splashDown = Math.round(
        this.splashDown + (randomizer < 0.5 ? -1 : 1)
      )
      this.inertial =
        Math.round((this.inertial + (randomizer * 5 - 2)) * 100) / 100
      this.altitude =
        Math.round((this.altitude + (randomizer * 10 - 5)) * 10) / 10
      this.apogee = Math.round((this.apogee + (randomizer * 10 - 5)) * 10) / 10
      this.perigee =
        Math.round((this.perigee + (randomizer * 10 - 5)) * 10) / 10
      this.inclination =
        Math.round((this.inclination + (randomizer * 5 - 2)) * 100) / 100
      setTimeout(this.topNumbers, 1000)
    }
  },
  beforeRouteUpdate() {},
  computed: {}
}
</script>

<style scoped>
.svg {
  /* border: 1px solid tomato; */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  padding-bottom: 0;
}
.arrows,
.topLeftSquare,
.white-svg {
  fill: white;
  stroke: white;
}

#view-dash {
  position: relative;
  padding-right: 5%;
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
}

/* VIEW 1 */
#earth {
  top: 51.5%;
  left: 50%;
  position: absolute;
  transform: translate(10%, -50%);
  overflow: hidden;
}

/* VIEW 2 */
#scroll-earth-wrapper {
  overflow: hidden;
  top: 10%;
  left: 40.5%;
  position: absolute;
  /* transform: translate(10%, -50%); */
  height: 90%;
  width: 60%;
}

#scroll-earth:hover {
  /* background-color: green; */
}

#swap-view {
  width: 10%;
  height: auto;
  top: 90%;
  right: 5%;
  position: absolute;
  background-color: #020738;
  border: 1px solid white;
  color: white;
  text-align: center;
  padding: 1em 1em 1em 1em;
  border-radius: 100px;
  /* transform: translate(10%, -50%); */
  overflow: hidden;
}

#swap-view:hover {
  background-color: rgba(255, 255, 255, 0.3);
}

#swap-view:active {
  background-color: white;
  color: #020738;
}

#center-panel {
  position: absolute;
  top: calc(100vh * 0.0952);
  height: calc(100% - min(100px, calc(100% * 0.1)));
  /* border-radius: 0 0 0 30px; */
  width: 35%;
  left: min(100px, calc(100vw * 0.055));
  border: 1px solid white;
  box-sizing: border-box;
}

#center-main-heading {
  position: absolute;
  font-size: 1.25em;
  font-weight: 750;
  top: 3%;
  left: 30%;
  /* border: 1px solid red; */
  transition: color 0.5s ease-out;
}

#center-main-sub-heading {
  position: absolute;
  font-size: 0.75em;
  left: 80%;
  /* border: 1px solid red; */
}

.center-main-slot {
  padding-left: 2%;
  padding-right: 2%;
  /* padding-bottom: 2%; */
  /* padding-top: -1%; */
  overflow: hidden;
  position: absolute;
  width: 90%;
  height: auto;
  background: #111b52;
  left: 50%;
  transform: translate(-50%, -50%);
  /* border: 1px solid red; */
}

#center-main-slot-heading {
  font-size: 0.85em;
  font-weight: 650;
  /* position: absolute; */
  padding-bottom: 5px;
  border-bottom: 1px solid white;
}

#center-main-slot-heading p {
  left: 10%;
  /* position: absolute; */
}

#center-main-slot-heading svg {
  /* border: 1px solid tomato; */
  /* top: 70%; */
  /* left: 10%; */
  /* transform: translate(-50%, -50%); */
  transform: scale(1.25);
  padding: 5px;
  /* left: 100%; */
  position: relative;
  padding-bottom: 0;
}

#center-main-slot-sub-heading {
  font-size: 0.65em;
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
  position: absolute;
  flex: 1;
  left: 0;
  /* top: calc(100vh * 0.1); */
  height: calc(100% - min(100px, calc(100% * 0.1)));
  border-radius: 0 0 0 30px;
  width: min(100px, calc(100vw * 0.055));
  border: 1px solid white;
  box-sizing: border-box;
  overflow: hidden;
}

#side-button {
  position: absolute;
  height: 10%;
  width: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 70%;
  border-radius: 10%;
  background: transparent;
  color: white;
  overflow: hidden;
  /* transition: all 0.5s ease-in; */
}

#top-menu-heading {
  position: absolute;
  color: white;
  font-size: 0.75em;
  top: 0%;
}

#top-menu-number {
  position: absolute;
  color: white;
  font-size: 1.25em;
  font-weight: 600;
  top: 15%;
}
</style>
