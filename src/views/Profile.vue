<template>
  <div class="profile_page">
    <ul>
      <li>First Name: <h6 v-if="!edit">Jiahua</h6><input v-if="edit" type="text"></li>
      <li>Last Name: <h6 v-if="!edit">Cui</h6><input v-if="edit" type="text"></li>
      <li>DC Email: <h6 v-if="!edit">example@dcmail.ca</h6><input v-if="edit" type="text"></li>
      <li>Other Email: <h6 v-if="!edit">example@gmail.ca</h6><input v-if="edit" type="text"></li>
      <li>Phone: <h6 v-if="!edit">905-431-5698</h6><input v-if="edit" type="text"></li>
    </ul>
    <button v-if="!edit" @click="toggleEdit">Edit</button>
    <button v-if="edit" @click="toggleEdit">Cancel</button>
    <button v-if="edit" >Save</button>
  </div>
</template>

<script>
export default{
    data(){
      return{
        edit:false
      }
    },
    methods:{
      toggleEdit(){
        this.edit = !this.edit
      }
    }
}
</script>


<style scoped>

.profile_page{
  margin-left:7rem;
  height: 100vh;
  text-align: left;
  background-color: #F3F4F6;
  padding-left:2rem;
  padding-top:1rem;
}

li{
  margin-bottom: 1.5rem;
}

li h6{
  font-weight: 700;
  margin-top:-0.2rem;
  display: inline-block;
}

input{
  width: 20rem !important;
  height:1rem !important;
}

</style>
