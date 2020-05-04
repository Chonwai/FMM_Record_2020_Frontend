<template>
    <aside id="side-navigation-component" class="h-screen w-64 bg-teal-800 fixed p-8">
        <div class="p-8 mb-4">
            <img src="@/assets/images/strategy.svg" alt="icon" srcset />
        </div>
        <div class="flex flex-col justify-center items-start w-full">
            <router-link
                v-for="(item, index) in functionList"
                :key="index"
                :to="{ name: item.project_name }"
                class="nav-item w-full h-8 mb-2 flex flex-row items-center"
            >
                <img class="w-1/4" :src.sync="'@/assets/images/' + item.icon_name" />
                <p class="w-3/4 flex justify-start text-white">{{ item.project_title }}</p>
            </router-link>
        </div>
    </aside>
</template>

<script>
// import Utils from '../../utils/Utils';
import FunctionList from '@/data/FunctionList.json';
export default {
    name: 'SideNavigation',
    data() {
        return {
            functionList: FunctionList.function_list,
        };
    },
};
</script>

<style lang="scss" scoped>
::-webkit-scrollbar {
    display: none;
}

.nav-item {
}
</style>
