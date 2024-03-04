import HomePage from './components/HomePage.vue'
import SignUp from './components/SignUp.vue'
import {createRouter,createWebHashHistory} from 'vue-router'
import LoginPage from './components/LoginPage.vue'
import UpdateRest  from './components/UpdateRest.vue'
import AddRest from './components/AddRest.vue'

const routes=[
    {
        name:'HomePage',
        component:HomePage,
        path:'/'
    },
    {
        name:'SignUp',
        component:SignUp,
        path:'/sign-up'
    },
    {
        name:'LoginPage',
        component:LoginPage,
        path:'/LoginPage'
    },
    {
        name:'AddRest',
        component:AddRest,
        path:'/add'
    },
    {
        name:'UpdateRest',
        component:UpdateRest,
        path:'/update:id'
    }
];

const router= createRouter({
    history:createWebHashHistory(),
    routes
})
export default router;
