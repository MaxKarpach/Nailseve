<script setup lang="ts">
</script>

<template>
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
 .reviews{
    margin-top: 80px;
    width: 1300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    &__item{
        width: 800px;
        border: 1px solid black;
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
