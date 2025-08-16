<script lang="ts">
import type { IReview } from '../models/review'
import ReviewItem from './ReviewItem.vue';

export default {
    components: {
        ReviewItem
    },
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
        <review-item :reviews="reviews"/>
        </div>
</template>

<style scoped lang="scss">
 .reviews{
    margin-top: 40px;
    width: 1300px;
    display: flex;
    flex-direction: column;
    align-items: center;
 }
</style>
