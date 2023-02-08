<template>
  <div class="a-input__wrapper">
    <label v-if="label" :class="typelabel">{{ label }}</label>
    <div class="a-input__row" :class="rowClasses">
      <vue-tel-input
        v-if="type == 'phone'"
        ref="phone"
        class="a-input--phone"
        :class="classes"
        validCharactersOnly
        :dropdownOptions="{ disabledDialCode: true, tabindex: 0 }"
        :inputOptions="{ showDialCode: true, tabindex: 0 }"
        :placeholder="placeholder"
        :disabled="disabled"
        v-model="valueThis"
        @validate="validateHandler"
        @change="changeHandler"
        @focus="focusHandler"
        @blur="blurHandler"
      >
      </vue-tel-input>

      <textarea
        v-else-if="type == 'textarea'"
        class="a-input a-input--textarea"
        ref="aInputTextarea"
        :class="classes"
        :placeholder="placeholder"
        :disabled="disabled"
        v-model="valueThis"
        @change="changeHandler"
        @focus="focusHandler"
        @blur="
          blurHandler();
          resize();
        "
        @keyup="resize"
      ></textarea>

      <input
        v-else
        :type="attrType ? attrType : 'text'"
        ref="a-input"
        size=""
        class="a-input"
        :class="classes"
        :placeholder="placeholder"
        :disabled="disabled"
        v-model="valueThis"
        @change="changeHandler"
        @focus="focusHandler"
        @blur="blurHandler"
      />
      <i v-if="icons && !touched && !valueThis && attrType !== 'checkbox'" class="a-input__icon" :class="icons"></i>
      <i
        v-if="clearable && touched && !!valueThis && attrType !== 'checkbox'"
        class="a-input__icon si-closeThin"
        @mousedown.prevent
        @click="clearableHandler"
      />
      <i v-if="attrType === 'checkbox' && valueThis" class="a-input__icon a-input__icon--checkbox si-done"></i>
    </div>
    <span v-if="subscription" class="a-input__subscription" :class="typesubs">{{ subscription }}</span>
  </div>
</template>

<script>
import { VueTelInput } from 'vue-tel-input';
import './a-input.scss';

export default {
  name: 'a-input',
  components: {
    VueTelInput,
  },
  data: () => ({
    touched: false,
  }),

  model: {
    prop: 'value',
    event: 'input',
  },

  props: {
    value: {
      type: [String, Boolean, Number],
    },
    label: {
      type: String,
    },
    placeholder: {
      type: String,
    },
    subscription: {
      type: String,
    },
    disabled: {
      type: Boolean,
      required: false,
    },
    labelIcon: {
      type: String,
    },
    icons: {
      type: String,
    },
    clearable: {
      type: Boolean,
    },
    type: {
      type: String,
    },
    attrType: {
      type: String,
    },

    size: {
      type: String,
      validator(value) {
        return ['large', 'medium', 'small'].indexOf(value) !== -1;
      },
    },
    condition: {
      type: String,
      validator(value) {
        return ['base', 'focus', 'error'].indexOf(value) !== -1;
      },
    },
  },

  mounted() {
    this.$nextTick(() => {
      if (this.$refs.phone) this.$refs.phone.$el.children[1].classList.add('a-input');
    });
  },

  computed: {
    rowClasses() {
      return {
        [`a-input__row--${this.attrType}`]: this.attrType,
      };
    },
    classes() {
      return {
        [`a-input--${this.size || 'large'}`]: true,
        [`a-input--${this.condition || 'base'}`]: true,
        [`a-input--${this.attrType}`]: this.attrType,
      };
    },
    typelabel() {
      return {
        'a-input__label': true,
        [`a-input__label--${this.size || 'large'}`]: true,
        [`${this.labelIcon}`]: this.labelIcon,
        [`a-input__label--${this.condition}`]: this.condition,
      };
    },
    typesubs() {
      return {
        'a-input__subscription': true,
        [`a-input__subscription--${this.size || 'large'}`]: true,
      };
    },

    valueThis: {
      get() {
        return this.value;
      },
      set(newValue) {
        this.$emit('input', newValue);
      },
    },
  },

  methods: {
    changeHandler() {
      this.$emit('change', this.valueThis);
    },
    focusHandler() {
      this.touched = true;
      this.$emit('focus');
    },
    blurHandler() {
      this.touched = false;
      this.$emit('blur');
    },
    clearableHandler() {
      this.valueThis = '';
    },
    validateHandler(value) {
      this.$emit('validate', value);
    },
    resize() {
      const { aInputTextarea } = this.$refs;
      aInputTextarea.style.height = 'auto';
      aInputTextarea.style.cssText = `
        height: ${aInputTextarea.scrollHeight + 2}px;
      `;
    },
  },
};
</script>
