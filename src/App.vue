<template>
  <div>
    <Vue-menu class="container"></Vue-menu>
    <Vue-header></Vue-header>
    <About-company class="container"></About-company>
    <Vue-showreel class="container"></Vue-showreel>
    <Vue-instagramm class="container"></Vue-instagramm>
    <Vue-360 class="container"></Vue-360>
    <Key-customers/>
    <Reviews/>
    <JetSet-crew></JetSet-crew>
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
.body{
  overflow-x: hidden;
}
.logo_container{
  position: relative;
  width: 100%;
  height: 100vh;
}
.container{
  margin-bottom: 45px;
}

</style>
