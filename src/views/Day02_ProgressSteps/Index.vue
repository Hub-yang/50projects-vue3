<template>
  <div class="container">
    <div class="progress_container">
      <div :style="{ width: activesWidth + '%' }" class="progress" id="progress"></div>
      <div :class="['circle', circle.active ? 'active' : '']" v-for="circle in circles" :key="circle.id">
        {{ circle.id }}
      </div>
    </div>

    <button class="btn" id="prev" :disabled="currentActive == 1" @click="prev">
      Prev
    </button>
    <button class="btn" id="next" :disabled="currentActive == circles.length" @click="next">
      Next
    </button>
  </div>
</template>

<script setup lang="ts">

const circles = reactive<any[]>([
  { id: 1, active: true },
  { id: 2, active: false },
  { id: 3, active: false },
  { id: 4, active: false },
  { id: 5, active: false },
])

const currentActive = ref<number>(1)

const activesWidth = ref<number>(0)

const prev = () => {
  currentActive.value--
  if (currentActive.value < 0) {
    currentActive.value = 0
  }

  update()
}

const next = () => {
  currentActive.value++
  if (currentActive.value > circles.length) {
    currentActive.value = circles.length
  }

  update()
}

const actives = computed(() => {
  return circles.filter((item) => item.active == true)
})

function update() {
  circles.forEach((circle, idx) => {
    circle.active = idx < currentActive.value ? true : false
  })

  activesWidth.value = ((actives.value.length - 1) / (circles.length - 1)) * 100
}
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
