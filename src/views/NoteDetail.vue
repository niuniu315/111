<template>
  <div id="note" class="detail">
    <NoteSidebar @update:notes="val => notes = val"></NoteSidebar>
    <div class="note-detail">
      <div class="note-empty" v-show="!curNote.id">请选择笔记</div>
      <div class="note-detail-ct" v-show="curNote.id">
        <div class="note-bar">
          <span> 创建日期: {{ curNote.createdAtFriendly }}</span>
          <span> 更新日期: {{ curNote.updatedAtFriendly }}</span>
          <span> {{ statusText }}</span>
          <Icon name="huishouzhan" class="iconfont"/>
          <Icon name="yulan" class="iconfont"/>
        </div>
        <div class="note-title">
          <input type="text" v-model:value="curNote.title" @input="updateNote" placeholder="输入标题">
        </div>
        <div class="editor">
          <textarea v-show="true" v-model:value="curNote.content" @input="updateNote" placeholder="输入内容, 支持 markdown 语法"></textarea>
          <div class="preview markdown-body" v-html="" v-show="false">
          </div>
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
import NotesApi from '@/api/NotesApi'
import _ from 'lodash'

export default {
  name: 'NoteDetail',
  components: {NoteSidebar, Icon},
  data() {
    return {
      curNote: {},
      notes: [],
      statusText: '笔记未改动'
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
  methods: {
    updateNote: _.debounce(function () {
      NotesApi.updateNote({noteId: this.curNote.id}, {title: this.curNote.title, content: this.curNote.content}).then(data => {
        this.statusText = '已保存'
      }).catch(data => {
        this.statusText = '保存出错'
      })
    }, 300)
  },
  beforeRouteUpdate(to, from, next) {
    this.curNote = this.notes.find(note => note.id == to.query.noteId) || {}
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
