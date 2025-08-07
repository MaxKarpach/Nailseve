<script setup lang="ts">
</script>

<template>
    <h1>Выберите</h1>
    <div class="services">
        <div class="services__item">
            <p class="services__item-title">Маникюр</p>
            <div class="services__item-container">
               <div class="services__item-container__info">
                <div class="services__item-container__info__info">
                    <div class="services__item-container__info__info__name">Снятие + Маникюр + Покрытие гель-лаком</div>
                    <div class="services__item-container__info__info__price">2 700 ₽</div>
                </div>
                <div class="services__item-container__info__checkbox"></div>
                </div>
                
            </div>
        </div>
        <div class="services__item">
            <p class="services__item-title">Дизайн</p>
            <div class="services__item-container">
               <div class="services__item-container__info">
                <div class="services__item-container__info__info">
                    <div class="services__item-container__info__info__name">Дизайн 300</div>
                    <div class="services__item-container__info__info__price">300 ₽</div>
                </div>
                <div class="services__item-container__info__checkbox"></div>
                </div>
            </div>
        </div>
        <div class="services__item">
            <p class="services__item-title">Покрытие, снятие</p>
            <div class="services__item-container">
               <div class="services__item-container__info">
                <div class="services__item-container__info__info">
                    <div class="services__item-container__info__info__name">Покрытие гель-лак</div>
                    <div class="services__item-container__info__info__price">1 200 ₽</div>
                </div>
                <div class="services__item-container__info__checkbox"></div>
                </div>
            </div>
        </div>
        <div class="services__item">
            <p class="services__item-title">Наращивание, укрепление</p>
            <div class="services__item-container">
               <div class="services__item-container__info">
                <div class="services__item-container__info__info">
                    <div class="services__item-container__info__info__name">Наращивание ногтей</div>
                    <div class="services__item-container__info__info__price">2 500 ₽</div>
                </div>
                <div class="services__item-container__info__checkbox"></div>
                </div>
            </div>
        </div>
        <div class="services__item">
            <p class="services__item-title">Время</p>
            <div class="services__item-container">
               <div class="services__item-container__info">
                <div class="services__item-container__info__info">
                    <div class="services__item-container__info__info__name">10 августа 2025</div>
                    <div class="services__item-container__info__info__price">11:00</div>
                </div>
                <div class="services__item-container__info__checkbox"></div>
                </div>
                
            </div>
        </div>
    </div>
    <button>
        Записаться
    </button>
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
           border-radius: 5px; 
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