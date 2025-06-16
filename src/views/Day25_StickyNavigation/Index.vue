<script setup lang="ts">
import type { VNodeRef } from 'vue'

const nav = ref<VNodeRef | null>(null)
const navActive = ref(false)
const navList = reactive([
  { active: true, title: 'Home', url: 'https://images.pexels.com/photos/450035/pexels-photo-450035.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' },
  { active: false, title: 'About', url: 'src/assets/imgs/004.jpg' },
  { active: false, title: 'Services', url: 'src/assets/imgs/005.jpg' },
  { active: false, title: 'Contact', url: 'src/assets/imgs/001.jpg' },
])

onMounted(() => window.addEventListener('scroll', fixNav))

function fixNav() {
  navActive.value = (window.scrollY > nav.value.offsetHeight + 150)
}

function handleClick(title: string) {
  navList.forEach((nav) => {
    nav.active = nav.title === title
  })
}

const url = computed(() => navList.find(nav => !!nav.active)?.url)
</script>

<template>
  <div class="body">
    <nav ref="nav" class="nav" :class="[navActive ? 'active' : '']">
      <div class="container">
        <h1 class="logo">
          <a href="#">My Website</a>
        </h1>
        <ul>
          <li v-for="({ active, title }) in navList" :key="title">
            <a
              href="#"
              :class="[active ? 'current' : '']"
              @click="handleClick(title)"
            >{{ title }}</a>
          </li>
        </ul>
      </div>
    </nav>

    <div class="hero" :style="{ backgroundImage: `url(${url})` }">
      <div class="container">
        <h1>Welcome To My Website</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores,
          consequuntur?
        </p>
      </div>
    </div>

    <section class="container content">
      <h2>Content One</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
        dolorem voluptates eveniet tempora ut cupiditate magnam, sapiente, hic
        quo in ipsum iste soluta eaque perferendis nihil recusandae dolore
        officia aperiam corporis similique. Facilis quos tempore labore totam!
        Consectetur molestiae iusto ducimus error reiciendis aspernatur dolor,
        modi dolorem sit architecto, voluptate magni sunt unde est quas?
        Voluptates a dolorum voluptatum quo perferendis aut sit. Aspernatur
        libero laboriosam ab eligendi omnis delectus earum labore, placeat
        officiis sint illum rem voluptas ipsum repellendus iste eius recusandae
        quae excepturi facere, iure rerum sequi? Illum velit delectus dicta et
        iste dolorum obcaecati minus odio eligendi!
      </p>

      <h3>Content Two</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur
        provident nostrum possimus inventore nisi laboriosam consequatur modi
        nulla eos, commodi, omnis distinctio! Maxime distinctio impedit
        provident, voluptates illo odio nostrum minima beatae similique a sint
        sapiente voluptatum atque optio illum est! Tenetur tempora doloremque
        quae iste aperiam hic cumque repellat?
      </p>
    </section>
  </div>
</template>

<style scoped lang="scss">
@use './index.scss';
</style>
