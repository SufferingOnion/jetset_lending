<template>
<div class="counter">
    <span v-observe-visibility="CountIsVisible"
          ref="number"
          class="header_text factoid_text"
          :style="{width: 100 + '%'}"
    >
      <slot></slot>
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
  <span class="descr">
    {{ this.descr }}
  </span>
</div>
</template>

<script>

export default {
  props: ['val', 'plus', 'descr'],
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
    border: 1px solid #000000;
    width: 0;
    height: 70px;
    position: absolute;
    left: 0;
    top: calc(20%);
  }
  .factoid_text {
    font-size: 60px;
    line-height: 90px;
    letter-spacing: 0.1em;
    text-align: center;

  }
  .descr{
    width: 100%;
    text-align: center;
  }
}


</style>