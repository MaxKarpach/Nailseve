<script lang="ts">
import axios from 'axios'
import type { ITime } from '../models/time'
import type { IService } from '../models/service'
import ServicesList from '../components/ServicesList.vue'
import TimeList from '../components/TimeList.vue'
import BookButton from '../components/BookButton.vue'
export default {
    components: {
        ServicesList, TimeList, BookButton
    },
    data() {
        return {
            services: [] as IService[],
            times: [] as ITime[],
            chosenServices: [] as number[],
            chosenTime: 0 as number
        }
    },
    methods: {
        changeChosenServices(itemId: number): void {
        this.chosenServices.includes(itemId)
        ? this.chosenServices = this.chosenServices.filter(id => id !== itemId)
            : this.chosenServices.push(itemId)
        },
        setChosenTime(timeId: number): void {
            this.chosenTime = this.chosenTime === timeId ? 0 : timeId
        },
        book(): void {
            this.chosenServices = []
            this.chosenTime = 0
        },
        async loadServices(): Promise<void> {
          try {
              const response = await axios.get<IService[]>('http://localhost:8000/api/servicesWithItems')
              this.services = response.data
          } catch (error) {
              console.error('Ошибка загрузки сервисов:', error)
          }
        },
        async loadTimes(): Promise<void> {
          try {
              const response = await axios.get<ITime[]>('http://localhost:8000/api/times')
              this.times = response.data
          } catch (error) {
              console.error('Ошибка загрузки времени:', error)
          }
        }
    },
    mounted() {
        this.loadServices()
        this.loadTimes()
    }  
}
</script>

<template>
    <form @submit.prevent>
    <h1>Выберите</h1>
    <services-list :services="services"
      :chosen-services="chosenServices"
        @change-service="changeChosenServices"/>
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