import { createApp } from 'vue'
import '@assets/style.scss'
import App from './App.vue'
import WebApp from '@twa-dev/sdk'
import eruda from 'eruda'
// import router from './router';
import Axios from 'axios';


const app = createApp(App);
app.config.globalProperties.axios = Axios;
// app.use(router)
app.mount('#app');
eruda.init();
WebApp.ready();
