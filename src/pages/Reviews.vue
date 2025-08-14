<script lang="ts">
import ReviewForm from '../components/ReviewForm.vue'
import ReviewList from '../components/ReviewList.vue'
import type { IReview } from '../models/review'

export default {
    components: {
        ReviewForm, ReviewList
    },
    data() {
        return {
            reviews: [
                {id: 1, name: 'Коля Валуев', mark: 5, text: 'Пришла в салон впервые по рекомендации подруги и осталась в полном восторге! Мастер Катерина — настоящий профессионал: аккуратная, внимательная к деталям и с отличным чувством стиля.'}
            ] as IReview[]
        }
    },
    methods: {
        sendReview(): void {

        }
    }
}
</script>

<template>
    <review-form @send-review="sendReview"/>
    <review-list :reviews="reviews"/>
</template>

<style scoped lang="scss">
</style>
