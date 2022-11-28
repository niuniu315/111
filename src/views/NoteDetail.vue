<template>
  <div id="note" class="detail">
    <NoteSidebar></NoteSidebar>
    <div id="note-detail">
      <h1>notebookId: {{ $route.query.notebookId }}</h1>
      <h1>noteId: {{ $route.query.noteId }}</h1>
    </div>
  </div>
</template>

<script>
import NoteSidebar from "../components/NoteSidebar.vue";

export default {
  name: 'NoteDetail',
  components: {NoteSidebar},
  data() {
    return {
      msg: '笔记详情页'
    }
  }
};
</script>

<style scoped>
.detail {
  display: flex;
  align-items: stretch;
  background-color: #fff;
  flex: 1;
}
</style>
