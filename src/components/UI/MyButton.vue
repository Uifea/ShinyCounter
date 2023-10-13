<template lang="">
    <button class="btn">
        <slot></slot>
    </button>
</template>
<script>
export default {
    name: 'my-button'
}
</script>
<style scoped>
    .btn {
    font-size: 36px;
    padding: 15px 30px;
    border: 2px solid blueviolet;
    background-color: blueviolet;
    color: #fff;
    border-radius: 46px;
    cursor: pointer;
    font-family: 'Comfortaa';
}
</style>