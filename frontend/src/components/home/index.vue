<template>
    <div>
        <Topbar></Topbar>
        <ConstituentProperties/>
    </div>
</template>

<script>
import Topbar from "./Topbar"
import ConstituentProperties from "./ConstituentProperties"
export default {
    name:"Index",
    onIdle(){
        this.$store.dispatch('userLogout')
        .then(()=>{
            this.$router.push({name:'login'})
        })
    },
    components:{
        Topbar,
        ConstituentProperties
    }
}
</script>