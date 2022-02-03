<template>
  <div class="cart_page" >
    <div class="confirm_modal" :class="{hide_confirm:!showModal}" @click="hideModal">
      <div class="confirm_card">
        <i class="material-icons">check_circle</i>
        <h3>Your items are ready for pick up</h3>
        <h3>Pick-up Room: J103</h3>
        <h3>Pick-up Date: Today</h3>
      </div>
    </div>
    <header>
      <div class="logo"><img src="@/assets/dc-logos-2020-full.svg"></div>
        <div class="info_button">
          <h1>Shopping Cart</h1>
          <button id="checkout" @click="addAssetsLoggedOut">Checkout</button>
        </div>
    </header>
    <section class="checkout_info">
      <CartTable :itemsInCart='$store.cart.items'/>
      <div class="pickup_info" :class="{empty_cart:$store.cart.items.length==0,not_empty:$store.cart.items.length!=0}">
        <h1>Equipment pickup room: <span class="room">J103</span> </h1>
        <div class="pickup_img">
          <img src="@/assets/pickup.svg">
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import  CartTable  from '@/components/CartTable'

export default{
  name:"Cart",
  components:{
    CartTable
  },
  data(){
    return{
      showModal:false
    }
  },
  methods:{
    hideModal(){
      this.showModal = false
    },
    showConfirm(){
      this.showModal = true
    },
    addAssetsLoggedOut() {
      // loop through assets
      let asset_list = "";
      this.$store.cart.items.forEach(function (item) {
        if (asset_list == "") {
          asset_list = item.name;
        } else {
          asset_list += "|" + item.name;
        }
      });
      alert(asset_list);
      const options = {
        url: "https://dca.durhamcollege.ca/~cuijiahua/signout/services/add_assets_logged_out.php",
        method: "POST",
        data: {
          student_id: this.$store.borrower.borrower_id,
          assets: asset_list,
        },
      };

      this.$axios(options)
        .then((res) => {
          switch (res.data.error.id) {
            case 0:
              this.$store.cart.items = [];
              this.showModal = true
              break;
            /* add other responses here */
            default:
              alert("Something went wrong with reserving your items.");
              break;
          }
        })
        .catch((err) => {
          console.error("Get Assets Failed." + err);
        });
    }
  }
}
</script>


<style scoped>
.logo{
  width: 10rem;
}

.confirm_modal{
  width:100%;
  height: 100vh;
  background-color:rgba(0, 0, 0, 0.208);
  position:fixed;
  left:0;
  top:0;
  z-index: 50;
  display:flex;
  align-items: center;
  justify-content: center;
}

.hide_confirm{
  display:none
}

.confirm_card{
  width:40rem;
  height: 25rem;
  background-color: white;
  border-radius: 10px;
  padding:3rem;
  text-align: center;
}

.confirm_card h3{
  font-size: 2rem;
}

.confirm_card i{
  font-size:4rem;
  color:#0B8261
}

.info_button{
  display:flex;
  justify-content: space-between;
  align-items: flex-end;
  width:52rem;
}

.cart_page{
  margin-left:7rem;
  height: 100vh;
  text-align: left;
  background-color: #F3F4F6;
  padding-left:2rem;
  padding-top:1rem;
  overflow-y:scroll;
  padding-bottom: 2rem;
  color:#3E2B2F;
}


.room{
  color:#0B8261
}

.checkout_info{
  margin-top:1rem;
  width: 100%;
  display:flex;
}

header h1{
  font-family:Oswald;
  margin-top:1rem;
}

.pickup_info{
  margin-left:1rem;
  width: 23rem;
  text-align: center;
  margin-top:-3rem;
}

.pickup_info h1{
  font-size:1.5rem;
}

.pickup_img{
  height:80%;
  width: 90%;
  margin-left: 1rem;
}

.pickup_img img{
  width: 100%;
}
</style>
