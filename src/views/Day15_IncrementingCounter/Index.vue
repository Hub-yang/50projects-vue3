<template>
  <div class="body">
    <div
      class="counter-container"
      v-for="(item, index) in targetList"
      :key="index"
    >
      <i :class="[`fab fa-3x ${item.class}`]"></i>
      <div class="counter">{{ item.initial }}</div>
      <span>{{ item.content }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Listitem {
  class: string
  initial: number
  target: number
  content: string
}
const targetList = reactive<Listitem[]>([
  {
    class: "fa-twitter",
    initial: 0,
    target: 12000,
    content: "Twitter Followers",
  },
  {
    class: "fa-youtube",
    initial: 0,
    target: 5000,
    content: "YouTube Subscribers",
  },
  { class: "fa-facebook", initial: 0, target: 7500, content: "Facebook Fans" },
])

onMounted(() => {
  update()
})

function update() {
  targetList.forEach((counter) => {
    updateCounter(counter)
  })
}

function updateCounter(counter: Listitem) {
  const target = counter.target
  const c = counter.initial

  const increment = target / 200

  if (c < target) {
    counter.initial = Math.ceil(c + increment)
    setTimeout(() => {
      updateCounter(counter)
    }, 1)
  } else {
    counter.initial = target
  }
}
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
