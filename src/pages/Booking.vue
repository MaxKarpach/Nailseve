<script lang="ts">
import type { IDate } from '../models/date'
import type { IService } from '../models/service'
export default {
    data() {
        return {
            services: [
                { id: 1, name: 'Маникюр', items: [{ id: 1, title: 'Снятие + Маникюр + Покрытие гель-лаком', price: '2 700 ₽', serviceId: 1}] },
                { id: 2, name: 'Дизайн', items: [{ id: 2, title: 'Дизайн 300', price: '300 ₽', serviceId: 2}] },
                { id: 3, name: 'Покрытие, снятие', items: [{ id: 3, title: 'Покрытие гель-лак', price: '1 200 ₽', serviceId: 3}] },   
                { id: 4, name: 'Наращивание, укрепление', items: [{ id: 4, title: 'Наращивание ногтей', price: '2 500 ₽', serviceId: 4 }] },      
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
        book() : void {
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
    <div class="services">
        <div class="services__item" v-for="service in services" :key="service.id">
            <p class="services__item-title">{{service.name}}</p>
            <div class="services__item-container">
               <div class="services__item-container__info"  v-for="item in service.items" :key="item.id">
                <div class="services__item-container__info__info">
                    <div class="services__item-container__info__info__name">{{item.title}}</div>
                    <div class="services__item-container__info__info__price">{{item.price}}</div>
                </div>
                <div class="services__item-container__info__checkbox" v-on:click="changeChosenServices(item.id)">
                <img v-show="chosenServices.includes(item.id)" class="services__item-container__info__checkbox__img" src="/src/assets/check.png" alt="">
                </div>
                </div>   
            </div>
        </div>
    </div>
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
    <button v-on:click="book()">
        Записаться
    </button>
    </form>
</template>

<style scoped lang="scss">
form{
    width: 1300px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
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
.services{
    width: 1300px;
    margin-top: 80px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    gap: 40px;
    &__item-title{
      height: 40px;
      width: 500px;
      display: flex;
      align-items: center;
      padding-left: 40px;
      border: 1px solid teal;
      border-radius: 7px;
      font-size: 24px;        
    }
    &__item-container{
       margin-top: 20px;
      &__info{
        display: flex;
        width: 500px;
        align-items: center;
        height: 70px;
        border: 1px solid teal;
        justify-content: space-between;
        padding: 0 20px;
        border-radius: 7px;
        margin-top: 20px; 
        &__checkbox{
           height: 20px;
           width: 20px;
           border: 1px solid teal;
           cursor: pointer;
           border-radius: 5px; 
           display: flex;
           justify-content: center;
           align-items: center;
           &__img{
            height: 10px;
           }
        }      
        &__info__price{
           margin-top: 5px;   
           &:first-child{
            margin-top: 0;
           }
        } 
      }
    }
}

h1{
    margin-top: 40px;
}

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