<template>
  <button type="button" :class="classes" :disabled="disabled" @click.prevent.stop="onClickBtn"></button>
</template>

<script>
import './a-button.scss';

export default {
  name: 'a-button',

  props: {
    label: {
      type: String,
      default: null,
    },
    disabled: {
      type: Boolean,
      required: false,
    },
  },

  emits: ['click'],

  computed: {
    classes() {
      return {
        'a-button': true,
        [`a-button--${this.size || 'medium'}`]: true,
        [`a-button--${this.bgColor}`]: this.bgColor,
        [`a-button--${this.addIcon}`]: this.addIcon,
      };
    },
  },

  methods: {
    onClickBtn() {
      this.$emit('click');
    },
  },
};
</script>
