<template>
  <div>
    <Vue-menu></Vue-menu>
    <Vue-header></Vue-header>
    <About-company></About-company>
    <Vue-showreel></Vue-showreel>
  </div>
</template>

<script>
import Header from "@/components/vue-header";
import VueMenu from "@/components/vue-menu";
import AboutCompany from "@/components/about-company"
import VueShowreel from "@/components/vue-showreel"

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
