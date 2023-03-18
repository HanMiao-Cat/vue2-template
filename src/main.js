import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import { useAntdComponents } from '@/extends/antd';
import './router/permission';

Vue.config.productionTip = false;
useAntdComponents();

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
