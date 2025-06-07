<script setup lang="ts">
interface Listitem {
  class: string
  initial: number
  target: number
  content: string
}
const targetList = reactive<Listitem[]>([
  {
    class: 'fa-twitter',
    initial: 0,
    target: 12000,
    content: 'Twitter Followers',
  },
  {
    class: 'fa-youtube',
    initial: 0,
    target: 5000,
    content: 'YouTube Subscribers',
  },
  { class: 'fa-facebook', initial: 0, target: 7500, content: 'Facebook Fans' },
])

onMounted(() => update())

function update() {
  targetList.forEach(counter => updateCounter(counter))
}

function updateCounter(counter: Listitem) {
  const { target, initial: c } = counter
  const increment = target / 200

  if (c < target) {
    counter.initial = Math.ceil(c + increment)
    setTimeout(() => {
      updateCounter(counter)
    }, 1)
  }
  else {
    counter.initial = target
  }
}
</script>

<template>
  <div class="body base_container">
    <div
      v-for="({ content, class: className, initial }) in targetList"
      :key="content"
      class="counter-container"
    >
      <i :class="[`fab fa-3x ${className}`]" />
      <div class="counter">
        {{ initial }}
      </div>
      <span>{{ content }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import './index.scss';
</style>
