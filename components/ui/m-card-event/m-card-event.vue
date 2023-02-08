<template>
  <nuxt-link :to="card.slug" class="m-card-event">
    <h3 class="m-card-event__title">{{ card.name }}</h3>
    <p class="m-card-event__format"><span>Формат проведения: </span>{{ card.isOnline ? 'Онлайн' : 'Офлайн' }}</p>
    <p class="m-card-event__date"><span>Дата проведения: </span>{{ dateStart }}</p>
    <div class="m-card-event__button">Подробнее</div>
  </nuxt-link>
</template>

<script>
import './m-card-event.scss';
import getDate from '~/assets/js/getDate';

export default {
  name: 'm-card-event',
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      dateStart: 0,
    };
  },
  methods: {
    async getStartDay() {
      const response = await getDate(this.card.dateFrom);
      this.dateStart = response;
    },
  },
  mounted() {
    this.getStartDay();
  },
};
</script>
