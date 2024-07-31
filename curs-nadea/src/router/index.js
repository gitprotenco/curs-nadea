import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';

const routes = [
    {
    path: '/home',
    component: HomeView,
    name : 'Home'
    },
    {
    path: '/about',
    component: AboutView,
    name : 'About'
        },
        {
            path: '/',
            redirect: '/home'
          },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})  

export default router;