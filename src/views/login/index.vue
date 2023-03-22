<template>
  <div class="login">
    <SvgIcon name="login_banner1" size="500" />
  </div>
</template>

<script>
import SvgIcon from '@/components/SvgIcon.vue';
export default {
  data() {
    return {};
  },
  components: {
    SvgIcon,
  },
};
</script>

<style scoped lang="less">
.login {
  width: 50px;
  height: 50px;
}
</style>
