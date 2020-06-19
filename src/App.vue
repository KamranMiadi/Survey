<template>
  <div id="app">
    <router-view />
    <footer class="footer">
      <div class="container">
        <div class="col-12">
          <p class="text-center">By Kamran Miadi</p>
          <a href="https://github.com/KamranMiadi">github.com/KamranMiadi</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
// import $ from 'jquery'
import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import $ from 'jquery'
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

export default {
  name: 'App',
  data () {
    return {}
  },
  mounted () {
    $(document).ready(function () {
      $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active')
      })
    })
  }
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
.fluid-container.footer {
  background: rgb(11, 161, 124);
  position: fixed;
  bottom: 0;
}
.fluid-container.footer > *:last-child {
  margin-bottom: 0px;
  color: #fff;
}
footer {
  position: fixed;
  align-self: center;
  bottom: 0;
}
</style>
