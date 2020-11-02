<template>
    <div class="container">
  <div class="row justify-content-md-center">
    <div class="col col-md-5">
      <!-- Material form login -->
      <div class="card">
        <h5 class="card-header primary-color white-text text-center py-4">
          <strong>Sign in</strong>
        </h5>
        <p v-if="incorrectAuth">Incorrect username or password</p>
        <!--Card content-->
        <div class="card-body px-lg-5 pt-0">
          <!-- Form -->
          <form class="text-center" style="color: #757575"
          novalidatej @submit.prevent="login">
            <!-- Email -->
            <div class="md-form">
              <input
                type="text"
                id="materialLoginFormEmail"
                class="form-control"
                name="username"
                v-model="username"
              />
              <label for="materialLoginFormEmail">E-mail</label>
            </div>

            <!-- Password -->
            <div class="md-form">
              <input
                type="password"
                id="materialLoginFormPassword"
                class="form-control"
                name="password"
                v-model="password"
              />
              <label for="materialLoginFormPassword">Password</label>
            </div>

            <div class="d-flex justify-content-around">
              <div>
                <!-- Remember me -->
                <div class="form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="materialLoginFormRemember"
                  />
                  <label
                    class="form-check-label"
                    for="materialLoginFormRemember"
                    >Remember me</label
                  >
                </div>
              </div>
              <div>
                <!-- Forgot password -->
                <a href="/forgot-password">Forgot password?</a>
              </div>
            </div>

            <!-- Sign in button -->
            <button
              class="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0"
              type="submit"
            >
              Sign in
            </button>

            <!-- Register -->
            <p>
              Not a member?
              <a href="/register">Register</a>
            </p>

        
          </form>
          <!-- Form -->
        </div>
      </div>
      <!-- Material form login -->
    </div>
  </div>
</div>

</template>

<script>
export default {
    name:"login",
    components:{

    },
    data(){
        return{
        username:"aryals10",
        password:"sabish10",
        incorrectAuth:false
        }
      
    },
    methods:{
        login(){
            this.$store.dispatch('userLogin',{
                username:this.username,
                password:this.password
            })
            .then(()=>{
                this.$router.push({name:'index'})
            })
            .catch(err=>{
                console.log(err);
                this.incorrectAuth=true;
            })
        }
    }
}
</script>