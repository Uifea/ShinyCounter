<template lang="">
    <input v-focus :value="modelValue" @input="updateInput" type="text" class="input">
</template>
<script>
export default {
    name: 'my-input',
    props: {
        modelValue: [String, Number]
    },
    methods: {
        updateInput(e) {
            this.$emit('update:modelValue', e.target.value)
        }
    }
}
</script>
<style scoped>
.input {
    height: 40px;
    padding-left: 15px;
    font-size: 24px;
    margin-top: 15px;
    margin-bottom: 15px;
    background-color: white;
    border-radius: 46px;
    border: 5px solid blueviolet;
}
</style>