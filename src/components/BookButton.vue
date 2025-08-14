<script lang="ts">
export default {
    emits: ['book']
}
</script>

<template>
    <button @click="$emit('book')">
        Записаться
    </button>
</template>

<style scoped lang="scss">

button{
    border-radius: 7px;
    border: 1px solid teal;
    height: 60px;
    background-color: inherit;
    width: 30%;   
    font-size: 30px;
    margin-top: 40px;
}

</style>