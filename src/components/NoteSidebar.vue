<template>
  <div class="note-sidebar">
    <span class="btn add-note">添加笔记</span>
    <el-dropdown class="notebook-title" @command="handleCommand" placement="bottom">
      <span class="el-dropdown-link">{{ curBook.title }}
        <Icon name="down" class="iconfont"/>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item v-for="notebook in notebooks" :command="notebook.id">
          {{ notebook.title }}
        </el-dropdown-item>
        <el-dropdown-item command="trash">回收站</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <div class="menu">
      <div>更新时间</div>
      <div>标题</div>
    </div>
    <ul class="notes">
      <li v-for="note in notes">
        <router-link :to="`/detail?noteId=${note.id}&notebookId=${curBook.id}`">
          <span class="date">{{ note.updatedAtFriendly }}</span>
          <span class="title">{{ note.title }}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import Icon from '@/components/Icon.vue';
import NotebookApi from '@/api/NotebookApi';
import NotesApi from '@/api/NotesApi';

export default {
  name: 'NoteSidebar',
  components: {Icon},
  data() {
    return {
      notebooks: [],
      notes: [],
      curBook: {}
    };
  },
  created() {
    NotebookApi.getAll().then(res => {
      this.notebooks = res.data;
      this.curBook = this.notebooks.find(notebook => notebook.id == this.$route.query.notebookId) || this.notebooks[0] || {};
      return NotesApi.getAll({notebookId: this.curBook.id}).then(res => {
        this.notes = res.data
      })
    });
  },
  methods: {
    handleCommand(notebookId) {
      if (notebookId == 'trash') {
        return this.$router.push({path: '/trash'})
      }
      NotesApi.getAll({notebookId}).then(res => {
        this.notes = res.data;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/style/detailSidebar.scss";
</style>
