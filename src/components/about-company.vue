<template>
  <div class="about-company">
    <div ref="aboutScene" id="about_scene">
      <div data-depth="0.1" class="main_back"></div>
      <div data-depth="-0.2" class="dots-container">
        <div class="dots dots-vertical"></div>
        <div class="dots dots-horizontal"></div>
      </div>
      <img data-depth="0.2" class="denis_popov-img" src="../assets/img/denis_popov.png" alt="">
      <div data-depth="0.25" class="denis_popov-ceo">
        <div class="ceo">
          <span class="header_text">Денис Попов</span>
          <p class="blue_text">Основатель и президент Jetset Holding</p>
        </div>
        <svg class="hiddenClipPath">
          <clipPath id="boxClipPath" clipPathUnits="objectBoundingBox">
            <path d="M0,0 L1,0.142 L0.985,1 L0.046,0.832 L0,0"></path>
          </clipPath>
        </svg>
      </div>
      <div class="about-company-text">
        <p class="blue_text text">
          Мы – <span class="blue_text">JETSET</span>. Коммуникационное агентство,
          объединяющих более полусотни профессионалов с 20 летним опытом работы для создания и продвижения торговых марок, мировых брендов
          и ваших идей.
        </p>
      </div>
      <svg class="svgPolygon svgCircle" data-depth="0.5" width="131" height="131" viewBox="0 0 131 131" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="65.2593" cy="65.3825" r="62.4672" stroke="#0FF8F1" stroke-width="4.77457"/>
      </svg>
      <svg class="svgPolygon svgBlueCircle" data-depth="-0.4" width="131" height="131" viewBox="0 0 131 131" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="65.2593" cy="65.3825" r="62.4672" stroke="#1E30F4" stroke-width="4.77457"/>
      </svg>
      <svg class="svgPolygon svgTriangle" data-depth="0.1" width="152" height="158" viewBox="0 0 152 158" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.43496 54.5358L148.518 4.39851L120.397 153.381L5.43496 54.5358Z" stroke="#0FF8F1" stroke-width="4.77457"/>
      </svg>

    </div>
  </div>
</template>
<script>
import Parallax from '@/components/parallax/parallax'

export default {
  data() {
    return {
      parallaxInstance: null,

    }
  },
  mounted() {
    this.parallaxInstance = new Parallax(this.$refs.aboutScene, {
      relativeInput: true
    });
  }
}
</script>

<style lang="scss">
.about-company {
  width: 100%;
  padding: 0 12.6%;

  #about_scene {
    position: relative;
    width: 100%;
    height: 60vh;
  }
}

.dots-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.denis_popov-img {
  position: absolute;
  right: 0;
  top: 0;
}

.denis_popov-ceo {
  position: absolute;
  right: 0;
  bottom: 11%;
  width: 617px;
  height: 123px;

  .ceo {
    position: absolute;
    top: 0;
    left: 0;
    background: #1E30F4;
    width: 617px;
    height: 123px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column nowrap;
    clip-path: url(#boxClipPath);

    .header_text, .blue_text {
      color: #FFFFFF;
      text-align: left;
      width: 375px;
      white-space: nowrap;
    }

    .header_text {
      font-size: 24px;
      line-height: 24px;
      letter-spacing: 0.2em;
      text-transform: uppercase;
    }

    .blue_text {
      margin: 10px 0;
      font-size: 18px;
      line-height: 18px;
    }
  }
}

.hiddenClipPath {
  height: 0;
  width: 0;
  position: absolute;
}
.svgPolygon{
  position: absolute;
  &.svgCircle{
    bottom: 20%;
    left: 10%;
  }
  &.svgBlueCircle{
    top: 40%;
    right: 10%;
  }
  &.svgTriangle{
    top: 10%;
    left: 60%;
  }
}

.dots {
  position: absolute;
  width: 687.38px;
  height: 194.71px;
  background: url("~@/assets/img/dot.svg") space;

  &-horizontal {

    right: 8.68%;
    bottom: 106px;
  }

  &-vertical {
    transform: rotate(90deg);
    left: -18%;
    top: 16%;
  }
}
.about-company-text{
  position: absolute;
  width: 491px;
  top: 20%;
  left: 20%;
  &:before{
    position: absolute;
    content: '';
    display: block;
    width: 7px;
    height: 100%;
    background: #0FF8F1;
    top: 0;
    left: -25px;
  }
  .text{
    font-size: 18px;
    line-height: 27px;
    color: #150F0F;
  }
}
.main_back {
  width: 100%;
  min-width: 1221px;
  height: 791px;
  min-height: 604px;

  background: url("~@/assets/img/about_main_background.png") no-repeat;
  background-size: 100%;
}
</style>