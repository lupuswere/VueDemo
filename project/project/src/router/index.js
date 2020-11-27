import { createRouter } from 'vue-router'
import Index from "../components/Index";
import Cart from "../components/Cart";
import Order from "../components/Order";
import Goods from "../components/Goods";

const router = createRouter({
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index
        },
        {
            path: '/goods',
            name: 'Goods',
            component: Goods
        },
        {
            path: '/cart',
            name: 'Cart',
            component: Cart
        },
        {
            path: '/order',
            name: 'Order',
            component: Order
        }
    ]
})

export default router;