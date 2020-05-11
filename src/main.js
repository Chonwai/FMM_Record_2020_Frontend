import '@babel/polyfill';
import 'mutationobserver-shim';
import Vue from 'vue';
import './plugins/bootstrap-vue';
import './plugins/axios';
import App from './App.vue';
import router from './router';
import store from './store';
import './plugins/element.js';
import './assets/tailwind.css';
import Snotify, {
    SnotifyPosition
} from 'vue-snotify';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/my-element-ui.scss';

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');

const options = {
    toast: {
        position: SnotifyPosition.rightTop,
    },
};

Vue.use(Snotify, options);
Vue.use(ElementUI);