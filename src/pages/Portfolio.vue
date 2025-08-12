<script lang="ts">
import type { IPortfolioItem } from '../models/portfolioItem';

export default {
  data() {
    return {
      works: [
        { id: 1, img: '/src/assets/n1.jpg', price: 500, description: [{ id: 1, text: 'Повседневный' }, { id: 2, text: 'French' }] },
        { id: 2, img: '/src/assets/n2.jpg', price: 300, description: [{ id: 3, text: 'Летний' }, { id: 4, text: 'Минимализм' }] },
        { id: 3, img: '/src/assets/n3.jpg', price: 1000, description: [{ id: 3, text: 'Летний' }, { id: 5, text: 'Худ. роспись' }] }                
      ] as IPortfolioItem[]
    }
  }
}
</script>

<template>
    <div class="portfolio">
        <div class="portfolio__item"  v-for="work in works" :key="work.id">
            <img :src="work.img" alt="" class="portfolio__item__img">
            <div class="portfolio__item__price">
                Цена: {{ work.price }} ₽
            </div>
            <div class="portfolio__item__description">
              <div class="portfolio__item__description__button" v-for="descr in work.description" :key="descr.id">
                {{descr.text}}
              </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
  .portfolio{
    width: 1300px;
    margin-top: 80px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto auto auto;
    gap: 20px;
    &__item{
      display: flex;
      flex-direction: column;
      position: relative;
      align-items: center;
      &__img{
        height: 340px;
        width: 100%;      
      }
      &__price{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 43px;
        width: 100%;
        border: 1px solid rgba(246, 245, 245, 0.966)y;
        border-top: none;
        background-color: rgba(246, 245, 245, 0.966);        
      }
      &__description{
         height: 30px;
         width: 50%;
         position: absolute;
         margin-top: 20px;
         display: flex;
         align-items: center;
         justify-content: space-between;
         &__button{
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 14px;
          color: white;
          height: 25px;
          border: 1px solid white;
          border-radius: 7px;
          padding: 0 10px;
         }
      }
    }
  }
</style>
