import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
// import Vuex from 'vuex';
import router from './router';
import store from './store'
import 'bulma/css/bulma.min.css';

Vue.use(VueRouter).config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');
