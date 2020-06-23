<template>
    <div
        id="new-tenant-main-view"
        class="p-12 flex flex-col justify-start items-center new-tenant-main-container"
    >
        <h1 class="text-3xl font-bold mb-4 flex justify-center items-center">更新借用人</h1>
        <main class="w-2/3 flex flex-wrap border p-4 rounded-lg">
            <div class="input-box w-full flex flex-row items-center px-4 mb-4 justify-end">
                <el-switch
                    v-model="tenant.status"
                    active-color="#13ce66"
                    inactive-color="#409eff"
                    active-text="外部"
                    inactive-text="內部"
                    active-value="external"
                    inactive-value="internal"
                ></el-switch>
            </div>
            <InputX
                class="w-full"
                title="借用人名稱"
                type="text"
                placeholder="請輸入借用人名稱"
                v-model="tenant.name"
            />
            <InputX
                class="w-full"
                title="電郵"
                type="text"
                placeholder="請輸入電郵"
                v-model="tenant.email"
            />
            <InputX
                class="w-full"
                title="電話"
                type="text"
                placeholder="請輸入電話"
                v-model="tenant.contact"
            />
            <InputX
                class="w-full"
                title="職員/學生證號碼"
                type="text"
                placeholder="請輸入職員/學生證號碼"
                v-model="tenant.staff_number"
            />
            <InputX
                class="w-full"
                title="部門"
                type="text"
                placeholder="請輸入部門"
                v-model="tenant.department"
            />
            <div class="mb-4 px-4 w-full flex justify-end">
                <button class="input-box py-2 px-4 border rounded-lg" @click="submit">
                    更新
                </button>
            </div>
        </main>
    </div>
</template>

<script>
import InputX from '../../components/Local/InputX';
import TenantAPI from '../../services/API/TenantAPI';
export default {
    name: 'NewTenantMain',
    data() {
        return {
            tenant: {
                name: '',
                email: '',
                contact: '',
                staff_number: '',
                department: '',
                sum: 0,
                status: '',
            },
            API: new TenantAPI(),
            currentTenantID: this.$route.params.id,
        };
    },
    components: {
        InputX,
    },
    async created() {
        await this.getTenant(this.currentTenantID);
    },
    methods: {
        async getTenant(id) {
            let res = await this.API.getSpecifyTenant(id);
            this.tenant = await res.message[0];
        },
        async submit() {
            const res = await this.API.insertTenant(this.tenant);
            if (res.status == false) {
                for await (const value of Object.entries(res.message)) {
                    this.$message.error(`${value[1]}`);
                }
            } else if (res.status == true) {
                this.open();
            }
        },
        open() {
            this.$confirm('新增成功，是否需要回到首頁嗎？', '温馨提示', {
                confirmButtonText: '是',
                cancelButtonText: '否',
                type: 'success',
            })
                .then(() => {
                    this.$router.push('/');
                })
                .catch(() => {
                    this.init();
                });
        },
    },
};
</script>

<style lang="scss" scoped>
.new-tenant-main-container {
    height: calc(100vh - 3rem);
}
</style>
