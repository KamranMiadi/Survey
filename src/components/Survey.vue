<template>
  <div id="UserInfo">
    <div class="container main-container">
      <div class="row align-items-center justify-content-center" style="height: 700px;">
        <div id="form" class="border-0 col-6 col-lg-4">
          <form class="mb-4" v-on:submit.prevent="onSubmit">
            <fieldset class="mb-2">
              <legend>ورود</legend>
              <div class="form-group">
                <label for="firstName">نام :</label>
                <input
                  id="firstName"
                  class="form-control"
                  type="text"
                  placeholder="نام خود را وارد کنید "
                  v-model="firstName"
                  required
                />
              </div>
              <div class="form-group">
                <label for="lastName">نام خانوادگی :</label>
                <input
                  id="lastName"
                  class="form-control"
                  type="text"
                  placeholder="نام خانوادگی خود را وارد کنید "
                  v-model="lastName"
                  required
                />
              </div>
            </fieldset>
            <button id="btn" type="submit" class="btn col" @click="login2()"> ورود به پرسشنامه</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserInfo',
  data () {
    return {
      firstName: '',
      lastName: '',
      questions: [
        {

        },
        {

        }
      ]
    }
  },
  methods: {
    created () {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#form {
  background-color: rgb(27, 85, 71);
  border-radius: 20px;
}

#firstName,
#lastName{
  background-color: #fff !important;
  color: #1b1d1d;
  place-content: inherit;
}

::placeholder {
  color: rgb(187, 192, 194) !important;
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
