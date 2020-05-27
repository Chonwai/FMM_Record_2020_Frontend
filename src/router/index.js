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
        path: '/print/:id',
        name: 'PrintPassByID',
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
    {
        path: '/assets/new',
        name: 'NewAssets',
        component: () => import(/* webpackChunkName: "about" */ '../views/Development'),
        props: true,
    },
    {
        path: '/assets/update',
        name: 'AssetsList',
        component: () => import(/* webpackChunkName: "about" */ '../views/Development'),
        props: true,
    },
    {
        path: '/users/new',
        name: 'AddNewUser',
        component: () => import(/* webpackChunkName: "about" */ '../views/Development'),
        props: true,
    },
    {
        path: '/users/internal',
        name: 'InternalUser',
        component: () => import(/* webpackChunkName: "about" */ '../views/Development'),
        props: true,
    },
    {
        path: '/users/external',
        name: 'ExternalUser',
        component: () => import(/* webpackChunkName: "about" */ '../views/Development'),
        props: true,
    },
    {
        path: '*',
        component: () => import(/* webpackChunkName: "about" */ '../views/Development'),
        props: true,
    },
];

const router = new VueRouter({
    // mode: 'history',
    // base: process.env.BASE_URL,
    routes,
});

export default router;
