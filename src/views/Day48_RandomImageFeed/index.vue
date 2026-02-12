<script setup lang="ts" vapor>
onMounted(() => getImgList())

const imgList = ref<any[]>([])
async function getImgList() {
  imgList.value = await getRandomImg() as any
}
</script>

<template>
  <div class="body">
    <h1>Random Image Feed</h1>
    <div class="container">
      <template v-if="imgList.length">
        <!-- 懒加载 -->
        <img v-for="(src, index) in imgList" :key="index" :src>
      </template>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use './index.scss';
</style>
