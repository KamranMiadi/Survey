<template>
  <div id="LastPage">
    <div class="container main-container">
      <div id="lastText" class="row align-items-center justify-content-center" style="height: 700px;">
        <div >
          <p>با تشکر از همکاری و پاسخگویی شما در پرسشنامه.</p>
          <button id="btn" type="submit" class="btn col" @click="goToَUserInfo()">خروج</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LastPage',
  data () {
    return {}
  },
  methods: {
    created () {},
    goToَUserInfo () {
      this.$router.push({ name: 'UserInfo' })
    },
    onSubmit () {
      console.log('---------sdsd---------')
    }
  }
}
</script>
<style scoped>
#lastText {
  background-color: rgb(27, 85, 71);
  border-radius: 20px;
}

#btn {
  background-color: rgb(43, 172, 177);
  color: #fff;
  font-size: 18px;
}

#btn:hover {
  box-shadow: 0 0 8px 5px rgba(6, 217, 224, 0.3);
}
</style>
