<template>
  <div id="UserInfo">
    <div class="container main-container">
      <div class="row align-items-center justify-content-center" style="height: 700px;">
        <div id="form" class="border-0 col-lg-6 col-sm-8">
          <form class="mb-4" v-on:submit.prevent="onSubmit">
            <fieldset class="mb-2">
              <legend>اطلاعات شخصی</legend>
              <div class="form-group">
                <label for="major">*رشته تحصیلی :</label>
                <select class="form-control" v-model="userInfo.major" required>
                  <option disabled value>.رشته تحصیلی خود را انتخاب کنید</option>
                  <option>مهندسی</option>
                  <option>پزشکی</option>
                  <option>داروسازی</option>
                  <option>دندان پزشکی</option>
                </select>
              </div>
              <div class="form-group">
                <label for="age">سن :</label>
                <input
                  id="age"
                  class="form-control"
                  type="text"
                  placeholder="سن خود را وارد کنید "
                  v-model="userInfo.age"
                />
              </div>
              <div class="form-group">
                <label for="engPerc">درصد زبان انگلیسی در کنکور :</label>
                <input
                  id="engPerc"
                  class="form-control"
                  type="text"
                  placeholder="درصد زبان انگلیسی خود را وارد کنید "
                  v-model="userInfo.engPerc"
                />
              </div>
              <div class="form-group">
                <label for="province">استان محل تحصیل دبیرستان :</label>
                <input
                  id="province"
                  class="form-control"
                  type="text"
                  placeholder="استان محل تحصیل دبیرستان خود را وارد کنید "
                  v-model="userInfo.province"
                />
              </div>
              <div class="form-group">
                <label for="gender">جنسیت :</label>
                <select class="form-control" v-model="userInfo.gender">
                  <option disabled value>جنسیت خود را انتخاب کنید</option>
                  <option>مرد</option>
                  <option>زن</option>
                </select>
              </div>
              <div class="form-group">
                <label for="year">سال چندم دانشگاه هستید؟</label>
                <select class="form-control" v-model="userInfo.year">
                  <option disabled value>سال تحصیلی خود را انتخاب کنید</option>
                  <option>اول</option>
                  <option>دوم</option>
                  <option>سوم</option>
                  <option>اخر</option>
                </select>
              </div>
              <div class="form-group">
                <label
                  for="accessToMedia"
                >آیا به برنامه های رادیویی و تلویزیونی انگلیسی دسترسی دارید؟</label>
                <select class="form-control" v-model="userInfo.accessToMedia">
                  <option disabled value>انتخاب کنید</option>
                  <option>بله</option>
                  <option>خیر</option>
                </select>
              </div>
              <div class="form-group">
                <label
                  for="accessToEngMen"
                >در خارج از کلاس چندبار با یک انگلیسی زبان ارتباط داشته اید؟</label>
                <select class="form-control" v-model="userInfo.accessToEngMen">
                  <option disabled value>انتخاب کنید</option>
                  <option>اصلا</option>
                  <option>خیلی کم</option>
                  <option>گاهی اوقات</option>
                  <option>اغلب</option>
                  <option>خیلی زیاد</option>
                </select>
              </div>
              <div class="form-group">
                <label
                  for="accessToMedia"
                >آیا تا به حال به کشورهای انگلیسی زبان سفر کرده یا در آن ها زندگی کرده اید؟</label>
                <select class="form-control" v-model="userInfo.hasTraveled">
                  <option disabled value>انتخاب کنید</option>
                  <option>بله</option>
                  <option>خیر</option>
                </select>
              </div>
              <div class="form-group">
                <label for="startedAt">چه زمانی شروع به یادگیری زبان انگلیسی کرده اید؟</label>
                <select class="form-control" v-model="userInfo.startedLearningAt">
                  <option disabled value>انتخاب کنید</option>
                  <option>پیش دبستانی</option>
                  <option>مدرسه ابتدایی</option>
                  <option>راهنمایی</option>
                  <option>سال اول دبیرستان</option>
                </select>
              </div>
              <div class="form-group">
                <label for="learningTime">چند سال است که در حال یادگیری زبان انگلیسی هستید؟</label>
                <input
                  id="learningTime"
                  class="form-control"
                  type="text"
                  placeholder
                  v-model="userInfo.learningTime"
                />
              </div>
            </fieldset>
            <button id="btn" type="submit" class="btn col" @click="sendUserInfo()">ورود به پرسشنامه</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const axios = require('axios')
export default {
  name: 'UserInfo',
  data () {
    return {
      userInfo: {
        userId: '',
        firstName: '',
        lastName: '',
        major: '',
        age: '',
        gender: '',
        engPerc: '',
        year: '',
        province: '',
        accessToMedia: '',
        accessToEngMen: '',
        hasTraveled: '',
        startedLearningAt: '',
        learningTime: ''
      }
    }
  },
  methods: {
    created () {},
    goToSurvey () {
      this.$router.push({ name: 'Survey' })
    },
    onSubmit () {
      console.log('---------sdsd---------')
    },
    sendUserInfo () {
      const userInfo = {
        userId: this.userInfo.userId,
        major: this.userInfo.major,
        age: this.userInfo.age,
        gender: this.userInfo.gender,
        engPerc: this.userInfo.engPerc,
        year: this.userInfo.year,
        province: this.userInfo.province,
        accessToMedia: this.userInfo.accessToMedia,
        accessToEngMen: this.userInfo.accessToEngMen,
        hasTraveled: this.userInfo.hasTraveled,
        startedLearningAt: this.userInfo.startedLearningAt,
        learningTime: this.userInfo.learningTime
      }
      const options = {
        method: 'POST',
        url: 'https://survey-hamid-soodmand.liara.run/personalInfo',
        data: userInfo
      }
      if (userInfo.major === '') {
        alert('لطفا رشته خود را وارد کنید.')
      } else {
        axios(options)
          .then(result => {
            console.log('------------------', result)
            localStorage.userId = result.data.response.userId
            this.goToSurvey()
          })
          .catch(err => {
            console.log('------------------', err)
            alert('خطا در ارسال اطلاعات کاربر به سرور.')
          })
      }
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
.container .row {
  height: 1440px !important;
}
</style>
