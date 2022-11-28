<template>
  <div class="note-detail">
    <h1>notebookId: {{ $route.query.notebookId }}</h1>
    <h1>noteId: {{ $route.query.noteId }}</h1>
  </div>
</template>

<script>
export default {
  name: 'NoteDetail',
  data() {
    return {
      msg: '笔记详情页'
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
