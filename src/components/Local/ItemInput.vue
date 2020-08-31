<template>
    <div class="item-input-component border rounded-lg w-full mb-4">
        <h1 class="flex justify-end font-bold p-4">項目：{{ index }}</h1>
        <InputX
            class="w-full"
            title="器材名稱及型號"
            type="text"
            placeholder="請輸入器材名稱及型號"
            v-model="value.assets_model"
        />
        <InputX
            class="w-full"
            title="器材財產編號"
            type="text"
            placeholder="請輸入器材財產編號"
            v-model="value.assets_no"
            :search="true"
        >
            <template v-slot:search-button>
                <el-button
                    class="ml-2"
                    type="primary"
                    icon="el-icon-search"
                    @click="searchByAssetsNo"
                    >搜尋器材</el-button
                >
            </template>
        </InputX>
        <InputX
            class="w-full"
            title="用途及使用地點"
            type="text"
            placeholder="請輸入用途及使用地點"
            v-model="value.place_of_use"
        />
        <InputX
            class="w-full"
            title="還件人"
            type="text"
            placeholder="請輸入還件人"
            v-model="value.returned_by"
        />
        <InputX
            class="w-full"
            title="還件日期"
            type="date"
            placeholder="請輸入還件日期"
            v-model="value.returned_at"
        />
    </div>
</template>

<script>
import InputX from './InputX';
import AssetAPI from '../../services/API/AssetAPI';
export default {
    name: 'ItemInputComponent',
    data() {
        return {
            AssetAPI: new AssetAPI(),
        };
    },
    props: {
        index: {
            type: Number,
            default: 1,
        },
        value: {
            type: Object,
            default: () => {
                return {
                    item: '0',
                    assets_model: '',
                    assets_no: '',
                    place_of_use: '',
                    returned_by: '',
                    returned_at: '',
                };
            },
        },
    },
    watch: {
        value: {
            handler(newItem) {
                this.$emit('value', [newItem, this.index]);
            },
            immediate: true,
            deep: true,
        },
    },
    components: {
        InputX,
    },
    methods: {
        async searchByAssetsNo() {
            const res = await this.AssetAPI.getSpecifyAssetByAssetID(this.value.assets_no);
            if (res.status == true) {
                this.value.assets_model = res.message[0].name;
            } else {
                this.$message.error('找不到已登記的設備');
            }
        },
    },
};
</script>

<style lang="scss" scoped></style>
