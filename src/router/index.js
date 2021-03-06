import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home/HomeMain.vue';
// import GuardUser from '../middleware/GuardUser';
import LocalStorageUtils from '../utils/LocalStorageUtils';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: () => import(/* webpackChunkName: "about" */ '../layout/AuthLayout'),
        beforeEnter: (to, from, next) => {
            if (LocalStorageUtils.hasToken() && LocalStorageUtils.hasUserID()) {
                next('/system');
            } else {
                next();
            }
        },
        children: [
            {
                path: '/login',
                name: 'Login',
                component: () => import(/* webpackChunkName: "about" */ '../views/Login/LoginMain'),
            },
            {
                path: '/about',
                name: 'About',
                component: () => import(/* webpackChunkName: "about" */ '../views/About/AboutMain'),
            },
        ],
        redirect: { name: 'Login' },
    },
    {
        path: '/',
        component: () => import(/* webpackChunkName: "about" */ '../layout/SystemLayout'),
        beforeEnter: (to, from, next) => {
            if (LocalStorageUtils.hasToken() && LocalStorageUtils.hasUserID()) {
                next();
            } else {
                next('/login');
            }
        },
        children: [
            {
                path: '/logout',
                name: 'Logout',
                component: Home,
            },
            {
                path: '/system',
                name: 'Home',
                component: Home,
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
                component: () =>
                    import(/* webpackChunkName: "about" */ '../views/NewRecord/NewRecordMain'),
            },
            {
                path: '/record/:id/update',
                name: 'UpdateRecord',
                component: () =>
                    import(
                        /* webpackChunkName: "about" */ '../views/UpdateRecord/UpdateRecordMain'
                    ),
                props: true,
            },
            {
                path: '/assets',
                name: 'AssetsList',
                component: () =>
                    import(/* webpackChunkName: "about" */ '../views/AssetsList/AssetsListMain'),
                props: true,
            },
            {
                path: '/assets/new',
                name: 'NewAssets',
                component: () =>
                    import(/* webpackChunkName: "about" */ '../views/NewAsset/NewAssetMain'),
                props: true,
            },
            {
                path: '/assets/:id/update',
                name: 'UpdateAsset',
                component: () =>
                    import(/* webpackChunkName: "about" */ '../views/UpdateAsset/UpdateAssetMain'),
                props: true,
            },
            {
                path: '/tenants/new',
                name: 'AddNewTenant',
                component: () =>
                    import(/* webpackChunkName: "about" */ '../views/NewTenant/NewTenantMain'),
                props: true,
            },
            {
                path: '/tenants',
                name: 'TenantsList',
                component: () =>
                    import(/* webpackChunkName: "about" */ '../views/TenantsList/TenantsListMain'),
                props: true,
            },
            {
                path: '/tenants/:id/update',
                name: 'UpdateTenant',
                component: () =>
                    import(
                        /* webpackChunkName: "about" */ '../views/UpdateTenant/UpdateTenantMain'
                    ),
                props: true,
            },
            {
                path: '/user/setting',
                name: 'UserSetting',
                component: () =>
                    import(/* webpackChunkName: "about" */ '../views/User/Setting/UserSettingMain'),
                props: true,
            },
        ],
        redirect: { name: 'Login' },
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
