<template>
     <div class="tab" >
        <div class="topbar" @click = "toggleContent" :class="{topbar_open:showContent}">
            <h1>{{category}}</h1>
            <i v-if="!showContent" class="material-icons noselect">arrow_drop_down</i>
            <i v-else class="material-icons noselect">arrow_drop_up</i>
        </div>

        <ul class="tab_content" :class="{active:showContent,hide_scroll:itemsArray.length<4}">
            <h4 class="nothing" v-if="itemsArray.length<1">Currently all out of stock</h4>
            <Item v-for="singleItem in itemsArray" :item="singleItem" :key="singleItem.itemId"/>
        </ul>
        
    </div>
</template>

<script>
import Item from "@/components/Item"
export default {
    name:"Tab",
    data(){
        return{
            showContent:false
        }
    },
    props:{
        category: String,
        itemsArray: Array
    },
    methods:{
        toggleContent(){
            this.showContent  = !this.showContent
        }
    },
    components:{
        Item
    }
}
</script>

<style scoped>

.tab{
    width: 16rem;
    margin-bottom: 1.5rem;
}

i{
    font-size:2rem;
    color:#0B8261;
    margin-top:-0.2rem
}

.nothing{
    font-size:1rem;
}

.topbar{
    border-radius: 5px;
    display:flex;
    justify-content: space-between;
    background-color:white;
    padding:0.5rem;
    height: 3rem;
    align-items:center;
    width: 16rem;
    cursor: pointer;
    box-shadow: 0px 2px 1px 0px #00000012 !important;
}

.topbar_open{
    border-radius: 0;
    border-top-right-radius:5px;
    border-top-left-radius:5px;
    box-shadow: none;
}

.topbar h1{
    font-family: Oswald;
}

.topbar h1, .topbar h2{

    font-size:1.5rem;
    margin-top:1.5rem;
}


.tab_content{

    width: 16rem;
    height: 13rem;
    background-color:white;
    padding-top:1rem;
    overflow-y: scroll;
    overflow-x: hidden;
    padding:0.5rem;
    visibility: hidden;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    box-shadow: 0px 2px 1px 0px #00000029;
}

.hide_scroll{
    overflow-y:hidden;
}

.tab_content::-webkit-scrollbar
{
	width: 6px;
}



.tab_content::-webkit-scrollbar-track
{
	border-radius: 20px;
    border:1px solid #0B8261;
    /* height: 90%; */
}

.tab_content::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	background-color:#0B8261
}

.noselect {
    -webkit-user-select: none;
    user-select: none; 
}

/* .tab_content 



.tab_content li h4{
    text-align: right;
} */

.active{
    visibility: visible;
}



</style>