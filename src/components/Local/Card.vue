<template>
    <div class="w-1/2 flex">
        <div class="w-full flex p-2 m-2 border rounded">
            <div class="w-1/3 flex justify-center items-center">
                <img
                    class="h-auto p-2 flex-none bg-cover text-center overflow-hidden"
                    src="@/assets/images/document.svg"
                    alt="Image"
                    srcset=""
                />
            </div>
            <div class="flex flex-col bg-white w-2/3">
                <div class="text-gray-900 font-bold text-xl mb-2 text-left">
                    Record #1
                </div>
                <p class="text-gray-700 text-base text-left mb-1">
                    FMM
                </p>
                <p class="text-gray-700 text-base text-left mb-1">
                    領取人：
                </p>
                <p class="text-gray-700 text-base text-left mb-1">
                    日期：
                </p>
                <p class="text-gray-700 text-base text-left mb-1">
                    職員/學生證號碼：
                </p>
                <p class="text-gray-700 text-base text-left mb-1">
                    電話：
                </p>
                <p class="text-gray-700 text-base text-left mb-1">
                    是否已還：否
                </p>
                <div class="flex justify-end">
                    <button class="w-1/3 left-0 border rounded p-1">更新</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Card',
};
</script>

<style lang="scss" scoped></style>
