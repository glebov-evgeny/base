<template>
  <div class="preloader" v-if="loading">
    <div class="lds-ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
import './s-loader.scss';

export default {
  name: 's-loader',

  data() {
    return {
      loading: true,
    };
  },
  methods: {
    start() {
      const htmlWrapper = document.querySelector('html');
      htmlWrapper.style.overflowY = 'hidden';

      this.loading = true;
    },

    finish() {
      const htmlWrapper = document.querySelector('html');
      htmlWrapper.style.overflowY = 'visible';

      this.loading = false;
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();

      setTimeout(() => this.$nuxt.$loading.finish(), 500);
    });
  },
};
</script>
