import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import vdesui from '@/packages/vdesui.vue';
import '@/sites/common/assets/styles/reset.scss';
import vdes from '@/packages/__API/index';
import { useGlobal } from './store/global';

const app = createApp(App)
  .use(router)
  .use(vdesui)
  .use(vdes)
  .use(useGlobal().install)
  .mount('#app');

// @ts-ignore
window.mobileapp = app;
