<template>
<div id="form-items-table-component">
    <div class="form-item">
        項目
        <span class="eng">Item</span>
    </div>
    <div class="form-item">
        器材名稱及型號
        <span class="eng">Equipment Name and Model</span>
    </div>
    <div class="form-item">
        器材財產編號
        <span class="eng">Asset No.</span>
    </div>
    <div class="form-item">
        用途及使用地點
        <span class="eng">Useage and Use Location</span>
    </div>
    <div class="form-item">
        還件人
        <span class="eng">Name</span>
    </div>
    <div class="form-item">
        還件日期
        <span class="eng">Return Date</span>
    </div>
    <div class="form-item" v-for="item in 60" :key="item.key">
        <div v-if="item % 6 == 1">{{ Math.ceil(item / 6) }}</div>
        <div v-else-if="items[Math.ceil(item / 6) - 1] && item % 6 == 2">{{ items[Math.ceil(item / 6) - 1].assets_model }}</div>
        <div v-else-if="items[Math.ceil(item / 6) - 1] && item % 6 == 3">{{ items[Math.ceil(item / 6) - 1].assets_no }}</div>
        <div v-else-if="items[Math.ceil(item / 6) - 1] && item % 6 == 4">{{ items[Math.ceil(item / 6) - 1].place_of_use }}</div>
        <div v-else-if="items[Math.ceil(item / 6) - 1] && item % 6 == 5">{{ items[Math.ceil(item / 6) - 1].returned_by }}</div>
        <div v-else-if="items[Math.ceil(item / 6) - 1] && item % 6 == 0">{{ items[Math.ceil(item / 6) - 1].returned_at }}</div>
    </div>
</div>
</template>

<script>
export default {
    name: 'FormItemsTable',
    props: {
        items: {
            type: Array,
            default: () => {
                return {
                    items_records: [{
                        item: '',
                        assets_model: '',
                        assets_no: '',
                        place_of_use: '',
                        returned_by: '',
                        returned_at: '',
                    }]
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
#form-items-table-component {
    display: grid;
    grid-template-rows: repeat(11, 48px);
    grid-template-columns: repeat(6, auto);
    border: 1px solid black;
    margin-top: 6px;
    margin-bottom: 6px;
}

.form-item {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 3px;
    border: 1px solid black;
}

.eng {
    font-size: 12px;
}
</style>
