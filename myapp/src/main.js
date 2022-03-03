import { createApp, VueElement} from 'vue'
import App from './App.vue'
import VueResources from 'vue-resource'

const app = createApp(App)

app.mount('#app')

app.use(VueResources)
//createApp(App).mount('#app')

