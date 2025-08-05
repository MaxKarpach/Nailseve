<script setup lang="ts">
</script>

<template>
    <div class="portfolio">
        <div class="portfolio__item">
            <img src="/src/assets/n1.jpg" alt="" class="portfolio__item__img">
            <div class="portfolio__item__price">
                Цена: 500 ₽
            </div>
            <div class="portfolio__item__description">
              <div class="portfolio__item__description__button">
                Повседневный
              </div>
              <div class="portfolio__item__description__button">
                French
              </div>
            </div>
        </div>
        <div class="portfolio__item">
            <img src="/src/assets/n2.jpg" alt="" class="portfolio__item__img">  
            <div class="portfolio__item__price">
                Цена: 300 ₽
            </div>  
            <div class="portfolio__item__description">
              <div class="portfolio__item__description__button">
                Летний
              </div>
              <div class="portfolio__item__description__button">
                Минимализм
              </div>
            </div>       
        </div>
        <div class="portfolio__item">
            <img src="/src/assets/n3.jpg" alt="" class="portfolio__item__img">
            <div class="portfolio__item__price">
                Цена: 1000 ₽
            </div>  
                        <div class="portfolio__item__description">
              <div class="portfolio__item__description__button">
                Летний
              </div>
              <div class="portfolio__item__description__button">
                Худ. роспись
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
