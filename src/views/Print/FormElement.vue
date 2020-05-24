<template>
<div class="form-element-component p-2 flex flex-row">
    <div class="w-2/5 flex flex-col items-start">
        <p>{{ title }}</p>
        <p class="text-xs">{{ subtitle }}</p>
    </div>
    <div class="border-b-2 w-3/5 border-black flex justify-start items-end text-xl">{{ value }}</div>
</div>
</template>

<script>
export default {
    name: 'FormElement',
    props: {
        title: {
            type: String,
            default: '',
        },
        subtitle: {
            type: String,
            default: '',
        },
        value: {
            type: String,
            default: '',
        }
    }
}
</script>

<style lang="scss" scoped>
    
</style>
