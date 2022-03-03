import { createApp, VueElement} from 'vue'
import App from './App.vue'

export var bus = new Vue();

createApp(App).mount('#app')
