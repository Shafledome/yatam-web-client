import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy';
import VueParticles from 'vue-particles';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import PrivateProfile from './components/PrivateProfile.vue'

export {router}


Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.use(VueRouter)
Vue.use(Buefy);
Vue.use(VueParticles);
Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes: [
      { path: '/home/',name: 'home', component: Home },
      { path: '/login/',name: 'login', component: Login },
      { path: '/private/:key',name: 'private', component: PrivateProfile, props: true}
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
