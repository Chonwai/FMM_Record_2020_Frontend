<template>
    <div id="new-tenant-main-container" class="p-12 flex flex-col justify-center items-center">
        <h1 class="text-3xl font-bold mb-4 flex justify-center items-center">新增借用人</h1>
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
                    新增表單
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
                sum: '',
                status: '',
            },
            API: new TenantAPI(),
        };
    },
    components: {
        InputX,
    },
    methods: {
        async submit() {
            console.log(this.tenant);
            const res = await this.API.insertTenant(this.tenant);
            if (res.status == false) {
                for await (const value of Object.entries(res.message)) {
                    this.$message.error(`${value[1]}`);
                }
            } else if (res.status == true) {
                this.open();
            }
        },
    },
};
</script>

<style lang="scss" scoped></style>
