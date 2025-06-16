<script setup>
const notesList = ref([])

onMounted(() => {
  notesList.value = JSON.parse(localStorage.getItem('noteslist'))
    ? JSON.parse(localStorage.getItem('noteslist'))
    : []
})

function addNote() {
  const obj = reactive({
    text: '',
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
    localStorage.setItem('noteslist', JSON.stringify(val))
  },
  { deep: true },
)
</script>

<template>
  <div class="body">
    <button id="add" class="add" @click="addNote">
      <i class="fas fa-plus" /> Add note
    </button>

    <div v-for="(note, index) in notesList" :key="index" class="note">
      <div class="tools">
        <button class="edit" @click="editNote(index)">
          <i class="fas fa-edit" />
        </button>
        <button class="delete" @click="removeNote(index)">
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
