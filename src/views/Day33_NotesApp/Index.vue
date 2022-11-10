<template>
  <div class="body">
    <button class="add" id="add" @click="addNote">
      <i class="fas fa-plus"></i> Add note
    </button>

    <div class="note" v-for="(note, index) in notesList" :key="index">
      <div class="tools">
        <button class="edit" @click="editNote(index)">
          <i class="fas fa-edit"></i>
        </button>
        <button class="delete" @click="removeNote(index)">
          <i class="fas fa-trash-alt"></i>
        </button>
      </div>

      <div :class="['main', note.text && note.showMain ? '' : 'hidden']">
        {{ note.text }}
      </div>
      <textarea
        :class="note.text && note.showTextArea ? 'hidden' : ''"
        v-model.lazy="note.text"
      ></textarea>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, reactive, nextTick, watch } from "vue"

onMounted(() => {
  notesList.value = JSON.parse(localStorage.getItem("noteslist"))
    ? JSON.parse(localStorage.getItem("noteslist"))
    : []
})

const notesList = ref([])

function addNote() {
  let obj = reactive({
    text: "",
    showMain: true,
    showTextArea: true,
  })

  notesList.value.push(obj)
}

function editNote(idx) {
  notesList.value[idx].showMain = !notesList.value[idx].showMain
  notesList.value[idx].showTextArea = !notesList.value[idx].showTextArea
}
function removeNote(idx) {
  notesList.value = notesList.value.filter((_, index) => index !== idx)
}

watch(
  notesList,
  (val) => {
    localStorage.setItem("noteslist", JSON.stringify(val))
  },
  { deep: true }
)
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
