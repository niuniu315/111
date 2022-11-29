<template>
  <div id="note" class="detail">
    <NoteSidebar></NoteSidebar>
    <div class="note-detail">
      <div class="note-bar">
        <span> 创建日期: 2天前</span>
        <span> 更新日期: 1分钟前</span>
        <span> 已保存</span>
        <Icon name="huishouzhan" class="iconfont"/>
        <Icon name="yulan" class="iconfont"/>
      </div>
      <div class="note-title">
        <input type="text" placeholder="输入标题">
      </div>
      <div class="editor">
        <textarea v-show="true" placeholder="输入内容, 支持 markdown 语法"></textarea>
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
      msg: '笔记详情页'
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
