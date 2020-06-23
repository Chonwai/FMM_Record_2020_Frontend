<template>
    <div class="p-8 mb-4 bg-white rounded-xl flex flex-col">
        <div class="w-full flex flex-row h-full">
            <div class="w-1/2">
                <h1 class="flex justify-center text-lg font-bold">表單總計</h1>
                <p class="text-6xl flex justify-center items-center h-full font-bold">
                    {{ allRecords }}
                </p>
            </div>
            <div class="w-1/2">
                <h1 class="flex justify-center text-lg font-bold">已完成</h1>
                <p class="text-6xl flex justify-center items-center h-full font-bold text-teal-600">
                    {{ finishedRecords }}
                </p>
            </div>
        </div>
        <el-progress
            class="w-full px-8"
            :text-inside="true"
            :stroke-width="20"
            :percentage="percentage"
            color="#319795"
        ></el-progress>
    </div>
</template>

<script>
import RecordAPI from '../../services/API/RecordAPI';
export default {
    name: 'RecordCountComponent',
    data() {
        return {
            API: new RecordAPI(),
            allRecords: 0,
            finishedRecords: 0,
            percentage: 0,
        };
    },
    created() {
        this.init();
    },
    methods: {
        async init() {
            let res = await this.API.getAmountOfRecords('all');
            this.allRecords = res.message;
            res = await this.API.getAmountOfRecords('finished');
            this.finishedRecords = res.message;
            this.percentage = Number(((this.finishedRecords / this.allRecords) * 100).toFixed(2));
        },
    },
};
</script>

<style lang="scss" scoped></style>
