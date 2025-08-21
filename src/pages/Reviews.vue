<script lang="ts">
import ReviewForm from '../components/ReviewForm.vue'
import ReviewList from '../components/ReviewList.vue'
import type { IReview } from '../models/review'
import axios from 'axios'

export default {
    components: {
        ReviewForm, ReviewList
    },
    data() {
        return {
            reviews: [] as IReview[]
        }
    },
    methods: {
        async loadReviews(): Promise<void> {
            try {
                const response = await axios.get<IReview[]>('http://localhost:8000/api/reviews')
                this.reviews = response.data
            } catch (error) {
                console.error('Ошибка загрузки отзывов:', error)
            }
        },
        async sendReview(newReview: IReview): Promise<void> {
            try {
                const response = await axios.post<IReview>('http://localhost:8000/api/reviews', newReview)
                this.reviews.push(response.data)
            } catch (error) {
                console.error('Ошибка отправки отзыва:', error)
            }
        }
    },
    mounted() {
        this.loadReviews()
    }
}
</script>

<template>
    <review-form @send-review="sendReview"/>
    <review-list :reviews="reviews"/>
</template>
