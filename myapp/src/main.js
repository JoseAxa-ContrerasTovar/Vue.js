import { createApp, VueElement} from 'vue'
import App from './App.vue'

Vue.filter('suspensivos', function(texto){
    return texto.substring(0, 10) + '...';
})

createApp(App).mount('#app')

