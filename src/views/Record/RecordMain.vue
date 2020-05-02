<template>
    <div id="record-container" class="min-h-screen p-12">
        <div class="cards flex flex-wrap">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    </div>
</template>

<script>
import Card from '../../components/Local/Card';
export default {
    name: 'RecordMain',
    components: {
        Card
    }
}
</script>

<style lang="scss" scoped>
</style>