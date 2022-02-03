<template>
  <div class="tab_container row left-align">
      <!-- <Tab class="col s3" category="DSLRs" 
        :itemsArray="[
            {'name':'Canon Digital Rebel SL3 ', 'amount':30, 'id':1,'category':'DSLRs'},
            {'name':'Canon Digital Rebel T3 ', 'amount':1, 'id':2,'category':'DSLRs'},
            {'name':'Canon Digital Rebel T4i ', 'amount':0, 'id':3,'category':'DSLRs'},
            {'name':'Canon Digital Rebel XS ', 'amount':18, 'id':4,'category':'DSLRs'},
            {'name':'Canon Digital Rebel JW ', 'amount':6, 'id':5,'category':'DSLRs'},
            {'name':'Canon Digital Rebel XHJ ', 'amount':0, 'id':6,'category':'DSLRs'},
            {'name':'Canon Digital Rebel J28 ', 'amount':13, 'id':7,'category':'DSLRs'}
        ]"
      />
      <Tab class="col s3" category="Video Cameras"
        :itemsArray="[
            {'name':'Canon HD Touch Screen Camcorder ', 'amount':30, 'id':8,'category':'Video Cameras'},
        ]"
      />
      <Tab class="col s3" category="Microphones" 
        :itemsArray="[
            {'name':'Audio-Technica Lav Mic ', 'amount':30, 'id':9,'category':'Microphones'},
            {'name':'Azden Mini DV Directional Mic ', 'amount':10, 'id':10,'category':'Microphones'},
            {'name':'Boom Pole - Carbon Fibre ', 'amount':0, 'id':11,'category':'Microphones'},
            {'name':'Boom Pole - Rode ', 'amount':18, 'id':12,'category':'Microphones'}
        ]"
      />
      <Tab class="col s3" category="Rooms"
        :itemsArray="[
            {'name':'Audio-Technica Lav Mic ', 'amount':30, 'id':13,'category':'Microphones'},
            {'name':'Azden Mini DV Directional Mic ', 'amount':14, 'id':14,'category':'Microphones'},
        ]"
      />
      <Tab class="col s3" category="Camera Tripods"
        :itemsArray="[
            {'name':'Audio-Technica Lav Mic ', 'amount':30, 'id':15,'category':'Microphones'},
            {'name':'Boom Pole - Carbon Fibre ', 'amount':0, 'id':16,'category':'Microphones'},
            {'name':'Boom Pole - Rode ', 'amount':18, 'id':17,'category':'Microphones'}
        ]"
      />
      <Tab class="col s3" category="Video Tripods"
        :itemsArray="[
            {'name':'Audio-Technica Lav Mic ', 'amount':30, 'id':18,'category':'Microphones'},
            {'name':'Boom Pole - Rode ', 'amount':18, 'id':19,'category':'Microphones'}
        ]"
      />
      <Tab class="col s3" category="Accessories"
        :itemsArray="[
            {'name':'Audio-Technica Lav Mic ', 'amount':30, 'id':20,'category':'Microphones'},
            {'name':'Boom Pole - Rode ', 'amount':18, 'id':21,'category':'Microphones'}
        ]"
      />
      <Tab class="col s3" category="Lighting"
        :itemsArray="[
        ]"
      /> -->
      <Tab v-for="item in allItems" :key="item.itemId" :itemsArray="item.assets" :category="item.name" class="col s3" />
  </div>
</template>

<script>
import Tab from '@/components/Tab'
export default {
    name:"TabContainer",
    components:{
        Tab
    },
    // props:{
    //   allItemsTabCon:Array,
    //   default:[]
    // },
    props:["allItems"]
}
</script>

<style>

.tab_container{
    margin-left:-1rem !important;
    /* display:grid;
    grid-template-columns: auto auto auto auto; */
    width: 71rem;
    /* row-gap: 1.5rem; */
    overflow:hidden;
}

</style>