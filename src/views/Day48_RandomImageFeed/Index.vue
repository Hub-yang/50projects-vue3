<script setup>
onMounted(() => {
  getImgList()
})

const imgList = ref([])
async function getImgList() {
  imgList.value = await getRandomImg()
}
</script>

<template>
  <div class="body">
    <h1>Random Image Feed</h1>
    <div class="container">
      <template v-if="imgList.length">
        <!-- 懒加载 -->
        <img v-for="(src, index) in imgList" :key="index" v-lazy="src">
      </template>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use './index.scss';
</style>
