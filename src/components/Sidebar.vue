<template>
  <div class="sidebar">
    <div class="icons">
      <router-link to="/detail/1" title="笔记">
        <Icon name="biji"/>
      </router-link>
      <router-link to="/notebook" title="笔记本">
        <span class="iconfont icon-notebook"></span>
      </router-link>
      <router-link to="/trash/2" title="回收站">
        <span class="iconfont icon-trash"></span>
      </router-link>
    </div>
    <div class="logout">
      <span class="iconfont icon-logout"></span>
    </div>
  </div>
</template>

<script lang="ts">
import Icon from '@/components/Icon.vue';
export default {
  name: 'Sidebar',
  components: {Icon}
};
</script>

<style lang="scss" scoped>
.sidebar {
  width: 56px;
  text-align: center;
}
</style>