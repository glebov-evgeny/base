<template>
  <nav class="m-menu">
    <ul class="m-menu__list">
      <li v-for="item in $t('items')" :key="item.id" class="m-menu__item">
        <nuxt-link :to="`${item.tagetClass}`" class="m-menu__link">{{ item.text }}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import './m-menu.scss';

export default {
  name: 'm-menu',
  data() {
    return {};
  },
};
</script>
<i18n lang="json" src="./m-menu.json" />
