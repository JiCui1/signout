<template>
    <li @click="toggleAdd({name,itemId,itemCategory})" :class="{nostock:amount==0}">
        <h3>{{name}} </h3>
        <h4>{{amount}} left</h4>
        <h5 v-if="amount!=0||added=='Added'"><i v-if="added == 'Added'" class="material-icons">check_circle</i>{{added}}</h5>
    </li>
</template>

<script>

export default {
    name:"Item",
    props:{
        item:Object
    },
    data(){
        return{
            name:this.item.asset_description,
            itemId: Math.random(),
            itemCategory: this.item.categories_name,
            added: "",
            amount: this.item.assets_count_available
        }
    },
    mounted(){
        // console.log(this.$store.cart.items)
        for(let i=0;i<this.$store.cart.items.length;i++){
            console.log("cart"+this.$store.cart.items[i].itemId, "item"+this.itemId)
            if(this.$store.cart.items[i].itemId==this.itemId){
                this.added = "Added",
                this.amount -= 1
            }
        }
    },
    methods:{
        toggleAdd(item){
            if(this.added==""){
                if(this.amount != 0){
                    this.$store.cart.add(item)
                    this.added = "Added"
                    this.amount -= 1
                }
            }else{
                this.added =""
                this.amount += 1
                this.$store.cart.remove(item)
            }
        }
    }
}
</script>

<style scoped>
info{
    width: 30rem;
}

.nostock{
    border:1px solid grey;
    color:grey;
    cursor: default;
}

i{
    font-size:0.9rem;
    color:#0B8261
}

li h3,li h4, li h5{
    font-size:0.8rem;
}

li h3{
    margin-top:0rem;
}

li h4{
    margin-top:-0.5rem;
}

li{
    border: 1px solid #0B8261;
    border-radius: 5px;
    padding:0.3rem;
    width:90%;
    margin-bottom: 1rem;
    position:relative;
    cursor: pointer;
}
 li h5{
    position:absolute;
    right: 5px;
    bottom: -8px;
    color:#0B8261
}


li h4{
    position:absolute;
    left: 5px;
    bottom: -10px;
    font-size:0.8rem;
} 


</style>