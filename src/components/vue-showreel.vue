<template>
  <div class="showreel">
    <Block-header>SHOWREEL</Block-header>
    <div class="video_container">
      <video @click="PlayVideo" ref="video" src="https://jetsetholding.world/wp-content/uploads/2020/07/video.mp4" width="100%"></video>
      <div v-if="!isPlaying" @click="PlayVideo" class="video_play">
      </div>
    </div>
    <div class="facts">
      <div class="glide__track" data-glide-el="track">
        <div class="glide__slides">
          <div class="glide__slide">
            <Vue-counter val="22" :plus="''" :descr="'ГОДА ОПЫТА'"></Vue-counter>
            <Vue-counter val="50" :plus="'+'" :descr="'ГЛОБАЛЬНЫХ ПРОЕКТОВ'"></Vue-counter>
            <Vue-counter val="100" :plus="'+'" :descr="'ПРИЛОЖЕНИЙ И ВЕБ-ПРОЕКТОВ'"></Vue-counter>
            <Vue-counter val="20" :plus="'+'" :descr="'ГЛОБАЛЬНЫХ ПАРТНЕРОВ'"></Vue-counter>
          </div>
          <div class="glide__slide factoidMORE">
            <Vue-counter val="1000" :plus="''" :descr="'КРУПНЫХ СОБЫТИЙ'"></Vue-counter>
            <Vue-counter val="90000" :plus="''" :descr="'ЧАСОВ ВИДЕО, ДИЗАЙН ПРОЕКТОВ И ПРОМО-КОНСТРУКЦИЙ'"><span>БОЛЕЕ </span></Vue-counter>
          </div>
        </div>
      </div>
      <div class="glide__arrows" data-glide-el="controls">
        <button class="glide__arrow glide__arrow--left" data-glide-dir="<"></button>
        <button class="glide__arrow glide__arrow--right" data-glide-dir=">"></button>
      </div>
    </div>
  </div>
</template>

<script>
import BlockHeader from './block-header'
import Glide from '@glidejs/glide'
import counter from "@/components/counter";

export default {
  components: {
    "Block-header": BlockHeader,
    "Vue-counter": counter,
  },
  data(){
    return{
      isPlaying: false,
      Glide: null,
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
  },
  mounted() {
    this.Glide = new Glide('.facts',{
      startAt: 0,
      perView: 1,
      focusAt: 'center'
    });
    this.Glide.mount();
  }
}

</script>

<style lang="scss">

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
      top: 50%;
    }
    &--right{
      right: 5%;
      top: 50%;
      transform: rotate(180deg);
    }
  }
}
.glide__slide{
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  padding: 0 12.6vw;
}
.facts{
  position: relative;
  margin-bottom: 150px;
}
.factoidMORE{
  grid-auto-columns: 1fr 2fr;
}
video{
  cursor: pointer;
}
.video_container{
  position: relative;
  padding: 0 12.6%;
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
      background: url("~@/assets/img/play.svg") no-repeat center;
      background-size: 100%;
      cursor: pointer;
    }
  }
}
</style>