<template>
  <div class="sidebar">
    <div class="icons">
      <router-link to="/detail/1" title="笔记">
        <span class="iconfont icon-note">1111</span>
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
export default {
  name: 'Sidebar'
};
</script>

<style lang="scss" scoped>
.sidebar {
  width: 56px;
  text-align: center;
  background-color: #2c333c;
}
</style>