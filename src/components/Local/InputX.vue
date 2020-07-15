<template>
    <div class="inputx-component flex flex-row justify-center items-center px-4 mb-4">
        <p class="w-1/4 p-2 flex mr-4">{{ title }}</p>
        <div v-if="search" class="w-3/4 flex flex-row">
            <input
                :type="type"
                :placeholder="placeholder"
                class="w-full border rounded-lg p-2"
                v-on:input="updateValue($event.target.value)"
                :value="value"
            />
            <slot name="search-button"></slot>
        </div>
        <input
            v-else
            :type="type"
            :placeholder="placeholder"
            class="w-3/4 border rounded-lg p-2"
            v-on:input="updateValue($event.target.value)"
            :value="value"
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
        value: {
            type: [String, Number],
            default: '',
        },
        input: {
            type: String,
            default: '',
        },
        search: {
            type: Boolean,
            default: false,
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
