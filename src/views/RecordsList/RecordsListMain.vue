<template>
    <div id="record-container" class="min-h-screen p-12">
        <h1 class="text-3xl font-bold mb-4 flex justify-center items-center">查詢或更新記錄</h1>
        <div class="cards flex flex-wrap mb-4">
            <RecordCard class="w-1/3" v-for="record in records" :key="record.id" :record.sync="record" />
        </div>
        <el-pagination
            class="flex justify-center items-center"
            background
            layout="prev, pager, next"
            :page-size="20"
            :total="total"
            @current-change="handleCurrentChange"
        ></el-pagination>
    </div>
</template>

<script>
import RecordCard from '../../components/Local/RecordCard';
import RecordAPI from '../../services/API/RecordAPI';
export default {
    name: 'RecordMain',
    data() {
        return {
            Record: new RecordAPI(),
            records: [],
            total: 0,
        };
    },
    async created() {
        let res = await this.Record.getAllRecords(1);
        this.total = res.message.total;
        this.records = res.message.data;
    },
    components: {
        RecordCard,
    },
    methods: {
        async handleCurrentChange(page) {
            let res = await this.Record.getAllRecords(page);
            this.total = res.message.total;
            this.records = res.message.data;
        },
    },
};
</script>

<style lang="scss" scoped></style>
