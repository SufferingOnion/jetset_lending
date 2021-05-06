<template>
  <div class="communication">
    <div ref="carousel" class="carousel" :style="{transform: 'rotateY('+this.currdeg+'deg)'}">
<!--         :style="{transform: 'rotateY('+this.currdeg+'deg)'}">-->
          <div class="slide__item a">
            <img class="item_img" src="../assets/img/communication1.png" alt="">
            <div class="item_header">
              <h2 class="header_text">
                ДИДЖИТАЛ<br>
                ПРОДАКШН
              </h2>
              <p class="descr_text blue_text">
                Относимся к созданию сайтов
                и приложений как к искусству
              </p>
            </div>
          </div>
          <div class="slide__item b">
            <img class="item_img" src="../assets/img/communication2.png" alt="">
            <div class="item_header">
              <h2 class="header_text">
                ДИЗАЙН СТУДИЯ
              </h2>
              <p class="descr_text blue_text">
                Хороший фирменый стиль могут создать многие.
                Уникальный - можем создать мы
              </p>
            </div>
          </div>
          <div class="slide__item c">
            <img class="item_img" src="../assets/img/communication3.png" alt="">
            <div class="item_header">
              <h2 class="header_text">
                SMM & CRM
              </h2>
              <p class="descr_text blue_text">
                Найдём общий язык с вашими клиентами за вас
              </p>
            </div>
          </div>
          <div class="slide__item d">
            <img class="item_img" src="../assets/img/communication4.png" alt="">
            <div class="item_header">
              <h2 class="header_text special360header">
                ПРОИЗВОДСТВО
              </h2>
              <p class="descr_text blue_text">
                Воплощаем свои и ваши идеи в реальность
              </p>
            </div>
          </div>
          <div class="slide__item e">
            <img class="item_img" src="../assets/img/communication5.png" alt="">
            <div class="item_header">
              <h2 class="header_text">
                СТРАТЕГИИ
              </h2>
              <p class="descr_text blue_text">
                Разрабатываем линии продвижения, <br>
                с которыми можно захватить мир
              </p>
            </div>
          </div>
          <div class="slide__item f">
            <img class="item_img" src="../assets/img/communication6.png" alt="">
            <div class="item_header">
              <h2 class="header_text">
                ИВЕНТ МАРКЕТИНГ
              </h2>
              <p class="descr_text blue_text">
                Создаём события, которые позже становятся культовыми
              </p>
            </div>
          </div>
        </div>
<!--    <div class="shadow"></div>-->
    <div class="carousel__arrows">
      <button class="carousel__arrow carousel__arrow--left" @click="currdeg+=60"></button>
      <button class="carousel__arrow carousel__arrow--right" @click="currdeg+=-60"></button>
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
      console.log(this.pointerEndX)
      if(this.pointerEndX-this.pointerStartX>this.pointerDist){
        this.currdeg+=60;
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
    this.$refs.carousel.addEventListener('mousedown', (event) => {
      this.pointerStartX = event.x;
      // this.isDragging = true;
    },{ passive: true });
    // this.$refs.carousel.addEventListener('pointermove', this.Rotate);
    this.$refs.carousel.addEventListener('mouseup', (event) => {
      this.pointerEndX = event.x;
      // this.isDragging = false;
      this.Rotate()
    },{ passive: true });
    // this.$refs.carousel.addEventListener('pointerleave', () => {
    //   this.isDragging = false;
    // });
    this.$refs.carousel.addEventListener('touchstart', (event) => {
      console.log(event)
      this.pointerStartX = event.touches[0].clientX;
    },{ passive: true });
    this.$refs.carousel.addEventListener('touchmove', (event) => {
      this.pointerEndX = event.touches[0].clientX;
    },{ passive: true });
    this.$refs.carousel.addEventListener('touchend', (event) => {
      console.log(event)
      this.Rotate()
    },{ passive: true });
  }
}

</script>

<style lang="scss">
.carousel__arrows{
  width: 100%;
  position: absolute;
  left: 0;
  top: calc(50%);
  .carousel__arrow{
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
      left: 3%;
      top: 17%;
    }
    &--right{
      right: 3%;
      top: 17%;
      transform: rotate(180deg);
    }
  }
}
.communication{
  margin: 6vw 0 7vw;
  box-sizing: border-box;
  width: 100%;
  height: 36vw;
  position: relative;
  perspective: 200vw;
  //.shadow{
  //  position: absolute;
  //  z-index: 10;
  //  top: 0;
  //  left: 0;
  //  width: inherit;
  //  height: inherit;
  //  pointer-events: none;
  //  background: linear-gradient(to right, rgba(0,0,0,.0) 13%, rgba(255,255,255,.6) 22%, rgba(0,0,0,.0) 26%, rgba(0,0,0,.0) 80%, rgba(255,255,255,.8) 85%, rgba(0,0,0,.0) 100%);
  //}
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
  background: #000000;
  width: 49vw;
  height: 36vw;
  transform: scale(0.8);
  .item_img{
    width: 100%;
    user-select: none;
  }
  .item_header{
    position: absolute;
    width: inherit;
    height: inherit;
    top: 0;
    left: 0;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    padding: 0 4vw;
    .header_text{
      font-weight: 500;
      font-size: 40px;
      line-height: 52px;
      text-align: center;
      letter-spacing: 0.1em;
      color: #FFFFFF;
      user-select: none;
      margin-bottom: 15px;
    }
    .descr_text{
      font-size: 18px;
      line-height: 150%;
      color: #FFFFFF;
      text-align: center;
      user-select: none;
      margin: 0;
    }
  }
}

.a {
  transform: rotateY(0deg) translateZ(36vw) scale(0.8);
}
.b {
  transform: rotateY(60deg) translateZ(36vw) scale(0.8);
}
.c {
  transform: rotateY(120deg) translateZ(36vw) scale(0.8);
}
.d {
  transform: rotateY(180deg) translateZ(36vw) scale(0.8);
}
.e {
  transform: rotateY(240deg) translateZ(36vw) scale(0.8);
}
.f {
  transform: rotateY(300deg) translateZ(36vw) scale(0.8);
}

@media (max-width: 1440px) {
  .slide__item{
    .item_header {
      padding: 0 2.5vw;
      .header_text {
        font-size: 2.5vw;
        line-height: 130%;
      }
      .descr_text{
        font-size: 1.125vw;
        margin: 0;
      }
    }
  }
}
@media (max-width: 1200px) {
  .slide__item{
    .item_header {
      padding: 0 4vw;
      .header_text {
        font-size: 30px;
      }
      .descr_text{
        font-size: 22px;

      }
    }
  }
  .carousel__arrows{
    top: calc(50% - 50px);
    .carousel__arrow{
      width: 25px;
      height: 25px;
      padding: 50px;
      background-size: 25%;
      &--left{
        left: calc(2% - 50px);
        top: 17%;
      }
      &--right{
        right:  calc(2% - 50px);
        top: 17%;
        transform: rotate(180deg);
      }
    }
  }
  .a {
    transform: rotateY(0deg) translateZ(40vw) scale(0.9);
  }
  .b {
    transform: rotateY(60deg) translateZ(40vw) scale(0.9);
  }
  .c {
    transform: rotateY(120deg) translateZ(40vw) scale(0.9);
  }
  .d {
    transform: rotateY(180deg) translateZ(40vw) scale(0.9);
  }
  .e {
    transform: rotateY(240deg) translateZ(40vw) scale(0.9);
  }
  .f {
    transform: rotateY(300deg) translateZ(40vw) scale(0.9);
  }
}
@media (max-width: 1000px) {
  .carousel__arrows{
    display: none;
  }
}

@media (max-width: 1000px) {
  .communication{
    height: 100vw;
  }
  .carousel {
    height: 100vw;
  }
  .slide__item{
    width: 64.3vw;
    height: 100vw;
    overflow: hidden;

    .item_img{
      width: auto;
      height: 100%;
      position: relative;
      right: 67%;
    }
    .item_header {
      padding: 0 5.875%;
    }
  }
  .a {
    transform: rotateY(0deg) translateZ(42vw) scale(0.7);
  }
  .b {
    transform: rotateY(60deg) translateZ(42vw) scale(0.7);
  }
  .c {
    transform: rotateY(120deg) translateZ(42vw) scale(0.7);
  }
  .d {
    transform: rotateY(180deg) translateZ(42vw) scale(0.7);
  }
  .e {
    transform: rotateY(240deg) translateZ(42vw) scale(0.7);
  }
  .f {
    transform: rotateY(300deg) translateZ(42vw) scale(0.7);
  }
}
@media (max-width: 760px) {
  .slide__item{
    .item_header {
      .header_text {
        font-size: 4vw;
      }
      .descr_text{
        font-size: 2.38vw;
      }
    }
  }
}
@media (max-width: 425px) {
  .slide__item{
    .item_header {
      padding: 0 4.06%;
      .header_text {
        font-size: 16px;
      }
      .descr_text{
        font-size: 9px;
      }
      .special360header{
        font-size: 12px;
      }
    }
  }
}
</style>