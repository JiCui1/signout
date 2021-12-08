<template>
    <div>
        <tr>
            <td class="items"><h4>{{item.name}}</h4><h5>{{item.itemCategory}}</h5></td>
            <td class="signout">Nov 12, 2021</td>
            <td class="return">Nov 15, 2021</td>
            <td class="remove" @click = "removeItem">Remove</td>
        </tr>
        <div class="divider"></div>
    </div>
</template>

<script>
export default {
    name:"CartItem",
    props:["item"],
    methods:{
      removeItem(){
        this.$store.cart.remove(this.item)
      }
    }
}
</script>

<style scoped>
tr{
  width: 52rem;
  display:flex;
  margin-bottom:1rem;
  padding: 1rem;
  font-size: 1.3rem;
  border:none;
  color: #3E2B2F;
}

.signout, .return{
  width:15rem;
}

.divider{
    width:95%;
    margin:auto;
    margin-top:-1.5rem;
}

.remove{
    color:rgb(174, 174, 174);
    cursor: pointer;
}

td h4{
  margin-top:0.3rem;
  font-size:1.3rem;
}

td h5{
  font-size: 1rem;
  color:grey;
  margin-top:-0.7rem;
}

</style>