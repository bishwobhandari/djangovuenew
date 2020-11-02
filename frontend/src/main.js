import Vue from 'vue'
import App from './App.vue'
import router from "./routes.js"
import store from './store'
import IdleVue from 'idle-vue'
Vue.config.productionTip = false

const eventsHub = new Vue()
Vue.use(IdleVue, {
  eventEmitter:eventsHub,
  idleTime:10000000
})

router.beforeEach((to,from, next)=>{
  if(to.matched.some(record=>record.meta.requiresLogin)){
    if(!store.getters.loggedIn){
      next({name:"login"})
    } else {
      next()
    }
  } else {
    next()
  }
})
new Vue({
  el:'#app',
  router,
  store,
  render: h => h(App),
})
