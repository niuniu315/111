<template>
<div class="login">
  <h1>{{msg}}</h1>
</div>
</template>

<script lang="ts">
export default {
  name: 'Login',
  data() {
    return {
      msg: '这是加载页面'
    }
  }
};
</script>

<style lang="scss" scoped>
.login{
  color: red;
}
</style>