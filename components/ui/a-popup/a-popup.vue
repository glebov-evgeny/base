<template>
  <div v-if="visible" class="a-popup">
    <div class="a-popup__backdrop" @click="closePopup" @keydown.esc="closePopup" />
    <div class="a-popup__container" :style="`max-width: ${width}`">
      <div class="a-popup__close" @click="closePopup" @keydown.esc="closePopup" />
      <div v-if="type !== 'iframe'" class="a-popup__content">
        <slot />
      </div>
      <div v-else class="a-popup__iframe">
        <iframes
          title=""
          :src="link"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
    </div>
  </div>
</template>

<script>
import './a-popup.scss';

export default {
  name: 'a-popup',

  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      validator: (value) => ['iframe', 'content'].indexOf(value) !== -1,
      default: 'content',
    },
    link: {
      type: String,
      default: '#',
    },
    width: {
      type: String,
      default: '100%',
    },
  },

  methods: {
    closePopup() {
      this.$emit('close', false);
    },
  },
};
</script>
