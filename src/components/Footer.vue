<template>
  <div id="Footer">
    <div class="container main-container">
      <div class="row align-items-center justify-content-center" style="height: 700px;">
        <p>By Kamran Miadi.</p>
      </div>
    </div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {
  name: 'Footer',
  data () {
    return {}
  },
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#Footer {
  bottom: 0;
  width: 100%;
  text-align: center;
  padding: 0 25px;
  flex: 0 0 auto;
  z-index: 2;
  position: relative;
}
</style>
