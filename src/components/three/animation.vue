<template>
  <div id="container"></div>
</template>
<script>
import animate from "@/components/three/initthree";

export default {
  data() {
    return {
      cube: null,
      renderer: null,
      scene: null,
      camera: null
    }
  },
  methods: {},
  mounted() {
    animate();
  }
}
</script>