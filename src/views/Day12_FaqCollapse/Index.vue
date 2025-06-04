<script setup lang="ts">
interface ListItem {
  id: string
  active: boolean
  title: string
  text: string
}

const faqList = reactive<ListItem[]>([
  {
    id: '01',
    active: true,
    title: 'Why shouldn\'t we trust atoms?',
    text: 'They make up everything',
  },
  {
    id: '02',
    active: false,
    title: 'What do you call someone with no body and no nose?',
    text: 'Nobody knows.',
  },
  {
    id: '03',
    active: false,
    title: 'What\'s the object-oriented way to become wealthy?',
    text: 'Inheritance.',
  },
  {
    id: '04',
    active: false,
    title: 'How many tickles does it take to tickle an octopus?',
    text: 'Ten-tickles!',
  },
  {
    id: '05',
    active: false,
    title: 'What is: 1 + 1?',
    text: 'Depends on who are you asking.',
  },
])

function toggleActive(index: number): void {
  faqList.forEach((faq, idx) => {
    if (idx === index)
      faq.active = !faq.active
  })
}
</script>

<template>
  <div class="body">
    <h1>Frequently Asked Questions</h1>
    <div class="faq-container">
      <div
        v-for="(faq, index) in faqList" :key="faq.id"
        class="faq"
        :class="[faq.active ? 'active' : '']"
      >
        <h3 class="faq-title">
          {{ faq.title }}
        </h3>

        <p class="faq-text">
          {{ faq.text }}
        </p>

        <button class="faq-toggle" @click="toggleActive(index)">
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
