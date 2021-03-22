<template>
  <transition name="show-header">
    <div  v-show="headerVisibility" ref="vueHeader" class="menu">
      <div class="menu-header">
        <div class="lang">
          <span class="blue_text active_lang">RU</span>
          <span class="blue_text active_lang separator">|</span>
          <span class="blue_text disable_lang">EN</span>
        </div>
        <div class="menu_icon">
          <svg class="ham hamRotate ham8" viewBox="0 0 100 100" @click="menuActive=!menuActive" :class="{ active: menuActive }">
            <path
                class="line top"
                d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20" />
            <path
                class="line middle"
                d="m 30,50 h 40" />
            <path
                class="line bottom"
                d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20" />
          </svg>
        </div>
      </div>
      <transition name="show-menu">
        <div  v-show="menuActive" class="menu-container" :class="{'menu-active': menuActive}">
          <a class="blue_text menu-link" href="#about-company">О НАС</a>
          <a class="blue_text menu-link" href="#showreel">SHOWREEL</a>
          <a class="blue_text menu-link" href="#instagramm">НАШ INSTAGRAM</a>
          <a class="blue_text menu-link" href="#360">НАШИ ПРОЕКТЫ</a>
          <a class="blue_text menu-link" href="#customers">КЛИЕНТЫ</a>
          <a class="blue_text menu-link" href="#reviews">ОТЗЫВЫ</a>
          <a class="blue_text menu-link" href="#crew">КОМАНДА</a>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Vue-Menu',
  data: ()=> {
    return {
      menuActive: false,
      scrollY: 0,
      headerVisibility: true,
    }
  },
  methods: {
    changeVisibility(){
      if(window.scrollY>100 && window.scrollY > this.scrollY){
        this.headerVisibility = false;
        this.menuActive = false;
      }else{
        this.headerVisibility = true;
      }
      this.scrollY = window.scrollY
    }
  },
  mounted() {
    document.addEventListener('scroll', this.changeVisibility);
    const anchors = document.querySelectorAll('a[href*="#"]')

    for (let anchor of anchors) {
      anchor.addEventListener('click', function (e) {
        e.preventDefault()

        const blockID = anchor.getAttribute('href').substr(1)

        document.getElementById(blockID).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      })
    }
  },
}
</script>

<style lang="scss">

.show-header-enter-active {
  transition: all 0.3s ease;
}
.show-header-leave-active {
  transition: all 0.3s ease-in-out;
}
.show-header-enter, .show-header-leave-to {
  transform: translateY(-112px);
  opacity: 0;
}

.menu{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  &-header{
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1010;
    width: 100%;
    height: 112px;
    padding: 0 5.25% 0 12.6%;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}

.menu-container{
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: 1000;
  top: 0;
  right: 0;
  background: linear-gradient(270deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
  padding: 162px 5.25% 0 12.6%;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-end;
  .menu-link{
    font-size: 21px;
    line-height: 48px;
    /* or 48px */
    text-align: right;
    text-transform: uppercase;
    text-decoration: none;
  }
}

.show-menu-enter-active {
  transition: opacity .5s ease, transform .5s ease;
}
.show-menu-leave-active {
  transition: opacity .5s ease, transform .5s ease;

}
.show-menu-enter, .show-menu-leave-to {
  opacity: 0;
  transform: translateX(10%);
}

.lang{
  height: 50px;
  display: flex;
  align-items: center;
  .separator{
    margin-top: -7px;
  }
}
.disable_lang{
opacity: 0.5;
}
.disable_lang,.active_lang{
  font-size: 18px;
  letter-spacing: 0.1em;
  margin: 0 6px;

}
.menu_icon{
  width: 7.1vw;
  max-width: 117px;

  .ham {
    width: 9.25vw;
    max-width: 114px;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    transition: transform 400ms;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .hamRotate.active {
    transform: rotate(45deg);
  }
  .line {
    fill:none;
    transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
    stroke:#1E30F4;
    stroke-width:5.5;
    stroke-linecap:round;
  }
  .ham8 .top {
    stroke-dasharray: 40 160;
  }
  .ham8 .middle {
    stroke-dasharray: 40 142;
    transform-origin: 50%;
    transition: transform 400ms;
  }
  .ham8 .bottom {
    stroke-dasharray: 40 85;
    transform-origin: 50%;
    transition: transform 400ms, stroke-dashoffset 400ms;
  }
  .ham8.active .top {
    stroke-dashoffset: -64px;
  }
  .ham8.active .middle {
    //stroke-dashoffset: -20px;
    transform: rotate(90deg);
  }
  .ham8.active .bottom {
    stroke-dashoffset: -64px;
  }
}

@media (min-width: 1920px) {
  .menu_icon {
    width: 3.1vw;
  }
}@media (max-width: 1920px) {
  .menu_icon {
    width: 4.1vw;
  }
}
@media (max-width: 1600px) {
  .menu_icon {
    width: 5.1vw;
  }
}
@media (max-width: 1440px) {
  .menu_icon {
    width: 6.1vw;
  }
}
@media (max-width: 768px) {
  .menu_icon {
    width: 48px;

    .ham {
      width: 63px;
    }
  }
}


</style>