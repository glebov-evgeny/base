<template>
  <main class="s-main">
    <s-event :eventCurrent="eventCurrent" :dateStart="dateStart" :dateEnd="dateEnd" />
  </main>
</template>

<script>
import getEvent from '~/api/getEvent';
import getDate from '~/assets/js/getDate';

export default {
  data() {
    return {
      eventCurrent: {},
      dateStart: '',
      dateEnd: '',
    };
  },
  methods: {
    async getEvent() {
      const resronse = await getEvent(this.$route.params.slug);
      this.eventCurrent = resronse;
      const dateFrom = await getDate(this.eventCurrent.dateFrom);
      const dateTo = await getDate(this.eventCurrent.dateTo);
      this.dateStart = dateFrom;
      this.dateEnd = dateTo;
    },
  },

  async mounted() {
    this.getEvent();
  },
};
</script>
