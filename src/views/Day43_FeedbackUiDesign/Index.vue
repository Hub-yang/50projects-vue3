<script setup>
const showRes = ref(false)
const imgList = reactive([
  { active: true, rating: 'Unhappy', url: 'src/assets/imgs/external-emoji-neumojis-smiley-neu-royyan-wijaya-17.png' },
  { active: false, rating: 'Neutral', url: 'src/assets/imgs/external-emoji-neumojis-smiley-neu-royyan-wijaya-3.png' },
  { active: false, rating: 'Satisfied', url: 'src/assets/imgs/external-emoji-neumojis-smiley-neu-royyan-wijaya-30.png' },
])
const review = ref(imgList[0].rating)

function saveReview(rating, idx) {
  review.value = rating
  imgList.forEach((item, index) => {
    item.active = index === idx
  })
}

function sendReview() {
  showRes.value = !showRes.value
}
</script>

<template>
  <div class="body base_container">
    <div id="panel" class="panel-container">
      <template v-if="!showRes">
        <strong>How satisfied are you with our <br> customer support performance?</strong>
        <div class="ratings-container">
          <div
            v-for="({ rating, active, url: src }, index) in imgList" :key="rating" class="rating" :class="{ active: !!active }"
            @click="saveReview(rating, index)"
          >
            <img :src alt="">
            <small>{{ rating }}</small>
          </div>
        </div>
      </template>
      <template v-else>
        <i class="fas fa-heart" />
        <strong>Thank You!</strong>
        <br>
        <strong>Feedback: <span style="color:red;">{{ review }}</span></strong>
        <p>We'll use your feedback to improve our customer support</p>
      </template>
      <button id="send" class="btn" @click="sendReview">
        {{ showRes ? "Back" : "Send Review" }}
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use './index.scss';
</style>
