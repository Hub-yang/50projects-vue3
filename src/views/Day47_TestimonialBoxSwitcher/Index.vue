<template>
  <div class="body">
    <div class="testimonial-container">
      <div v-if="!currentUser">Loading...</div>
      <template v-else>
        <div class="progress-bar"></div>
        <div class="fas fa-quote-right fa-quote"></div>
        <div class="fas fa-quote-left fa-quote"></div>
        <p class="testimonial">{{ currentUser.text }}</p>
        <div class="user">
          <img :src="currentUser.photo" alt="user" class="user-image" />
          <div class="user-details">
            <h4 class="username">{{ currentUser.name }}</h4>
            <p class="role">{{ currentUser.position }}</p>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
const userList = ref([])
const currentUser = ref()
const idx = ref(1)
const delay = 5000
const animateDelay = computed(() => delay / 1000 + 's')
let timer
onMounted(() => {
  getData()
})

onUnmounted(() => {
  clearInterval(timer)
})

function toggleUser(idx) {
  currentUser.value = userList.value[idx]
  console.log(currentUser.value)
}

async function getData() {
  const { data } = await getUserList()
  if (Object.keys(data).length) {
    userList.value = data.testimonials
    toggleUser(0)
    timer = setInterval(() => {
      toggleUser(idx.value)
      if (idx.value === userList.value.length - 1) {
        idx.value = 0
      } else {
        idx.value++
      }
    }, delay)
  }
}
</script>

<style scoped lang="scss">
@import "./index.scss";

.progress-bar {
  animation: grow v-bind(animateDelay) linear infinite;
}
</style>
