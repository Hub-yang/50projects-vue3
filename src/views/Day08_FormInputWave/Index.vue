<template>
  <div class="body">
    <div class="container">
      <h1>Please Login</h1>
      <form>
        <div class="form-control">
          <input type="text" required>
          <label>
            <span
              v-for="(letter, idx) in 'Email'"
              :key="letter + idx"
              :style="{ transitionDelay: `${idx * 50}ms` }"
            >{{ letter }}</span>
          </label>
        </div>

        <div class="form-control">
          <input type="password" required>
          <label>
            <span
              v-for="(letter, idx) in 'Password'"
              :key="letter + idx"
              :style="{ transitionDelay: `${idx * 50}ms` }"
            >{{ letter }}</span>
          </label>
        </div>

        <button class="btn" @click.prevent>
          Login
        </button>

        <p class="text">
          Don't have an account? <a href="#">Register</a>
        </p>
      </form>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use './index.scss';
</style>
