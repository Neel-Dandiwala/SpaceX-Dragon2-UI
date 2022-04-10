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
    this.capsuleScene = new THREE.Scene()
    this.capsuleScene.add(this.camera)
    this.ambientLight = new THREE.AmbientLight(0x050505)
    this.sunLight = new THREE.DirectionalLight(0xffffff, 4.0)
    this.sunLight.position.set(2, 0, 10).normalize()
    this.capsuleScene.add(this.ambientLight)
    this.capsuleScene.add(this.sunLight)

     gltfLoader.load(
      './spaceDragon.glb',
      gltf => {
        this.dragon = gltf.scene
        // iss.scale.set(0.025, 0.025, 0.025)
        this.dragon.rotation.set(0, 2, 0)
        this.dragon.position.set(-15.0, 5, 0)
        this.capsuleScene.add(this.dragon)
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
        this.capsuleScene.add(iss)
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
     this.capsuleScene.add(tempLight);
    // const lightGrid = new THREE.DirectionalLightHelper( tempLight, 5 );
    // this.scene.add(lightGrid);

    const frustum = new THREE.PerspectiveCamera( 30, window.innerWidth / window.innerHeight, 0.1, 100 );
    frustum.position.set(5, 5, -10)
    frustum.rotation.set(0,2,0)
    frustum.lookAt(-15, 5, 0)
    const helper = new THREE.CameraHelper(frustum)
    helper.rotation.set(270, 5, 0)
    this.capsuleScene.add(helper)

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
    this.capsuleScene.add(this.earth)

    this.capsuleRenderer = new THREE.WebGLRenderer({ antialias: true })
    this.capsuleRenderer.setSize(window.innerWidth, window.innerHeight)
    this.capsuleRenderer.setClearColor(0x000000)
    this.capsuleRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    this.capsuleRenderer.outputEncoding = THREE.sRGBEncoding
    // this.capsuleRenderer.autoClear = false
    this.controls = new OrbitControls(this.camera, this.capsuleRenderer.domElement)
    this.controls.enableDamping = true
    this.controls.enableZoom = false
    this.controls.enableRotate = false
    this.controls.enablePan = false
    this.controls.minZoom = Math.PI
		this.controls.maxZoom = Math.PI
    this.clock = new THREE.Clock()
  },
  mounted() {
    console.log(this.capsuleScene)
    this.$refs.canvas2.appendChild(this.capsuleRenderer.domElement)
    this.animate()
    console.log(this.$refs.canvas2)
    window.addEventListener('resize', this.resizeScreen)
  },
  beforeUnmount() {
   // this.disposeHierarchy(this.dragon, this.disposeNode)
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
      this.capsuleRenderer.render(this.capsuleScene, this.camera)
      this.sunLight.intensity = 2.0
      this.controls.update()
    },
    resizeScreen(e) {
        
    this.camera.aspect = e.target.innerWidth / e.target.innerHeight
      this.camera.updateProjectionMatrix()

      this.capsuleRenderer.setSize(e.target.innerWidth, e.target.innerHeight)
      this.capsuleRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
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
        this.capsuleScene.remove(node)
        this.capsuleRenderer.dispose() // ***EDIT*** improved even memory more original scene heap is 12.4 MB; add objects increases to 116 MB or 250 MB (different models), clearing always brings down to 13.3 MB ... there still might be some artifacts.
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
