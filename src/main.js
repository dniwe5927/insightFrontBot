import { createApp } from 'vue';
import '@assets/style.scss';
import App from './App.vue';
import WebApp from '@twa-dev/sdk';
import eruda from 'eruda';
import router from './router';
import Axios from 'axios';
import i18n from './i18n'


const app = createApp(App);
eruda.init();
WebApp.ready();
app.config.globalProperties.axios = Axios;
app.use(i18n)
app.use(router);
app.mount('#app');


