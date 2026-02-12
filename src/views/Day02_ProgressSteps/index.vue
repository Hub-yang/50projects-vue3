<script setup lang="ts">
interface Item { id: number, active: boolean }
const circles = reactive<Item[]>([
  { id: 1, active: true },
  { id: 2, active: false },
  { id: 3, active: false },
  { id: 4, active: false },
  { id: 5, active: false },
])

const currentActive = ref(1)
const activesWidth = ref(0)

function prev() {
  currentActive.value--
  if (currentActive.value < 0)
    currentActive.value = 0

  update()
}

function next() {
  currentActive.value++
  if (currentActive.value > circles.length)
    currentActive.value = circles.length

  update()
}

const actives = computed<Item[]>(() => circles.filter(item => item.active === true))

function update() {
  circles.forEach((circle, idx) => {
    circle.active = idx < currentActive.value
  })

  activesWidth.value = ((actives.value.length - 1) / (circles.length - 1)) * 100
}
</script>

<template>
  <div class="container base_container">
    <div class="progress_container">
      <div
        id="progress"
        :style="{ width: `${activesWidth}%` }"
        class="progress"
      />
      <div
        v-for="{ id: key, active } in circles" :key
        class="circle"
        :class="[active ? 'active' : '']"
      >
        {{ key }}
      </div>
    </div>
    <div class="btns">
      <button
        id="prev"
        class="btn"
        :disabled="currentActive === 1"
        @click="prev"
      >
        Prev
      </button>
      <button
        id="next"
        class="btn"
        :disabled="currentActive === circles.length"
        @click="next"
      >
        Next
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use './index.scss';
</style>
