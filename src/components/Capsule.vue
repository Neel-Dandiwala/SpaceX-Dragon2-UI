<template>
<div id="capsule-wrapper">
    <div id="capsule" ref="canvas2"></div>
</div>
</template>

<script>
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

// eslint-disable-next-line no-unused-vars


export default {
  name: 'Capsule',
  props: [],
  data() {
    return {
    }
  },
  created() {
    const textureLoader = new THREE.TextureLoader()
    // eslint-disable-next-line no-unused-vars
    const gltfLoader = new GLTFLoader()
    // this.earthSizes = {
    //   small: 300,
    //   medium: 400,
    //   large: 500
    // }
    // this.size =
    //   (window.innerWidth <= 1200 && window.innerWidth > 850) ||
    //   (window.innerHeight <= 650 && window.innerHeight > 450)
    //     ? this.earthSizes.medium
    //     : window.innerWidth < 850 || window.innerHeight < 450
    //     ? Math.min(
    //         this.earthSizes.small,
    //         Math.min(window.innerWidth, window.innerHeight)
    //       )
    //     : this.earthSizes.large


    this.size = 500
    this.camera = new THREE.PerspectiveCamera(
      65,
      window.innerWidth / window.innerHeight,
      0.1,
      200
    )
    this.camera.position.set(0, 5, 25)
    this.scene = new THREE.Scene()
    this.scene.add(this.camera)
    this.ambientLight = new THREE.AmbientLight(0x050505)
    this.sunLight = new THREE.DirectionalLight(0xffffff, 4.0)
    this.sunLight.position.set(2, 0, 10).normalize()
    this.scene.add(this.ambientLight)
    this.scene.add(this.sunLight)

     gltfLoader.load(
      './spaceDragon.glb',
      gltf => {
        this.dragon = gltf.scene
        // iss.scale.set(0.025, 0.025, 0.025)
        this.dragon.rotation.set(0, 2, 0)
        this.dragon.position.set(-15.0, 5, 0)
        this.scene.add(this.dragon)
      },
      progress => {
        console.log('Dragon in progress' + progress)
      },
      error => {
        console.log('Dragon crashed' + error)
      }
    )

      gltfLoader.load(
      './iss_lowpoly.glb',
      gltf => {
        const iss = gltf.scene
        iss.scale.set(0.5, 0.5, 0.5)
        iss.rotation.set(5, 6, 4)
        iss.position.set(5, 5, -10)
        this.scene.add(iss)
      },
      progress => {
        console.log('ISS in progress' + progress)
      },
      error => {
        console.log('ISS crashed' + error)
      }
    )

    const tempLight = new THREE.DirectionalLight( 0x0000FF, 0.1);
    tempLight.position.set(-10, 5, 0)
    // tempLight.rotation.set(50, 50, 50)
    tempLight.target.position.set(-15, 5, 0);
    tempLight.shadowCameraNear = 6; 
    tempLight.shadowCameraFar = 13;
     this.scene.add(tempLight);
    // const lightGrid = new THREE.DirectionalLightHelper( tempLight, 5 );
    // this.scene.add(lightGrid);

    const frustum = new THREE.PerspectiveCamera( 30, window.innerWidth / window.innerHeight, 0.1, 100 );
    frustum.position.set(5, 5, -10)
    frustum.rotation.set(0,2,0)
    frustum.lookAt(-15, 5, 0)
    const helper = new THREE.CameraHelper(frustum)
    helper.rotation.set(270, 5, 0)
    this.scene.add(helper)

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

    this.earth = new THREE.Mesh(earthGeometry, earthMaterial)
    this.earth.position.set(-10, -60, 0)
    this.scene.add(this.earth)

    this.renderer = new THREE.WebGLRenderer({ antialias: true })
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    this.renderer.setClearColor(0x000000)
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    this.renderer.outputEncoding = THREE.sRGBEncoding
    // this.renderer.autoClear = false
    this.controls = new OrbitControls(this.camera, this.renderer.domElement)
    this.controls.enableDamping = true
    this.clock = new THREE.Clock()
  },
  mounted() {
    console.log(this.scene)
    this.$refs.canvas2.appendChild(this.renderer.domElement)
    this.animate()
    console.log(this.$refs.canvas2)
    window.addEventListener('resize', this.resizeScreen)
  },
  methods: {
    animate() {
      requestAnimationFrame(this.animate)
      this.earth.rotation.z += 0.0001
      if(this.dragon){
        this.dragon.rotation.z += 0.01
      const elapsedTime = this.clock.getElapsedTime()
      this.dragon.position.y = 5 + Math.sin(elapsedTime * 1.5);
      }
      this.renderer.render(this.scene, this.camera)
      this.sunLight.intensity = 2.0
      this.controls.update()
    },
    resizeScreen(e) {
    //   this.size =
    //     (e.target.innerWidth <= 1200 && e.target.innerWidth > 850) ||
    //     (e.target.innerHeight <= 650 && e.target.innerHeight > 450)
    //       ? this.earthSizes.medium
    //       : e.target.innerWidth < 850 || e.target.innerHeight < 450
    //       ? Math.min(
    //           this.earthSizes.small,
    //           Math.min(e.target.innerWidth, e.target.innerHeight)
    //         )
    //       : this.earthSizes.large

    //   this.camera.aspect = this.size / this.size
    //   this.camera.updateProjectionMatrix()

    //   this.renderer.setSize(this.size, this.size)
    //   this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        
    this.camera.aspect = e.target.innerWidth / e.target.innerHeight
      this.camera.updateProjectionMatrix()

      this.renderer.setSize(e.target.innerWidth, e.target.innerHeight)
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    }
  }
 
}
</script>

<style scoped>

#capsule-wrapper {
  overflow: hidden;
  top: 10%;
  left: 40.5%;
  position: absolute;
  /* transform: translate(10%, -50%); */
  height: 90%;
  width: 60%;
  border: 1px solid tomato;
  /* z-index: -1; */
}

#capsule {
  /* background-image: url(http://localhost:8080/earth_modified.jpg); */
  position: absolute;
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  /* background-size: cover; */
  /* background-position: center; */
  top: 0;
  right: 0;
  /* transition: all 1s; */
  /* background-repeat: repeat; */
  /* overflow: hidden; */
}



</style>
