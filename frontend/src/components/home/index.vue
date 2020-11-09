<template>
    <div>
        <Topbar></Topbar>
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="../../assets/logo.png" alt="First slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="" alt="Second slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="" alt="Third slide">
    </div>
  </div>
</div>
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