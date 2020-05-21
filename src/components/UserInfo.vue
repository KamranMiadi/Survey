<template>
  <div id="UserInfo">
    <div class="container main-container">
      <div class="row align-items-center justify-content-center" style="height: 700px;">
        <div id="form" class="border-0 col-6 col-lg-6">
          <form class="mb-4" v-on:submit.prevent="onSubmit">
            <fieldset class="mb-2">
              <legend>اطلاعات شخصی</legend>
               <div class="form-group">
                <label for="userId">شماره دانشجویی :</label>
                <input
                  id="userId"
                  class="form-control"
                  type="text"
                  placeholder="شماره دانشجویی خود را وارد کنید "
                  v-model="userId"
                  required
                />
              </div>
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
              <div class="form-group">
                <label for="major">رشته تحصیلی :</label>
                <input
                  id="major"
                  class="form-control"
                  type="text"
                  placeholder="رشته تحصیلی خود را وارد کنید "
                  v-model="major"
                  required
                />
              </div>
              <div class="form-group">
                <label for="age">سن :</label>
                <input
                  id="age"
                  class="form-control"
                  type="text"
                  placeholder="سن خود را وارد کنید "
                  v-model="age"
                  required
                />
              </div>
               <div class="form-group">
                <label for="engPerc">درصد زبان انگلیسی در کنکور :</label>
                <input
                  id="engPerc"
                  class="form-control"
                  type="text"
                  placeholder="درصد زبان انگلیسی خود را وارد کنید "
                  v-model="engPerc"
                  required
                />
              </div>
              <div class="form-group">
                <label for="province">استان محل تحصیل دبیرستان :</label>
                <input
                  id="province"
                  class="form-control"
                  type="text"
                  placeholder="استان محل تحصیل دبیرستان خود را وارد کنید "
                  v-model="province"
                  required
                />
              </div>
              <div class="form-group">
                <label for="gender">جنسیت :</label>
                <select class="form-control" v-model="gender">
                  <option disabled value>جنسیت خود را انتخاب کنید</option>
                  <option>مرد</option>
                  <option>زن</option>
                </select>
              </div>
              <div class="form-group">
                <label for="year">سال چندم دانشگاه هستید؟ </label>
                <select class="form-control" v-model="year">
                  <option disabled value>سال تحصیلی خود را انتخاب کنید</option>
                  <option>اول</option>
                  <option>دوم</option>
                  <option>سوم</option>
                  <option>اخر</option>
                </select>
              </div>
            </fieldset>
            <button id="btn" type="submit" class="btn col" @click="login2()">ورود به پرسشنامه</button>
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
      userId: '',
      firstName: '',
      lastName: '',
      major: '',
      age: '',
      gender: '',
      engPerc: '',
      year: '',
      province: ''
    }
  },
  methods: {
    created () {}
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
#lastName {
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
