<template>
    <div class="container">
  <div class="row justify-content-md-center">
    <div class="col col-md-6">
      <!-- Material form register -->
      <div class="card">
        <h5 class="card-header primary-color white-text text-center py-4">
          <strong>Sign up</strong>
        </h5>

        <!--Card content-->
        <div class="card-body px-lg-5 pt-0">
          <!-- Form -->
          <form
            class="text-center"
            style="color: #757575"
            novalidate
            @submit.prevent="register"
          >
            <div class="form-row">
              <div class="col">
                <!-- First name -->
                <div class="md-form">
                     <label for="materialRegisterFormFirstName">First name</label>
                  <input
                    type="text"
                    id="materialRegisterFormFirstName"
                    class="form-control"
                    name="firstName"
                     v-model="first_name"
                  />
                 
                </div>
              </div>
              <div class="col">
                <!-- Last name -->
                 <label for="materialRegisterFormLastName">Last name</label>
                <div class="md-form">
                  <input
                    type="email"
                    id="materialRegisterFormLastName"
                    class="form-control"
                    name="lastName"
                     v-model="last_name"
                  />
                 
                </div>
              </div>
            </div>
            <div class="md-form">
                  <label for="materialLoginFormEmail">User name</label>
              <input
                type="text"
                id="materialLoginFormEmail"
                class="form-control"
                name="username"
                 v-model="username"
              />
            
            </div>
            <!-- Email -->
            <div class="md-form">
                    <label for="materialLoginFormEmail">E-mail</label>
              <input
                type="email"
                id="materialLoginFormEmail"
                class="form-control"
                name="email"
                 v-model="email"
              />
          
            </div>

            <!-- Password -->
            <div class="md-form">
                    <label for="materialLoginFormPassword">Password</label>
              <input
                type="password"
                id="materialLoginFormPassword"
                class="form-control"
                name="password"
                 v-model="password"
              />
          
            </div>
            <!-- Phone number -->
            <div class="md-form">
              <input
                type="password"
                id="materialRegisterFormPhone"
                class="form-control"
                aria-describedby="materialRegisterFormPhoneHelpBlock"
                name="phoneNumber"
              />
              <label for="materialRegisterFormPhone">Phone number</label>
              <small
                id="materialRegisterFormPhoneHelpBlock"
                class="form-text text-muted mb-4"
              >
                for two step authentication
              </small>
            </div>

            <div>
              <!-- Forgot password -->
              <a href="/forgot-password">Forgot password?</a>
            </div>

            <!-- Sign in button -->
            <button
              class="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0"
              type="submit"
            >
              Sign up
            </button>

            <!-- Register -->
            <p>
              already a member?
              <a href="/login">Sign In</a>
            </p>
          </form>
          <!-- Form -->
        </div>
      </div>
      <!-- Material form register -->
    </div>
  </div>
</div>

</template>
<script>
import axios from 'axios'
export default {
    name:"register",
    components:{

    },
    data(){
        return{
        username:"aryals10",
        password:"sabish10",
        first_name:"sandhya",
        last_name:"aryal",
        email:"bbhandari@gmail.com"
        }
      
    },
    methods:{
        register(){
            console.log(this.username, this.password)
            axios.post("http://localhost:8000/auth/register", {
                 username:this.username,
        password:this.password,
        first_name:this.first_name,
        last_name:this.last_name,
        email:this.email
            })
            .then(res=>{
                if(res.status===201){
                    location.replace("/login")
                } 
            })
            .catch(err=>{
                console.log(err)
            })
        }
    }
}
</script>