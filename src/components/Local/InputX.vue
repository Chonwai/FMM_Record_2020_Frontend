<template>
    <div class="inputx-component flex flex-row justify-center items-center px-4 mb-4">
        <p class="w-1/3 p-2 text-xl flex justify-start">{{ title }}</p>
        <input
            :type="type"
            :placeholder="placeholder"
            class="w-2/3 border rounded-lg p-2 ml-4"
            v-on:input="updateValue($event.target.value)"
        />
    </div>
</template>

<script>
export default {
    name: 'InputXComponent',
    props: {
        title: {
            type: String,
            default: '',
        },
        type: {
            type: String,
            default: '',
        },
        placeholder: {
            type: String,
            default: '',
        },
        input: {
            type: String,
            default: '',
        },
    },
    data() {
        return {
            //
        };
    },
    methods: {
        updateValue: function (value) {
            this.$emit('input', value);
        },
    },
};
</script>

<style lang="scss" scoped></style>
