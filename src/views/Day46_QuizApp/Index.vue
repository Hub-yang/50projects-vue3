<script setup lang="ts">
const quizData = reactive([
  {
    id: 'a',
    question: '哪种语言可以在浏览器中运行?',
    quizList: [
      { id: 'a', text: 'java' },
      { id: 'b', text: 'C' },
      { id: 'c', text: 'Python' },
      { id: 'd', text: 'JavaScript' },
    ],
    correct: 'd',
  },
  {
    id: 'b',
    question: 'CSS代表什么?',
    quizList: [
      { id: 'a', text: '中央样式表' },
      { id: 'b', text: '层叠样式表' },
      { id: 'c', text: '级联简单表' },
      { id: 'd', text: '汽车,SUV,帆船' },
    ],
    correct: 'b',
  },
  {
    id: 'c',
    question: 'HTML代表什么?',
    quizList: [
      { id: 'a', text: '超文本标记语言' },
      { id: 'b', text: '文本标记语言' },
      { id: 'c', text: 'Hyperloop机器语言' },
      { id: 'd', text: '直升机,航站楼,摩托艇,兰博基尼' },
    ],
    correct: 'a',
  },
  {
    id: 'd',
    question: 'JavaScript是哪一年发布的?',
    quizList: [
      { id: 'a', text: '1996' },
      { id: 'b', text: '1995' },
      { id: 'c', text: '1994' },
      { id: 'd', text: '以上都不对' },
    ],
    correct: 'b',
  },
])

const answer = ref('')
const currentQuiz = ref(0)
const score = ref(0)
const quizText = computed(() => quizData[currentQuiz.value].question)

function handlerSumit() {
  if (answer.value) {
    if (answer.value === quizData[currentQuiz.value].correct)
      score.value++
    answer.value = ''
    currentQuiz.value++
  }
  // eslint-disable-next-line no-alert
  else { alert('请选择答案') }
}
</script>

<template>
  <div class="body base_container">
    <div class="quiz-container">
      <div v-if="currentQuiz === quizData.length" class="result">
        <h2>你答对了 {{ `${score}/${quizData.length}` }} 道题</h2>
        <button onclick="location.reload()">
          重置
        </button>
      </div>
      <div v-else>
        <div class="quiz-header">
          <h2 id="question">
            {{ quizText }}
          </h2>
          <template v-for="({ id: key, quizList }, idx) in quizData" :key>
            <ul v-if="currentQuiz === idx">
              <li v-for="item in quizList" :key="item.id">
                <input :id="item.id" v-model="answer" type="radio" name="answer" :value="item.id" class="answer">
                <label :for="item.id">{{ item.text }}</label>
              </li>
            </ul>
          </template>
        </div>
        <button @click="handlerSumit">
          提交
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use './index.scss';
</style>
