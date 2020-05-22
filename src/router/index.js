import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home/HomeMain.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About/AboutMain'),
    },
    {
        path: '/record',
        name: 'RecordsList',
        component: () =>
            import(/* webpackChunkName: "about" */ '../views/RecordsList/RecordsListMain'),
    },
    {
        path: '/print',
        name: 'Print',
        component: () => import(/* webpackChunkName: "about" */ '../views/Print/PrintMain'),
    },
    {
        path: '/record/new',
        name: 'NewRecord',
        component: () => import(/* webpackChunkName: "about" */ '../views/NewRecord/NewRecordMain'),
    },
    {
        path: '/record/:id/update',
        name: 'UpdateRecord',
        component: () =>
            import(/* webpackChunkName: "about" */ '../views/UpdateRecord/UpdateRecordMain'),
        props: true,
    },
];

const router = new VueRouter({
    mode: 'history',
    // base: process.env.BASE_URL,
    routes,
});

export default router;
