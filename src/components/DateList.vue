<script lang="ts">
import type { IDate } from '../models/date'
export default {
    data() {
        return {
            dates: [
                { id: 1, date: '11.08' }, { id: 2, date: '12.08' }, { id: 3, date: '13.08' },
                { id: 4, date: '14.08' }, { id: 5, date: '15.08' }, { id: 6, date: '16.08' },
                { id: 7, date: '17.08' }, { id: 8, date: '18.08' }, { id: 9, date: '19.08'}                  
            ] as IDate[],
            chosenDate: 0 as number
        }
    },
    methods: {
        setChosenDate(dateId: number): void {
            this.chosenDate = this.chosenDate === dateId ? 0 : dateId
        }
    }
}
</script>

<template>
    <div class="date">
        <p class="date__title">
            Выберите дату
        </p>
        <div class="date__container">
            <div class="date__container__item"  v-for="date in dates" :key="date.id" v-on:click="setChosenDate(date.id)"
            :class="{ active: chosenDate === date.id }">
                {{date.date}}
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