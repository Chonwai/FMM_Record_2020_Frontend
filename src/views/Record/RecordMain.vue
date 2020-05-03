<template>
    <div id="record-container" class="min-h-screen p-12">
        <div class="cards flex flex-wrap mb-4">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
        <el-pagination background layout="prev, pager, next" :page-size="20" :total="100">
        </el-pagination>
    </div>
</template>

<script>
import Card from '../../components/Local/Card';
export default {
    name: 'RecordMain',
    components: {
        Card,
    },
};
</script>

<style lang="scss" scoped></style>
