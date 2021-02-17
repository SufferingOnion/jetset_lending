<template>
  <div class="communication">
    <div ref="carousel" class="carousel" :style="{transform: 'rotateY('+this.currdeg+'deg)'}">
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
    <button @click="Rotate">
      rotate
    </button>
  </div>
</template>

<script>

export default {
  components: {
  },
  data(){
    return{
      currdeg: 0,
    }
  },
  methods: {
    Rotate(){
      this.currdeg+=60;
    }
  },
  mounted() {

  }
}

</script>

<style lang="scss">

.communication{
  box-sizing: border-box;
  width: 100%;
  height: 36vw;
  position: relative;
  perspective: 200vw;
  button{
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 1000;
  }
}
.carousel {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  height: inherit;
  width: inherit;
  position: absolute;
  transform-style: preserve-3d;
  transition: transform 1s;
}

.slide__item {
  display: block;
  position: absolute;
  background: #000;
  width: 24%;
  height: 18vw;
  opacity: 0.95;
  img{
    width: 100%;
  }
}

.a {
  transform: rotateY(0deg) translateZ(24vw);
  background: #ed1c24;
}
.b {
  transform: rotateY(60deg) translateZ(24vw);
  background: #0072bc;
}
.c {
  transform: rotateY(120deg) translateZ(24vw);
  background: #39b54a;
}
.d {
  transform: rotateY(180deg) translateZ(24vw);
  background: #f26522;
}
.e {
  transform: rotateY(240deg) translateZ(24vw);
  background: #630460;
}
.f {
  transform: rotateY(300deg) translateZ(24vw);
  background: #8c6239;
}

</style>