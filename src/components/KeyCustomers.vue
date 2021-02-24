<template>
  <div class="customers-wrapper">
    <Block-header>КЛЮЧЕВЫЕ<br>КЛИЕНТЫ</Block-header>
    <div class="customers">
      <div v-for="(i, index) in customer" :key="index" class="icon_container">
        <img class="icon" :src="require(`../assets/img/customers/${i}.png`)">
        <img class="icon-hover" :src="require(`../assets/img/customers/${i}-hover.png`)" >
      </div>
    </div>
  </div>
</template>

<script>
import BlockHeader from "@/components/block-header";

export default {
  components: {
    "Block-header": BlockHeader,
  },
  data(){
    return{
      customer:[
          'lujniki',
          'iqos',
          'pm',
          'psb',
          'moscow',
          'gas',
          'tess',
          'greenfield',
          'jardin',
          'esquire',
          'lukoil',
          'dog',
          'rosoez',
      ]
    }
  }
}
</script>

<style lang="scss">
.customers-wrapper{
  padding: 0 12.6%;
}
.customers{
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-flow: row;
  grid-template-rows: repeat(3, 1fr);
  .icon_container:nth-child(13){
    grid-column: span 2;
    justify-self: start;
  }
  .icon_container:nth-child(11){
    grid-column: span 2;
    justify-self: end;

  }

  .icon_container{
    position: relative;
    display: flex;
    margin: 1.55vw;
    width: 196px;
    height: 117px;
    justify-content: center;
    align-items: center;
    .icon{
      position: absolute;
    }
    .icon-hover{
      position: absolute;
      z-index: 2;
      opacity: 0;
      transition: opacity 0.2s ease;
    }
    &:hover{
      .icon-hover{
        opacity: 1;
      }
    }
  }
}
</style>