<template>
  <div class="dashboard" @removeItem = "removeFromCart($event)">

    <header>
      <div class="logo"><img src="@/assets/dc-logos-2020-full.svg"></div>
      <div class="greeting_cart row">
        <div class="greeting col s6">
          <h1>Hello, {{this.$parent.borrower.firstName}}</h1>
          <h2>Click on items to select</h2>
        </div>
        <div class="cart_info col s6">
          <h2 class="right-align">Items in cart: {{$store.cart.items.length}}</h2>
          <button @click="goToCart" class="right">View Cart</button>
        </div>
      </div>
    </header>
    <!-- {{this.$parent.categories}} -->
    <TabContainer class="tab_container" :allItems="this.$parent.categories"/>
  </div>
</template>

<script>
import TabContainer from '@/components/TabContainer'

export default{
  name:"Dashboard",
  components:{
    TabContainer
  },
  methods:{
    goToCart(){
      this.$router.push({name:"Cart"})
    }
  },
  data(){
    return{
      allAssets: this.$parent.categories
    }
  }
  // data(){
  //   return{
  //     borrower: this.borrowerDash
  //   }
  // },
  // props:{
  //   borrowerDash:{
  //     type:Object,
  //     default:
  //       {
  //         firstName: "",
  //         lastName: "",
  //         borrower_id: "",
  //         dc_email: "",
  //       },
  //   }, 
  //   allItemsDash:{
  //     type:Array,
  //     default:[]
  //   }
  // }
}
</script>


<style scoped>

.dashboard{
  color:#3E2B2F;
}

h1{
  font-family: Oswald;
  color:#3E2B2F;
  margin-top:1rem;;
}

.tab_container{
  margin-top:-2rem;
}

h2{
  font-size:1.3rem;
  margin-top:-1rem;
}

.logo{
  width: 10rem;
}

.cart_info h2{
  font-size:1.5rem;
  margin-top:1rem;
  margin-bottom: 0.5rem;
}

.cart_info button{
  width:7rem;
  border-radius: 20px;
  height:2.3rem;
  border:none;
  color:white;
  background: rgb(144,213,172);
  background: linear-gradient(90deg, rgba(144,213,172,1) 0%, rgba(11,130,97,1) 100%);
  box-shadow: 0px 3px 7px 0px #0b82603e !important;
  cursor: pointer;
  transition-duration: 0.3s;
}

.cart_info button:hover{
  transform: translateY(-2px);
}

.dashboard{
    width: 100%;
    height: 100vh;
    background-color: #F3F4F6;
    text-align: left;
    padding-left: 9rem;
    padding-top:1rem;
}

.greeting_cart{
    width:70rem;
    display:flex;
    justify-content: space-between;
    align-items: center;
    margin-left: -1rem !important
}


</style>