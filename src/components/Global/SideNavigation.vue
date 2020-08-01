<template>
    <aside id="side-navigation-component" class="h-screen w-64 bg-teal-800 fixed p-8">
        <div class="my-4 flex flex-col justify-center items-center">
            <img class="px-2 w-3/5" src="@/assets/images/strategy.svg" alt="icon" srcset />
            <p class="text-white font-bold text-xl">Hi, {{ getUsername }}</p>
        </div>
        <div class="flex flex-col justify-center items-start w-full overflow-scroll">
            <router-link
                v-for="(item, index) in functionList"
                :key="index"
                :to="{ name: item.project_name }"
                class="nav-item w-full h-10 mb-2 flex flex-row items-center overflow-scroll"
            >
                <img
                    class="w-1/5 h-auto bg-white rounded-lg p-1"
                    :src="require('@/assets/images/' + item.icon_name)"
                />
                <p class="w-4/5 flex justify-start text-white pl-2 text-sm">
                    {{ item.project_title }}
                </p>
            </router-link>
            <div
                class="nav-item w-full h-10 mb-2 flex flex-row items-center overflow-scroll cursor-pointer"
                @click="logout"
            >
                <img
                    class="w-1/5 h-auto bg-white rounded-lg p-1"
                    :src="require('@/assets/images/logout.svg')"
                />
                <p class="w-4/5 flex justify-start text-white pl-2 text-sm">
                    登出
                </p>
            </div>
        </div>
    </aside>
</template>

<script>
import FunctionList from '@/data/FunctionList.json';
import LocalStorageService from '../../services/Storage/LocalStorageService';
export default {
    name: 'SideNavigation',
    data() {
        return {
            functionList: FunctionList.function_list,
        };
    },
    computed: {
        getUsername() {
            return this.$currentUser.name;
        },
    },
    methods: {
        logout() {
            LocalStorageService.removeItem('token');
            LocalStorageService.removeItem('user_id');
            this.$router.push({ name: 'Login' });
        },
    },
};
</script>

<style lang="scss" scoped>
::-webkit-scrollbar {
    display: none;
}

.nav-item:hover {
    transform: translateX(12px);
    transition: 0.3s;
}

.nav-item {
    transition: 0.3s;
}
</style>
