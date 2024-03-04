<script setup lang="ts">
const nav = ref<HTMLElement>()
const navActive = ref<boolean>(false)
const navList = reactive([
  { id: 0, active: true, title: 'Home' },
  { id: 1, active: false, title: 'About' },
  { id: 2, active: false, title: 'Services' },
  { id: 3, active: false, title: 'Contact' },
])
const url = ref<string>(
  'https://images.pexels.com/photos/450035/pexels-photo-450035.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
)

onMounted(() => {
  window.addEventListener('scroll', fixNav)
})

function fixNav() {
  if (window.scrollY > (nav.value as HTMLElement).offsetHeight + 150)
    navActive.value = true
  else
    navActive.value = false
}

function handleClick(idx: number) {
  navList.forEach((nav) => {
    if (nav.id === idx)
      nav.active = true
    else
      nav.active = false

    switch (idx) {
      case 0:
        url.value
          = 'https://images.pexels.com/photos/450035/pexels-photo-450035.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        break
      case 1:
        url.value = 'src/assets/imgs/004.jpg'
        break
      case 2:
        url.value = 'src/assets/imgs/005.jpg'
        break
      case 3:
        url.value = 'src/assets/imgs/001.jpg'
        break
    }
  })
}
</script>

<template>
  <div class="body">
    <nav ref="nav" class="nav" :class="[navActive ? 'active' : '']">
      <div class="container">
        <h1 class="logo">
          <a href="#">My Website</a>
        </h1>
        <ul>
          <li v-for="(navItem, index) in navList" :key="navItem.id">
            <a
              href="#"
              :class="[navItem.active ? 'current' : '']"
              @click="handleClick(index)"
            >{{ navItem.title }}</a>
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
@import "./index.scss";
</style>
