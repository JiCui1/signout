<template>
    <div>
        <table >
            <tr class="head">
                <th class="items">Items</th>
                <th class="signout">Signout Date</th>
                <th class="return">Return Date</th>
                <th class="remove"></th>
            </tr>         
            <CartItem v-for="item in itemsInCart" :item="item" :key="item.itemId"/>

        </table>
    </div>
</template>

<script>
import CartItem from "@/components/CartItem"

export default {

  name: 'CartTable',
  components:{
    CartItem
  },
  props:["itemsInCart"]

 


}
</script>

<style>

.head{
  width: 100%;
  display:flex;
  border:none;
  padding: 1rem;
  font-size: 1.3rem;
  font-size:1.5rem;
  margin-bottom:-1.7rem;
  color:#3E2B2F;
  font-family: Oswald;
}


#checkout{
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
  margin-bottom:1rem;
}

#checkout:hover{
  transform: translateY(-2px);
}

.head .signout{ 
  margin-left:-2.3rem;
}
.head .return{
  margin-left:-1.6rem;
}


.items{
  width:20rem;
}

.signout, .return{
  width:15rem;
}

table{
  width:52rem;
  height:37rem;
  background-color:white;
  border-radius: 10px;
  box-shadow: 0px 1px 3px 0px #00000029;
}

</style>