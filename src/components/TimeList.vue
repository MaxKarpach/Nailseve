<script lang="ts">
import type { IDate } from '../models/date'
export default {
    data() {
        return {
            times: [
                { id: 1, date: '11:00' }, { id: 2, date: '11:45' }, { id: 3, date: '13:30' },
                { id: 4, date: '14:10' }, { id: 5, date: '15:00' }, { id: 6, date: '16:45'},
                { id: 7, date: '17:00'}, { id: 8, date: '18:10'},{ id: 9, date: '19:05'}          
            ] as IDate[],
            chosenTime: 0 as number
        }
    },
    methods: {
        setChosenTime(timeId: number): void {
            this.chosenTime = this.chosenTime === timeId ? 0 : timeId
        },
    }
}
</script>

<template>
    <div class="date">
        <p class="date__title">
            Выберите время
        </p>
        <div class="date__container">
            <div class="date__container__item"  v-for="time in times" :key="time.id" v-on:click="setChosenTime(time.id)"
            :class="{ active: chosenTime === time.id }">
                {{time.date}}
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">

.date{
    width: 500px;
    margin-top: 80px;
    border: 1px solid teal;
    border-radius: 7px;
    padding: 10px 0 10px 10px;
    &__title{
        font-size: 20px;
    }
    &__container{
    margin-top: 20px;
    display: grid;
    grid-template-columns: 70px 70px 70px 70px 70px 70px;
    grid-template-rows: auto auto;
    gap: 10px;
    &__item{
        cursor: pointer;
        border: 1px solid teal;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 7px;
        width: 70px;
        height: 30px;
        &.active {
        background-color: teal;
        color: white;
        border-color: teal;
      }
    }
    }
}

</style>