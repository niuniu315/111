<template>
  <div class="detail" id="notebook-list">
    <header>
      <a href="#" class="btn">
        <Icon name="add"/>
        新建笔记本</a>
    </header>
    <main>
      <div class="layout">
        <h3>笔记本列表</h3>
        <div class="book-list">
          <a href="#" class="notebook">
            <div>
              <Icon name="biji1"/>
              笔记标题
              <span>3</span>
              <span class="action">编辑</span>
              <span class="action">删除</span>
              <span class="date">3天前</span>
            </div>
          </a>
          <a href="#" class="notebook">
            <div>
              <Icon name="biji1"/>
              笔记标题
              <span>3</span>
              <span class="action">编辑</span>
              <span class="action">删除</span>
              <span class="date">3天前</span>
            </div>
          </a>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import Auth from '@/api/Auth';
import Icon from '@/components/Icon.vue';

export default {
  name: 'Notebook',
  components: {Icon},
  data() {
    return {
      msg: '笔记本列表'
    };
  },
  created() {
    Auth.getInfo().then(res => {
      if (!res.isLogin) {
        this.$router.push({path: '/login'});
      }
    });
  }
};
</script>

<style lang="scss" scoped>

</style>