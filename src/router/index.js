import {createRouter, createWebHistory} from 'vue-router'
import Index from '@/views/Index.vue';


const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: 'active',
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index
        },      
        {
            path: '/typography',
            name: 'Typography',
            component: () => import('@/views/Typography.vue')
        },      
        {
            path: '/button',
            name: 'Button',
            component: () => import('@/views/Button.vue')
        },      
    ]
})


export default router