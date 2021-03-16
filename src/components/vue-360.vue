<template>
  <div class="communication">
    <div ref="carousel" class="carousel" :style="{transform: 'rotateY('+this.currdeg+'deg)'}">
<!--         :style="{transform: 'rotateY('+this.currdeg+'deg)'}">-->
          <div class="slide__item a">
            <img src="../assets/img/communicatio1.png" alt="">
          </div>
          <div class="slide__item b">
            <img src="../assets/img/communicatio2.png" alt="">
          </div>
          <div class="slide__item c">
            <img src="../assets/img/communicatio3.png" alt="">
          </div>
          <div class="slide__item d">
            <img src="../assets/img/communicatio1.png" alt="">
          </div>
          <div class="slide__item e">
            <img src="../assets/img/communicatio1.png" alt="">
          </div>
          <div class="slide__item f">
            <img src="../assets/img/communicatio1.png" alt="">
          </div>
        </div>
  </div>
</template>

<script>

export default {
  components: {
  },
  data(){
    return{
      currdeg: 0,
      pointerStartX: undefined,
      pointerEndX: undefined,
      pointerDist: 30,
      isDragging: false,
    }
  },
  methods: {
    Rotate(){

      if(this.pointerEndX-this.pointerStartX>this.pointerDist){
        this.currdeg+=30;
      }
      if(this.pointerEndX-this.pointerStartX<-this.pointerDist){
        this.currdeg+=-60;
      }
      // if(this.isDragging){
      //   console.log(event.offsetX,'\n', this.pointerStartX)
      //   if(event.offsetX>this.pointerStartX){
      //     this.currdeg+=1;
      //   }
      //   if(event.offsetX<this.pointerStartX){
      //     this.currdeg+=-1;
      //   }
      //   this.$refs.carousel.style.transform = 'rotateY('+this.currdeg+'deg)';
      // }
    },
    // Throttle(f, t){
    //   return function (args) {
    //     let previousCall = this.lastCall;
    //     this.lastCall = Date.now();
    //     if (previousCall && ((this.lastCall - previousCall) <= t)) {
    //       clearTimeout(this.lastCallTimer);
    //     }
    //     this.lastCallTimer = setTimeout(() => f(args), t);
    //   }
    // }
  },
  mounted() {
    this.$refs.carousel.addEventListener('pointerdown', (event) => {
      event.preventDefault();
      this.pointerStartX = event.x;
      // this.isDragging = true;
    });
    // this.$refs.carousel.addEventListener('pointermove', this.Rotate);
    this.$refs.carousel.addEventListener('pointerup', (event) => {
      this.pointerEndX = event.x;
      // this.isDragging = false;
      this.Rotate()
    });
    // this.$refs.carousel.addEventListener('pointerleave', () => {
    //   this.isDragging = false;
    // });
  }
}

</script>

<style lang="scss">

.communication{
  margin: 96px 0;
  box-sizing: border-box;
  width: 100%;
  height: 36vw;
  position: relative;
  perspective: 200vw;
}
.carousel {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  height: 36vw;
  width: inherit;
  position: absolute;
  transform-style: preserve-3d;
  transition: transform 2s;
}

.slide__item {
  display: block;
  position: absolute;
  background: #000;
  width: 49vw;
  height: 36vw;

  transform: scale(0.8);
  img{
    width: 100%;
    user-select: none;

  }
}

.a {
  transform: rotateY(0deg) translateZ(36vw) scale(0.8);
  background: #ed1c24;
}
.b {
  transform: rotateY(60deg) translateZ(36vw) scale(0.8);
  background: #0072bc;
}
.c {
  transform: rotateY(120deg) translateZ(36vw) scale(0.8);
  background: #39b54a;
}
.d {
  transform: rotateY(180deg) translateZ(36vw) scale(0.8);
  background: #f26522;
}
.e {
  transform: rotateY(240deg) translateZ(36vw) scale(0.8);
  background: #630460;
}
.f {
  transform: rotateY(300deg) translateZ(36vw) scale(0.8);
  background: #8c6239;
}

</style>