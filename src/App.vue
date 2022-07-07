<template>
  <div id="app">
    <Sidebar/>
    <router-view/>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import x from '../src/assets/icons/biji.svg'

console.log(x);

export default {
  components: {Sidebar}
}
</script>

<style lang="scss">
@import "assets/style/reset";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
}
</style>