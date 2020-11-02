import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from "./components/home/index.vue"
import Login from "./components/auth/Login.vue"
import Logout from "./components/auth/Logout.vue"
import Register from "./components/auth/Register.vue"

Vue.use(VueRouter)

export default new VueRouter({
    mode:'history',
    base: process.env.BASE_URL,
    routes:[
            {path:"/", component:Index, name:"index",
            meta:{
                requiresLogin:true
            }},
            {path:"/login", component:Login, name:"login"},
            {path:'/logout', component:Logout, name:'logout'},
            {path:"/register", component:Register, name:"register"}
    ]
})