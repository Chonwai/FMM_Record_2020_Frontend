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
import Snotify, { SnotifyPosition } from 'vue-snotify';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/my-element-ui.scss';
import User from './model/User';
import LocalStorageUtils from './utils/LocalStorageUtils';
import APIFactory from './services/API/APIFactory';

Vue.config.productionTip = false;

Vue.use(Snotify, options);
Vue.use(ElementUI);

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

async function init() {
    Vue.prototype.$currentUser = new User();
    if (LocalStorageUtils.hasToken() && LocalStorageUtils.hasUserID()) {
        let UserAPI = await new APIFactory('user');
        let res = await UserAPI.getOwner();
        Vue.prototype.$currentUser.user = await res.message[0];
    }
}

async function main() {
    await init();
}

main();
