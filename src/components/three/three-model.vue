<template>
  <div id="container">
    <canvas ref="threejs"></canvas>
  </div>
</template>
<script>
// import animate from "@/components/three/initthree";

import * as THREE from "three";

import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
import {EffectComposer} from './postprocessing/EffectComposer.js';
import {RenderPass} from './postprocessing/RenderPass.js';
import {ShaderPass} from './postprocessing/ShaderPass.js';
import {FXAAShader} from './shaders/FXAAShader.js';


export default {
  data() {
    return {
      composer1: null,
      fxaaPass: null,
      container: null,
      renderer: null,
      scene: null,
      camera: null,
      logo: null,
      mouseX: null,
      mouseY: null,
    }
  },
  methods: {
    init() {
      // SCENE AND CAMERA
      this.scene = new THREE.Scene();

      this.camera = new THREE.OrthographicCamera( window.innerWidth / - 2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / - 2, -200, 550 );
      this.camera.position.z = 120;


      // RENDERER

      this.renderer = new THREE.WebGLRenderer({
        canvas: this.$refs.threejs,
      });
      this.renderer.autoClear = false;
      this.renderer.setSize(this.$refs.threejs.offsetWidth, this.$refs.threejs.offsetHeight);
      this.renderer.setPixelRatio(window.devicePixelRatio);


      // FXAA

      this.renderPass = new RenderPass(this.scene, this.camera);
      this.fxaaPass = new ShaderPass(FXAAShader);

      const pixelRatio = this.renderer.getPixelRatio();

      this.fxaaPass.material.uniforms['resolution'].value.x = 1 / (this.$refs.threejs.offsetWidth * pixelRatio);
      this.fxaaPass.material.uniforms['resolution'].value.y = 1 / (this.$refs.threejs.offsetHeight * pixelRatio);

      this.composer1 = new EffectComposer(this.renderer);
      this.composer1.addPass(this.renderPass);
      this.composer1.addPass(this.fxaaPass);


      //LOGO MODEL LOAD

      const loader = new GLTFLoader();
      let vm = this;
      loader.load(process.env.NODE_ENV === 'production'? '/jetset_lending/': '' +'/GTLF/Logo/Logo.gltf', function (result) {
        vm.logo = result.scene;
        vm.logo.scale.set(75, 75, 75);
        vm.logo.position.set(-400, 0, 0);
        vm.logo.rotation.set(1.6, 0.3, -0.5);
        vm.scene.add(vm.logo);

      }, undefined, function (error) {
        console.error(error, 'не загрузился');
      });


      //HELPERS

      const axesHelper = new THREE.AxesHelper(35);
      this.scene.add(axesHelper);


      //EVENTS

      window.addEventListener('resize', this.onWindowResize);

      // LIGHTS
      const light = new THREE.AmbientLight(0xffffff, 1); // soft white light
      this.scene.add(light);
      const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
      this.scene.add(directionalLight);


      // BACKGROUND

      this.scene.background = new THREE.Color(0xffffff);
      window.addEventListener('mousemove', this.onDocumentMouseMove);

    },
    onDocumentMouseMove: function(e){
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
    },
    render: function(){
        this.logo.rotation.z = -0.5-(this.mouseX - window.innerWidth / 2) / 5000;
        this.logo.rotation.x = 1.6 + (this.mouseY - window.innerHeight / 2) / 5000;
    },
    animate: function () {
      requestAnimationFrame(this.animate);
      this.render();
      this.composer1.render();
    },
    onWindowResize: function () {

      const width = window.innerWidth;
      const height = window.innerHeight;
      const aspect = width / height;

      this.camera.aspect = aspect;
      this.camera.updateProjectionMatrix();

      this.camera.left = -height * aspect;
      this.camera.right = height * aspect;
      this.camera.top = height;
      this.camera.bottom = -height;
      this.camera.updateProjectionMatrix();

      this.renderer.setSize(width, height);
      this.composer1.setSize(width, height);

    },
  },
  mounted() {
    this.init();
    this.animate();
  }
}
</script>
<style lang="scss">
#container {
  position: absolute;
  width: 100%;
  height: 100vh;

  canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>