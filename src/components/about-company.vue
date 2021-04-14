<template>
  <div class="about-company">
    <div ref="aboutScene" id="about_scene">
      <img data-depth="0.1" src="@/assets/icons/back-texture.png" class="main_back">
      <div data-depth="-0.2" class="dots-container">
        <div class="dots dots-vertical"></div>
        <div class="dots dots-horizontal"></div>
      </div>

      <div data-depth="0.25" class="denis_popov-ceo">
        <img data-depth="0.2"
             class="denis_popov-img img-desktop"
             src="../assets/img/denis_popov.png"
             alt="">
        <img data-depth="0.2"
             class="denis_popov-img img-mobile"
             src="../assets/img/denis_popov430.png"
             alt="">
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
          Уже 20 лет мы успешно оправдываем своё название - <span class="blue_text">JetSet</span>,
          агентство реактивного цикла. Ведь мы думаем
          и творим на сверхзвуковых скоростях.
          Наша профессиональная команда, включающая
          более 50 человек, реактивно создаёт самые
          невероятные проекты, продвигает бренды
          и воплощает идеи любой сложности.
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
  max-height: 550px;
  margin: 150px auto 0;


  #about_scene {
    position: relative;
    width: 100%;
    margin: 0 auto;
    max-width: 1920px;
    height: 617px;
display: flex;
    justify-content: center;
    align-items: center;

  }
  .dots-container {
    position: absolute;

    width: 74.8%;
    height: 100%;
    min-width: 1221px;
    max-width: 1920px;
  }
  .dots {
    position: absolute;
    width: 687.38px;
    height: 194.71px;
    mask-image: url("~@/assets/icons/dot.svg");
    mask-repeat: space;
    background-color: #ffffff;

    &-horizontal {

      right: 16%;
      bottom: 106px;
    }

    &-vertical {
      left: -300px;
    }
    &-vertical {
      transform: rotate(90deg);
      left: clamp( -200px, -18vw, -100px);
      top: 16%;
    }
  }
}





.denis_popov-ceo {
  position: absolute;
  right: 12.6%;
  top: 0;
  z-index: 10;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  .denis_popov-img {
    min-width: 440px;
    width: 36.5vw;
    max-width: 584px;
  }
  .img-mobile{
    display: none;
  }
  .ceo {
    position: absolute;
    bottom: -15%;
    left: -5%;
    background: #1E30F4;
    width: 110%;
    height: 30%;
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
      line-height: 150%;
      letter-spacing: 0.2em;
      text-transform: uppercase;
    }

    .blue_text {
      font-size: 18px;
      line-height: 150%;
      margin: 0;
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
    z-index: 11;
  }
  &.svgTriangle{
    top: 5%;
    left: 50%;

  }
}

.about-company-text{
  position: absolute;
  width: 491px;
  top: 22%;
  left: 22%;
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
  max-width: 1423px;
  height: 100%;
  mask: url("~@/assets/icons/about_back.svg") no-repeat;
  mask-size: 100% 100%;
  mask-position: center center;
}

@media (min-width: 1760px) {
  .about-company-text{
    top: 22%;
    left: 26%;
  }
}
@media (max-width: 1440px) {
  .about-company-text{
    top: 16%;
    left: 18%;
  }
  .denis_popov-ceo{
    .ceo{
      width: 120%;
    }
  }
}
@media (max-width: 1280px) {
  .denis_popov-ceo{
    bottom: 20%;
    right: 7.6%;
  }
}
@media (max-width: 1024px) {
  .main_back {
    //position: absolute;
    //top: -25%;
    width: 130%;
    height: 130%;
    mask-size: 130% 130%;
  }
  .about-company-text{
    top: 16%;
    left: 8%;
  }
  .denis_popov-ceo{
    bottom: 20%;
    right: 5%;
  }
}
@media (max-width: 950px) {

  .svgPolygon{
    display: none;
  }
  .about-company-text{
    width: 100vw;
    left: 0;
    top: 2%;
    padding: 0 8.125%;
    &:before{
      display: none;
    }
    .text{
      font-size: 12px;
      line-height: 18px;
      color: #150F0F;
    }
  }
  .denis_popov-ceo{
    bottom: 10%;
    right: unset;
    justify-content: center;
    align-items: center;
    .denis_popov-img {
      position: relative;
      top: 7%;
      min-width: 417px;
      width: 36.5vw;
      max-width: 584px;
    }
    .ceo{
      width: 80vw;
      min-width: 452px;
      max-width: 500px;
      height: 20%;
      bottom: 0;
      left: unset;


      .header_text {
        font-size: 14px;
        width: 300px;
      }

      .blue_text {
        width: 300px;
        font-size: 12px;
      }
    }
  }
}
@media (max-width: 430px) {
  .main_back {
    position: relative;
    left: 40%;
  }
  .about-company-text{
    top: -4%;
  }
  .denis_popov-ceo{
    right: unset;
    left: 0;
    bottom: 15%;
    justify-content: flex-end;
    align-items: flex-end;
    .denis_popov-img {
      position: relative;
      top: 0%;
      left: 5px;
      min-width: 320px;
      width: 100vw;
    }
    .img-mobile{
      display: block;
    }
    .img-desktop{
      display: none;
    }
    .ceo{
      width: 80vw;
      min-width: 452px;
      max-width: 500px;
      height: 20%;
      bottom: -15%;
      left: 0;
      align-items: flex-start;
      padding-left: 10.31vw;
      .header_text {
        font-size: 14px;
        width: 300px;
      }

      .blue_text {
        width: 300px;
        font-size: 12px;
      }
    }
  }
}
@media (max-width: 375px) {
  .denis_popov-ceo{
    bottom: 20%;
  }
}
@media (max-width: 340px) {

  .denis_popov-ceo{
    bottom: 25%;
  }

}
</style>