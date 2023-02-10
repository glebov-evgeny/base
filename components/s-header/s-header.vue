<template>
  <header class="s-header" id="header">
    <div class="s-header__container container">
      <div class="s-header__logo">
        <a href="https://github.com/glebov-evgeny" target="_blank" class="s-header__logo-link">
          <img class="s-header__logo-image" src="@/assets/images/logo.svg" alt="logo" />
        </a>
      </div>

      <div class="s-header__links" :class="{ active: isOpen }">
        <m-menu />
        <div class="s-header__actions" v-if="!isMobile">
          <a href="tel:+79162176557" class="s-header__phone">
            <span>8 (916) 217-65-57</span>
          </a>
          <button @click="changeThemes" class="s-header__theme" type="button">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="s-header__theme-icon"
            >
              <g clip-path="url(#clip0_578_178)">
                <path
                  d="M12 18C10.4087 18 8.88258 17.3679 7.75736 16.2426C6.63214 15.1174 6 13.5913 6 12C6 10.4087 6.63214 8.88258 7.75736 7.75736C8.88258 6.63214 10.4087 6 12 6C13.5913 6 15.1174 6.63214 16.2426 7.75736C17.3679 8.88258 18 10.4087 18 12C18 13.5913 17.3679 15.1174 16.2426 16.2426C15.1174 17.3679 13.5913 18 12 18ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.515 4.929L4.929 3.515L7.05 5.636L5.636 7.05L3.515 4.93V4.929ZM16.95 18.364L18.364 16.95L20.485 19.071L19.071 20.485L16.95 18.364ZM19.071 3.514L20.485 4.929L18.364 7.05L16.95 5.636L19.071 3.515V3.514ZM5.636 16.95L7.05 18.364L4.929 20.485L3.515 19.071L5.636 16.95ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z"
                />
              </g>
              <defs>
                <clipPath id="clip0_578_178">
                  <rect width="24" height="24" />
                </clipPath>
              </defs>
            </svg>
          </button>
          <button class="s-header__lang" @click="toggleLanguage">
            <nuxt-link v-if="langToggler" :to="switchLocalePath('en')" class="s-header__lang-icon">EN</nuxt-link>
            <nuxt-link v-else :to="switchLocalePath('ru')" class="s-header__lang-icon">RU</nuxt-link>
          </button>
        </div>
        <button class="btn s-header__btn">{{ $t('login') }}</button>
      </div>

      <div class="s-header__actions --compact">
        <a href="tel:+79162176557" class="s-header__phone">
          <img class="s-header__phone-image" src="@/assets/images/phone.svg" alt="phone" />
        </a>
        <button @click="changeThemes" class="s-header__theme" type="button">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="s-header__theme-icon"
          >
            <g clip-path="url(#clip0_578_178)">
              <path
                d="M12 18C10.4087 18 8.88258 17.3679 7.75736 16.2426C6.63214 15.1174 6 13.5913 6 12C6 10.4087 6.63214 8.88258 7.75736 7.75736C8.88258 6.63214 10.4087 6 12 6C13.5913 6 15.1174 6.63214 16.2426 7.75736C17.3679 8.88258 18 10.4087 18 12C18 13.5913 17.3679 15.1174 16.2426 16.2426C15.1174 17.3679 13.5913 18 12 18ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.515 4.929L4.929 3.515L7.05 5.636L5.636 7.05L3.515 4.93V4.929ZM16.95 18.364L18.364 16.95L20.485 19.071L19.071 20.485L16.95 18.364ZM19.071 3.514L20.485 4.929L18.364 7.05L16.95 5.636L19.071 3.515V3.514ZM5.636 16.95L7.05 18.364L4.929 20.485L3.515 19.071L5.636 16.95ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z"
              />
            </g>
            <defs>
              <clipPath id="clip0_578_178">
                <rect width="24" height="24" />
              </clipPath>
            </defs>
          </svg>
        </button>
        <button class="s-header__lang" @click="toggleLanguage">
          <nuxt-link v-if="langToggler" :to="switchLocalePath('en')" class="s-header__lang-icon">EN</nuxt-link>
          <nuxt-link v-else :to="switchLocalePath('ru')" class="s-header__lang-icon">RU</nuxt-link>
        </button>
      </div>

      <div class="s-header__menu" v-if="isMobile" @click="toggleIsOpenField">
        <svg class="s-header__menu-burger" viewBox="0 0 100 100" width="40" ref="ham" :class="[{ active: isOpen }]">
          <path
            class="line top"
            d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"
          />
          <path class="line middle" d="m 70,50 h -40" />
          <path
            class="line bottom"
            d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"
          />
        </svg>
      </div>
    </div>
  </header>
</template>

<script>
import './s-header.scss';

export default {
  name: 's-header',
  props: {
    isOpen: {
      type: Boolean,
      default: null,
    },
    isMobile: {
      type: Boolean,
      default: null,
    },
  },
  data() {
    return {
      langToggler: true,
      isScrolled: null,
      scrollTop: null,
      isShow: false,
    };
  },

  watch: {
    isOpen() {
      const htmlWrapper = document.querySelector('html');
      htmlWrapper.style.overflowY = this.isOpen ? 'hidden' : 'visible';
    },
    fixedBtnShow() {
      this.isShow = this.fixedBtnShow;
    },
  },

  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 0;
      this.showFixedBtnOnScroll();
    },
    showFixedBtnOnScroll() {
      if (window.scrollY > 200) {
        this.isShow = true;
      } else {
        this.isShow = false;
      }
    },
    changeThemes(event) {
      this.$emit('handler-change-themes', event);
    },
    changeLanguage(lang) {
      // eslint-disable-next-line no-param-reassign
      lang.locale = lang.locale === 'ru' ? 'en' : 'ru';
    },
    toggleLanguage() {
      this.langToggler = !this.langToggler;
    },
    toggleIsOpenField() {
      this.$emit('toggleIsOpenField');
    },
    scrollToBlock(targetClass) {
      const sections = this.refs ? this.refs : [];
      sections.forEach((item) => {
        if (item.$el.classList && item.$el.classList.contains(targetClass)) {
          item.$el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      });
    },
    callOpenedPopup() {
      this.$emit('openPopup');
    },

    isMobileBtnClick() {
      this.isShow = false;
      this.$emit('isMobileBtnClick');
    },
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },

  mounted() {
    this.windowWidth = window.innerWidth;
    window.addEventListener('scroll', this.handleScroll);
  },
};
</script>

<i18n lang="json" src="./s-header.json" />
