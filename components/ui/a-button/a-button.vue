<template>
  <button type="button" :class="classes" :disabled="disabled" @click.prevent.stop="onClickBtn" :style="style">
    <i v-if="addIcon" :class="icons"></i>
    <span class="a-button__label a-font_button" v-html="label"></span>
  </button>
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
    backgroundColor: {
      type: String,
      default: null,
    },
    size: {
      type: String,
      validator(value) {
        return ['large', 'medium', 's-md', 'rounded'].indexOf(value) !== -1;
      },
    },
    bgColor: {
      type: String,
      validator(value) {
        return ['default', 'bordered', 'secondary'].indexOf(value) !== -1;
      },
    },
    addIcon: {
      type: String,
      validator(value) {
        return ['fonts-icon'].indexOf(value) !== -1;
      },
    },
    iconType: {
      type: String,
      default: null,
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
    icons() {
      return {
        'a-button__icon': true,
        [`a-button__icon--${this.addIcon}`]: true,
        [`${this.iconType}`]: true,
      };
    },
    style() {
      return {
        [`a-button--${this.bgColor}`]: true,
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
