import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '@/sites/common/assets/styles/md-style.scss'
import '@/sites/common/assets/styles/reset.scss'

createApp(App).use(router).mount('#app');
