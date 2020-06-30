<template>
  <div id="Survey">
    <div class="container main-container">
      <div class="row align-items-center justify-content-center ">
        <div class="guide guide-pos pt-3 pb-3 col-9 col-sm-8 col-lg-6 mt-4 ">
          <div>
            <label for="guid">راهنمای گزینه ها</label>
            <ul id="guide">
              <li
                v-for="(item, index) in questions[currentQuizName + 'Guide']"
                v-bind:key="index"
              >{{ item }}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row align-items-center justify-content-center" style="height: 700px;">
        <div id="form" class="border-0 col-9 col-sm-10 col-lg-10 pb-4 pt-4 mt-4 mb-4">
          <form class="mb-4" v-on:submit.prevent="onSubmit">
            <fieldset class="mb-2">
              <legend>{{questions[currentQuizName + 'Header']}}</legend>
              <p>{{questions[currentQuizName + 'Desc']}}</p>
              <div
                class="form-group"
                v-for="(item, index) in questions[currentQuizName]"
                v-bind:key="index"
              >
                <label for="question">{{questions[currentQuizName][index].text}}</label>
                <div id="question">
                  <label
                    class="radio-inline"
                    v-for="(answer,index) in item.answers"
                    v-bind:key="index"
                  >
                    <input type="radio" v-bind:value="answer.point" v-model="item.pickedAnswer" />
                    {{answer.text}}
                  </label>
                </div>
              </div>
            </fieldset>
            <div class="row justify-content-center">
              <button id="btn" type="submit" class="btn col-4" @click="next()">{{buttonText}}</button>
              <div class="col-1"></div>
            </div>
          </form>
          <span>ازمون {{currentQuiz}} از {{totalQuiz}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
const axios = require('axios')
export default {
  name: 'Survey',
  data () {
    return {
      questions: {
        firstQuizGuide: [
          '1- استاد به طور عمده',
          '2- قطعا استاد بیشتر',
          '3- استاد کمی بیشتر',
          '4- هردو به یک میزان',
          '5- دانشجو کمی بیشتر',
          '6- قطعا دانشجو  بیشتر',
          '7- دانشجو به طور عمده'
        ],
        firstQuizHeader: 'مقیاس مسئولیت پذیری یادگیری',
        firstQuizDesc:
          'ریشه مطالعه و یادگیری دانشجو ممکن است تلاش های خودش یا مدرس هایش باشد. در کنار هر یک از فعالیت های زیر، یکی از شماره هایی که نشان می دهد چه کسی مسئولیت بیشتری دارد را علامت بزنید. به عنوان مثال، در مورد شماره 1  اگر اعتقاد دارید که وقتی یک دانشجو برای تست آماده نیست، دانشجو کمی نسبت به استاد مسئولیت بیشتری دارد، عدد 5 را علامت بزنید.',
        firstQuiz: [
          {
            text: '1. دانشجو آماده آزمون نیست',
            answers: [
              {
                text: 1,
                point: 1
              },
              {
                text: 2,
                point: 2
              },
              {
                text: 3,
                point: 3
              },
              {
                text: 4,
                point: 4
              },
              {
                text: 5,
                point: 5
              },
              {
                text: 6,
                point: 6
              },
              {
                text: 7,
                point: 7
              }
            ],
            pickedAnswer: ''
          },
          {
            text: '2. دانشجو انگیزه یادگیری در مدرسه را دارد',
            answers: [
              {
                text: 1,
                point: 1
              },
              {
                text: 2,
                point: 2
              },
              {
                text: 3,
                point: 3
              },
              {
                text: 4,
                point: 4
              },
              {
                text: 5,
                point: 5
              },
              {
                text: 6,
                point: 6
              },
              {
                text: 7,
                point: 7
              }
            ],
            pickedAnswer: ''
          },
          {
            text: '3. دانشجو تکالیف را انجام نم دهد یا ناقص انجام می دهد',
            answers: [
              {
                text: 1,
                point: 1
              },
              {
                text: 2,
                point: 2
              },
              {
                text: 3,
                point: 3
              },
              {
                text: 4,
                point: 4
              },
              {
                text: 5,
                point: 5
              },
              {
                text: 6,
                point: 6
              },
              {
                text: 7,
                point: 7
              }
            ],
            pickedAnswer: ''
          },
          {
            text: '4. دانشجو برای مشارکت در کلاس آماده نیست',
            answers: [
              {
                text: 1,
                point: 1
              },
              {
                text: 2,
                point: 2
              },
              {
                text: 3,
                point: 3
              },
              {
                text: 4,
                point: 4
              },
              {
                text: 5,
                point: 5
              },
              {
                text: 6,
                point: 6
              },
              {
                text: 7,
                point: 7
              }
            ],
            pickedAnswer: ''
          },
          {
            text: '5. دانشجو تکالیف نوشتنی را به خوبی می نویسد',
            answers: [
              {
                text: 1,
                point: 1
              },
              {
                text: 2,
                point: 2
              },
              {
                text: 3,
                point: 3
              },
              {
                text: 4,
                point: 4
              },
              {
                text: 5,
                point: 5
              },
              {
                text: 6,
                point: 6
              },
              {
                text: 7,
                point: 7
              }
            ],
            pickedAnswer: ''
          },
          {
            text: '6. دانشجو تکالیف خواندنی تعیین شده را میفهمد',
            answers: [
              {
                text: 1,
                point: 1
              },
              {
                text: 2,
                point: 2
              },
              {
                text: 3,
                point: 3
              },
              {
                text: 4,
                point: 4
              },
              {
                text: 5,
                point: 5
              },
              {
                text: 6,
                point: 6
              },
              {
                text: 7,
                point: 7
              }
            ],
            pickedAnswer: ''
          },
          {
            text: '7. دانشجو بحث کلاسی را نمیفهمد',
            answers: [
              {
                text: 1,
                point: 1
              },
              {
                text: 2,
                point: 2
              },
              {
                text: 3,
                point: 3
              },
              {
                text: 4,
                point: 4
              },
              {
                text: 5,
                point: 5
              },
              {
                text: 6,
                point: 6
              },
              {
                text: 7,
                point: 7
              }
            ],
            pickedAnswer: ''
          },
          {
            text: '8. دانشجو در کلاس درس شیطنت می کند',
            answers: [
              {
                text: 1,
                point: 1
              },
              {
                text: 2,
                point: 2
              },
              {
                text: 3,
                point: 3
              },
              {
                text: 4,
                point: 4
              },
              {
                text: 5,
                point: 5
              },
              {
                text: 6,
                point: 6
              },
              {
                text: 7,
                point: 7
              }
            ],
            pickedAnswer: ''
          },
          {
            text: '9. دانشجو در کلاس یادداشت برداری نمیکند ',
            answers: [
              {
                text: 1,
                point: 1
              },
              {
                text: 2,
                point: 2
              },
              {
                text: 3,
                point: 3
              },
              {
                text: 4,
                point: 4
              },
              {
                text: 5,
                point: 5
              },
              {
                text: 6,
                point: 6
              },
              {
                text: 7,
                point: 7
              }
            ],
            pickedAnswer: ''
          },
          {
            text: '10. دانشجو به طور صحیح تکالیف محوله را انجام می دهد',
            answers: [
              {
                text: 1,
                point: 1
              },
              {
                text: 2,
                point: 2
              },
              {
                text: 3,
                point: 3
              },
              {
                text: 4,
                point: 4
              },
              {
                text: 5,
                point: 5
              },
              {
                text: 6,
                point: 6
              },
              {
                text: 7,
                point: 7
              }
            ],
            pickedAnswer: ''
          },
          {
            text: '11. دانشجو به مدرسه علاقه مند است',
            answers: [
              {
                text: 1,
                point: 1
              },
              {
                text: 2,
                point: 2
              },
              {
                text: 3,
                point: 3
              },
              {
                text: 4,
                point: 4
              },
              {
                text: 5,
                point: 5
              },
              {
                text: 6,
                point: 6
              },
              {
                text: 7,
                point: 7
              }
            ],
            pickedAnswer: ''
          },
          {
            text:
              '12. دانشجو اطلاعاتی را که هنگام خواندن  به عهده اش بوده به یاد می آورد',
            answers: [
              {
                text: 1,
                point: 1
              },
              {
                text: 2,
                point: 2
              },
              {
                text: 3,
                point: 3
              },
              {
                text: 4,
                point: 4
              },
              {
                text: 5,
                point: 5
              },
              {
                text: 6,
                point: 6
              },
              {
                text: 7,
                point: 7
              }
            ],
            pickedAnswer: ''
          },
          {
            text: '13. دانشجو در کلاس تمرکز ندارد',
            answers: [
              {
                text: 1,
                point: 1
              },
              {
                text: 2,
                point: 2
              },
              {
                text: 3,
                point: 3
              },
              {
                text: 4,
                point: 4
              },
              {
                text: 5,
                point: 5
              },
              {
                text: 6,
                point: 6
              },
              {
                text: 7,
                point: 7
              }
            ],
            pickedAnswer: ''
          },
          {
            text: '14. دانشجو نمرات خوب را در مدرسه ارزش نمی داند',
            answers: [
              {
                text: 1,
                point: 1
              },
              {
                text: 2,
                point: 2
              },
              {
                text: 3,
                point: 3
              },
              {
                text: 4,
                point: 4
              },
              {
                text: 5,
                point: 5
              },
              {
                text: 6,
                point: 6
              },
              {
                text: 7,
                point: 7
              }
            ],
            pickedAnswer: ''
          },
          {
            text: '15- دانشجو در هنگام نیاز بیشتر تلاش می کند',
            answers: [
              {
                text: 1,
                point: 1
              },
              {
                text: 2,
                point: 2
              },
              {
                text: 3,
                point: 3
              },
              {
                text: 4,
                point: 4
              },
              {
                text: 5,
                point: 5
              },
              {
                text: 6,
                point: 6
              },
              {
                text: 7,
                point: 7
              }
            ],
            pickedAnswer: ''
          },
          {
            text:
              '16. دانشجو فقط در ظاهر همکاری میکند بدون انکه در کلاس تلاش جدی بکند.',
            answers: [
              {
                text: 1,
                point: 1
              },
              {
                text: 2,
                point: 2
              },
              {
                text: 3,
                point: 3
              },
              {
                text: 4,
                point: 4
              },
              {
                text: 5,
                point: 5
              },
              {
                text: 6,
                point: 6
              },
              {
                text: 7,
                point: 7
              }
            ],
            pickedAnswer: ''
          },
          {
            text: '17. دانشجو برای موفقیت در آینده اش  مدرسه را مهم می داند',
            answers: [
              {
                text: 1,
                point: 1
              },
              {
                text: 2,
                point: 2
              },
              {
                text: 3,
                point: 3
              },
              {
                text: 4,
                point: 4
              },
              {
                text: 5,
                point: 5
              },
              {
                text: 6,
                point: 6
              },
              {
                text: 7,
                point: 7
              }
            ],
            pickedAnswer: ''
          },
          {
            text: '18. دانشجو در مدرسه نمرات ضعیفی می گیرد',
            answers: [
              {
                text: 1,
                point: 1
              },
              {
                text: 2,
                point: 2
              },
              {
                text: 3,
                point: 3
              },
              {
                text: 4,
                point: 4
              },
              {
                text: 5,
                point: 5
              },
              {
                text: 6,
                point: 6
              },
              {
                text: 7,
                point: 7
              }
            ],
            pickedAnswer: ''
          }
        ],
        secondQuizGuide: [
          'کاملا مخالف',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          'کاملا موافق'
        ],
        secondQuizHeader: 'مقیاس منبع خودباوری',
        secondQuizDesc:
          'لطفا برای پاسخ به گویه های جدول از مقیاس در راهنما استفاده کنید. زیر عددی که به بهترین وضع نشان می دهد چقدر هر کدام از گزاره های زیر در مورد شما صحیح یا غلط است را علامت بزنید. ',
        secondQuiz: [
          {
            text:
              '1. در میان دوستانم، معمولا فردی هستم که مطالب انگلیسی را می فهمم. (به عنوان مثال قادر به درک مطالب شنیداری در کار گروهی هستم، یا قادر به درک یک انگلیسی زبان در خارج از کلاس هستم).  ',
            group: 'M',
            answers: [
              {
                text: 0,
                point: 0
              },
              {
                text: 1,
                point: 1
              },
              {
                text: 2,
                point: 2
              },
              {
                text: 3,
                point: 3
              },
              {
                text: 4,
                point: 4
              },
              {
                text: 5,
                point: 5
              },
              {
                text: 6,
                point: 6
              },
              {
                text: 7,
                point: 7
              },
              {
                text: 8,
                point: 8
              },
              {
                text: 9,
                point: 9
              },
              {
                text: 10,
                point: 10
              }
            ],
            pickedAnswer: ''
          },
          {
            text: '2. بیشتر دوستانم در کلاس های زبان انگلیسی خوب هستند.  ',
            group: 'V',
            answers: [
              {
                text: 0,
                point: 10
              },
              {
                text: 1,
                point: 9
              },
              {
                text: 2,
                point: 8
              },
              {
                text: 3,
                point: 7
              },
              {
                text: 4,
                point: 6
              },
              {
                text: 5,
                point: 5
              },
              {
                text: 6,
                point: 4
              },
              {
                text: 7,
                point: 3
              },
              {
                text: 8,
                point: 2
              },
              {
                text: 9,
                point: 1
              },
              {
                text: 10,
                point: 0
              }
            ]
          },
          {
            text:
              '3. استادم من را به واسطه داشتن مهارت انگلیسی خوب (شنیداری، خواندنی، نوشتاری و مکالمه ای) از سایرین متمایز می داند.   ',
            group: 'S',
            answers: [
              {
                text: 0,
                point: 0
              },
              {
                text: 1,
                point: 1
              },
              {
                text: 2,
                point: 2
              },
              {
                text: 3,
                point: 3
              },
              {
                text: 4,
                point: 4
              },
              {
                text: 5,
                point: 5
              },
              {
                text: 6,
                point: 6
              },
              {
                text: 7,
                point: 7
              },
              {
                text: 8,
                point: 8
              },
              {
                text: 9,
                point: 9
              },
              {
                text: 10,
                point: 10
              }
            ],
            pickedAnswer: ''
          },
          {
            text:
              '4. از انجام تمرینات انگلیسی که تصحیح و نمره گذاری خواهند شد می ترسم.',
            group: 'P',
            answers: [
              {
                text: 0,
                point: 10
              },
              {
                text: 1,
                point: 9
              },
              {
                text: 2,
                point: 8
              },
              {
                text: 3,
                point: 7
              },
              {
                text: 4,
                point: 6
              },
              {
                text: 5,
                point: 5
              },
              {
                text: 6,
                point: 4
              },
              {
                text: 7,
                point: 3
              },
              {
                text: 8,
                point: 2
              },
              {
                text: 9,
                point: 1
              },
              {
                text: 10,
                point: 0
              }
            ]
          },
          {
            text:
              '5. در کلاس های انگلیسی، به ندرت زودتر از هم کلاسی هایم به جواب می رسم.  ',
            group: 'M',
            answers: [
              {
                text: 0,
                point: 10
              },
              {
                text: 1,
                point: 9
              },
              {
                text: 2,
                point: 8
              },
              {
                text: 3,
                point: 7
              },
              {
                text: 4,
                point: 6
              },
              {
                text: 5,
                point: 5
              },
              {
                text: 6,
                point: 4
              },
              {
                text: 7,
                point: 3
              },
              {
                text: 8,
                point: 2
              },
              {
                text: 9,
                point: 1
              },
              {
                text: 10,
                point: 0
              }
            ]
          },
          {
            text:
              '6. بسیاری از بزرگسالانی که می شناسم مشغول به کارهایی هستند که نیاز به مهارت بالای زبانی دارند  ',
            group: 'V',
            answers: [
              {
                text: 0,
                point: 0
              },
              {
                text: 1,
                point: 1
              },
              {
                text: 2,
                point: 2
              },
              {
                text: 3,
                point: 3
              },
              {
                text: 4,
                point: 4
              },
              {
                text: 5,
                point: 5
              },
              {
                text: 6,
                point: 6
              },
              {
                text: 7,
                point: 7
              },
              {
                text: 8,
                point: 8
              },
              {
                text: 9,
                point: 9
              },
              {
                text: 10,
                point: 10
              }
            ],
            pickedAnswer: ''
          },
          {
            text:
              '7. معلم هایم اغلب من را در مورد پیوستن به دورهمی هایی که به مهارت بالای زبانی نیاز دارند تشویق می کردند.  ',
            group: 'S',
            answers: [
              {
                text: 0,
                point: 0
              },
              {
                text: 1,
                point: 1
              },
              {
                text: 2,
                point: 2
              },
              {
                text: 3,
                point: 3
              },
              {
                text: 4,
                point: 4
              },
              {
                text: 5,
                point: 5
              },
              {
                text: 6,
                point: 6
              },
              {
                text: 7,
                point: 7
              },
              {
                text: 8,
                point: 8
              },
              {
                text: 9,
                point: 9
              },
              {
                text: 10,
                point: 10
              }
            ],
            pickedAnswer: ''
          },
          {
            text:
              '8.  وقتی که فکر می کنم قرار است یک تمرین سخت زبان انگلیسی انجام دهم دچار دلشوره می شوم.',
            group: 'P',
            answers: [
              {
                text: 0,
                point: 10
              },
              {
                text: 1,
                point: 9
              },
              {
                text: 2,
                point: 8
              },
              {
                text: 3,
                point: 7
              },
              {
                text: 4,
                point: 6
              },
              {
                text: 5,
                point: 5
              },
              {
                text: 6,
                point: 4
              },
              {
                text: 7,
                point: 3
              },
              {
                text: 8,
                point: 2
              },
              {
                text: 9,
                point: 1
              },
              {
                text: 10,
                point: 0
              }
            ]
          },
          {
            text: '9. نمرات خوبی در آزمونهای انگلیسی گرفته ام.  ',
            group: 'M',
            answers: [
              {
                text: 0,
                point: 0
              },
              {
                text: 1,
                point: 1
              },
              {
                text: 2,
                point: 2
              },
              {
                text: 3,
                point: 3
              },
              {
                text: 4,
                point: 4
              },
              {
                text: 5,
                point: 5
              },
              {
                text: 6,
                point: 6
              },
              {
                text: 7,
                point: 7
              },
              {
                text: 8,
                point: 8
              },
              {
                text: 9,
                point: 9
              },
              {
                text: 10,
                point: 10
              }
            ],
            pickedAnswer: ''
          },
          {
            text:
              '10. الگوهای شغلی من (یعنی افرادی که می خواهم شبیه آن ها باشم) بیشتر در زمینه هایی فعالیت می کنند که مهارت های زبان انگلیسی را شامل نمی شوند.  ',
            group: 'V',
            answers: [
              {
                text: 0,
                point: 10
              },
              {
                text: 1,
                point: 9
              },
              {
                text: 2,
                point: 8
              },
              {
                text: 3,
                point: 7
              },
              {
                text: 4,
                point: 6
              },
              {
                text: 5,
                point: 5
              },
              {
                text: 6,
                point: 4
              },
              {
                text: 7,
                point: 3
              },
              {
                text: 8,
                point: 2
              },
              {
                text: 9,
                point: 1
              },
              {
                text: 10,
                point: 0
              }
            ]
          },
          {
            text:
              '11.  در درس زبان انگلیسی اساتید معمولا من را یک دانشجوی ضعیف می دانند.  ',
            group: 'S',
            answers: [
              {
                text: 0,
                point: 10
              },
              {
                text: 1,
                point: 9
              },
              {
                text: 2,
                point: 8
              },
              {
                text: 3,
                point: 7
              },
              {
                text: 4,
                point: 6
              },
              {
                text: 5,
                point: 5
              },
              {
                text: 6,
                point: 4
              },
              {
                text: 7,
                point: 3
              },
              {
                text: 8,
                point: 2
              },
              {
                text: 9,
                point: 1
              },
              {
                text: 10,
                point: 0
              }
            ]
          },
          {
            text: '12. در حین امتحان درس زبان انگلیسی احساس نگرانی می کنم     ',
            group: 'P',
            answers: [
              {
                text: 0,
                point: 10
              },
              {
                text: 1,
                point: 9
              },
              {
                text: 2,
                point: 8
              },
              {
                text: 3,
                point: 7
              },
              {
                text: 4,
                point: 6
              },
              {
                text: 5,
                point: 5
              },
              {
                text: 6,
                point: 4
              },
              {
                text: 7,
                point: 3
              },
              {
                text: 8,
                point: 2
              },
              {
                text: 9,
                point: 1
              },
              {
                text: 10,
                point: 0
              }
            ]
          },
          {
            text:
              '13. به ندرت می توانم به همکلاسی هایم که در فعالیت های دشوار درس انگلیسی مشکل دارند کمک کنم.  ',
            group: 'M',
            answers: [
              {
                text: 0,
                point: 10
              },
              {
                text: 1,
                point: 9
              },
              {
                text: 2,
                point: 8
              },
              {
                text: 3,
                point: 7
              },
              {
                text: 4,
                point: 6
              },
              {
                text: 5,
                point: 5
              },
              {
                text: 6,
                point: 4
              },
              {
                text: 7,
                point: 3
              },
              {
                text: 8,
                point: 2
              },
              {
                text: 9,
                point: 1
              },
              {
                text: 10,
                point: 0
              }
            ]
          },
          {
            text:
              '14. هنگام کار گروهی، بیشتر مواقع هم گروهی های من می توانند راهی برای فهم معنای مطالب انگلیسی پیدا کنند.  ',
            group: 'V',
            answers: [
              {
                text: 0,
                point: 10
              },
              {
                text: 1,
                point: 9
              },
              {
                text: 2,
                point: 8
              },
              {
                text: 3,
                point: 7
              },
              {
                text: 4,
                point: 6
              },
              {
                text: 5,
                point: 5
              },
              {
                text: 6,
                point: 4
              },
              {
                text: 7,
                point: 3
              },
              {
                text: 8,
                point: 2
              },
              {
                text: 9,
                point: 1
              },
              {
                text: 10,
                point: 0
              }
            ]
          },
          {
            text:
              '15. مدرسان زبان، من را تشویق کرده اند تا در کلاس های سطح پیشرفته انگلیسی شرکت کنم.   ',
            group: 'S',
            answers: [
              {
                text: 0,
                point: 0
              },
              {
                text: 1,
                point: 1
              },
              {
                text: 2,
                point: 2
              },
              {
                text: 3,
                point: 3
              },
              {
                text: 4,
                point: 4
              },
              {
                text: 5,
                point: 5
              },
              {
                text: 6,
                point: 6
              },
              {
                text: 7,
                point: 7
              },
              {
                text: 8,
                point: 8
              },
              {
                text: 9,
                point: 9
              },
              {
                text: 10,
                point: 10
              }
            ],
            pickedAnswer: ''
          },
          {
            text:
              '16. زمانی که استاد سوالی را به زبان انگلیسی می پرسد ذهن من خالی است و نمی توانم فکر کنم',
            group: 'P',
            answers: [
              {
                text: 0,
                point: 10
              },
              {
                text: 1,
                point: 9
              },
              {
                text: 2,
                point: 8
              },
              {
                text: 3,
                point: 7
              },
              {
                text: 4,
                point: 6
              },
              {
                text: 5,
                point: 5
              },
              {
                text: 6,
                point: 4
              },
              {
                text: 7,
                point: 3
              },
              {
                text: 8,
                point: 2
              },
              {
                text: 9,
                point: 1
              },
              {
                text: 10,
                point: 0
              }
            ]
          },
          {
            text: '17. من همیشه یک استعداد ذاتی در زبان انگلیسی داشته ام.  ',
            group: 'M',
            answers: [
              {
                text: 0,
                point: 0
              },
              {
                text: 1,
                point: 1
              },
              {
                text: 2,
                point: 2
              },
              {
                text: 3,
                point: 3
              },
              {
                text: 4,
                point: 4
              },
              {
                text: 5,
                point: 5
              },
              {
                text: 6,
                point: 6
              },
              {
                text: 7,
                point: 7
              },
              {
                text: 8,
                point: 8
              },
              {
                text: 9,
                point: 9
              },
              {
                text: 10,
                point: 10
              }
            ],
            pickedAnswer: ''
          },
          {
            text:
              '18. بسیاری از همکلاسی های من برای انجام فعالیت های درس انگلیسی مشکل دارند.  ',
            group: 'V',
            answers: [
              {
                text: 0,
                point: 0
              },
              {
                text: 1,
                point: 1
              },
              {
                text: 2,
                point: 2
              },
              {
                text: 3,
                point: 3
              },
              {
                text: 4,
                point: 4
              },
              {
                text: 5,
                point: 5
              },
              {
                text: 6,
                point: 6
              },
              {
                text: 7,
                point: 7
              },
              {
                text: 8,
                point: 8
              },
              {
                text: 9,
                point: 9
              },
              {
                text: 10,
                point: 10
              }
            ],
            pickedAnswer: ''
          },
          {
            text:
              '19. دبیرانم در دبیرستان من را از ادامه تحصیل در رشته های دانشگاهی که نیاز به پیش زمینه قوی انگلیسی دارند منصرف کرده اند.   ',
            group: 'S',
            answers: [
              {
                text: 0,
                point: 10
              },
              {
                text: 1,
                point: 9
              },
              {
                text: 2,
                point: 8
              },
              {
                text: 3,
                point: 7
              },
              {
                text: 4,
                point: 6
              },
              {
                text: 5,
                point: 5
              },
              {
                text: 6,
                point: 4
              },
              {
                text: 7,
                point: 3
              },
              {
                text: 8,
                point: 2
              },
              {
                text: 9,
                point: 1
              },
              {
                text: 10,
                point: 0
              }
            ]
          },
          {
            text: '20. هرگز در حین امتحان انگلیسی احساس نگرانی نمی کنم. ',
            group: 'P',
            answers: [
              {
                text: 0,
                point: 0
              },
              {
                text: 1,
                point: 1
              },
              {
                text: 2,
                point: 2
              },
              {
                text: 3,
                point: 3
              },
              {
                text: 4,
                point: 4
              },
              {
                text: 5,
                point: 5
              },
              {
                text: 6,
                point: 6
              },
              {
                text: 7,
                point: 7
              },
              {
                text: 8,
                point: 8
              },
              {
                text: 9,
                point: 9
              },
              {
                text: 10,
                point: 10
              }
            ],
            pickedAnswer: ''
          }
        ],
        thirdQuizGuide: [
          '1 من اصلا نمیتوانم آن را انجام دهم',
          '2 من نمیتوانم آن را انجام دهم',
          '3 ممکن است نتوانم آن را انجام دهم',
          '4 ممکن است بتوانم آن را انجام دهم',
          '5  من اساسا می توانم آن را انجام دهم',
          '6 من میتوانم آن را انجام دهم',
          '7 من میتوانم به خوبی آن را انجام دهم'
        ],
        thirdQuizHeader: 'پرسشنامه سطح زبان انگلیسی',
        thirdQuizDesc:
          'توجه: لطفا سوالات زیر را با دقت بخوانید و ارزیابی دقیقی از وضعیت فعلی انگلیسی خود داشته باشید. این سوالات برای اندازه گیری قضاوت شما از قابلیت های خودتان طراحی شده اند، بنابراین پاسخ های درست یا غلطی وجود ندارد.لطفا برای پاسخ دادن به این سوالات به ترتیب از مقیاس زیر استفاده کنید و شماره ای که دقیقا نشان دهنده توانایی های شماست را انتخاب کنید.',
        thirdQuiz: [
          {
            text:
              '1. آیا می توانید داستان هایی را که به انگلیسی گفته می شود بفهمید؟',
            answers: [
              {
                text: 1,
                point: 1
              },
              {
                text: 2,
                point: 2
              },
              {
                text: 3,
                point: 3
              },
              {
                text: 4,
                point: 4
              },
              {
                text: 5,
                point: 5
              },
              {
                text: 6,
                point: 6
              },
              {
                text: 7,
                point: 7
              }
            ],
            pickedAnswer: ''
          },
          {
            text:
              '2. آیا می توانید تکالیف خود را که شامل خواندن متون انگلیسی است به تنهایی انجام دهید ؟ ',
            answers: [
              {
                text: 1,
                point: 1
              },
              {
                text: 2,
                point: 2
              },
              {
                text: 3,
                point: 3
              },
              {
                text: 4,
                point: 4
              },
              {
                text: 5,
                point: 5
              },
              {
                text: 6,
                point: 6
              },
              {
                text: 7,
                point: 7
              }
            ],
            pickedAnswer: ''
          },
          {
            text:
              '3. آیا می توانید برنامه های تلویزیونی انگلیسیبا لهجه آمریکایی را بفهمید؟',
            answers: [
              {
                text: 1,
                point: 1
              },
              {
                text: 2,
                point: 2
              },
              {
                text: 3,
                point: 3
              },
              {
                text: 4,
                point: 4
              },
              {
                text: 5,
                point: 5
              },
              {
                text: 6,
                point: 6
              },
              {
                text: 7,
                point: 7
              }
            ],
            pickedAnswer: ''
          },
          {
            text:
              '4. آیا می توانید دانشگاه خود را به زبان انگلیسی برای دیگران توصیف کنید؟',
            answers: [
              {
                text: 1,
                point: 1
              },
              {
                text: 2,
                point: 2
              },
              {
                text: 3,
                point: 3
              },
              {
                text: 4,
                point: 4
              },
              {
                text: 5,
                point: 5
              },
              {
                text: 6,
                point: 6
              },
              {
                text: 7,
                point: 7
              }
            ],
            pickedAnswer: ''
          },
          {
            text:
              '5. آیا می توانید در اینترنت (فیسبوک، توییتر، بلاگ، و غیره) پیام هایی به زبان انگلیسی بنویسید؟',
            answers: [
              {
                text: 1,
                point: 1
              },
              {
                text: 2,
                point: 2
              },
              {
                text: 3,
                point: 3
              },
              {
                text: 4,
                point: 4
              },
              {
                text: 5,
                point: 5
              },
              {
                text: 6,
                point: 6
              },
              {
                text: 7,
                point: 7
              }
            ],
            pickedAnswer: ''
          },
          {
            text:
              '6. آیا می توانید مسیر خانه تا دانشگاه را به زبان انگلیسی شرح دهید؟ ',
            answers: [
              {
                text: 1,
                point: 1
              },
              {
                text: 2,
                point: 2
              },
              {
                text: 3,
                point: 3
              },
              {
                text: 4,
                point: 4
              },
              {
                text: 5,
                point: 5
              },
              {
                text: 6,
                point: 6
              },
              {
                text: 7,
                point: 7
              }
            ],
            pickedAnswer: ''
          },
          {
            text:
              '7. آیا می توانید انشا انگلیسی که توسط معلم(مدرس) انگلیسی تان تعیین شده بنویسید؟ ',
            answers: [
              {
                text: 1,
                point: 1
              },
              {
                text: 2,
                point: 2
              },
              {
                text: 3,
                point: 3
              },
              {
                text: 4,
                point: 4
              },
              {
                text: 5,
                point: 5
              },
              {
                text: 6,
                point: 6
              },
              {
                text: 7,
                point: 7
              }
            ],
            pickedAnswer: ''
          },
          {
            text: '8. آیا می توانید یک داستان به زبان انگلیسی بگویید؟',
            answers: [
              {
                text: 1,
                point: 1
              },
              {
                text: 2,
                point: 2
              },
              {
                text: 3,
                point: 3
              },
              {
                text: 4,
                point: 4
              },
              {
                text: 5,
                point: 5
              },
              {
                text: 6,
                point: 6
              },
              {
                text: 7,
                point: 7
              }
            ],
            pickedAnswer: ''
          },
          {
            text:
              '9. آیا می توانید برنامه های رادیویی کشورهای انگلیسی زبان را بفهمید؟',
            answers: [
              {
                text: 1,
                point: 1
              },
              {
                text: 2,
                point: 2
              },
              {
                text: 3,
                point: 3
              },
              {
                text: 4,
                point: 4
              },
              {
                text: 5,
                point: 5
              },
              {
                text: 6,
                point: 6
              },
              {
                text: 7,
                point: 7
              }
            ],
            pickedAnswer: ''
          },
          {
            text:
              '10. آیا می توانید برنامه های انگلیسی را که در سایر کشور ها مثل چین تولید شده اند بفهمید؟',
            answers: [
              {
                text: 1,
                point: 1
              },
              {
                text: 2,
                point: 2
              },
              {
                text: 3,
                point: 3
              },
              {
                text: 4,
                point: 4
              },
              {
                text: 5,
                point: 5
              },
              {
                text: 6,
                point: 6
              },
              {
                text: 7,
                point: 7
              }
            ],
            pickedAnswer: ''
          },
          {
            text:
              '11. آیا می توانید برای یک دانشجوی دیگر یادداشتی به زبان انگلیسی بنویسید؟',
            answers: [
              {
                text: 1,
                point: 1
              },
              {
                text: 2,
                point: 2
              },
              {
                text: 3,
                point: 3
              },
              {
                text: 4,
                point: 4
              },
              {
                text: 5,
                point: 5
              },
              {
                text: 6,
                point: 6
              },
              {
                text: 7,
                point: 7
              }
            ],
            pickedAnswer: ''
          },
          {
            text:
              '12. هنگامی که مقالات انگلیسی می خوانید، می توانید معنی کلمات ناشناخته را حدس بزنید؟',
            answers: [
              {
                text: 1,
                point: 1
              },
              {
                text: 2,
                point: 2
              },
              {
                text: 3,
                point: 3
              },
              {
                text: 4,
                point: 4
              },
              {
                text: 5,
                point: 5
              },
              {
                text: 6,
                point: 6
              },
              {
                text: 7,
                point: 7
              }
            ],
            pickedAnswer: ''
          },
          {
            text:
              '13. آیا می توانید با کلماتی که تازه یاد گرفته اید جملات جدید بسازید؟',
            answers: [
              {
                text: 1,
                point: 1
              },
              {
                text: 2,
                point: 2
              },
              {
                text: 3,
                point: 3
              },
              {
                text: 4,
                point: 4
              },
              {
                text: 5,
                point: 5
              },
              {
                text: 6,
                point: 6
              },
              {
                text: 7,
                point: 7
              }
            ],
            pickedAnswer: ''
          },
          {
            text: '14. آیا می توانید ایمیل های خود را به زبان انگلیسی بنویسید؟',
            answers: [
              {
                text: 1,
                point: 1
              },
              {
                text: 2,
                point: 2
              },
              {
                text: 3,
                point: 3
              },
              {
                text: 4,
                point: 4
              },
              {
                text: 5,
                point: 5
              },
              {
                text: 6,
                point: 6
              },
              {
                text: 7,
                point: 7
              }
            ],
            pickedAnswer: ''
          },
          {
            text:
              '15. آیا می توانید یک گفتگوی انگلیسی ضبط شده در مورد موضوعات روزمره مدرسه که معلم انگلیسی تان به شما می دهد را بفهمید؟',
            answers: [
              {
                text: 1,
                point: 1
              },
              {
                text: 2,
                point: 2
              },
              {
                text: 3,
                point: 3
              },
              {
                text: 4,
                point: 4
              },
              {
                text: 5,
                point: 5
              },
              {
                text: 6,
                point: 6
              },
              {
                text: 7,
                point: 7
              }
            ],
            pickedAnswer: ''
          },
          {
            text:
              '16. آیا می توانید اخبار انگلیسی موجود در اینترنت را بفهمید؟ ',
            answers: [
              {
                text: 1,
                point: 1
              },
              {
                text: 2,
                point: 2
              },
              {
                text: 3,
                point: 3
              },
              {
                text: 4,
                point: 4
              },
              {
                text: 5,
                point: 5
              },
              {
                text: 6,
                point: 6
              },
              {
                text: 7,
                point: 7
              }
            ],
            pickedAnswer: ''
          },
          {
            text:
              '17. آیا می توانید به زبان انگلیسی از معلم(مدرس) انگلیسی خود سوال بپرسید؟  ',
            answers: [
              {
                text: 1,
                point: 1
              },
              {
                text: 2,
                point: 2
              },
              {
                text: 3,
                point: 3
              },
              {
                text: 4,
                point: 4
              },
              {
                text: 5,
                point: 5
              },
              {
                text: 6,
                point: 6
              },
              {
                text: 7,
                point: 7
              }
            ],
            pickedAnswer: ''
          },
          {
            text: '18. آیا می توانید جملاتی حاوی اصطلاحات انگلیسی درست کنید؟',
            answers: [
              {
                text: 1,
                point: 1
              },
              {
                text: 2,
                point: 2
              },
              {
                text: 3,
                point: 3
              },
              {
                text: 4,
                point: 4
              },
              {
                text: 5,
                point: 5
              },
              {
                text: 6,
                point: 6
              },
              {
                text: 7,
                point: 7
              }
            ],
            pickedAnswer: ''
          },
          {
            text:
              '19. آیا می توانید به زبان انگلیسی معلم(مدرس) انگلیسی خود را به شخص دیگری معرفی کنید؟',
            answers: [
              {
                text: 1,
                point: 1
              },
              {
                text: 2,
                point: 2
              },
              {
                text: 3,
                point: 3
              },
              {
                text: 4,
                point: 4
              },
              {
                text: 5,
                point: 5
              },
              {
                text: 6,
                point: 6
              },
              {
                text: 7,
                point: 7
              }
            ],
            pickedAnswer: ''
          },
          {
            text:
              '20. آیا می توانید در مورد موضوعات عمومی با همکلاسی های خود به زبان انگلیسی صحبت کنید؟',
            answers: [
              {
                text: 1,
                point: 1
              },
              {
                text: 2,
                point: 2
              },
              {
                text: 3,
                point: 3
              },
              {
                text: 4,
                point: 4
              },
              {
                text: 5,
                point: 5
              },
              {
                text: 6,
                point: 6
              },
              {
                text: 7,
                point: 7
              }
            ],
            pickedAnswer: ''
          },
          {
            text: '21. آیا می توانید داستان های کوتاه انگلیسی بخوانید؟',
            answers: [
              {
                text: 1,
                point: 1
              },
              {
                text: 2,
                point: 2
              },
              {
                text: 3,
                point: 3
              },
              {
                text: 4,
                point: 4
              },
              {
                text: 5,
                point: 5
              },
              {
                text: 6,
                point: 6
              },
              {
                text: 7,
                point: 7
              }
            ],
            pickedAnswer: ''
          },
          {
            text: '22. آیا می توانید فیلم های انگلیسی را بدون زیرنویس بفهمید؟',
            answers: [
              {
                text: 1,
                point: 1
              },
              {
                text: 2,
                point: 2
              },
              {
                text: 3,
                point: 3
              },
              {
                text: 4,
                point: 4
              },
              {
                text: 5,
                point: 5
              },
              {
                text: 6,
                point: 6
              },
              {
                text: 7,
                point: 7
              }
            ],
            pickedAnswer: ''
          },
          {
            text:
              '23. آیا می توانید سوالات معلم(مدرس) انگلیسی خود را به زبان انگلیسی پاسخ دهید؟',
            answers: [
              {
                text: 1,
                point: 1
              },
              {
                text: 2,
                point: 2
              },
              {
                text: 3,
                point: 3
              },
              {
                text: 4,
                point: 4
              },
              {
                text: 5,
                point: 5
              },
              {
                text: 6,
                point: 6
              },
              {
                text: 7,
                point: 7
              }
            ],
            pickedAnswer: ''
          },
          {
            text: '24. آیا می توانید آهنگ های انگلیسی را بفهمید؟',
            answers: [
              {
                text: 1,
                point: 1
              },
              {
                text: 2,
                point: 2
              },
              {
                text: 3,
                point: 3
              },
              {
                text: 4,
                point: 4
              },
              {
                text: 5,
                point: 5
              },
              {
                text: 6,
                point: 6
              },
              {
                text: 7,
                point: 7
              }
            ],
            pickedAnswer: ''
          },
          {
            text: '25. آیا می توانید روزنامه های انگلیسی را بخوانید؟',
            answers: [
              {
                text: 1,
                point: 1
              },
              {
                text: 2,
                point: 2
              },
              {
                text: 3,
                point: 3
              },
              {
                text: 4,
                point: 4
              },
              {
                text: 5,
                point: 5
              },
              {
                text: 6,
                point: 6
              },
              {
                text: 7,
                point: 7
              }
            ],
            pickedAnswer: ''
          },
          {
            text:
              '26. آیا می توانید معنی کلمات جدید را با استفاده از دیکشنری های انگلیسی-انگلیسی دریابید؟',
            answers: [
              {
                text: 1,
                point: 1
              },
              {
                text: 2,
                point: 2
              },
              {
                text: 3,
                point: 3
              },
              {
                text: 4,
                point: 4
              },
              {
                text: 5,
                point: 5
              },
              {
                text: 6,
                point: 6
              },
              {
                text: 7,
                point: 7
              }
            ],
            pickedAnswer: ''
          },
          {
            text: '27. آیا می توانید اعداد را به زبان انگلیسی بفهمید؟',
            answers: [
              {
                text: 1,
                point: 1
              },
              {
                text: 2,
                point: 2
              },
              {
                text: 3,
                point: 3
              },
              {
                text: 4,
                point: 4
              },
              {
                text: 5,
                point: 5
              },
              {
                text: 6,
                point: 6
              },
              {
                text: 7,
                point: 7
              }
            ],
            pickedAnswer: ''
          },
          {
            text: '28. آیا می توانید خاطرات خود را به زبان انگلیسی بنویسید؟',
            answers: [
              {
                text: 1,
                point: 1
              },
              {
                text: 2,
                point: 2
              },
              {
                text: 3,
                point: 3
              },
              {
                text: 4,
                point: 4
              },
              {
                text: 5,
                point: 5
              },
              {
                text: 6,
                point: 6
              },
              {
                text: 7,
                point: 7
              }
            ],
            pickedAnswer: ''
          },
          {
            text:
              '29. آیا می توانید مقالات انگلیسی را در مورد فرهنگ ایرانی درک کنید؟',
            answers: [
              {
                text: 1,
                point: 1
              },
              {
                text: 2,
                point: 2
              },
              {
                text: 3,
                point: 3
              },
              {
                text: 4,
                point: 4
              },
              {
                text: 5,
                point: 5
              },
              {
                text: 6,
                point: 6
              },
              {
                text: 7,
                point: 7
              }
            ],
            pickedAnswer: ''
          },
          {
            text: '30. آیا می توانید خود را به زبان انگلیسی معرفی کنید؟',
            answers: [
              {
                text: 1,
                point: 1
              },
              {
                text: 2,
                point: 2
              },
              {
                text: 3,
                point: 3
              },
              {
                text: 4,
                point: 4
              },
              {
                text: 5,
                point: 5
              },
              {
                text: 6,
                point: 6
              },
              {
                text: 7,
                point: 7
              }
            ],
            pickedAnswer: ''
          },
          {
            text:
              '31. آیا می توانید در دو صفحه درباره معلم(مدرس) انگلیسی خود یک مقاله به زبان انگلیسی بنویسید؟',
            answers: [
              {
                text: 1,
                point: 1
              },
              {
                text: 2,
                point: 2
              },
              {
                text: 3,
                point: 3
              },
              {
                text: 4,
                point: 4
              },
              {
                text: 5,
                point: 5
              },
              {
                text: 6,
                point: 6
              },
              {
                text: 7,
                point: 7
              }
            ],
            pickedAnswer: ''
          },
          {
            text:
              '32. آیا می توانید منابع خواندنی جدید (مثلا خبر از مجله تایم) را بفهمید؟',
            answers: [
              {
                text: 1,
                point: 1
              },
              {
                text: 2,
                point: 2
              },
              {
                text: 3,
                point: 3
              },
              {
                text: 4,
                point: 4
              },
              {
                text: 5,
                point: 5
              },
              {
                text: 6,
                point: 6
              },
              {
                text: 7,
                point: 7
              }
            ],
            pickedAnswer: ''
          }
        ]
      },
      totalQuiz: 3,
      currentQuiz: 1,
      currentQuizName: 'firstQuiz',
      firstScore: 0,
      secondScore: {
        P: 0,
        S: 0,
        V: 0,
        M: 0
      },
      thirdScore: 0,
      buttonText: 'ازمون بعد'
    }
  },
  methods: {
    created () {},
    progress () {},
    next () {
      if (this.currentQuiz < this.totalQuiz) {
        this.currentQuiz += 1
        if (this.currentQuiz === 1) {
          this.currentQuizName = 'firstQuiz'
        } else if (this.currentQuiz === 2) {
          this.currentQuizName = 'secondQuiz'
        } else {
          this.currentQuizName = 'thirdQuiz'
          this.buttonText = 'محاسبه نمره'
        }
      } else if (this.currentQuiz === this.totalQuiz) {
        this.calcScore()
        this.sendScore()
        alert(' شما به همه سوالات پاسخ داده اید. با تشکر از همکاری شما.')
        this.currentQuiz = '?'
      } else if (this.currentQuiz === '?') {
        alert('شما به همه سوالات پاسخ داده اید.')
      }
      window.scrollTo(0, 0)
    },
    mounted () {},
    calcScore () {
      this.questions.firstQuiz.forEach(element => {
        this.firstScore += element.pickedAnswer
      })
      this.questions.thirdQuiz.forEach(element => {
        this.thirdScore += element.pickedAnswer
      })
      this.questions.secondQuiz.forEach(element => {
        if (element.group === 'M') {
          this.secondScore.M += element.pickedAnswer
        } else if (element.group === 'P') {
          this.secondScore.P += element.pickedAnswer
        } else if (element.group === 'V') {
          this.secondScore.V += element.pickedAnswer
        } else if (element.group === 'S') {
          this.secondScore.S += element.pickedAnswer
        }
      })
    },
    sendScore () {
      const userScore = {
        userId: localStorage.userId,
        score: `first score: ${this.firstScore},
        second score: (M:${this.secondScore.M}, P:${this.secondScore.P}, V:${this.secondScore.V}, S:${this.secondScore.S}),
        third score: ${this.thirdScore}`
      }
      const options = {
        method: 'POST',
        url: 'https://survey-hamid-soodmand.liara.run/score',
        data: userScore
      }
      axios(options)
        .then(result => {
          console.log('------------------', result)
        })
        .catch(err => {
          console.log('------------------', err)
          alert('خطا در ارسال اطلاعات کاربر به سرور.')
        })
    },
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
  margin-top: 380px !important;
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

.radio-inline {
  margin-left: 45px;
}

.guide {
  background-color: chocolate;
  border-radius: 20px;
}

.guide-pos {
  position: fixed ;
  z-index: 2;
  top : 0;
}
</style>
