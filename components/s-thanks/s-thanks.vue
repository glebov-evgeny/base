<template>
  <section class="s-thanks">
    <div class="s-thanks__top">
      <div
        class="s-thanks__image"
        :style="{ backgroundImage: `url(${content.imageUrl})` }"
        v-if="content !== null"
      ></div>
      <div class="s-thanks__image --compact" v-else></div>
      <div class="s-thanks__container s-thanks__top-content l-wide" :class="{ '--full': content == null }">
        <h1 class="s-thanks__title s-title">
          Поздравляем! {{ $t('login') }} Ты успешно зарегистрировался на
          {{ content !== null ? content.name : 'мероприятие' }}
        </h1>
        <div class="s-thanks__navigation">
          <a-button
            class="s-thanks__button"
            bgColor="default"
            size="s-md"
            label="Вернуться на главную"
            type="primary"
            @click="goBack()"
          />
          <a v-if="content !== null" class="s-thanks__vk" :href="paramsLink" target="_blank">
            Поделиться
            <svg
              class="s-thanks__vk-icon"
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.9651 0.0834961H9.03426C1.80093 0.0834961 0.0830078 1.80141 0.0830078 9.03475V16.9656C0.0830078 24.1989 1.80093 25.9168 9.03426 25.9168H16.9651C24.1984 25.9168 25.9163 24.1989 25.9163 16.9656V9.03475C25.9163 1.80141 24.1984 0.0834961 16.9651 0.0834961ZM20.9434 18.5156H19.0576C18.3472 18.5156 18.1276 17.9343 16.8747 16.6556C15.738 15.5835 15.2472 15.4285 14.9759 15.4285C14.6013 15.4285 14.4851 15.5318 14.4851 16.0743V17.7664C14.4851 18.2185 14.343 18.5027 13.1418 18.5027C11.1526 18.5027 8.94384 17.2885 7.39384 15.0539C5.05592 11.7731 4.42301 9.29308 4.42301 8.80225C4.42301 8.531 4.51342 8.27266 5.05592 8.27266H6.95468C7.43259 8.27266 7.61342 8.47933 7.79426 8.996C8.72426 11.7085 10.2743 14.0335 10.9072 14.0335C11.1526 14.0335 11.2559 13.9172 11.2559 13.3231V10.546C11.1913 9.28016 10.5068 9.16391 10.5068 8.71183C10.5068 8.47933 10.6876 8.27266 10.9847 8.27266H13.9426C14.343 8.27266 14.4851 8.47933 14.4851 8.97016V12.7031C14.4851 13.1035 14.653 13.2456 14.7822 13.2456C15.0147 13.2456 15.2213 13.1035 15.6476 12.6643C17.0038 11.1531 17.9726 8.81516 17.9726 8.81516C18.1018 8.54391 18.3084 8.28558 18.8122 8.28558H20.6593C21.2276 8.28558 21.3568 8.58266 21.2276 8.98308C20.9951 10.081 18.6959 13.3231 18.7218 13.3231C18.5151 13.646 18.4376 13.7881 18.7218 14.1627C18.9155 14.4339 19.5743 15.0022 20.0134 15.506C20.8143 16.4231 21.4343 17.1852 21.6022 17.7147C21.7443 18.2443 21.4859 18.5156 20.9434 18.5156Z"
                fill="black"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import './s-thanks.scss';

export default {
  name: 's-thanks',
  data() {
    return {
      content: {} || null,
      link: 'http://vkontakte.ru/share.php',
      name: '',
      answerForVK: {},
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    getContent() {
      if (sessionStorage.getItem('thankspage')) {
        this.content = JSON.parse(sessionStorage.getItem('thankspage'));
        this.answerForVK = {
          url: 'https://synergystart.ru/',
          title: this.trimText(this.content.name, 100),
          image: 'https://synergystart.ru/images/logo-for-vk.png',
          noparse: true,
        };
      } else {
        this.content = null;
      }
    },
    trimText(text, length, end = '...') {
      let index = text.indexOf(' ', length);
      if (index === -1) index = length;
      return text.slice(0, index) + end;
    },
  },
  computed: {
    paramsLink() {
      let params = '';
      const paramsList = Object.keys(this.answerForVK);
      paramsList.forEach((key, i) => {
        const isLastItem = paramsList.length - 1 !== i ? '&' : '';
        params += `${key}=${this.answerForVK[key]}${isLastItem}`;
      });
      return `${this.link}?${params}`;
    },
  },
  async mounted() {
    this.getContent();
  },
};
</script>
<i18n lang="json" src="./s-thanks.json" />
