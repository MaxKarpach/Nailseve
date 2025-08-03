import {createRouter, createWebHistory} from 'vue-router'
import Main from '../pages/Main.vue'
import Reviews from '../pages/Reviews.vue'
import Personality from '../pages/Portfolio.vue'
import Booking from '../pages/Booking.vue'

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/reviews',
        component: Reviews
    },
    {
        path: '/portfolio',
        component: Personality
    },
    {
        path: '/booking',
        component: Booking
    }
]

const router = createRouter({
    routes, 
    history: createWebHistory(import.meta.env.BASE_URL)
})

export default router