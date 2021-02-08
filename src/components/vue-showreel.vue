<template>
  <div>
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

          </div>
          <div class="glide__slide">1</div>
          <div class="glide__slide">2</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlockHeader from './block-header'
import Glide from '@glidejs/glide'

export default {
  components: {
    "Block-header": BlockHeader,
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
        this.isPlaying = !this.isPlaying;
      }

    }
  },
  mounted() {
    this.Glide = new Glide('.facts');
    this.Glide.mount();
  }
}

</script>

<style lang="scss">
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
    width: 100%;
    height: 100%;
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