<template>
  <div class="body">
    <h1>Scroll to see the animation</h1>
    <div class="box" v-for="item in 15">
      <h2>Content</h2>
    </div>
  </div>
</template>

<script setup lang="ts">
onMounted(() => {
  checkBoxes()
  window.addEventListener("scroll", checkBoxes)
})

function checkBoxes() {
  const boxs = document.querySelectorAll(".box")
  const triggerBottom = (window.innerHeight / 5) * 4

  boxs.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top

    if (boxTop < triggerBottom) {
      box.classList.add("show")
    } else {
      box.classList.remove("show")
    }
  })
}
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
