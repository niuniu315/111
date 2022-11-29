<template>
  <div id="note" class="detail">
    <NoteSidebar></NoteSidebar>
    <div class="note-detail">
      <div class="note-bar">
        <span> 创建日期: {{ curNote.createdAtFriendly }}</span>
        <span> 更新日期: {{ curNote.updatedAtFriendly }}</span>
        <span> {{  curNote.statusText }}</span>
        <Icon name="huishouzhan" class="iconfont"/>
        <Icon name="yulan" class="iconfont"/>
      </div>
      <div class="note-title">
        <input type="text" :value="curNote.title" placeholder="输入标题">
      </div>
      <div class="editor">
        <textarea v-show="true" :value="curNote.content" placeholder="输入内容, 支持 markdown 语法"></textarea>
        <div class="preview markdown-body" v-html="" v-show="false">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NoteSidebar from "../components/NoteSidebar.vue";
import Icon from "@/components/Icon";

export default {
  name: 'NoteDetail',
  components: {NoteSidebar, Icon},
  data() {
    return {
      curNote: {
        title: '我的笔记',
        content: '我的笔记内容',
        createdAtFriendly: '一天前',
        updatedAtFriendly: '刚刚',
        statusText: '未更新'
      }
    }
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
