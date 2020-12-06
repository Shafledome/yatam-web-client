import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy';
import VueParticles from 'vue-particles';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import InitialView from './components/InitialView.vue'
import PrivateProfile from './components/PrivateProfile.vue'
import Profile from './components/Profile.vue'
//import LeisureModal from './components/LeisureModal.vue'

export {router}


Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.use(VueRouter)
Vue.use(Buefy);
Vue.use(VueParticles);
Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes: [
      { path: '/home',name: 'home', component: Home, props: true},
      { path: '/main',name: 'initialView', component: InitialView },
      { path: '/private',name: 'private', component: PrivateProfile, props: true},
      { path: '/profile',name: 'profile', component: Profile, props: true},
      //{ path: '/leisure', name: 'leisure', component: LeisureModal, props: true}

  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
