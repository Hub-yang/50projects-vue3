<script setup lang="ts">
const timer = ref<any>(null)

const darkTheme = ref(false)

const primaryColor = ref('#fff')
const bgColor = ref('#000')

const theme = ref('Dark mode')

const timeEl = ref('')
const dateEl = ref('')

const hourShow = ref(0)

const minuteShow = ref(0)

const secondShow = ref(0)

function handleClick() {
  darkTheme.value = !darkTheme.value
  primaryColor.value = primaryColor.value === '#fff' ? '#000' : '#fff'
  bgColor.value = bgColor.value === '#000' ? '#fff' : '#000'
  theme.value = (theme.value === 'Dark mode') ? 'Light mode' : 'Dark mode'
}

function setTime() {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  const time = new Date()
  const month = time.getMonth()
  const day = time.getDay()
  const date = time.getDate()
  const hours = time.getHours()
  const hoursForClock = hours >= 13 ? hours % 12 : hours
  const minutes = time.getMinutes()
  const seconds = time.getSeconds()
  const ampm = hours >= 12 ? 'PM' : 'AM'

  timeEl.value = `${hoursForClock}:${
    minutes < 10 ? `0${minutes}` : minutes
  } ${ampm}`
  dateEl.value = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`

  const hourDeg = scale(hoursForClock, 0, 12, 0, 360)

  const minuteDeg = scale(minutes, 0, 60, 0, 360)

  const secondDeg = scale(seconds, 0, 60, 0, 360)

  hourShow.value = hourDeg
  minuteShow.value = minuteDeg
  secondShow.value = secondDeg
}

function scale(
  num: number,
  in_min: number,
  in_max: number,
  out_min: number,
  out_max: number,
): number {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}

onMounted(() => {
  setTime()
  timer.value = setInterval(setTime, 1000)
})

onUnmounted(() => clearInterval(timer.value))
</script>

<template>
  <div
    class="body base_container" :class="[darkTheme ? 'dark' : '']"
    :style="{ '--primaryColor': primaryColor }"
  >
    <button
      class="toggle"
      :style="{ '--bgcolor': bgColor }"
      @click="handleClick"
    >
      {{ theme }}
    </button>

    <div class="clock-container">
      <div class="clock">
        <div
          class="needle hour"
          :style="{
            '--bgcolor': bgColor,
            'transform': `translate(-50%, -100%) rotate(${hourShow}deg)`,
          }"
        />
        <div
          class="needle minute"
          :style="{
            '--bgcolor': bgColor,
            'transform': `translate(-50%, -100%) rotate(${minuteShow}deg)`,
          }"
        />
        <div
          class="needle second"
          :style="{
            transform: `translate(-50%, -100%) rotate(${secondShow}deg)`,
          }"
        />
        <div class="center-point" :style="{ '--bgcolor': bgColor }" />
      </div>

      <div class="time" :style="{ '--bgcolor': bgColor }" v-html="timeEl" />
      <div
        class="date"
        :style="{ '--bgcolor': bgColor, '--primaryColor': primaryColor }"
        v-html="dateEl"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use './index.scss';
</style>
