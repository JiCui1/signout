<template>
  <div id="app">
    <div id="nav" v-if="$route.path!='/'" >
      <!-- <router-link to="/">Signin</router-link> | -->
      <router-link to="/dashboard" class="link_dash" :borrower="borrower" ><i class="material-icons">dashboard</i><h6>Dashboard</h6></router-link>
      <router-link to="/cart" class="link_cart"><i class="material-icons">shopping_cart</i><h6>Cart</h6></router-link>
      <router-link to="/profile" class="link_profile"><i class="material-icons">person</i><h6>Profile</h6></router-link>
    </div>
    <router-view @changeState="setState"/>
  </div>
</template>

<script>
import M from 'materialize-css'

export default {
    data() {
      return {
        student_id: "",
        password: "",
        categories: {},
        cart: [],
        cartItems: 0,
        borrower: {
          firstName: "",
          lastName: "",
          borrower_id: "",
          dc_email: "",
        },
      };
    },
    methods:{
      setState(e){
        console.log("checking state")
        if(e.state == 'login'){
          console.log(e)
          this.getLogin(e.student_id, e.password);
        }
      },
      getAssets(borrower_id) {
        //alert(borrower_id);
        //gubalaraymond
        const options = {
          url: "https://dca.durhamcollege.ca/~gubalaraymond/signout/services/get_assets.php",
          method: "POST",
          data: {
            student_id: borrower_id,
          },
        };

        this.$axios(options)
          .then((res) => {
            switch (res.data.error.id) {
              case 0:
                this.categories = res.data.categories;
                console.log(this.categories);
                break;
              /* add other responses here */
              default:
                alert("Something went wrong please try again.");
                break;
            }
          })
          .catch((err) => {
            console.error("Get Assets Failed." + err);
          });
      },
      // list functions called by controller
      getLogin(student_id, password) {
        //alert(student_id + password);
        console.log("login start")
        const options = {
          url: "https://dca.durhamcollege.ca/~gubalaraymond/signout/services/login.php",
          method: "POST",
          data: {
            student_id: student_id,
            password: password,
          },
        };

        console.log(options.data)
        this.$axios(options)
          .then((res) => {
            //console.log(res.data.borrower.borrower_id);
            //this.borrowers = res.data;

            console.log(res.data.error)
            switch (res.data.error.id) {
              case 0:
                console.log("login good")
                this.borrower.firstName = res.data.borrower.first_name;
                this.borrower.lastName = res.data.borrower.last_name;
                this.borrower.borrower_id = res.data.borrower.borrower_id;
                this.borrower.dc_email = res.data.borrower.dc_email;
                //alert("route");
                console.log(this.borrower);
                this.getAssets(student_id);
                this.$router.push({name:"Dashboard"});
                break;
              /* add other responses here */
              case 1:

                console.log("No login info")
                alert("No Student ID or Password were entered.");
                // document.getElementById("#studentID").focus();
                break;
              default:
                console.log("wrong info")
                alert("Something went wrong please try again.");
                // document.getElementById("#studentID").focus();
                break;
            }
          })
          .catch((err) => {
            console.error("Login failed." + err);
          });

        //this.$router.push("Main");
      },
    },
    mounted () {
        M.AutoInit()
    }
}
</script>

<style>
/* font Oswald and Lato  */
@import url('https://fonts.googleapis.com/css2?family=Lato&family=Oswald:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;700&display=swap');



*{
  margin:0;
  padding:0;
}



a{
  text-decoration: none;
}

li{
  list-style: none;
}

body{
  overflow:hidden;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  background-color: #0B8261;
  position:fixed;
  left:0;
  height: 100vh;
  width: 7rem;
  display:flex;
  flex-direction:column;
  padding:1rem;
}

#nav a {
  font-weight: bold;
  color: #6BB09B;
}

.link_cart, .link_profile{
  margin-top:2rem;
}

.link_dash{
  margin-top:5.3rem;
}

#nav a.router-link-exact-active {
  color: #fff;
}

#nav h6{
  font-size:1rem;
  margin-top:0;
}

#nav i{
  font-size: 3rem;
}


</style>
