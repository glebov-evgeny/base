<template>
  <section class="s-intro">
    <div class="s-intro__container container">
      <p class="s-intro__text s-text">Привет, меня зовут</p>
      <h1 class="s-intro__title s-title gradient">Глебов Евгений</h1>
      <p class="s-intro__text s-text">
        Я занимаюсь frontend-разработкой с 2019 года. Живу и работаю в Москве. За несколько лет обучения и работы в
        сфере web-разработки успел получить многогранный опыт в более чем 3-х компаниях.
      </p>
      <p class="s-intro__text s-text">
        На этом сайте Вы можете ознакомиться подробнее с информацией обо мне, моих проектах, а также со стеком
        технологий, с которым я работаю.
      </p>
    </div>
  </section>
</template>

<script>
import './s-intro.scss';

export default {
  name: 's-intro',
  data() {
    return {};
  },
  methods: {},
  computed: {},
  mounted() {},
};
</script>
<i18n lang="json" src="./s-intro.json" />
