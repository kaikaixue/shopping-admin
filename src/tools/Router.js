import { createRouter, createWebHashHistory } from 'vue-router'
import store from './Storage'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            name: 'login',
            path: '/login',
            component: () => import('@/components/login/Login.vue')
        },
        {
            name: 'home',
            path: '/home',
            component: () => import('@/components/home/Home.vue'),
            children: [
                {
                    path: 'order/:type',
                    component: () => import('@/components/order/Order.vue'),
                    name: 'order',
                },
                {
                    path: 'goods/:type',
                    component: () => import('@/components/goods/Goods.vue'),
                    name: 'Goods'
                },
                {
                    path: 'addGood/:type',
                    component: () => import('@/components/goods/AddGood.vue'),
                    name: 'AddGood'
                },
                {
                    path: 'data',
                    component: () => import('@/components/financial/DataCom.vue'),
                    name: 'DataCom'
                }
            ],
            redirect: '/home/order/0'
        }
    ]
})

router.beforeEach((from) => {
    let isLogin = store.getters.isLogin
    if (isLogin || from.name === 'login') {
        return true
    } else {
        return { name: 'login' }
    }
})

export default router