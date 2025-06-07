<script setup lang="ts">
interface ListItem {
  active: boolean
  title: string
  text: string
}

const faqList = reactive<ListItem[]>([
  {
    active: true,
    title: 'Why shouldn\'t we trust atoms?',
    text: 'They make up everything',
  },
  {
    active: false,
    title: 'What do you call someone with no body and no nose?',
    text: 'Nobody knows.',
  },
  {
    active: false,
    title: 'What\'s the object-oriented way to become wealthy?',
    text: 'Inheritance.',
  },
  {
    active: false,
    title: 'How many tickles does it take to tickle an octopus?',
    text: 'Ten-tickles!',
  },
  {
    active: false,
    title: 'What is: 1 + 1?',
    text: 'Depends on who are you asking.',
  },
])

function toggleActive(index: number) {
  faqList.forEach((faq, idx) => {
    if (idx === index)
      faq.active = !faq.active
  })
}
</script>

<template>
  <div class="body base_container">
    <h1>Frequently Asked Questions</h1>
    <div class="faq-container">
      <div
        v-for="({ active, title, text }, idx) in faqList" :key="text"
        class="faq"
        :class="[active ? 'active' : '']"
      >
        <h3 class="faq-title">
          {{ title }}
        </h3>

        <p class="faq-text">
          {{ text }}
        </p>

        <button class="faq-toggle" @click="toggleActive(idx)">
          <i class="fas fa-chevron-down" />
          <i class="fas fa-times" />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import './index.scss';
</style>
