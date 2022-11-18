<template>
  <div class="body">
    <div class="container">
      <h2>Verify Your Account</h2>
      <p>We emailed you the six digit code to cool_guy@email.com <br /> Enter the code below to confirm your email
        address.</p>
      <div class="code-container">
        <input v-for="i in 6" :key="i" type="number" class="code" placeholder="0" min="0" max="9" required>
      </div>
      <small class="info">
        This is design only. We didn't actually send you an email as we don't have your email, right?
      </small>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, createTextVNode } from "vue"

const vFocus = {
  mounted: (el) => {
    return el.focus()
  }
}

onMounted(() => {
  const codes = document.querySelectorAll(".code")
  codes[0].focus()

  codes.forEach((code, idx) => {
    code.addEventListener('keydown', (e) => {
      if (e.key >= 0 && e.key <= 9) {
        codes[idx].value = ""
        if (idx < codes.length - 1) {
          setTimeout(() => codes[idx + 1].focus(), 50)
        }
      } else if (e.key == "Backspace" && idx > 0) {
        setTimeout(() => codes[idx - 1].focus(), 50)
      }
    })
  })
})

</script>

<style soped lang="scss">
@import "./index.scss"
</style>
