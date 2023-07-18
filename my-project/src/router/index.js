import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/views/Home.vue"
import About from "../components/views/About.vue"
import Images from "../components/views/Images.vue"


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About us',
        component: About
    },
    {
        path: '/images',
        name: 'Imageso of the country',
        component: Images
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router