<script setup lang="ts">
onMounted(async () => {
  await nextTick()
  document.documentElement.style.setProperty('--body-overflow', 'auto')
  checkBoxes()
  window.addEventListener('scroll', checkBoxes)
})
onUnmounted(() => {
  document.documentElement.style.setProperty('--body-overflow', 'hidden')
})

function checkBoxes() {
  const boxs = document.querySelectorAll('.box')
  const triggerBottom = (window.innerHeight / 5) * 4

  boxs.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top
    if (boxTop < triggerBottom)
      box.classList.add('show')
    else
      box.classList.remove('show')
  })
}
</script>

<template>
  <div class="body">
    <h1>Scroll to see the animation</h1>
    <div v-for="key in 15" :key class="box">
      <h2>Content</h2>
    </div>

    <div class="pagenation">
      <button @click="$router.push('/day05')">
        上一页
      </button>
      <button @click="$router.push('/day07')">
        下一页
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use './index.scss';
</style>
