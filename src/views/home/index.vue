<template>
  <div>这是首页</div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {};
  },
  mounted() {
    axios.get('/proxy/banner').then(res => {
      console.log(res);
    });
  },
};
</script>

<style scoped lang="less"></style>
