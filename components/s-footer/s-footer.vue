<!-- eslint-disable prettier/prettier -->
<template>
  <footer class="s-footer">
    <div class="s-footer__container container">
      <div class="s-footer__block">
        <div class="s-footer__box">
          <p class="s-footer__title">Контакты:</p>
          <div class="s-footer__box-content">
            <a href="tel:+79162176557" class="s-footer__link">
              <span>8 (916) 217-65-57</span>
            </a>
            <a href="mailto:egoji@mail.ru" class="s-footer__link">
              <span>egoji@mail.ru</span>
            </a>
          </div>
        </div>
        <div class="s-footer__box">
          <p class="s-footer__title">Полезные ссылки:</p>
          <div class="s-footer__social">
            <a href="https://t.me/eaglebov" class="s-footer__social-link" target="_blank">
              <img class="s-footer__social-image" src="@/assets/images/social/tg.svg" alt="social-link" />
            </a>
            <a href="https://wa.me/79162176557" class="s-footer__social-link" target="_blank">
              <img class="s-footer__social-image" src="@/assets/images/social/wa.svg" alt="social-link" />
            </a>
          </div>
        </div>
      </div>
      <p class="s-footer__rights">{{ getYear }} © Разработка, продвижение, etc.</p>
    </div>
  </footer>
</template>

<script>
import './s-footer.scss';

export default {
  name: 's-footer',

  data() {
    return {};
  },
  computed: {
    getYear() {
      const currentYear = new Date();
      return currentYear.getFullYear();
    },
  },
};
</script>
