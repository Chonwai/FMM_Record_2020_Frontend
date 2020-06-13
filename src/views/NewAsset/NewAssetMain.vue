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
                title="領取人"
                type="text"
                placeholder="請輸入領取人"
                v-model="assets.name"
            />
            <InputX
                class="w-full"
                title="領取人"
                type="text"
                placeholder="請輸入領取人"
                v-model="assets.name"
            />
            <InputX
                class="w-full"
                title="領取人"
                type="text"
                placeholder="請輸入領取人"
                v-model="assets.name"
            />
            <InputX
                class="w-full"
                title="領取人"
                type="text"
                placeholder="請輸入領取人"
                v-model="assets.name"
            />
            <InputX
                class="w-full"
                title="領取人"
                type="text"
                placeholder="請輸入領取人"
                v-model="assets.name"
            />
            <InputX
                class="w-full"
                title="領取人"
                type="text"
                placeholder="請輸入領取人"
                v-model="assets.name"
            />
            <InputX
                class="w-full"
                title="領取人"
                type="text"
                placeholder="請輸入領取人"
                v-model="assets.name"
            />
            <InputX
                class="w-full"
                title="領取人"
                type="text"
                placeholder="請輸入領取人"
                v-model="assets.name"
            />
            <InputX
                class="w-full"
                title="領取人"
                type="text"
                placeholder="請輸入領取人"
                v-model="assets.name"
            />
            <InputX
                class="w-full"
                title="領取人"
                type="text"
                placeholder="請輸入領取人"
                v-model="assets.name"
            />
            <InputX
                class="w-full"
                title="領取人"
                type="text"
                placeholder="請輸入領取人"
                v-model="assets.name"
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
                name: '',
                email: '',
                contact: '',
            },
            API: new AssetAPI(),
        };
    },
    components: {
        InputX,
    },
    methods: {
        async submit() {
            console.log(this.assets);
            const res = await this.API.insertAsset(this.assets);
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
