<script lang="ts">
export default {
    data() {
        return {
            chosenServices: [] as number[],
            chosenDate: 0 as number,
            chosenTime: 0 as number
        }
    },
    methods: {
        book() : void {
            this.chosenServices = []
            this.chosenDate = 0
            this.chosenTime = 0
        },
    }
}
</script>

<template>
    <button v-on:click="book()">
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