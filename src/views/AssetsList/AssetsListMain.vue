<template>
    <div id="record-container" class="min-h-screen p-12">
        <h1 class="text-3xl font-bold mb-4">查詢或更新設備資料</h1>
        <div class="flex flex-wrap justify-center items-center mb-4">
            <div class="w-2/3">
                <el-table :data="assets" style="width: 100%;" height="250" stripe border>
                    <el-table-column
                        fixed
                        prop="asset_id"
                        label="財產編號"
                        width="200"
                    ></el-table-column>
                    <el-table-column prop="name" label="財產名稱" width="200"></el-table-column>
                    <el-table-column
                        prop="description"
                        label="財產描述"
                        width="200"
                    ></el-table-column>
                    <el-table-column prop="category" label="財產種類" width="200"></el-table-column>
                    <el-table-column prop="state" label="財產狀態" width="200"></el-table-column>
                    <el-table-column prop="location" label="財產地點" width="200"></el-table-column>
                </el-table>
            </div>
        </div>
        <el-pagination
            background
            layout="prev, pager, next"
            :page-size="20"
            :total="total"
            @current-change="handleCurrentChange"
        ></el-pagination>
    </div>
</template>

<script>
import AssetAPI from '../../services/API/AssetAPI';
export default {
    name: 'AssetsListMain',
    data() {
        return {
            API: new AssetAPI(),
            assets: [],
            total: 0,
        };
    },
    async created() {
        let res = await this.API.getAllAssets(1);
        this.total = res.message.total;
        this.assets = res.message.data;
    },
    methods: {
        async handleCurrentChange(page) {
            let res = await this.Record.getAllAssets(page);
            this.total = res.message.total;
            this.assets = res.message.data;
        },
    },
};
</script>

<style lang="scss" scoped></style>
