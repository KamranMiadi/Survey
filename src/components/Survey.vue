<template>
  <div id="Survey">
    <div class="container main-container">
      <div class="row align-items-center justify-content-center" style="height: 700px;">
        <div id="form" class="border-0 col-6 col-lg-10 pb-4 pt-4">
          <form class="mb-4" v-on:submit.prevent="onSubmit">
            <fieldset class="mb-2">
              <legend>لطفا به سوالات زیر پاسخ دهید (‪مقیاس مسئولیت پذیری یادگیری):</legend>
              <div>
                <label for="guid"> راهنمای گزینه ها </label>
                <ul id="guide">
                  <li
                    v-for="(item, index) in questions.firstQuizGuide" v-bind:key='index'
                  >{{ index + 1 }} - {{ item }}</li>
                </ul>
              </div>
              <div class="form-group">
                <label for="firstName">{{questions.firstQuiz[currentPage].text}} </label>
                <input
                  id="firstName"
                  class="form-control"
                  type="text"
                  placeholder="نام خود را وارد کنید "
                  required
                />
              </div>
            </fieldset>
            <div class="row justify-content-center">
              <button id="btn" type="submit" class="btn col-4" @click="next()">صفحه بعد</button>
              <div class="col-1"></div>
              <button id="btn" type="submit" class="btn col-4" @click="login2()">صفحه قبل</button>
            </div>
          </form>
          <span >سوال {{currentPage + 1}} از {{totalPage}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Survey',
  data () {
    return {
      questions: {
        firstQuizGuide: ['یک', 'دو', 'سه', 'چهار', 'پنج', 'شش', 'هفت'],
        firstQuiz: [
          {
            text: 'سوال اول:',
            group: 'A',
            answers: [
              {
                text: 'گزینه یک',
                point: 5
              },
              {
                text: 'گزینه دو',
                point: 10
              }
            ],
            pickedAnswer: ''
          },
          {
            text: 'سوال دوم:',
            group: '‌B',
            answers: [
              {
                text: 'گزینه یک',
                point: 5
              },
              {
                text: 'گزینه دو',
                point: 10
              }
            ],
            pickedAnswer: ''
          },
          {
            text: 'سوال سوم:',
            group: '‌B',
            answers: [
              {
                text: 'گزینه یک',
                point: 5
              },
              {
                text: 'گزینه دو',
                point: 10
              }
            ],
            pickedAnswer: ''
          },
          {
            text: 'سوال چهارم:',
            group: '‌B',
            answers: [
              {
                text: 'گزینه یک',
                point: 5
              },
              {
                text: 'گزینه دو',
                point: 10
              }
            ],
            pickedAnswer: ''
          },
          {
            text: 'سوال پنجم:',
            group: '‌B',
            answers: [
              {
                text: 'گزینه یک',
                point: 5
              },
              {
                text: 'گزینه دو',
                point: 10
              }
            ],
            pickedAnswer: ''
          },
          {
            text: 'سوال ششم:',
            group: '‌B',
            answers: [
              {
                text: 'گزینه یک',
                point: 5
              },
              {
                text: 'گزینه دو',
                point: 10
              }
            ],
            pickedAnswer: ''
          },
          {
            text: 'سوال هفتم:',
            group: '‌B',
            answers: [
              {
                text: 'گزینه یک',
                point: 5
              },
              {
                text: 'گزینه دو',
                point: 10
              }
            ],
            pickedAnswer: ''
          },
          {
            text: 'سوال هشتم:',
            group: '‌B',
            answers: [
              {
                text: 'گزینه یک',
                point: 5
              },
              {
                text: 'گزینه دو',
                point: 10
              }
            ],
            pickedAnswer: ''
          }
        ]
      },
      totalPage: 8,
      currentPage: 0
    }
  },
  methods: {
    created () {},
    progress () {},
    next () {
      if (this.currentPage <= 7) {
        this.currentPage += 1
      } else if (this.currentPage > 7) {
        alert('شما به همه سوالات پاسخ داده اید!')
      }
    },
    mounted () {},
    calcScore () {},
    onSubmit () {
      console.log('------------------')
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
</style>
