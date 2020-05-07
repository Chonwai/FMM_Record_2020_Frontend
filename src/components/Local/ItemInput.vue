<template>
    <div class="item-input-component border rounded-lg w-full mb-4">
        <h1 class="flex justify-end font-bold p-4">項目：{{ index }}</h1>
        <InputX
            class="w-full"
            title="器材名稱及型號"
            type="text"
            placeholder="請輸入器材名稱及型號"
            v-model="item.assets_model"
        />
        <InputX
            class="w-full"
            title="器材財產編號"
            type="text"
            placeholder="請輸入器材財產編號"
            v-model="item.assets_no"
        />
        <InputX
            class="w-full"
            title="用途及使用地點"
            type="text"
            placeholder="請輸入用途及使用地點"
            v-model="item.place_of_use"
        />
        <InputX
            class="w-full"
            title="還件人"
            type="text"
            placeholder="請輸入還件人"
            v-model="item.returned_by"
        />
        <InputX
            class="w-full"
            title="還件日期"
            type="date"
            placeholder="請輸入還件日期"
            v-model="item.returned_at"
        />
    </div>
</template>

<script>
import InputX from './InputX';
export default {
    name: 'ItemInputComponent',
    data() {
        return {
            item: {
                item: this.index,
                assets_model: '',
                assets_no: '',
                place_of_use: '',
                returned_by: '',
                returned_at: '',
            },
        };
    },
    props: {
        index: {
            type: Number,
            default: 1,
        },
    },
    watch: {
        item: {
            handler(newItem) {
                this.$emit('item', [newItem, this.index]);
            },
            immediate: true,
            deep: true,
        },
    },
    components: {
        InputX,
    },
};
</script>

<style lang="scss" scoped></style>
