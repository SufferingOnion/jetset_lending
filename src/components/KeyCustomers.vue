<template>
  <div class="customers-wrapper">
    <Block-header>КЛЮЧЕВЫЕ<br>КЛИЕНТЫ</Block-header>
    <div class="customers">
      <div v-for="(i, index) in customer" :key="index" class="icon_container">
        <img class="icon" loading="lazy" :src="require(`../assets/img/customers/${i}.png`)">
        <img class="icon-hover" loading="lazy" :src="require(`../assets/img/customers/${i}-hover.png`)" >
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
      ],
    }
  },
  methods: {

  },

}
</script>

<style lang="scss">
.customers-wrapper{
  padding: 0 12.6%;
  margin: 96px 0;
  .icon_container{
    position: relative;
    display: flex;
    margin: 1.55vw;
    //width: 12.25vw;
    //min-width: 70px;
    //max-width: 190px;
    //height: 7.3125vw;
    width: auto;
    height: auto;
    justify-content: center;
    align-items: center;
    .icon{
      position: absolute;

    }
    .icon-hover{
      width: 100%;
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
.customers{
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-flow: row;
  grid-auto-rows: 12.25vw;
  .icon_container{
    justify-self: center;
  }
  .icon_container:nth-child(13){
    grid-column: 4/5;
    justify-self: center;
  }
  .icon_container:nth-child(11){
    grid-column: 2/3;
    justify-self: center;

  }
}


@media (max-width: 1440px) {
  .customers-wrapper{
    padding: 0 8.125%;
    .icon_container{
      margin: 2.55vw;
      width: 8.16vw;
      height: 4.875vw;
    }
  }
}
@media (max-width: 1300px) {
  .customers-wrapper{
    padding: 0 8.125%;
    .icon_container{
      margin: 2.55vw;
      width: 9vw;
      height: 4.875vw;
    }
  }
}
@media (max-width: 1200px) {
  .customers-wrapper{
    padding: 0 8.125%;
    .icon_container{
      margin: 2.55vw;
      width: 10vw;
      height: 4.875vw;
    }
  }
  .customers{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-flow: row;

    .icon_container:last-child{
      grid-column: span 4;
      justify-self: center;
    }
    .icon_container:nth-child(11){
      grid-column: span 1;
      justify-self: center;

    }
  }
}
@media (max-width: 1000px) {
  .customers-wrapper{
    padding: 0 8.125%;
    .icon_container{
      margin: 2.55vw;
      width: 14vw;
      height: 4.875vw;
    }
  }
  .customers{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-flow: row;
    grid-auto-rows: 18vw;

    .icon_container:last-child{
      grid-column: span 3;
      justify-self: center;
    }
    .icon_container:nth-child(11){
      grid-column: span 1;
      justify-self: center;

    }
  }
}
@media (max-width: 700px) {
  .customers-wrapper{
    padding: 0 20px;
    .icon_container{
      margin: 2.55vw;
      width: 18vw;
      height: 18vw;
    }
  }
  .customers{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-flow: row;
    grid-auto-rows: 24vw;

    .icon_container:last-child{
      grid-column: span 2;
      justify-self: center;
    }
    .icon_container:nth-child(11){
      grid-column: span 1;
      justify-self: center;

    }
  }
}
@media (max-width: 425px) {
  .customers-wrapper{
    padding: 0 20px;
    .icon_container{
      margin: 2.55vw;
      width: 22.5vw;
      height: 22.5vw;
    }
  }
  .customers{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-flow: row;
    grid-auto-rows: 30vw;

    .icon_container:last-child{
      grid-column: span 2;
      justify-self: center;
    }
    .icon_container:nth-child(11){
      grid-column: span 1;
      justify-self: center;

    }
  }
}
</style>