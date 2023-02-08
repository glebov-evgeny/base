<template>
  <section class="s-events l-wide">
    <div class="s-events__container container">
      <div class="s-events__block" v-if="eventsAll.length">
        <h1 class="s-events__title s-title">Все мероприятия:</h1>
        <div class="s-events__box">
          <m-card-event v-for="card in eventsAll" :key="card.id" :card="card" />
        </div>
      </div>
      <div class="s-events__block" v-else>
        <h1 class="s-events__title s-title">Мероприятия еще не добавлены.</h1>
      </div>
    </div>
  </section>
</template>

<script>
import './s-events.scss';

export default {
  name: 's-events',
  props: {
    eventsAll: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
};
</script>
