<template>
  <div id="back-box-popup"></div>
  <div id="white-border-popup"></div>
  <div id="inner-screen-popup">
    <div class="popup-panel" style="top: 50%;left: 50%;">
        <p style="position: relative; top: 10%; font-size: 1.25em;">4.011 - Suit Leak Check</p>
        <p style="position: relative; top: 7.5%; color: #20fbfd; font-weight: 600; font-size: 0.7em;">CLEAR</p>
        <p style="position: relative; top: 12.5%; font-weight: 600; font-size: 0.9em;">PROCEDURE COMPLETE</p>
        <p style="position: relative; font-size: 1.5em; width: 60%; color: rgba(255, 255, 255, 0.75); top: 20%; ">Crew can open their visors if desired but must not open zippers or disconnect umbilical</p>
      <button id="button-square" @click="ToggleSuitLeak()"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffffff" class="button-svg" viewBox="0 0 16 16">
  <circle cx="8" cy="8" r="8"/>
</svg></button>
    </div>
  </div>
</template>

<script>

export default {
  props: ['ToggleSuitLeak'],
  data() {
    return {}
  },
  methods: {},
  components: {},
  mounted() {
    console.log('VISIT')
  }
}
</script>

<style scoped>
svg {
  /* border: 1px solid tomato; */
  top: 0%;
  left: 0%;
  /* bottom: 7em; */
  /* transform: translate(-50%, -50%); */
  position: relative;
  padding-bottom: 0;
  z-index: 2;
  fill: white;
  /* stroke: white; */
}

p {
  top: 0%;
  left: 50%;
  /* bottom: 7em; */
  transform: translate(-50%, -50%);
  position: relative;
  padding-bottom: 0;
  z-index: 2;
  fill: white;
}

#back-box-popup {
  position: absolute;
  background-color: #020738;
  height: 95vh;
  width: 100%;
  /* bottom: 30px; */
  top: 0;
  border-radius: 0 0 30px 30px;
  box-sizing: border-box;
  border-bottom: 0.5px solid white;
  border-left: 1px solid white;
  border-right: 1px solid white;
  /* z-index: 3; */
  overflow: hidden;
  /* display: flex; */
}

#white-border-popup {
  position: absolute;
  background-color: #111b52;
  height: 92vh;
  width: 98.5vw;
  bottom: 30px;
  top: 50%;
  left: 50%;
  /* bottom: 7em; */
  transform: translate(-50%, -50%);
  border-radius: 25px 25px 25px 25px;
  box-sizing: border-box;
}

#inner-screen-popup {
  overflow: hidden;
  position: absolute;
  background: #020738;
  height: 91.5vh;
  width: 98.125vw;
  /* bottom: 30px; */
  top: 50%;
  left: 50%;
  /* bottom: 7em; */
  transform: translate(-50%, -50%);
  border-radius: 25px 25px 25px 25px;
  box-sizing: border-box;
}

.popup-panel {
  height: 70%;
  width: 50%;
  background: #111b52;
  border: 2px solid #313d7b;
  transform: translate(50%, 20%);
  text-align: center;

}

#button-square {
  position: absolute;
  border: 1px solid white;
  text-align: center;
  width: 10%;
  height: 0;
  bottom: 3.5%;
  top: 75%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  padding-bottom: 10%;
  overflow: hidden;
  border-radius: 10%;
  background-color: rgba(2, 7, 56, 0.75);
  color: white;
}

#button-square:active{
    background-color: white;
}

.button-svg {
  width: 30px;
  height: 30px;
  left: 50%;
  top: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
}

</style>
