<script setup>
const notesList = ref([])

onMounted(() => {
  const cache = JSON.parse(localStorage.getItem('noteslist'))
  notesList.value = cache || []
})

function addNote() {
  const note = {
    text: '',
    showMain: true,
    showTextArea: true,
  }

  notesList.value.push(note)
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
  val => localStorage.setItem('noteslist', JSON.stringify(val)),
  { deep: true },
)
</script>

<template>
  <div class="body base_container">
    <button id="add" class="add" @click="addNote">
      <i class="fas fa-plus" /> Add note
    </button>

    <div v-for="(note, idx) in notesList" :key="idx" class="note">
      <div class="tools">
        <button class="edit" @click="editNote(idx)">
          <i class="fas fa-edit" />
        </button>
        <button class="delete" @click="removeNote(idx)">
          <i class="fas fa-trash-alt" />
        </button>
      </div>

      <div class="main" :class="[note.text && note.showMain ? '' : 'hidden']">
        {{ note.text }}
      </div>
      <textarea
        v-model.lazy="note.text"
        :class="note.text && note.showTextArea ? 'hidden' : ''"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use './index.scss';
</style>
