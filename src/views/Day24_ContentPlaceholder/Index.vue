<script setup lang="ts">
const info = reactive<{ [prop: string]: string }>({
  srcOne: '',
  srcTwo: '',
  title: '',
  excerpt: '',
  name: '',
  date: '',
})
const showPlaceHolder = ref<boolean>(true)

onMounted(() => {
  setTimeout(() => {
    getData()
  }, 2500)
})

function getData() {
  showPlaceHolder.value = false
  info.srcOne
    = 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80'
  info.srcTwo = 'https://randomuser.me/api/portraits/men/45.jpg'
  info.title = 'Lorem ipsum dolor sit amet'
  info.excerpt
    = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis'
  info.name = 'Mocheng'
  info.date = '2022/10/27'
}
</script>

<template>
  <div class="body">
    <div class="card">
      <div class="card-header" :class="[showPlaceHolder ? 'animated-bg' : '']">
        <img v-if="info.srcOne" :src="info.srcOne" alt="">
      </div>

      <div class="card-content">
        <h3
          class="card-title" :class="[
            showPlaceHolder ? 'animated-bg animated-bg-text' : '',
          ]"
        >
          {{ info.title }}
        </h3>
        <p class="card-excerpt">
          <template v-if="info.excerpt">
            {{ info.excerpt }}
          </template>
          <template v-else>
            &nbsp;
            <span
              :class="[showPlaceHolder ? 'animated-bg animated-bg-text' : '']"
            >&nbsp;</span>
            <span
              :class="[showPlaceHolder ? 'animated-bg animated-bg-text' : '']"
            >&nbsp;</span>
            <span
              :class="[showPlaceHolder ? 'animated-bg animated-bg-text' : '']"
            >&nbsp;</span>
          </template>
        </p>
        <div class="author">
          <div class="profile-img" :class="[showPlaceHolder ? 'animated-bg' : '']">
            <img v-if="info.srcTwo" :src="info.srcTwo" alt="">
          </div>
          <div class="author-info">
            <strong
              :class="[showPlaceHolder ? 'animated-bg animated-bg-text' : '']"
            >{{ info.name }}</strong>
            <small
              :class="[showPlaceHolder ? 'animated-bg animated-bg-text' : '']"
            >{{ info.date }}</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "./index.scss";
</style>
