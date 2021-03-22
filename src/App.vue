<template>
  <div id="main_container">
    <Vue-menu/>
    <Vue-header></Vue-header>
    <About-company id="about-company"></About-company>
    <Vue-showreel id="showreel" class="container"></Vue-showreel>
    <Vue-instagramm id="instagramm" class="container"></Vue-instagramm>
    <Vue-360 id="360"></Vue-360>
    <Key-customers id="customers" />
    <Reviews id="reviews" />
    <JetSet-crew id="crew" />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/vue-header";
import VueMenu from "@/components/vue-menu";
import AboutCompany from "@/components/about-company";
import VueShowreel from "@/components/vue-showreel";
import VueInstagramm from "@/components/Vue-instagram";
import Vue360 from "@/components/vue-360";
import KeyCustomers from "@/components/KeyCustomers";
import Reviews from "@/components/Reviews";
import JetSetCrew from "@/components/JetSetCrew";
import Footer from "@/components/footer";


export default {
  data() {
    return {
    }
  },
  components: {
    "Vue-header": Header,
    "Vue-menu": VueMenu,
    "About-company": AboutCompany,
    "Vue-showreel": VueShowreel,
    "Vue-instagramm": VueInstagramm,
    "Vue-360": Vue360,
    "Key-customers": KeyCustomers,
    "Reviews": Reviews,
    "JetSet-crew": JetSetCrew,
    "Footer": Footer,

  },
  created() {

  },
  mounted() {
  },
  beforeUpdate() {

  },
  beforeDestroy() {
  }
}
</script>

<style lang="scss">

*{
  -webkit-font-smoothing: antialiased;
}
.body,#main_container{
  overflow-x: hidden;
}
.logo_container{
  position: relative;
  width: 100%;
  height: 100vh;
}
.container{

  max-width: 1920px;
  width: 100%;
  margin: 0 auto  45px;
}

</style>
