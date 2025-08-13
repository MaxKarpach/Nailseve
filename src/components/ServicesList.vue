<script lang="ts">
import type { IService } from '../models/service'
export default {
    props: {
    services: {
      type: Array as () => IService[],
      required: true
    },
    chosenServices: {
      type: Array as () => number[],
      required: true
    }
  },
emits: ['change-service']
}
</script>

<template>
    <div class="services">
        <div class="services__item" v-for="service in services" :key="service.id">
            <p class="services__item-title">{{service.name}}</p>
            <div class="services__item-container">
               <div class="services__item-container__info"  v-for="item in service.items" :key="item.id">
                <div class="services__item-container__info__info">
                    <div class="services__item-container__info__info__name">{{item.title}}</div>
                    <div class="services__item-container__info__info__price">{{item.price}} ₽</div>
                </div>
<div 
  class="services__item-container__info__checkbox"
  @click="$emit('change-service', item.id)"
>
                <img v-show="chosenServices.includes(item.id)" class="services__item-container__info__checkbox__img" src="/src/assets/check.png" alt="">
                </div>
                </div>   
            </div>
        </div>
    </div>

</template>

<style scoped lang="scss">

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

</style>