<template>
  <div class="header">
    <three-model></three-model>
    <div class="companyNameWrapper">
      <div class="company_name">
        <h1 class="header_text company_name__name">JETSET</h1>
        <h2 class="blue_text company_name__description">коммуникационное агентство<br>реактивного цикла</h2>
      </div>
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

  min-height: 540px;
  position: relative;
  display: flex;
  justify-content: center;
}

.companyNameWrapper{
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-end;
  height: 200px;
  position: absolute;
  top: 52.6%;
  width: 100%;
  max-width: 1920px;
  padding: 0 11.8%;
  margin: 0 auto;
  z-index: 10;
  .company_name{
    &__name{
      text-align: left;
      font-size: 80px;
      line-height: 150%;
      margin: 0 0 20px;
    }
    &__description{
      text-align: left;
      font-size: 28px;
      line-height: 150%;
      margin: 0;
      letter-spacing: 0.1em;
    }
  }
}
.scroll_down{
  position: absolute;
  left: calc(50% - 14.5px);
  bottom: 5%;
  width: 29px;
  height: 70px;
  background: url("~@/assets/icons/scroll.svg");
}
@media (max-width: 1440px) {
  .companyNameWrapper{
    padding: 0 5%;
    .company_name{
      &__name{
        //font-size: 60px;
        margin: 0;
      }
      &__description{
        //font-size: 18px;
        margin: 0;
      }
    }
  }

}
@media (max-width: 1280px) {
  .companyNameWrapper{
    //padding: 0 6%;
  }

}

@media (max-width: 1200px) {
  .companyNameWrapper{
    padding: 0 30px;
    .company_name{
      &__name{
        //font-size: 50px;
      }
      &__description{
        //font-size: 15px;
      }
    }
  }

}
@media (max-width: 1000px) {
  .companyNameWrapper{
    //justify-content: center;
  }
}
@media (max-width: 1000px){
  .header{

  }
  .companyNameWrapper{
    top: 80%;
  }
  .scroll_down{
    display: none;
  }
}
@media (max-width: 600px) {
  .companyNameWrapper{
    padding: 0 1.875vw;
    .company_name{
      &__name{
        font-size: 12.5vw;
      }
      &__description{
        font-size: 3.75vw;
      }
    }
  }

}
</style>
