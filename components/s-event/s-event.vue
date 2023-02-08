<template>
  <section class="s-event">
    <div class="s-event__top">
      <div class="s-event__image" :style="{ backgroundImage: `url(${eventCurrent.imageUrl})` }"></div>
      <div class="s-event__container s-event__top-content l-wide">
        <h1 class="s-event__title s-title">{{ eventCurrent.name }}</h1>
        <a-button
          class="s-event__button"
          :class="[{ disabled: eventCurrent.limitIsOver }]"
          bgColor="default"
          size="s-md"
          label="Принять участие"
          type="primary"
          @click="showPopup = !showPopup"
        />
      </div>
    </div>

    <div class="s-event__container l-wide">
      <div class="s-event__block">
        <div class="s-event__aside">
          <div class="s-event__box">
            <p class="s-event__box-description">Дата проведения:</p>
            <p class="s-event__box-text">
              <span>{{ dateStart }}</span> <span v-if="dateEnd != 0">- {{ dateEnd }}</span>
            </p>
          </div>
          <div class="s-event__box" v-if="eventCurrent.isOnline">
            <p class="s-event__box-description">Формат проведения:</p>
            <p class="s-event__box-text">Онлайн</p>
          </div>
          <div class="s-event__box" v-else>
            <p class="s-event__box-description">Адрес проведения:</p>
            <p class="s-event__box-text">{{ eventCurrent.address }}</p>
          </div>
        </div>
        <div class="s-event__main">
          <p class="s-event__main-title">{{ eventCurrent.name }}</p>
          <div class="s-event__main-content" v-html="eventCurrent.description"></div>
          <a-button
            class="s-event__button s-event__button--bottom"
            :class="[{ disabled: eventCurrent.limitIsOver }]"
            bgColor="default"
            size="s-md"
            label="Принять участие"
            type="primary"
            @click="showPopup = !showPopup"
          />
        </div>
      </div>
    </div>
    <a-popup :visible="showPopup" width="800px" class="s-event__popup" @close="showPopup = false">
      <m-form-registration
        :title="title"
        :checkboxText="checkboxText"
        :btnText="btnText"
        :typeCtrl="typeCtrl"
        :typeBtn="typeBtn"
        :checked="true"
        :subtitle="subtitle"
        :titleClass="titleClass"
        :eventCurrent="eventCurrent"
      />
    </a-popup>
  </section>
</template>

<script>
import './s-event.scss';

export default {
  name: 's-event',
  props: {
    eventCurrent: {
      type: Object,
      default() {
        return {};
      },
    },
    dateStart: String,
    dateEnd: String,
  },
  data() {
    return {
      showPopup: false,
      title: 'Регистрация',
      checkboxText: `Я даю согласие на обработку персональных данных
      и получение информационных рассылок от Университета «Синергия»,
      а также с политикой конфиденциальности`,
      btnText: 'Записаться',
      typeCtrl: 'checkbox',
      typeBtn: 'checkbox',
      checked: true,
      titleClass: null,
      subtitle: null,
    };
  },
};
</script>
