<template>
  <div class="detail" id="notebook-list">
    <header>
      <a href="#" class="btn" @click.prevent="onCreate">
        <Icon name="add" class="add"/>
        新建笔记本</a>
    </header>
    <main>
      <div class="layout">
        <h3>笔记本列表({{ notebooks.length }})</h3>
        <div class="book-list">
          <router-link v-for="notebook in notebooks" :to="`/detail?notebookId=${notebook.id}`" class="notebook">
            <div>
              <Icon name="biji1"/>
              {{ notebook.title }}
              <span>{{ notebook.noteCounts }}</span>
              <!--              .stop阻止事件传播 .prevent阻止默认事件-->
              <span class="action" @click.stop.prevent="onEdit(notebook)">编辑</span>
              <span class="action" @click.stop.prevent="onDelete(notebook)">删除</span>
              <span class="date">{{ notebook.beautifyCreatedAt }}</span>
            </div>
          </router-link>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import LoginApi from '@/api/LoginApi';
import Icon from '@/components/Icon.vue';
import NotebookApi from '@/api/NotebookApi';
import beautifyDate from "@/helper/beautifyDate";

// window.Notebook = NotebookApi

export default {
  name: 'Notebook',
  components: {Icon},
  data() {
    return {
      notebooks: []
    };
  },
  created() {
    LoginApi.getInfo().then(res => {
      if (!res.isLogin) {
        this.$router.push({path: '/login'});
      }
      NotebookApi.getAll().then(res => {
        this.notebooks = res.data
      })
    });
  },
  methods: {
    onCreate() {
      this.$prompt('输入新笔记本标题', '创建笔记本', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: /^.{1,30}$/,
        inputErrorMessage: '标题不能为空，最大长度30字符'
      }).then(({value}) => {
        return NotebookApi.addNotebook({title: value})
      }).then(res => {
        res.data.beautifyCreatedAt = beautifyDate(res.data.createdAt)
        this.notebooks.unshift(res.data)
        this.$message.success(res.msg)
      })
    },
    onEdit(notebook) {
      let title = ''
      this.$prompt('输入修改后的标题', '修改笔记本', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputValue: notebook.title,
        inputPattern: /^.{1,30}$/,
        inputErrorMessage: '标题不能为空，最大长度30字符'
      }).then(({value}) => {
        title = value
        return NotebookApi.updateNotebook(notebook.id, {title})
      }).then(res => {
        notebook.title = title
        this.$message.success(res.msg)
      })
    },
    onDelete(notebook) {
      this.$confirm('确定要删除此笔记本吗', '删除笔记本', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        return NotebookApi.deleteNotebook(notebook.id)
      }).then(res => {
        this.notebooks.splice(this.notebooks.indexOf(notebook), 1)
        this.$message.success(res.msg)
      })
    }
  }
};
</script>

<style lang="scss" scoped>

@import "~@/assets/style/notebookListCss.scss";
</style>
