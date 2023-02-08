<template>
  <nav class="m-menu">
    <ul class="m-menu__list">
      <li v-for="item in items" :key="item.id" class="m-menu__item">
        <a :href="`${item.tagetClass}`" target="_blank" class="m-menu__link">{{ item.text }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
import './m-menu.scss';

export default {
  name: 'm-menu',
  props: {
    items: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
