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
        <i class="fas fa-arrow-left" />&nbsp;
        上一页
      </button>
      <button @click="$router.push('/day07')">
        下一页
        &nbsp;<i class="fas fa-arrow-right" />
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use './index.scss';

.pagenation {
  z-index: 999;
  height: 70px;
  width: 100%;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  gap: 30%;

  button {
    width: 50%;
    height: 100%;
    background: #252525;
    border-radius: 0.5rem;
    color: white;
    font-size: 18px;
    border: none;
    cursor: pointer;
  }
}
</style>
