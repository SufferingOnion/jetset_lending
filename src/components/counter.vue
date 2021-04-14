<template>
<div class="counter">
    <span v-observe-visibility="CountIsVisible"
          ref="number"
          class="header_text factoid_text"
          :style="{width: 100 + '%'}"
    >

    <number
        v-observe-visibility="CountIsVisible"
        animationPaused
        ref="factoid"
        :from="0"
        :to="this.val"
        :duration="this.val.toString().length/2"
        easing="Expo.easeNone"
    />{{ this.plus }}
  </span>
  <span class="blue_text descr">
    <slot></slot>
  </span>
</div>
</template>

<script>

export default {
  props: ['val', 'plus'],
  data() {
    return {
      number: 0,
      counter: null,
      isVisible: false,
    }
  },
  methods: {
    CountIsVisible(isVisible) {
      this.isVisible = isVisible;
      if (isVisible) {
        console.log('start factoid')
        this.$refs.factoid.play()
      }
    },
  },
}
</script>

<style lang="scss">
.counter{
  position: relative;
  display: inline-flex;
  flex-flow: column nowrap;
  align-items: center;
  &:nth-child(n+2):before{
    display: block;
    content: '';
    background: #000000;
    width: 1px;
    height: 70px;
    position: absolute;
    left: 0;
    top: calc(10%);
  }
  .factoid_text {
    font-size: 50px;
    line-height: 150%;
    letter-spacing: 0.1em;
    text-align: center;

  }
  .descr{
    width: 100%;
    text-align: center;
    font-size: 21px;
    line-height: 150%;
    text-transform: uppercase;
    color: #150F0F;
  }
}
@media (max-width: 1440px) {
  .counter{
    .factoid_text {
      font-size: 45px;
      line-height: 1.3em;
    }
    .descr{
      font-size: 16px;
      line-height: 1.3em;
    }
  }
}
@media (max-width: 1366px) {
  .counter{
    .factoid_text {
      font-size: 40px;
      line-height: 1.3em;
    }
    .descr{
      font-size: 14px;
      line-height: 1.3em;
    }
  }
}
@media (max-width: 1200px) {
  .counter{
    .factoid_text {
      font-size: 30px;
      line-height: 1.3em;
    }
    .descr{
      font-size: 12px;
      line-height: 1.3em;
    }
  }
}
@media (max-width: 950px) {
  .counter{

    .factoid_text {
      font-size: 22px;
      line-height: 1.3em;
    }
    .descr{
      font-size: 8px;
      line-height: 1.3em;
    }
  }
}


</style>