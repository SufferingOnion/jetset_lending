<template>
  <div class="showreel">
    <div class="video_container">
      <video @click="PlayVideo" ref="video" poster="../assets/img/video_poster.png" src="https://jetsetholding.world/wp-content/uploads/2020/07/video.mp4" width="100%"></video>
      <div v-if="!isPlaying" @click="PlayVideo" class="video_play">
      </div>
      <div class="video_back"></div>
    </div>
    <div class="facts">
      <div class="glide__track" data-glide-el="track">
        <div class="glide__slides">
          <div class="glide__slide">
            <Vue-counter val="20" :plus="'+'">ЛЕТ ОПЫТА</Vue-counter>
            <Vue-counter class="big_fact" val="20000" :plus="'+'">ПРОЕКТОВ</Vue-counter>
            <Vue-counter val="200" :plus="'+'">приложений <br>и веб-проектов</Vue-counter>
            <Vue-counter val="20" :plus="'+'">глобальных <br> партнёров</Vue-counter>
          </div>
        </div>
      </div>
<!--      <div class="glide__arrows" data-glide-el="controls">-->
<!--        <button class="glide__arrow glide__arrow&#45;&#45;left" data-glide-dir="<"></button>-->
<!--        <button class="glide__arrow glide__arrow&#45;&#45;right" data-glide-dir=">"></button>-->
<!--      </div>-->
    </div>
  </div>
</template>

<script>
// import Glide from '@glidejs/glide'
// import Html from '@glidejs/glide/src/components/html';
import counter from "@/components/counter";

export default {
  components: {
    "Vue-counter": counter,
  },
  data(){
    return{
      isPlaying: false,
      // Glide: null,
      // device: ''
    }
  },
  methods: {
    PlayVideo: function (){
      if(this.isPlaying){
        this.$refs.video.pause();
        this.isPlaying = !this.isPlaying;
      } else {
        this.$refs.video.play();
        this.$refs.video.volume = 0.2;
        this.isPlaying = !this.isPlaying;
      }
    },
    // UpdateSlider: function (){
    //
    //   if(window.innerWidth>768 && this.device==='mobile'){
    //
    //     this.device = 'desktop';
    //
    //     this.Glide.update();
    //
    //   }else if(window.innerWidth<768 && this.device==='desktop'){
    //
    //     this.device = 'mobile';
    //
    //     this.Glide.update()
    //   }
    // },

    // Glide dinamic fix

    // HtmlFix: function (Glide, Components, Events) {
    //     const HtmlFix = Html(Glide, Components, Events);
    //     this.Glide.on('update', () => {
    //       HtmlFix.mount();
    //     });
    //   return HtmlFix;
    // }
  },
  mounted() {
    // if(window.innerWidth<=768){
    //   this.device = 'mobile';
    // } else {
    //   this.device = 'desktop';
    // }
    //
    //
    // this.Glide = new Glide('.facts',{
    //   startAt: 0,
    //   perView: 1,
    //   focusAt: 'center'
    // });
    // this.Glide.mount({Html: this.HtmlFix})
    //
    //
    // window.addEventListener("resize", this.UpdateSlider)
  }
}

</script>

<style lang="scss">

.showreel{
  margin: 8vw auto 4.68vw;
  max-width: 1920px;
  width: 100%;
}

.facts{
  position: relative;
  margin: 4.68vw 0 0;
  .glide__arrows{
    .glide__arrow{
      display: block;
      position: absolute;
      width: 50px;
      height: 50px;
      z-index: 1;
      background: url("~@/assets/icons/arrow.svg") center no-repeat;
      background-size: contain;
      border: 0;
      cursor: pointer;
      &--left{
        left: 5%;
        top: 17%;
      }
      &--right{
        right: 5%;
        top: 17%;
        transform: rotate(180deg);
      }
    }
  }
  .glide__slide{
    display: grid;
    grid-auto-flow: column;
    //grid-template-columns: 1fr 2fr 1fr 1fr;
    grid-template-columns: 23% 31% 23% 23%;
    padding: 0 12.6vw;
    .counter{

    }
    .big_fact{

    }
  }
}

video{
  cursor: pointer;
}
.video_container{
  position: relative;
  padding: 0 12.6%;
  .video_back {
    position: absolute;
    padding-bottom: 49%;
    width: 48vw;
    z-index: -1;
    min-width: 320px;
    max-width: 672px;

    background: url("~@/assets/img/video_back.png") top center no-repeat;
    background-size: 100%;
    //transform: skewY(-15deg) scaleY(0.75) scaleX(0.9);
    right: -4.68vw;
    top: 0%;
  }
  .video_play{
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% - 25.2%);
    height: 100%;
    margin: 0 12.6%;
    cursor: pointer;
    &:after{
      position: absolute;
      content: '';
      top: calc(50% - 56px);
      left: calc(50% - 56px);
      width: 112px;
      height: 112px;
      background: url("~@/assets/icons/play.svg") no-repeat center;
      background-size: 100%;
      cursor: pointer;
    }
  }
}


@media (max-width: 900px) {
  .showreel{
    margin: 8vw auto 4.68vw;
  }
  .video_container{
    padding: 0 5%;
    video{
      height: 120vw;
      object-fit: cover;
    }
    .video_back {

      right: 0;
      top: 1%;
    }
  }
  .facts{
    margin: 65px 0;
    .glide__arrows{
      display: none;
    }
    .glide__slide{
      padding: 0 5vw;
    }
  }
}
@media (max-width: 570px) {
  .facts{
    .glide__slide{
      display: grid;

      grid-template-columns: 1fr 1fr 1fr;
      grid-auto-rows: auto;
      row-gap: 38px;
      .counter{
        &:before{
          display: none;
        }
        //&:nth-child(1){
        //  grid-column: 1/3;
        //  grid-row: 1/2;
        //}
        //&:nth-child(2){
        //  grid-column: 3/5;
        //  grid-row: 1/2;
        //}
        //&:nth-child(3){
        //  grid-column: 1/3;
        //  grid-row: 2/3;
        //}
        //&:nth-child(4){
        //  grid-column: span 2;
        //  grid-row: 2/3;
        //}
      }
      .big_fact{
        display: none;
      }
    }
  }
}
@media (max-width: 530px) {
  .facts{
      margin: 33px 0 26px;
  }
  .video_container{
    .video_back {
      position: absolute;

      z-index: -1;
      padding-bottom: 105%;
      width: 100%;
      right: 0;
      top: unset;
      bottom: -60vw;
    }
  }
}

</style>