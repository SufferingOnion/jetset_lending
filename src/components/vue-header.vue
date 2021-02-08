<template>
  <div class="header">
    <three-model></three-model>
    <div class="company_name">
      <h1 class="header_text company_name__name">JETSET</h1>
      <h2 class="blue_text company_name__description">агентство реактивного цикла </h2>
    </div>
    <div class="scroll_down"></div>
  </div>
</template>

<script>
import threeModel from "@/components/three/three-model";
export default {
  data() {
    return {
    }
  },
  components: {
    "three-model": threeModel,
  }
}
</script>

<style lang="scss">
.header{
  width: 100%;
  height: 100vh;
  position: relative;
}

.company_name{
  height: 200px;
  position: absolute;
  top: 70%;
  right: 11.5%;
  z-index: 10;
  &__name{
    font-size: 80px;
    line-height: 80px;
    margin: 0;
  }
  &__description{
    font-size: 28px;
    line-height: 42px;
    margin: 0;
  }
}
.scroll_down{
  position: absolute;
  left: calc(50% - 14.5px);
  bottom: 10%;
  width: 29px;
  height: 70px;
  background: url("~@/assets/icons/scroll.svg");
}
</style>
