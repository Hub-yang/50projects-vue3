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

<script setup>

onMounted(() => {
  getImgList()
})


const imgList = ref([])
const getImgList = async () => {
  imgList.value = await getRandomImg()
}

</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
