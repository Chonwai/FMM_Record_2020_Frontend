<template>
    <div id="home-container" class="flex flex-wrap p-12">
        <router-link
            class="cards w-1/3 p-8"
            v-for="(item, index) in functionList"
            :key="index"
            :to="{ name: item.project_name}"
        >
            <div class="card-icon mb-4">
                <img :src="'@/assets/images/' + item.icon_name" alt="icon" />
            </div>
            <div class="card-title">
                <p class="text-2xl font-bold">{{ item.project_title }}</p>
            </div>
        </router-link>
    </div>
</template>

<script>
import Utils from '../../utils/Utils';
export default {
    name: 'HomeMain',
    data() {
        return {
            functionList: []
        }
    },
    created() {
        this.functionList = Utils.functionList();  
    },
};
</script>

<style lang="scss" scoped>
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
</style>
