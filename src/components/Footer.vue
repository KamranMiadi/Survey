<template>
  <div id="Footer">
    <div class="container main-container">
      <div class="row align-items-center justify-content-center" style="height: 700px;">
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
#Footer .container .row{
  height: 60px !important;
  bottom: 0 !important;
  text-align: center !important;
  align-self: center !important;
  align-items: center !important;
  align-content: center !important;
  position: absolute;
}
</style>
