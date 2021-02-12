<template>
  <div data-scroll-container>
    <Vue-menu data-scroll-section></Vue-menu>
    <Vue-header data-scroll-section></Vue-header>
    <About-company data-scroll-section></About-company>
    <Vue-showreel data-scroll-section></Vue-showreel>
    <Vue-instagramm data-scroll-section></Vue-instagramm>
  </div>
</template>

<script>
import Header from "@/components/vue-header";
import VueMenu from "@/components/vue-menu";
import AboutCompany from "@/components/about-company";
import VueShowreel from "@/components/vue-showreel";
import VueInstagramm from "@/components/Vue-instagram"

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
