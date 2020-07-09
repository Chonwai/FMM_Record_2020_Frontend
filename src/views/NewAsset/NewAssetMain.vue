<template>
    <div id="new-asset-main-container" class="p-12 flex flex-col justify-center items-center">
        <h1 class="text-3xl font-bold mb-4 flex justify-center items-center">新增設備</h1>
        <main class="w-2/3 flex flex-wrap border p-4 rounded-lg">
            <InputX
                class="w-full"
                title="財產編號"
                type="text"
                placeholder="請輸入財產編號"
                v-model="assets.asset_id"
            />
            <InputX
                class="w-full"
                title="財產名稱"
                type="text"
                placeholder="請輸入財產名稱"
                v-model="assets.name"
            />
            <InputX
                class="w-full"
                title="財產描述"
                type="text"
                placeholder="請輸入財產描述"
                v-model="assets.description"
            />
            <InputX
                class="w-full"
                title="財產種類"
                type="text"
                placeholder="請輸入財產種類"
                v-model="assets.category"
            />
            <InputX
                class="w-full"
                title="財產狀態"
                type="text"
                placeholder="請輸入財產狀態"
                v-model="assets.state"
            />
            <InputX
                class="w-full"
                title="購買日期"
                type="date"
                placeholder="請輸入購買日期"
                v-model="assets.acquired_at"
            />
            <InputX
                class="w-full"
                title="購買價格"
                type="number"
                placeholder="請輸入購買價格"
                v-model="assets.purchase_price"
            />
            <InputX
                class="w-full"
                title="當前數量"
                type="number"
                placeholder="請輸入當前數量"
                v-model="assets.current_value"
            />
            <InputX
                class="w-full"
                title="財產地點"
                type="text"
                placeholder="請輸入財產地點"
                v-model="assets.location"
            />
            <InputX
                class="w-full"
                title="生產廠商"
                type="text"
                placeholder="請輸入生產廠商"
                v-model="assets.manufacturer"
            />
            <InputX
                class="w-full"
                title="財產型號"
                type="text"
                placeholder="請輸入財產型號"
                v-model="assets.model"
            />
            <InputX
                class="w-full"
                title="財產信息"
                type="text"
                placeholder="請輸入財產信息"
                v-model="assets.comments"
            />
            <InputX
                class="w-full"
                title="擁有人"
                type="text"
                placeholder="請輸入擁有人"
                v-model="assets.owner"
            />
            <InputX
                class="w-full"
                title="退役日期"
                type="date"
                placeholder="請輸入退役日期"
                v-model="assets.retired_at"
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
import AssetAPI from '../../services/API/AssetAPI';
export default {
    name: 'NewAssetMain',
    data() {
        return {
            assets: {
                asset_id: '',
                name: '',
                description: '',
                category: '',
                state: '',
                acquired_at: '',
                purchase_price: '',
                current_value: '',
                location: '',
                manufacturer: '',
                model: '',
                comments: '',
                owner: '',
                retired_at: '',
            },
            API: new AssetAPI(),
        };
    },
    components: {
        InputX,
    },
    methods: {
        async submit() {
            const res = await this.API.insertAsset(this.assets);
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
                    this.$router.push({ name: 'Home' });
                })
                .catch(() => {
                    this.init();
                });
        },
    },
};
</script>

<style lang="scss" scoped></style>
