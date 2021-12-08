<template>
  <div class="signin">
    <div class="hero_container">
      <header class="row">
        <div class="logo_container col s1">
          <img src="@/assets/dc-logos-2020-full.svg">
        </div>
        <h1 class="col s11 right-align">Equipment Signout</h1>
      </header>
      
      <section class="hero">
        <img src="@/assets/big_cir.svg" id="deco_1">
        <img src="@/assets/small_cir.svg" id="deco_2">
        <img src="@/assets/wave.svg" id="deco_3">
        <div class="hero_img">
          <img src="@/assets/camera.png">
        </div>
      </section>

    </div>
    <div class="login_container">
      <h2>Welcome back!</h2>
      <h3>Login below to continue</h3>
      <form>
        <h4>Login</h4>
          <div class="input_holder">
            <div class="icon_container">
              <img src="@/assets/id_card_icon.svg">
            </div>
            <input type="text" name="studentId" required placeholder="Student ID" v-model="login.studentId">
            <p class="id_error left-align">{{idError}}</p>
          </div>

          <div class="input_holder">
            <div class="icon_container">
              <img src="@/assets/lock_icon.svg">
            </div>
            <input type="password" name="password" required placeholder="Password" v-model="login.password">
            <div class="password_error_container row">
              <p class="password_error col s6 left-align">{{passwordError}}</p>
              <a href="#" class="col s6 right-align">Forgot Password?</a>
            </div>
          </div>
        <button id="login" @click="checkCredentials">Login</button>
      </form>
    </div>
    <!-- <p>{{studentId}}</p>
    <p>{{password}}</p> -->
    <footer>
      <h5 class="rights">©2021 Durham College All Rights Reserved</h5>
      <div class="social_container">
        <a href="#"><img src="@/assets/facebook_icon.png"></a>
        <a href="#"><img src="@/assets/ig_icon.png"></a>
        <a href="#"><img src="@/assets/tiktok_icon.png"></a>
        <!-- <h5>Twitter</h5>
        <h5>Tiktok</h5>
        <h5>Instagram</h5> -->
      </div>
    </footer>
  </div>
</template>

<script>

export default {
  data(){
    return{
      login:{
        studentId:"900000009",
        password:"dingo",
      },    
      idError:"*Id Error",
      passwordError:"*Password Error"
    }
  },
  name: 'Signin',
  methods:{
    // login(e){
    //   this.$router.push("/dashboard")
    // },    

    checkCredentials(e) {
      e.preventDefault()
      console.log("emitting message")
      this.$emit("changeState", {
        state: "login",
        student_id: this.login.studentId,
        password: this.login.password,
      });
    }
    
  }
}
</script>

<style scoped>
.signin{
  width:100%;
  height: 100vh;
  display:flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: #0B8261;
  font-family:Oswald;
}

/* header{
  display:flex;
  justify-content: space-between;
  align-items: center;
  padding:1rem;
  height: 5%;
} */

header h1{
  font-size:3rem;
}

.hero{
  display: flex;
  justify-content: center;
  align-items: center;
  height:70vh;
  position:relative
}

#deco_3{
  position:absolute;
  bottom:-8rem;
  width:150%;
}

#deco_1{
  position:absolute;
  right:0;
  width: 80%;
  right: -15rem;
  top:-30rem;
}

#deco_2{
  position:absolute;
  left:-7rem;
  top:20rem;
}

.hero_img{
  width:30rem;
  height:30rem;
  position:relative;
  z-index: 10;
}

.hero_img img{
  width: 100%;
}

.hero_container{
  width: 60%;
  height:95%;
  background-color:white;
}

.logo_container img{
  width: 10rem;
  margin-top:3.5rem;
  margin-left:0rem;
}

.login_container{
  width: 40%;
  height:95vh;
  background-color: #0B8261;
  color:white;
  position:relative;
  z-index: 10;
}

.login_container h2{
  margin-top:5rem;
}

.login_container h3{
  font-family: Lato;
  font-size: 1.5rem;
  margin-top:-1rem;
}

form{
  border-radius: 10px;
  width: 27rem;
  height: 23rem;
  background-color:white;
  margin:auto;
  color:black;
  display:flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0px 3px 20px 0px rgba(0,0,0,0.3);
  font-family: Lato;
}

form p{
  color:red;
}

.id_error{
  margin-left:0.5rem;
}

.input_holder{
  position:relative;
  margin-top:-2.5rem;
}

.input_holder .icon_container{
    position:absolute;
    width: 1.5rem;
    height:1rem;
    top:0.5rem;
    left:1rem;
}

input{
  width: 18rem !important;
  border: 1px solid #0B8261 !important;
  border-radius: 40px !important;
  height:2.3rem !important;
  box-shadow: 0px 3px 20px 0px #0b826032 !important;
  padding-left: 3rem !important;
}

form button{
  width: 8rem;
  height: 2.5rem;
  border-radius: 20px;
  margin-top:-3rem;
  border:none;
  color:white;
  background: rgb(144,213,172);
  background: linear-gradient(90deg, rgba(144,213,172,1) 0%, rgba(11,130,97,1) 100%);
  box-shadow: 0px 3px 10px 0px #0b82605c !important;
  cursor: pointer;
  transition-duration: 0.3s;
}

form button:hover{
  transform: translateY(-2px);
}

form h4{
  margin:0;
  font-size:2rem;
}

.social_container{
  display:flex;
  justify-content: space-between;
  width: 7rem;
  margin-right:2rem;
}

.login_container a{
  color:#9A9A9A
}

footer{
  display:flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 5vh;
  background-color: #0B8261;
  padding:1rem;
  color:white;
  position:relative;
  z-index: 10;
  font-family:Lato;
  /* margin-top: -1rem; */
}

.social_container img{
  width:60%;
}

footer h5{

  font-size:1rem;
}


</style>
