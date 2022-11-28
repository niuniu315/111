<template>
  <div class="note-sidebar">
    <span class="btn add-note">添加笔记</span>
    <el-dropdown class="notebook-title" @command="handleCommand" placement="bottom">
      <span class="el-dropdown-link">我的笔记1
        <Icon name="down" class="iconfont"/>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item v-for="notebook in notebooks" :command="notebook.id">
          {{ notebook.title }}
        </el-dropdown-item>
        <el-dropdown-item command="trash">回收站</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <div class="menu">
      <div>更新时间</div>
      <div>标题</div>
    </div>
    <ul class="notes">
      <li v-for="note in notes">
        <router-link :to="`/detail?noteId=${note.id}`">
          <span class="date">{{ note.updateAtBeautify }}</span>
          <span class="title">{{ note.title }}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Icon from '@/components/Icon.vue';

export default {
  name: 'NoteSidebar',
  components: {Icon},
  data() {
    return {
      notebooks: [
        {
          id: 1,
          title: 'hello',
          updateAtBeautify: '刚刚'
        },
        {
          id: 2,
          title: 'hello word',
          updateAtBeautify: '1分钟前'
        }
      ],
      notes: [
        {
          id: 11,
          title: 'hello word11',
          updateAtBeautify: '1分钟前'
        },
        {
          id: 22,
          title: 'hello word22',
          updateAtBeautify: '1分钟前'
        }
      ]
    };
  },
  methods: {
    handleCommand(x) {
      console.log(x);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/style/detailSidebar.scss";
</style>
