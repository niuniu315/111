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
              <span>{{notebook.noteCounts}}</span>
<!--              .stop阻止事件传播 .prevent阻止默认事件-->
              <span class="action" @click.stop.prevent="onEdit(notebook)">编辑</span>
              <span class="action" @click.stop.prevent="onDelete">删除</span>
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
    onCreate() {
      console.log(1);
    },
    onEdit() {
      console.log(2);
    },
    onDelete() {
      console.log(3);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/notebookListCss.scss";
</style>