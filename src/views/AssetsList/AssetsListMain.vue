<template>
    <div id="record-container" class="min-h-screen p-12 font-medium">
        <h1 class="text-3xl font-bold mb-4 flex justify-center items-center">查詢或更新設備資料</h1>
        <div class="flex flex-wrap justify-center items-center mb-4">
            <div class="w-full">
                <el-table
                    :data="
                        assets.filter(
                            data =>
                                !search || data.name.toLowerCase().includes(search.toLowerCase())
                        )
                    "
                    style="width: 100%;"
                    height="80vh"
                    stripe
                    border
                >
                    <el-table-column
                        fixed="left"
                        prop="asset_id"
                        label="財產編號"
                        width="175"
                    ></el-table-column>
                    <el-table-column prop="name" label="財產名稱" width="250"></el-table-column>
                    <el-table-column
                        prop="description"
                        label="財產描述"
                        width="250"
                    ></el-table-column>
                    <el-table-column prop="state" label="財產狀態" width="250">
                        <template slot-scope="scope">
                            <el-tag
                                :type="scope.row.state === 'GOOD' ? 'success' : 'danger'"
                                disable-transitions
                                >{{ scope.row.state }}</el-tag
                            >
                        </template>
                    </el-table-column>
                    <el-table-column prop="category" label="財產種類" width="250"></el-table-column>
                    <el-table-column prop="location" label="財產地點" width="250"></el-table-column>
                    <el-table-column fixed="right" align="right" width="175">
                        <template slot="header" slot-scope="scope">
                            <el-input v-model="search" size="mini" placeholder="輸入關鍵字搜尋" />
                            <p class="hidden">{{ scope.$index }}</p>
                        </template>
                        <template slot-scope="scope">
                            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
                                >更新</el-button
                            >
                            <el-button size="mini" type="danger" @click="handleDelete(scope.row)"
                                >刪除</el-button
                            >
                        </template>
                    </el-table-column>
                </el-table>
            </div>
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
import AssetAPI from '../../services/API/AssetAPI';
export default {
    name: 'AssetsListMain',
    data() {
        return {
            API: new AssetAPI(),
            assets: [],
            total: 0,
            search: '',
        };
    },
    created() {
        this.init();
    },
    methods: {
        async init() {
            let res = await this.API.getAllAssets(1);
            this.total = res.message.total;
            this.assets = res.message.data;
        },
        async handleCurrentChange(page) {
            let res = await this.API.getAllAssets(page);
            this.total = res.message.total;
            this.assets = res.message.data;
        },
        handleEdit(index, row) {
            console.log(index, row);
        },
        handleDelete(row) {
            this.$confirm('此動作會永久删除這筆資料, 是否刪除？', '提示', {
                confirmButtonText: '確定',
                cancelButtonText: '取消',
                type: 'warning',
            })
                .then(async () => {
                    let res = await this.API.deleteAsset(row.id);
                    console.log(res);
                    if (res.status == true) {
                        this.$message({
                            type: 'success',
                            message: '刪除成功!',
                        });
                        this.init();
                    }
                })
                .catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消刪除',
                    });
                });
        },
    },
};
</script>

<style lang="scss" scoped></style>
