<template>
    <div id="tenants-list-container" class="min-h-screen p-12 font-medium">
        <h1 class="text-3xl font-bold mb-4 flex justify-center items-center">
            查詢或更新借用人資料
        </h1>
        <div class="flex flex-wrap justify-center items-center mb-4">
            <div class="w-full">
                <el-table
                    :data="
                        tenants.filter(
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
                        prop="staff_number"
                        label="職員/學生證號碼"
                        width="175"
                    ></el-table-column>
                    <el-table-column prop="name" label="借用人名稱" width="250"></el-table-column>
                    <el-table-column prop="contact" label="電話" width="250"></el-table-column>
                    <el-table-column prop="email" label="電郵" width="250"></el-table-column>
                    <el-table-column prop="department" label="部門" width="250"></el-table-column>
                    <el-table-column prop="status" label="內部/外部" width="250">
                        <template slot-scope="scope">
                            <el-tag
                                :type="scope.row.status === 'internal' ? 'success' : 'brand'"
                                disable-transitions
                                >{{ scope.row.status }}</el-tag
                            >
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="created_at"
                        label="加入日期"
                        width="250"
                    ></el-table-column>
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
import TenantsAPI from '../../services/API/TenantAPI';
export default {
    name: 'TenantsListMain',
    data() {
        return {
            API: new TenantsAPI(),
            tenants: [],
            total: 0,
            search: '',
        };
    },
    created() {
        this.init();
    },
    methods: {
        async init() {
            let res = await this.API.getAllTenants(1);
            this.total = res.message.total;
            this.tenants = res.message.data;
        },
        async handleCurrentChange(page) {
            let res = await this.API.getAllTenants(page);
            this.total = res.message.total;
            this.tenants = res.message.data;
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
                    let res = await this.API.deleteTenant(row.id);
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
