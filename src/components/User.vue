<template>
  <span :title="username">{{ slug }}</span>
</template>

<script>
import LoginApi from '@/api/LoginApi';
import Vuee from '@/helper/vuee.js';

export default {
  name: 'User',
  data() {
    return {
      username: '未登录',
    };
  },
  created() {
    Vuee.$on('userInfo', user => {
      this.username = user.username;
    });
    LoginApi.getInfo().then(res => {
      if (res.isLogin) {
        this.username = res.data.username;
      }
    });
  },
  computed: {
    slug() {
      return this.username[0];
    }
  }
};
</script>

<style lang="scss" scoped>
span {
  display: inline-block;
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 32px;
  border-radius: 50%;
  background: #f2b81c;
  color: #fff;
  text-shadow: 1px 0 1px #795c19;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 18px;
  margin-top: 15px;
}
</style>