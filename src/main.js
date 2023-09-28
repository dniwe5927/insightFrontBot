import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import WebApp from '@twa-dev/sdk'
import eruda from 'eruda'


WebApp.ready();

createApp(App)
.mount('#app')
