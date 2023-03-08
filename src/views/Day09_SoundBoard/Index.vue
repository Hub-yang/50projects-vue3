<template>
  <div class="body">
    <audio
      v-for="(audio, idx) in audioList"
      :key="audio.id"
      :id="audio.id"
      :src="audio.src"
    ></audio>

    <button
      class="btn"
      v-for="(btn, idx) in btnList"
      :key="idx"
      @click="play(btn)"
    >
      {{ btn }}
    </button>
  </div>
</template>

<script setup lang="ts">
const audioList = reactive<{ id: string; src: string }[]>([
  { id: "applause", src: "src/views/Day09_SoundBoard/audios/applause.mp3" },
  { id: "boo", src: "src/views/Day09_SoundBoard/audios/boo.mp3" },
  { id: "gasp", src: "src/views/Day09_SoundBoard/audios/gasp.mp3" },
  { id: "tada", src: "src/views/Day09_SoundBoard/audios/tada.mp3" },
  { id: "victory", src: "src/views/Day09_SoundBoard/audios/victory.mp3" },
  { id: "wrong", src: "src/views/Day09_SoundBoard/audios/wrong.mp3" },
])

type List = [string, string, string, string, string, string]
let btnList: List = ["applause", "boo", "gasp", "tada", "victory", "wrong"]

function play(sound: string): void {
  stopSongs()
  const el: HTMLMediaElement = document.getElementById(
    sound
  ) as HTMLMediaElement
  el?.play()
}
function stopSongs() {
  btnList.forEach((sound) => {
    const song: HTMLMediaElement = document.getElementById(
      sound
    ) as HTMLMediaElement
    song?.pause()
    song.currentTime = 0
  })
}
</script>

<style scoped lang="scss">
@import "src/views/Day09_SoundBoard/index.scss";
</style>
