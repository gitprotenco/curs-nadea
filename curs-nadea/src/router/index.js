import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import ProductView from '@/views/ProductView.vue';
import LivrareView from '../views/LivrareView.vue';
import AddProductView from '../views/AddProductView.vue';
const routes = [
    {
    path: '/acasa',
    component: HomeView,
    name : 'Acasa'
    },

    {
    path: '/about',
    component: AboutView,
    name : 'About'
        },

    {
     path: '/',
     redirect: '/acasa'
          },

    {
    path: '/product',
    component: ProductView,
    name : 'Product'
    },
    {
     path: '/livrare',
     component: LivrareView,
     name : 'Livrare'
    },
    {
    path: '/addProduct',
    component: AddProductView,
    name : 'AddProduct'
    },            
]

const router = createRouter({
    history: createWebHistory(),
    routes
})  

export default router;