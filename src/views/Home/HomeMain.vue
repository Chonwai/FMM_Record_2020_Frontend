<template>
    <div id="home-container" class="p-12 flex flex-row">
        <div class="w-3/5">
            <router-link
                class="cards w-1/5 p-8 inline-block"
                v-for="(item, index) in functionList"
                :key="index"
                :to="{ name: item.project_name }"
            >
                <div class="card-icon mb-4">
                    <img :src="require('@/assets/images/' + item.icon_name)" alt="icon" />
                </div>
                <div class="card-title">
                    <p class="text-lg font-bold text-center">{{ item.project_title }}</p>
                </div>
            </router-link>
            <div class="cards w-1/5 p-8 inline-block cursor-pointer" @click="logout">
                <div class="card-icon mb-4">
                    <img :src="require('@/assets/images/logout.svg')" alt="icon" />
                </div>
                <div class="card-title">
                    <p class="text-lg font-bold text-center">登出</p>
                </div>
            </div>
        </div>
        <div class="w-2/5 h-full p-8 flex flex-col">
            <RecordCount class="w-full flex-1" />
            <RecordTable class="record-table overflow-hidden" />
        </div>
    </div>
</template>

<script>
import Utils from '../../utils/Utils';
import RecordTable from '../../components/Dashboard/RecordTableComponent';
import RecordCount from '../../components/Dashboard/RecordCountComponent';
import LocalStorageService from '../../services/Storage/LocalStorageService';
export default {
    name: 'HomeMain',
    data() {
        return {
            functionList: [],
        };
    },
    created() {
        this.functionList = Utils.functionList();
    },
    components: {
        RecordTable,
        RecordCount,
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
#home-container {
    background-image: url('../../assets/images/pexels-photo-745364.jpeg');
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    height: calc(100vh - 3rem);
}

.cards {
    transition: 0.3s;
    cursor: pointer;
}

.cards:hover {
    transform: scale(1.2);
    transition: 0.3s;
    cursor: pointer;
}

.card-icon img {
    width: 100%;
    height: auto;
}

.card-title {
    display: flex;
    justify-content: center;
    align-items: center;
}

.record-table {
    flex: 3;
}
</style>
