import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy';
import VueParticles from 'vue-particles';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(Buefy);
Vue.use(VueParticles);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
