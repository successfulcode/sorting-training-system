import { createApp } from 'vue';
import App from './App.vue';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faCheck, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faCheck, faChevronRight);

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');
