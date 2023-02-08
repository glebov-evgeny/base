<template>
  <div :class="['s-layout', { 'dark-themes': isLightThemes }]">
    <s-header @handler-change-themes="changeThemes" />
    <Nuxt />
    <s-footer />
  </div>
</template>

<script>
export default {
  name: 's-layout',
  data() {
    return {
      isLightThemes: false,
    };
  },
  methods: {
    changeThemes() {
      this.isLightThemes = !this.isLightThemes;
    },
  },
};
</script>
