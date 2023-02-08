<template>
  <div class="m-form">
    <div v-if="title" class="m-form__title">{{ title }}</div>
    <div class="m-form__inputs" :class="classes">
      <slot name="inputs" />
      <!-- <a-button
        class="m-form__button"
        :label="buttonText"
        :disabled="isSubmitDisabled"
        :width="buttonOptions.width"
        :block="buttonOptions.block"
        :type="buttonOptions.type"
        :size="buttonOptions.size"
        @click="submitForm"
      /> -->
    </div>
    <div class="m-form__checkbox">
      <!-- <a-control v-model="personalData">
        Я даю согласие на обработку персональных данных, согласен на получение информационных рассылок от Университета
        «Синергия» и соглашаюсь c политикой конфиденциальности
      </a-control> -->
    </div>
  </div>
</template>

<script>
import './m-form.scss';

export default {
  name: 'm-form',

  props: {
    personalData: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
