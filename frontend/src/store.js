import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        token:null
    },
    mutations:{
        updateStorage(state, {token}){
            state.token=token
            console.log("update token", state.token)
        },
        destroyToken(state){
            state.token=null
        }
    },
    getters:{
        loggedIn(state){
            return state.token != null;
        }
    },
    actions:{
        userLogout (context) {
            if (context.getters.loggedIn) {
                context.commit('destroyToken')
                //call backedn api to destroy token from db
            }
          },
        userLogin(context, usercredentials){
            return new Promise((resolve, reject)=>{
              axios.post('http://localhost:8000/auth/login',{
                    username:usercredentials.username,
                    password:usercredentials.password
                })
                .then(response=>{
                    context.commit('updateStorage', {
                        token:response.data.token
                    })
                    resolve()
                })
                .catch(err=>{
                    reject(err)
                })
            })
        }
    }
})