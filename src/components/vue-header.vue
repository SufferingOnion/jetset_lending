<template>
  <div class="header">
    <three-model></three-model>
    <div class="company_name">
      <h1 class="header_text company_name__name">JETSET</h1>
      <h2 class="blue_text company_name__description">коммуникационное агентство<br>реактивного цикла</h2>
    </div>
    <a href="#about-company" class="scroll_down" @click="scrollDown"></a>
  </div>
</template>

<script>
import threeModel from "@/components/three/three-model";
export default {

  components: {
    "three-model": threeModel,
  },
  methods:{
    scrollDown(){

    }
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
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  height: 200px;
  position: absolute;
  top: 60%;
  right: 11.5%;
  z-index: 10;
  &__name{
    font-size: 80px;
    line-height: 80px;
    margin: 0 0 20px;
  }
  &__description{
    font-size: 28px;
    line-height: 42px;
    margin: 0;
    letter-spacing: 0.1em;
  }
}
.scroll_down{
  position: absolute;
  left: calc(50% - 14.5px);
  bottom: 0%;
  width: 29px;
  height: 70px;
  background: url("~@/assets/icons/scroll.svg");
}
@media (max-width: 1440px) {
  .company_name{
    right: 0.78%;
    &__name{
      font-size: 60px;
      line-height: 70px;
      margin: 0;
    }
    &__description{
      font-size: 18px;
      line-height: 28px;
      margin: 0;
    }
  }
}
@media (max-width: 1000px) {
  .company_name{
    justify-content: flex-end;
  }
}
@media (max-width: 768px) {
  .header{
    height: 90vh;
  }
  .company_name{
    top: 74%;
  }
  .scroll_down{
    display: none;
  }
}
@media (max-width: 530px) {
  .company_name{
    right: 6px;
    &__name{
      font-size: 40px;
      line-height: 48px;
      margin: 0;
    }
    &__description{
      font-size: 12px;
      line-height: 18px;
      margin: 0;
    }
  }
}
</style>
