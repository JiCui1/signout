<template>
  <div class="profile_page">

    <div class="logo"><img src="@/assets/dc-logos-2020-full.svg"></div>
    <ul>
      <li>First Name: <h6 v-if="!edit">{{$store.borrower.firstName}}</h6><input v-if="edit" type="text" v-model="updateInfo.firstName"></li>
      <li>Last Name: <h6 v-if="!edit">{{$store.borrower.lastName}}</h6><input v-if="edit" type="text" v-model="updateInfo.lastName"></li>
      <li>Other Email: <h6 v-if="!edit">{{$store.borrower.other_email}}</h6><input v-if="edit" type="text" v-model="updateInfo.otherEmail"></li>
      <li v-if="edit">Old Password: <input type="password" v-model="updateInfo.oldPassword"></li>
      <li v-if="edit">New Password: <input type="password" v-model="updateInfo.newPassword"></li>
      <li v-if="edit">Confirm Password: <input type="password" v-model="updateInfo.confirm"></li>
      <li>DC Email: <h6>{{$store.borrower.dc_email}}</h6>
      <li>Program Name: <h6>{{$store.borrower.program_name}}</h6></li>
      <li>Program Year: <h6>{{$store.borrower.program_year}}</h6></li>
    </ul>
    <h4>All Borrowed Items</h4>
    <ul>
      <li v-for="item in assets" :key="item.serial_number">
        {{item.description}}
      </li>
    </ul>

    <button v-if="!edit" @click="toggleEdit">Edit</button>
    <button v-if="edit" @click="toggleEdit">Cancel</button>
    <button v-if="edit" @click="updateUser">Save</button>
  </div>
</template>

<script>
export default{
    data(){
      return{
        edit:false,
        assets:[],
        updateInfo:{
          studentID:this.$store.borrower.borrower_id,
          oldPassword:"",
          newPassword:"",
          confirm:"",
          firstName:this.$store.borrower.firstName,
          lastName:this.$store.borrower.lastName,
          otherEmail:this.$store.borrower.other_email
        }
      }
    },
    mounted(){
        const options = {
          url: "https://dca.durhamcollege.ca/~cuijiahua/signout/services/get_assets_logged_out.php",
          method: "POST",
          data: {
            student_id: this.$store.borrower.borrower_id,
          },
        };
        this.$axios(options)
          .then((res) => {
            console.log(res.data)
            this.assets = res.data.assets
          })
          .catch(err=>{console.log(err)})
    },
    methods:{
      toggleEdit(){
        this.edit = !this.edit
      },
      updateUser(){
        if(this.updateInfo.newPassword == this.updateInfo.oldPassword){
          alert("New password cannot be the same as old password")
        }else if(this.updateInfo.newPassword!=this.updateInfo.confirm){
          alert("New password does not match with confirm, please confirm again")
        }else{

          const options = {
            url: "https://dca.durhamcollege.ca/~cuijiahua/signout/services/update_borrower.php",
            method: "POST",
            data: {
              student_id: this.studentID,
              name_first:this.updateInfo.firstName,
              name_last:this.updateInfo.lastName,
              email_other:this.updateInfo.otherEmail,
              password_old: this.updateInfo.oldPassword,
              password_new: this.updateInfo.newPassword
            },
          }



          this.$axios(options)
          .then((res) => {
            console.log(res.data)
            switch (res.data.error.id) {
              case -10:
                alert("Update Failed, Old Password does not match")
                break;
              case 1:
                alert("Update Failed, No Student ID")
                break;
              case 0:
                alert("No Password to Update")
                break;
              case -12:
                alert("Need a new password.")
                break;
              default:
                alert("Update Success");
                break;
            }
          })
          .catch((err) => {
            console.error("Get Assets Failed." + err);
          });
          
        }
      }
    }
}
</script>


<style scoped>


.logo{
  width: 10rem;
}

.profile_page{
  margin-left:7rem;
  height: 100vh;
  text-align: left;
  background-color: #F3F4F6;
  padding-left:2rem;
  padding-top:1rem;
}

ul{
    padding-top:1.6rem;
}

li{
  margin-bottom: 1.5rem;
  color:#3E2B2F;
}

li h6{
  font-weight: 700;
  margin-top:-0.2rem;
  display: inline-block;
  color:rgba(11,130,97,1)
}

input{
  width: 20rem !important;
  height:1rem !important;
}

h4{
  font-weight: 900;
  font-size: 1.5rem;
  color:#3E2B2F;
  font-family: Oswald;
}

button{
  width:6rem;
  height:2.5rem;
  border-radius: 20px;
  border:2px solid rgba(11,130,97,1);
  background-color:white;
  cursor: pointer;
  margin-right: 2rem;
}

</style>
