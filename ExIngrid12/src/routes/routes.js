import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/views/home/home.vue'
import Cart from '../components/views/cart/cart.vue'

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/home',
            name: 'home',
            component: Home

        },

        {
            path: '/cart',
            name: 'cart',
            component: Cart
        }
    ]
})

export default router