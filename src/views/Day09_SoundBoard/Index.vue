<script setup lang="ts">
const audioList = [
  { id: 'boo', src: 'src/views/Day09_SoundBoard/audios/boo.mp3' },
  { id: 'gasp', src: 'src/views/Day09_SoundBoard/audios/gasp.mp3' },
  { id: 'tada', src: 'src/views/Day09_SoundBoard/audios/tada.mp3' },
  { id: 'wrong', src: 'src/views/Day09_SoundBoard/audios/wrong.mp3' },
]

const btnList = ['boo', 'gasp', 'tada', 'wrong']

function play(sound: string) {
  stopSongs()
  const el: HTMLMediaElement = document.getElementById(sound) as HTMLMediaElement
  el.volume = 0.3
  el?.play()
}
function stopSongs() {
  btnList.forEach((sound) => {
    const song: HTMLMediaElement = document.getElementById(sound) as HTMLMediaElement
    song?.pause()
    song.currentTime = 0
  })
}
</script>

<template>
  <div class="body">
    <audio v-for="{ id, src } in audioList" :id :key="id" :src />
    <button
      v-for="btn in btnList"
      :key="btn"
      class="btn"
      @click="play(btn)"
    >
      {{ btn }}
    </button>
  </div>
</template>

<style scoped lang="scss">
@use './index.scss';
</style>
