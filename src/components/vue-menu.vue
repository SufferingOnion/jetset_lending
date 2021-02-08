<template>
  <div class="menu">
   <div class="lang">
     <span class="blue_text active_lang">RU</span>
     <span class="blue_text active_lang separator">|</span>
     <span class="blue_text disable_lang">EN</span>
   </div>
    <div class="menu_icon">
      <svg class="ham hamRotate ham8" viewBox="0 0 100 100" width="80" @click="menuActive=!menuActive" :class="{ active: menuActive }">
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
</template>

<script>
export default {
  name: 'Vue-Menu',
  data: ()=> {
    return {
      menuActive: false,
    }
  }
}
</script>

<style lang="scss">

.menu{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 112px;
  padding: 0 5.25% 0 12.6%;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  .ham {
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

</style>