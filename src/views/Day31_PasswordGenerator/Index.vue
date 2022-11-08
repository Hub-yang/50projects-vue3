<template>
  <div class="body">
    <div class="container">
      <h2>密码生成器</h2>
      <div class="result-container">
        <span id="result">{{ resPassword }}</span>
        <button class="btn" id="clipboard" @click="handleCopy(resPassword)">
          <i class="far fa-clipboard"></i>
        </button>
      </div>
      <div class="settings">
        <div class="setting">
          <label>密码长度</label>
          <input type="number" id="length" min="4" max="20" v-model="length" />
        </div>
        <div class="setting">
          <label>是否包含大写字母</label>
          <input type="checkbox" id="uppercase" v-model="hasUpper" />
        </div>
        <div class="setting">
          <label>是否包含小写字母</label>
          <input type="checkbox" id="lowercase" v-model="hasLower" />
        </div>
        <div class="setting">
          <label>是否包含数字</label>
          <input type="checkbox" id="numbers" v-model="hasNumber" />
        </div>
        <div class="setting">
          <label>是否包含符号</label>
          <input type="checkbox" id="symbols" v-model="hasSymbol" />
        </div>
      </div>

      <button class="btn btn-large" id="generate" @click="handleClick">
        生成密码
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue"
const resPassword = ref("")
const length = ref(5)
const hasLower = ref(true)
const hasUpper = ref(true)
const hasNumber = ref(true)
const hasSymbol = ref(true)
const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
}

// 复制密码
async function handleCopy(text) {
  if (resPassword.value) {
    await navigator.clipboard.writeText(text)
    alert("密码已复制到剪切板！")
  }
}

// 生成密码
function handleClick() {
  resPassword.value = generatePassword(
    hasLower.value,
    hasUpper.value,
    hasNumber.value,
    hasSymbol.value,
    length.value
  )
}

function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = ""
  const typesCount = lower + upper + number + symbol
  const typesArr = ["lower", "upper", "number", "symbol"]

  if (typesCount === 0) {
    alert("至少选择一项")
    return ""
  }

  for (let i = 0; i < length; i += typesCount) {
    // 数组重排
    typesArr.sort(() => Math.random() - 0.5)
    console.log(typesArr)
    typesArr.forEach((type) => {
      generatedPassword += randomFunc[type]()
    })
  }

  const finalPassword = generatedPassword.slice(0, length)
  return finalPassword
}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol() {
  const symbols = "!@#$%^&*(){}[]=<>/,."
  return symbols[Math.floor(Math.random() * symbols.length)]
}
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
