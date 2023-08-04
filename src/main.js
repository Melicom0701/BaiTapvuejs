import { createApp } from 'vue'
import App from './App.vue'
import formLogin from './components/formLogin.vue'
import Notifications from '@kyvg/vue3-notification'

createApp(App)
    .use(Notifications)
    .component('form-login',formLogin)
    .mount('#app')
