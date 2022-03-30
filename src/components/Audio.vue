<template>
  <div id="inner-screen"></div>
</template>

<script>
export default {
  name: 'Audio',
  props: [],
  data() {
    return {
     
    }
  },
  mounted() {
    
  },
  methods: {
    
  }
}
</script>

<style scoped>

#inner-screen {
  position: absolute;
  background: linear-gradient(to bottom, #020738, transparent),
            radial-gradient(55% 30% at 50% 75%, #57689a , #020738);
  height: 91.75vh;
  width: 98.325vw;
  bottom: 30px;
  top: 50%;
  left: 50%;
  /* bottom: 7em; */
  transform: translate(-50%, -50%);
  border-radius: 25px 25px 25px 25px;
  box-sizing: border-box;
  clip-path: polygon(0 0, 0 100%, 42.5% 100%, 45% 95%, 55% 95%, 57.5% 100%, 100% 100%, 100% 0)
}

</style>
