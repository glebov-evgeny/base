<template>
  <div :class="['s-layout', { 'dark-themes': isLightThemes }]">
    <s-header
      @handler-change-themes="changeThemes"
      @toggleIsOpenField="toggleIsOpenField"
      :isMobile="isMobile"
      :isOpen="isOpen"
    />
    <div class="s-header__overlay" v-if="isOpen && isMobile" @click="toggleIsOpenField"></div>
    <Nuxt />
    <s-footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLightThemes: false,
      isOpen: null,
      isMobile: null,
      windowWidth: null,
      mobileBreakPoint: 768,
    };
  },
  methods: {
    changeThemes() {
      this.isLightThemes = !this.isLightThemes;
    },
    handleResize() {
      this.windowWidth = window.innerWidth;
    },
    toggleIsOpenField() {
      this.isOpen = !this.isOpen;
    },
  },
  watch: {
    windowWidth() {
      this.isMobile = this.windowWidth < this.mobileBreakPoint;
    },
  },
  beforeDestroy() {
    window.removeEventListener('resize', () => {
      this.handleResize();
    });
  },

  mounted() {
    this.windowWidth = window.innerWidth;
    window.addEventListener('resize', () => {
      this.handleResize();
    });
  },
};
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.6s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
