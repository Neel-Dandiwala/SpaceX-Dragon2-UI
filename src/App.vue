<template>
  <div id="app">
    <div id="flashMessage" v-if="GStore.flashMessage">
      {{ GStore.flashMessage }}
    </div>
    <router-view />
    <nav>
      <router-link :to="{ name: 'EventList' }" @click="indicator"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-record-circle" viewBox="0 0 16 16">
  <path d="M 8 15 A 7 7 0 1 1 8 1 a 7 7 0 0 1 0 14 z m 0 1 A 8 8 0 1 0 8 0 a 8 8 0 0 0 0 16 z M 13 8.1 a 3 3 0 1 1 -10 -0.1 a 3 3 0 0 1 10 0.1 z M 1.5 1.5 A 1 1 0 0 0 3.4 3.5 A 1 1 0 0 0 1.5 1.5 M 11.5 12.5 A 1 1 0 0 0 13.4 15.5 A 1 1 0 0 0 11.5 12.5"/>
</svg></router-link> |
      <router-link :to="{ name: 'About' }" @click="indicator"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M 8 4 a 0.5 0.5 0 0 1 0.5 0.5 v 3 h 3 a 0.5 0.5 0 0 1 0 1 h -3 v 3 a 0.5 0.5 0 0 1 -1 0 v -3 h -3 a 0.5 0.5 0 0 1 0 -1 h 3 v -3 A 0.5 0.5 0 0 1 8 4 z M 7.5 7.5 A 1 1 0 0 0 7.5 8.5 A 1 1 0 0 0 8.5 8.5 A 1 1 0 0 0 8.5 7.5 A 1 1 0 0 0 7.5 7.5 M 8 7.6 C 7.5 7.7 7.5 8.3 8 8.4 C 8.5 8.3 8.5 7.7 8 7.6"/>
</svg></router-link> |
      <router-link :to="{ name: 'EventRegister' }" @click="indicator">About</router-link> |
      <router-link :to="{ name: 'NetworkError' }" @click="indicator"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-folder-fill" viewBox="0 0 16 16">
  <path d="M 9.828 3 h 3.982 a 2 2 0 0 1 1.19 2 l 0 7 A 2 2 0 0 1 13.174 14 H 2.825 a 2 2 0 0 1 -1.825 -2 l 0 -7 l 0 -1 L 1 3 l 0 -2 h 7 L 9.828 3 z z M 8 5 A 1 1 0 0 0 8 12 A 1 1 0 0 0 8 5 M 8 12 L 5 7 L 11 7 Z"/>
</svg></router-link> |
      <router-link :to="{ name: 'Fifth' }" @click="indicator"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear-wide" viewBox="0 0 16 16">
  <path d="M 8.932 0.727 c -0.243 -0.97 -1.62 -0.97 -1.864 0 l -0.071 0.286 a 0.96 0.96 0 0 1 -1.622 0.434 l -0.205 -0.211 c -0.695 -0.719 -1.888 -0.03 -1.613 0.931 l 0.08 0.284 a 0.96 0.96 0 0 1 -1.186 1.187 l -0.284 -0.081 c -0.96 -0.275 -1.65 0.918 -0.931 1.613 l 0.211 0.205 a 0.96 0.96 0 0 1 -0.434 1.622 l -0.286 0.071 c -0.97 0.243 -0.97 1.62 0 1.864 l 0.286 0.071 a 0.96 0.96 0 0 1 0.434 1.622 l -0.211 0.205 c -0.719 0.695 -0.03 1.888 0.931 1.613 l 0.284 -0.08 a 0.96 0.96 0 0 1 1.187 1.187 l -0.081 0.283 c -0.275 0.96 0.918 1.65 1.613 0.931 l 0.205 -0.211 a 0.96 0.96 0 0 1 1.622 0.434 l 0.071 0.286 c 0.243 0.97 1.62 0.97 1.864 0 l 0.071 -0.286 a 0.96 0.96 0 0 1 1.622 -0.434 l 0.205 0.211 c 0.695 0.719 1.888 0.03 1.613 -0.931 l -0.08 -0.284 a 0.96 0.96 0 0 1 1.187 -1.187 l 0.283 0.081 c 0.96 0.275 1.65 -0.918 0.931 -1.613 l -0.211 -0.205 a 0.96 0.96 0 0 1 0.434 -1.622 l 0.286 -0.071 c 0.97 -0.243 0.97 -1.62 0 -1.864 l -0.286 -0.071 a 0.96 0.96 0 0 1 -0.434 -1.622 l 0.211 -0.205 c 0.719 -0.695 0.03 -1.888 -0.931 -1.613 l -0.284 0.08 a 0.96 0.96 0 0 1 -1.187 -1.186 l 0.081 -0.284 c 0.275 -0.96 -0.918 -1.65 -1.613 -0.931 l -0.205 0.211 a 0.96 0.96 0 0 1 -1.622 -0.434 L 8.932 0.727 z M 8 12.997 a 4.998 4.998 0 1 1 0 -9.995 a 4.998 4.998 0 0 1 0 9.996 z M 8 4 L 5 10 L 11 10 Z"/>
</svg></router-link> |
      <div class="marker" ref="marker" />
    </nav>
  </div>
</template>
<script>
// import { isObjectMember } from '@babel/types'

export default {
  inject: ['GStore'],
  methods: {
    indicator(e){
      // let marker = this.$el.querySelector('.marker')
      this.$refs.marker.style.left = e.target.offsetLeft + 'px'
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
