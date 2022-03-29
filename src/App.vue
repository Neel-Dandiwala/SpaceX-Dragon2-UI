<template>
  <div id="app">
    <div id="flashMessage" v-if="GStore.flashMessage">
      {{ GStore.flashMessage }}
    </div>
    <router-view />
    <nav>
      <router-link :to="{ name: 'EventList' }" @click="indicator">Events</router-link> |
      <router-link :to="{ name: 'About' }" @click="indicator">About</router-link> |
      <router-link :to="{ name: 'Seat' }" @click="indicator">Seat</router-link> |
      <router-link :to="{ name: 'NetworkError' }" @click="indicator">NetowrkError</router-link>
      <div class="marker" />
    </nav>
  </div>
</template>

<script>
// import { isObjectMember } from '@babel/types'

export default {
  inject: ['GStore'],
  methods: {
    indicator(e){
      let marker = this.$el.querySelector('.marker')
      marker.style.left = e.target.offsetLeft + 'px'
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: white;
  margin: 0;
}

body {
  margin: 0;
  background-color: #111b52;
}

nav {
  padding: 0.5%;
  position: absolute;
  display: block;
  bottom: 0;
}

nav a {
  font-weight: bold;
  color: grey;
}
nav a.router-link-exact-active {
  color: white;
}

/* #nav a:nth-child(1) ~ #marker{
  left: 10;
  opacity: 1;
  background-image: linear-gradient(to bottom, rgba(255,0,0,0), rgba(255,255,255,1)); 
} */

.marker {
  position: absolute;
  /* padding-left: 7%; */
  height: 20px;
  width: 40px;
  background-image: linear-gradient(
    to bottom,
    rgba(255, 0, 0, 0),
    rgba(255, 255, 255, 1)
  );
  bottom: 0;
  transition: 0.7s;
  opacity: 1;
  /* z-index: -3; */
}

h4 {
  font-size: 20px;
}

@keyframes yellowfade {
  from {
    background: yellow;
  }
  to {
    background: transparent;
  }
}

#flashMessage {
  animation-name: yellowfade;
  animation-duration: 3s;
}
</style>
