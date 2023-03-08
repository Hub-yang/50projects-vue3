<template>
  <div class="body">
    <div class="left_area">
      <h1>Drink Water</h1>
      <h3>Goal: 2 Liters</h3>

      <div class="cup">
        <div class="remained" v-show="!(fullCups === totalCups)">
          <span>{{ liters }}L</span>
          <small>Remained</small>
        </div>

        <div
          class="percentage"
          :style="{ height: percentageHeight + 'px' }"
          v-show="fullCups"
        >
          {{ proportion }}%
        </div>
      </div>
    </div>
    <div class="right_area">
      <p class="text">Select how many glasses of water that you have drank</p>

      <div class="cups">
        <div
          :class="['cup cup-small', !cup.isFull || 'full']"
          v-for="(cup, idx) in cupsList"
          :key="idx"
          @click="highlightCups(idx)"
        >
          {{ cup.capacity }}
          ml
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const cupsList = reactive<{ capacity: number; isFull: boolean }[]>([
  { capacity: 250, isFull: false },
  { capacity: 250, isFull: false },
  { capacity: 250, isFull: false },
  { capacity: 250, isFull: false },
  { capacity: 250, isFull: false },
  { capacity: 250, isFull: false },
  { capacity: 250, isFull: false },
  { capacity: 250, isFull: false },
])

function highlightCups(idx: number) {
  if (idx === 7 && cupsList[idx].isFull) idx--
  else if (cupsList[idx].isFull && !cupsList[idx + 1].isFull) {
    idx--
  }

  cupsList.forEach((cup, idx2) => {
    if (idx2 <= idx) {
      cup.isFull = true
    } else {
      cup.isFull = false
    }
  })
}

const fullCups = computed<number>(() => {
  return cupsList.filter((cup) => cup.isFull).length
})

const percentageHeight = computed<number>(() => {
  if (fullCups.value === 0) return 0
  else return (fullCups.value / totalCups) * 330
})

const proportion = computed<number>(() => {
  return (fullCups.value / totalCups) * 100
})

const liters = computed<number>(() => {
  return 2 - (250 * fullCups.value) / 1000
})

const totalCups: number = cupsList.length
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
