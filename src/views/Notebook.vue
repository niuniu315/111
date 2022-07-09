<template>
  <div class="notebook-list">
    <h1>{{ msg }}</h1>
    <ul>
      <li>
        <router-link to="/detail/1">笔记本1</router-link>
        <router-link to="/detail/2">笔记本2</router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Auth from '@/api/Auth';

export default {
  name: 'Notebook',
  data() {
    return {
      msg: '笔记本列表'
    };
  },
  created() {
    Auth.getInfo().then(res => {
      if (!res.isLogin) {
        this.$router.push({path: '/login'})
      }
    })
  }
};
</script>

<style lang="scss" scoped>

</style>