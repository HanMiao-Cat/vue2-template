<template>
  <svg
    aria-hidden="true"
    class="svgClass"
    :style="{ fontSize: size + 'px', width: size + 'px', height: size + 'px' }"
  >
    <use :xlink:href="iconName" />
  </svg>
</template>

<script>
export default {
  props: {
    size: {
      type: [Number, String],
      default: 300,
    },
    name: {
      type: String,
      require: true,
    },
  },
  computed: {
    iconName() {
      return `#icon-${this.name}`;
    },
  },
};
</script>

<style scoped>
.svgClass {
  fill: currentColor;
  overflow: hidden;
}
</style>
