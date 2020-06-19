<template>
    <div class="p-8 mb-4 bg-white rounded-xl flex flex-col">
        <div class="w-full flex flex-row h-full">
            <div class="w-1/2">
                <h1 class="flex justify-center text-lg font-bold">表單總計</h1>
                <p class="text-6xl flex justify-center items-center h-full font-bold">
                    673
                </p>
            </div>
            <div class="w-1/2">
                <h1 class="flex justify-center text-lg font-bold">已完成</h1>
                <p class="text-6xl flex justify-center items-center h-full font-bold text-teal-600">
                    628
                </p>
            </div>
        </div>
        <el-progress
            class="w-full px-8"
            :text-inside="true"
            :stroke-width="20"
            :percentage="(628 / 673) * 100"
            color="#319795"
        ></el-progress>
    </div>
</template>

<script>
export default {
    name: 'RecordCountComponent',
};
</script>

<style lang="scss" scoped>
</style>
