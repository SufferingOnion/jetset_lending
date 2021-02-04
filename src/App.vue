<template>
  <div>
    <vue-animation></vue-animation>
  </div>
</template>

<script>
import animation from "@/components/three/animation";
export default {
  name: 'Sandbox',
  data() {
    return {
    }
  },
  components: {
    "vue-animation": animation,
  }
}
</script>

<style lang="scss">

</style>
