<template>
  <div id="note" class="detail">
    <NoteSidebar @update:notes="val => notes = val"></NoteSidebar>
    <div class="note-detail">
      <div class="note-bar">
        {{curBook}}
        <span> 创建日期: {{ curBook.createdAtFriendly }}</span>
        <span> 更新日期: {{ curBook.updatedAtFriendly }}</span>
        <span> {{ curBook.statusText }}</span>
        <Icon name="huishouzhan" class="iconfont"/>
        <Icon name="yulan" class="iconfont"/>
      </div>
      <div class="note-title">
        <input type="text" v-model:value="curBook.title" placeholder="输入标题">
      </div>
      <div class="editor">
        <textarea v-show="true" v-model:value="curBook.content" placeholder="输入内容, 支持 markdown 语法"></textarea>
        <div class="preview markdown-body" v-html="" v-show="false">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NoteSidebar from "../components/NoteSidebar.vue";
import Icon from "@/components/Icon";
import LoginApi from "@/api/LoginApi";
import Vuee from '@/helper/vuee'

export default {
  name: 'NoteDetail',
  components: {NoteSidebar, Icon},
  data() {
    return {
      curBook: {},
      notes: []
    }
  },
  created() {
    LoginApi.getInfo().then(res => {
      if (!res.isLogin) {
        this.$router.push({path: '/login'});
      }
    });
    Vuee.$once('update:notes', val => {
      this.curNote = val.find(note => note.id == this.$route.query.noteId) || {}
    })
  },
  beforeRouteUpdate (to, from, next) {
    this.curBook = this.notes.find(notebook => notebook.id == to.query.notebookId) || {}
    console.log(to,from)
    console.log(this.notes);
    console.log(this.curBook)
    next()
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/style/notedetail.scss";

.detail {
  display: flex;
  align-items: stretch;
  background-color: #fff;
  flex: 1;
}
</style>
