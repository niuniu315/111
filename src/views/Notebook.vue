<template>
  <div class="detail" id="notebook-list">
    <header>
      <a href="#" class="btn" @click="onCreate">
        <Icon name="add" class="add"/>
        新建笔记本</a>
    </header>
    <main>
      <div class="layout">
        <h3>笔记本列表({{ notebooks.length }})</h3>
        <div class="book-list">
          <router-link v-for="notebook in notebooks" to="/note/1" class="notebook">
            <div>
              <Icon name="biji1"/>
              {{ notebook.title }}
              <span>{{ notebook.noteCounts }}</span>
              <!--              .stop阻止事件传播 .prevent阻止默认事件-->
              <span class="action" @click.stop.prevent="onEdit(notebook)">编辑</span>
              <span class="action" @click.stop.prevent="onDelete(notebook)">删除</span>
              <span class="date">3天前</span>
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
    onCreate: function () {
      const title = window.prompt('创建笔记本')
      // .trim() 删除字符串里的空格（所有空白字符）
      if (title.trim() === '') {
        window.alert('笔记本名不能为空')
      }
      NotebookApi.addNotebook({title}).then(res => {
        window.alert(res.msg)
        // .unshift 将一个或多个元素添加到数组的开头，保留原数组
        this.notebooks.unshift(res.data)
      })
    },
    onEdit(notebook) {
      const title = window.prompt('修改标题', notebook.title)
      NotebookApi.updateNotebook(notebook.id, {title})
          .then(res => {
            notebook.title = title
            window.alert(res.msg)
          })
    },
    onDelete(notebook) {
      const isConfirm = window.confirm('你确定要删除吗?')
      if (isConfirm) {
        NotebookApi.deleteNotebook(notebook.id)
            .then(res => {
              this.notebooks.splice(this.notebooks.indexOf(notebook), 1)
              alert(res.msg)
            })
      }
    }
  }
};
</script>

<style lang="scss" scoped>

@import "~@/assets/style/notebookListCss.scss";
</style>