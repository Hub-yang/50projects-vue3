<script setup lang="ts">
const cupsList = reactive<{ capacity: number, isFull: boolean }[]>([
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
  if (idx === 7 && cupsList[idx].isFull)
    idx--
  else if (cupsList[idx].isFull && !cupsList[idx + 1].isFull)
    idx--

  cupsList.forEach((cup, idx2) => {
    cup.isFull = !!(idx2 <= idx)
  })
}

const fullCups = computed(() => cupsList.filter(cup => cup.isFull).length)

const totalCups = cupsList.length

const percentageHeight = computed(() => {
  if (fullCups.value === 0)
    return 0
  else return (fullCups.value / totalCups) * 330
})

const proportion = computed(() => fullCups.value / totalCups * 100)

const liters = computed(() => 2 - (250 * fullCups.value) / 1000)
</script>

<template>
  <div class="body base_container">
    <div class="left_area">
      <h1>Drink Water</h1>
      <h3>Goal: 2 Liters</h3>

      <div class="cup">
        <div v-show="!(fullCups === totalCups)" class="remained">
          <span>{{ liters }}L</span>
          <small>Remained</small>
        </div>

        <div
          v-show="fullCups"
          class="percentage"
          :style="{ height: `${percentageHeight}px` }"
        >
          {{ proportion }}%
        </div>
      </div>
    </div>
    <div class="right_area">
      <p class="text">
        Select how many glasses of water that you have drank
      </p>

      <div class="cups">
        <div
          v-for="(cup, idx) in cupsList" :key="idx"
          class="cup cup-small"
          :class="[!cup.isFull || 'full']"
          @click="highlightCups(idx)"
        >
          {{ cup.capacity }}
          ml
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import './index.scss';
</style>
