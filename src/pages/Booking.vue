<script lang="ts">
import type { IDate } from '../models/date'
import type { IService } from '../models/service'
import ServicesList from '../components/ServicesList.vue'
import DateList from '../components/DateList.vue'
import TimeList from '../components/TimeList.vue'
import BookButton from '../components/BookButton.vue'
export default {
    components: {
        ServicesList, DateList, TimeList, BookButton
    },
    data() {
        return {
            services: [
                { id: 1, name: 'Маникюр', items: [{ id: 1, title: 'Снятие + Маникюр + Покрытие гель-лаком', price: 2700, serviceId: 1}] },
                { id: 2, name: 'Дизайн', items: [{ id: 2, title: 'Дизайн 300', price: 300, serviceId: 2}] },
                { id: 3, name: 'Покрытие, снятие', items: [{ id: 3, title: 'Покрытие гель-лак', price: 1200, serviceId: 3}] },   
                { id: 4, name: 'Наращивание, укрепление', items: [{ id: 4, title: 'Наращивание ногтей', price: 2500, serviceId: 4 }] },      
            ] as IService[],
            dates: [
                { id: 1, date: '11.08' }, { id: 2, date: '12.08' }, { id: 3, date: '13.08' },
                { id: 4, date: '14.08' }, { id: 5, date: '15.08' }, { id: 6, date: '16.08' },
                { id: 7, date: '17.08' }, { id: 8, date: '18.08' }, { id: 9, date: '19.08'}                  
            ] as IDate[],
            times: [
                { id: 1, date: '11:00' }, { id: 2, date: '11:45' }, { id: 3, date: '13:30' },
                { id: 4, date: '14:10' }, { id: 5, date: '15:00' }, { id: 6, date: '16:45'},
                { id: 7, date: '17:00'}, { id: 8, date: '18:10'},{ id: 9, date: '19:05'}          
            ] as IDate[],
            chosenServices: [] as number[],
            chosenDate: 0 as number,
            chosenTime: 0 as number
        }
    },
    methods: {
        changeChosenServices(itemId: number): void {
        this.chosenServices.includes(itemId)
        ? this.chosenServices = this.chosenServices.filter(id => id !== itemId)
        : this.chosenServices.push(itemId)
        },
        setChosenDate(dateId: number): void {
            this.chosenDate = this.chosenDate === dateId ? 0 : dateId
        },
        setChosenTime(timeId: number): void {
            this.chosenTime = this.chosenTime === timeId ? 0 : timeId
        },
        book(): void {
            this.chosenServices = []
            this.chosenDate = 0
            this.chosenTime = 0
        },
    }
}
</script>

<template>
    <form @submit.prevent>
    <h1>Выберите</h1>
    <services-list :services="services"
      :chosen-services="chosenServices"
        @change-service="changeChosenServices"/>
    <date-list :dates="dates"
    :chosen-date="chosenDate"
    @set-date="setChosenDate"/>
    <time-list :times="times"
    :chosen-time="chosenTime"
    @set-time="setChosenTime"/>
    <book-button @book="book"/>
    </form>
</template>

<style scoped lang="scss">
form{
    width: 1300px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

h1{
    margin-top: 40px;
}

</style>