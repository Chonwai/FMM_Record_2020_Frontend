<template>
    <div class="w-1/2 flex">
        <div
            class="w-full flex p-2 m-2 border-2 border-teal-500 rounded"
            v-if="record.is_returned == true"
        >
            <div class="w-1/3 flex justify-center items-center">
                <img
                    class="h-auto p-2 flex-none bg-cover text-center overflow-hidden"
                    src="@/assets/images/document.svg"
                    alt="Image"
                    srcset
                />
            </div>
            <div class="flex flex-col bg-white w-2/3">
                <div class="text-gray-900 font-bold text-xl mb-2 text-left">
                    Record #{{ record.id }}
                </div>
                <p class="text-gray-700 text-base text-left mb-1">FMM{{ record.id }}</p>
                <p class="text-gray-700 text-base text-left mb-1">領取人：{{ record.taken_by }}</p>
                <p class="text-gray-700 text-base text-left mb-1">日期：{{ record.taken_at }}</p>
                <p class="text-gray-700 text-base text-left mb-1">
                    職員/學生證號碼：{{ record.staff_number }}
                </p>
                <p class="text-gray-700 text-base text-left mb-1">電話：{{ record.contact }}</p>
                <p class="text-gray-700 text-base text-left mb-1">是否已還：已還</p>
                <div class="flex justify-end">
                    <button class="w-1/3 left-0 border rounded p-1">更新</button>
                </div>
            </div>
        </div>
        <div
            class="w-full flex p-2 m-2 border-2 border-red-500 rounded"
            v-if="record.is_returned == false"
        >
            <div class="w-1/3 flex justify-center items-center">
                <img
                    class="h-auto p-2 flex-none bg-cover text-center overflow-hidden"
                    src="@/assets/images/document.svg"
                    alt="Image"
                    srcset
                />
            </div>
            <div class="flex flex-col bg-white w-2/3">
                <div class="text-gray-900 font-bold text-xl mb-2 text-left">
                    Record #{{ record.id }}
                </div>
                <p class="text-gray-700 text-base text-left mb-1">FMM{{ record.id }}</p>
                <p class="text-gray-700 text-base text-left mb-1">領取人：{{ record.taken_by }}</p>
                <p class="text-gray-700 text-base text-left mb-1">日期：{{ record.taken_at }}</p>
                <p class="text-gray-700 text-base text-left mb-1">
                    職員/學生證號碼：{{ record.staff_number }}
                </p>
                <p class="text-gray-700 text-base text-left mb-1">電話：{{ record.contact }}</p>
                <p class="text-gray-700 text-base text-left mb-1">是否已還：未還</p>
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
    props: {
        record: {
            type: Object,
            default: () => {
                return {};
            },
        },
    },
};
</script>

<style lang="scss" scoped></style>
