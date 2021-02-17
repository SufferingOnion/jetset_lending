<template>
  <div data-scroll-container>
    <Vue-menu data-scroll-section></Vue-menu>
    <Vue-header data-scroll-section></Vue-header>
    <About-company data-scroll-section></About-company>
    <Vue-showreel data-scroll-section></Vue-showreel>
    <Vue-instagramm data-scroll-section></Vue-instagramm>
    <Vue-360 data-scroll-section></Vue-360>
  </div>
</template>

<script>
import Header from "@/components/vue-header";
import VueMenu from "@/components/vue-menu";
import AboutCompany from "@/components/about-company";
import VueShowreel from "@/components/vue-showreel";
import VueInstagramm from "@/components/Vue-instagram";
import Vue360 from "@/components/vue-360";

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

.logo_container{
  position: relative;
  width: 100%;
  height: 100vh;
}

</style>
