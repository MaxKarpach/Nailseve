<script lang="ts">
import type { IReview } from '../models/review'

export default {
    props: {
        reviews: {
            type: Array as () => IReview[],
            required: true
        }
    }
}
</script>

<template>
    <div class="reviews">
        <div class="reviews__item" v-for="review in reviews" :key="review.id">
            <div class="reviews__item__info">
                <div class="reviews__item__info__name">{{review.name}}</div>
                <img v-for="star in review.mark" class="reviews__item__info__rating" src="/src/assets/star.png" alt=""/>
            </div>
            <div class="reviews__item__text">
                {{ review.text }}
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
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
