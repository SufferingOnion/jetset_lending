<template>
  <div class="customers-wrapper">
    <Block-header>КЛЮЧЕВЫЕ<br>КЛИЕНТЫ</Block-header>
    <div v-if="this.device==='desktop'" class="customers">
      <div v-for="(i, index) in customer" :key="index" class="icon_container">
        <img class="icon" loading="lazy" :src="require(`../assets/img/customers/${i}.png`)">
        <img class="icon-hover" loading="lazy" :src="require(`../assets/img/customers/${i}-hover.png`)" >
      </div>
    </div>
    <div v-show="this.device==='mobile'" class="customers_slider ">
      <div class="glide__track" data-glide-el="track">
        <div class="glide__slides">
          <div class="glide__slide">
            <div v-for="(i, index) in customers_mobile_first" :key="index" class="icon_container">
              <img class="icon" loading="lazy" :src="require(`../assets/img/customers/${i}.png`)">
              <img class="icon-hover" loading="lazy" :src="require(`../assets/img/customers/${i}-hover.png`)" >
            </div>
          </div>
          <div class="glide__slide">
            <div v-for="(i, index) in customers_mobile_second" :key="index" class="icon_container">
              <img class="icon" loading="lazy" :src="require(`../assets/img/customers/${i}.png`)">
              <img class="icon-hover" loading="lazy" :src="require(`../assets/img/customers/${i}-hover.png`)" >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlockHeader from "@/components/block-header";
import Glide from '@glidejs/glide'

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
      customers_mobile_first:[
          'lujniki',
          'iqos',
          'pm',
          'psb',
          'moscow',
          'gas',
          'tess',
          'greenfield',
      ],
      customers_mobile_second:[
        'jardin',
        'esquire',
        'lukoil',
        'dog',
        'rosoez',
      ],
      Glide: null,
      device: ''
    }
  },
  methods: {
    initSlider: function (){
      console.log(window.innerWidth)
      if(window.innerWidth>1300 && this.device==='mobile'){
        this.device = 'desktop';
        this.Glide.destroy();
      }else if(window.innerWidth<1300 && this.device==='desktop'){
        this.device = 'mobile';
        this.Glide = new Glide('.customers_slider',{
          startAt: 0,
          perView: 1,
          focusAt: 'center'
        });
        this.Glide.mount()
      }
    }
  },
  mounted() {

    if(window.innerWidth<=1300){
      this.device = 'mobile';
      this.Glide = new Glide('.customers_slider',{
        startAt: 0,
        perView: 1,
        focusAt: 'center'
      });
      this.Glide.mount();
    } else {
      this.device = 'desktop';
    }

    window.addEventListener("resize", this.initSlider)
  }
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
    width: 12.25vw;
    height: 7.3125vw;
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
}
.customers_slider{
  position: relative;
  .glide__slide{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    .icon_container:last-child{
      grid-column: span 2;
      justify-self: start;
    }
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
      width: 8.16vw;
      height: 4.875vw;
    }
  }
}
</style>