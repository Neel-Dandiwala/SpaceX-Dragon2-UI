<template>
  <body>
    <div class="site">
      <img class="hud-darken" src="../assets/hud-darken.png" />
      <img class="hud-ring" src="../assets/hud-ring.png" />
      <img class="hud-ring" src="../assets/hud-ring-inner.png" />
    </div>
    <div style="width:100vw;height:100vh;" id="canvas" ref="canvas"></div> 
  </body>
</template>

<script>
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
export default {
  name: 'EventList',
  props: [],
  components: {},
  data() {
    return {}
  },
  created() {
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
    this.renderer = new THREE.WebGLRenderer({ antialias: true })
    this.renderer.setSize(this.sizes.width, this.sizes.height)
    this.renderer.setClearColor(0x262837)
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    this.renderer.shadowMap.enabled = true
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap
    this.controls = new OrbitControls(this.camera, this.renderer.domElement)
    this.controls.enableDamping = true
  },

  mounted() {
    console.log(this.scene)
    this.$refs.canvas.appendChild(this.renderer.domElement)
    this.animate()
    window.addEventListener('resize', this.resizeScreen)
  },

  methods: {
    animate() {
      requestAnimationFrame(this.animate)
      this.renderer.render(this.scene, this.camera)
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

html, body {
  overflow: hidden;
}

.webgl {
  position: fixed;
  top: 0;
  left: 0;
  outline: none;
}

#canvas {
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
}
.hud-darken {
  /* position: absolute;
  display: block; */
  height: 650px;
  width: 650px;
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  overflow: hidden;
}
.hud-ring {
  /* position: absolute;
  display: block; */
  top: 50%;
  left: 50%;
  width: 450px;
  height: 450px;
  position: absolute;
  transform: translate(-50%, -50%);
}

.try {
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  justify-content: center;
  -ms-align-items: center;
  align-items: center;
}

.site {
  text-align: left;
}
</style>
