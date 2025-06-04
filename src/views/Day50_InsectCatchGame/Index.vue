<script setup>
import { nanoid } from 'nanoid'

let timer
const start = ref(false)
const startgame = ref(false)
const visible = ref(false)
const seconds = ref(0)
const score = ref(0)
const curInsect = ref()
const gameContainer = ref()
const insectsList = ref([
  { id: nanoid(), insert: 'Fly', src: 'http://pngimg.com/uploads/fly/fly_PNG3946.png', alt: 'fly' },
  { id: nanoid(), insert: 'Mosquito', src: 'http://pngimg.com/uploads/mosquito/mosquito_PNG18175.png', alt: 'mosquito' },
  { id: nanoid(), insert: 'Spider', src: 'http://pngimg.com/uploads/spider/spider_PNG12.png', alt: 'spider' },
  { id: nanoid(), insert: 'Roach', src: 'http://pngimg.com/uploads/roach/roach_PNG12163.png', alt: 'roach' },
])

function startGame(insert) {
  startgame.value = true
  curInsect.value = insert
  setTimeout(createInsect, 1000)
  timer = setInterval(() => {
    seconds.value++
  }, 1000)
}

const increaseTime = computed(() => {
  let m = Math.floor(seconds.value / 60)
  let s = seconds.value % 60
  m = m < 10 ? `0${m}` : m
  s = s < 10 ? `0${s}` : s
  return `Time: ${m}:${s}`
})

function createInsect() {
  const insect = document.createElement('div')
  insect.classList.add('insect')
  const { x, y } = getRandomLocation()
  insect.style.top = `${y}px`
  insect.style.left = `${x}px`
  insect.innerHTML = `<img src="${curInsect.value.src}" alt="${curInsect.value.alt
  }" style="transform: rotate(${Math.random() * 360}deg)" />`

  insect.addEventListener('click', catchInsect)

  gameContainer.value.appendChild(insect)
}

function getRandomLocation() {
  const width = window.innerWidth
  const height = window.innerHeight
  const x = Math.random() * (width - 200) + 100
  const y = Math.random() * (height - 200) + 100
  return { x, y }
}

function catchInsect(e) {
  const item = e.currentTarget
  score.value++
  item.classList.add('caught')
  setTimeout(() => item.remove(), 2000)
  addInsects()
}

function addInsects() {
  setTimeout(createInsect, 1000)
  setTimeout(createInsect, 1500)
}

watch(score, (val) => {
  if (val > 19)
    visible.value = true
})

onUnmounted(() => {
  clearInterval(timer)
})
</script>

<template>
  <div class="body">
    <div class="screen" :class="[start ? 'up' : '']">
      <h1>Catch The Insect</h1>
      <button id="start-btn" class="btn" @click="start = true">
        Play Game
      </button>
    </div>

    <div class="screen" :class="[startgame ? 'up' : '']">
      <h1>What is your "favorite" insect?</h1>
      <ul class="insects-list">
        <li v-for="insert in insectsList" :key="insert.id">
          <button class="choose-insect-btn" @click="startGame(insert)">
            <p>{{ insert.name }}</p>
            <img :src="insert.src" :alt="insert.alt">
          </button>
        </li>
      </ul>
    </div>

    <div ref="gameContainer" class="screen game-container">
      <h3 id="time" class="time">
        {{ increaseTime }}
      </h3>
      <h3 id="score" class="score">
        Score: {{ score }}
      </h3>
      <h5 v-if="visible" id="message" class="message">
        Are you annnoyed yet? <br>
        You are playing an impossible game!!
      </h5>
    </div>
  </div>
</template>

<style lang="scss">
@import './index.scss';
</style>
