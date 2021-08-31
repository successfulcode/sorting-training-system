<template>
  <div class="container">
    <sorting-list></sorting-list>
  </div>
</template>

<script>
import '@/views/SortingList.vue';
import SortingList from './views/SortingList.vue';
export default {
  name: 'App',
  components: { SortingList }
};
</script>

<style lang="scss">
@import './styles/styles.scss';

body {
  background-color: $backgrond-color;
  min-height: 100vh;
  font-family: 'Roboto', sans-serif;
  font-weight: normal;
}
</style>
