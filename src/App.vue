<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
// import $ from 'jquery'
import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue' // Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

export default {
  name: 'App',
  data () {
    return {}
  },
  mounted () {}
}
</script>

<style>
html,
body {
  height: 100%;
  position: relative;
  text-align: right !important;
  font-family: "Vazir", sans-serif;
  direction: rtl;
}
#body {
  background-color: rgb(11, 63, 60);
  color: #fff;
  text-align: right !important;
  width: 100%;
  height: 100%;
  position: relative !important;
  display: block !important;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
