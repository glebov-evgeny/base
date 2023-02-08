<template>
  <header class="s-header" id="header">
    <div class="s-header__container l-wide">
      <div class="s-header__logo">
        <a href="#" target="_blank">
          <p>zzz</p>
        </a>
      </div>
      <div class="s-header__links" :class="{ active: isOpen }">
        <m-menu :items="links" />

        <a-button class="s-header__btn" bgColor="bordered" size="medium" label="Войти" @click="callOpenedPopup" />
        <button @click="changeThemes" class="header__themes header__btn" type="button">zzz</button>
      </div>
      <div class="s-header__menu" v-if="isMobile" @click="toggleIsOpenField">
        <svg class="ham hamRotate hamR" viewBox="0 0 100 100" width="40" ref="ham" :class="[{ active: isOpen }]">
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
    <div class="s-header__overlay" v-if="isOpen && isMobile" @click="toggleIsOpenField"></div>
  </header>
</template>

<script>
import './s-header.scss';

export default {
  name: 's-header',
  data() {
    return {
      isOpen: null,
      isMobile: null,
      isScrolled: null,
      scrollTop: null,
      links: [
        { id: 1, text: 'О проекте', tagetClass: 's-1' },
        { id: 2, text: 'Партнеры', tagetClass: 's-2' },
        // { id: 3, text: 'Профессии', tagetClass: 's-whom' },
      ],
      windowWidth: null,
      mobileBreakPoint: 768,
      user: {
        avatar: '/images/placeimg_110_110_people1.svg',
      },
      isShow: false,
    };
  },

  computed: {
    isMainPage() {
      return this.$route.name === 'index';
    },
  },

  watch: {
    isOpen() {
      const htmlWrapper = document.querySelector('html');
      htmlWrapper.style.overflowY = this.isOpen ? 'hidden' : 'visible';
    },
    windowWidth() {
      this.isMobile = this.windowWidth < this.mobileBreakPoint;
    },
    fixedBtnShow() {
      this.isShow = this.fixedBtnShow;
    },
  },

  methods: {
    handleResize() {
      this.windowWidth = window.innerWidth;
    },
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
    toggleIsOpenField() {
      this.isOpen = !this.isOpen;
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
    window.removeEventListener('resize', () => {
      this.handleResize();
      this.calculateBodyPadding();
    });
  },

  mounted() {
    this.windowWidth = window.innerWidth;
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', () => {
      this.handleResize();
    });
  },
};
</script>
