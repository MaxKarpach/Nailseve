<script setup lang="ts">
</script>

<template>
    <form class="add">
        <input type="text" class="add__name" placeholder="Ваше имя"/>
        <input type="text" class="add__rating" placeholder="Оценка(1-5)"/>
        <textarea name="add__text" id="" class="add__text" placeholder="Комментарий"></textarea>
        <button class="add__button">
            Отправить
        </button>
    </form>
    <div class="reviews">
        <div class="reviews__item">
            <div class="reviews__item__info">
                <div class="reviews__item__info__name">Коля Валуев</div>
                <img class="reviews__item__info__rating" src="/src/assets/star.png" alt=""/>
            </div>
            <div class="reviews__item__text">
                Пришла в салон впервые по рекомендации подруги и осталась в полном восторге! 
                Мастер Катерина — настоящий профессионал: аккуратная, внимательная к деталям и с отличным чувством стиля.
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
  .add{
    margin-top: 80px;
    height: 340px;
    width: 600px;
    border: 1px solid teal;
    border-radius: 7px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    input{
        height: 50px;
        padding-left: 10px;
        border: 1px solid teal; 
        border-radius: 7px;
        width: 90%;
        &::placeholder{
            color: black;
        }
    }
    &__text{
        padding-left: 10px; 
        padding-top: 10px;
        width: 90%;
        height: 140px;
        resize: none;
        border: 1px solid teal; 
        border-radius: 7px;
        &::placeholder{
            color: black;
        }
    }
    button{
        border-radius: 7px;
        border: 1px solid teal;
        height: 40px;
        background-color: inherit;
        width: 30%;
    }
 }
 .reviews{
    margin-top: 40px;
    width: 1300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    &__item{
        width: 800px;
        border: 1px solid teal;
        display: flex;
        flex-direction: column;
        padding: 10px 20px;
        border-radius: 7px;
        margin-top: 20px;
        &:first-child{
            margin-top: 0;
        }
        &__info{
            display: flex;
            height:40px;
            align-items: center;
            width: 100%;
            &__rating{
                height: 20px;
                margin-left: 5px;
            }
        }
        &__text{
            line-height: 23px;
        }
    }
 }
</style>
