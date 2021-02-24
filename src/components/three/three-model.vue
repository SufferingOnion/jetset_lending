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
      width: null,
      height: null,
    }
  },
  methods: {
    init() {
      // SCENE AND CAMERA
      this.scene = new THREE.Scene();

      this.camera = new THREE.PerspectiveCamera( 45, ( window.innerWidth ) / window.innerHeight, 1000, 2000 );
      this.camera.position.z = 1500;


      // RENDERER

      this.renderer = new THREE.WebGLRenderer({
        canvas: this.$refs.threejs,
      });
      this.renderer.autoClear = false;
      this.renderer.setPixelRatio(window.devicePixelRatio);
      this.renderer.setSize(window.innerWidth, window.innerHeight);


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
      if(process.env.NODE_ENV === 'production'){
        loader.load('/jetset_lending/GTLF/Logo/Logo.gltf', function (result) {
          vm.logo = result.scene;
          vm.logo.scale.set(75, 75, 75);
          vm.logo.position.set(-400, 0, 0);
          vm.logo.rotation.set(1.6, 0.3, -0.5);
          vm.scene.add(vm.logo);

        }, undefined, function (error) {
          console.error(error, 'не загрузился');
        });
      } else {
        loader.load('/GTLF/Logo/Logo.gltf', function (result) {
          vm.logo = result.scene;
          vm.logo.scale.set(75, 75, 75);
          vm.logo.position.set(-400, 0, 0);
          vm.logo.rotation.set(1.6, 0.3, -0.5);
          vm.scene.add(vm.logo);

        }, undefined, function (error) {
          console.error(error, 'не загрузился');
        });
      }


      //HELPERS


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
      console.log({
        top: this.camera.top,
        bottom: this.camera.bottom,
        left: this.camera.left,
        right: this.camera.right,
        aspect: this.camera.aspect
      });
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
      this.renderer.setViewport( 0, 0, window.innerWidth, window.innerHeight );
      this.render();
      this.composer1.render();
    },
    onWindowResize: function (event) {


      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();

      this.renderer.setSize( window.innerWidth, window.innerHeight );
      this.composer1.setSize( window.innerWidth, window.innerHeight );

      const pixelRatio = this.renderer.getPixelRatio();

      this.fxaaPass.material.uniforms[ 'resolution' ].value.x = 1 / ( window.innerWidth * pixelRatio );
      this.fxaaPass.material.uniforms[ 'resolution' ].value.y = 1 / ( window.innerHeight * pixelRatio );

      console.log({
        width: window.innerWidth,
        height: window.innerHeight,
        Event: event,
      })
    },
  },
  watch: {
    logo: function (){
      if(this.logo){
        this.animate();
        console.log('start 3D logo animation');
      }
    }
  },
  mounted() {
    this.init();
    this.width = this.$refs.threejs.offsetWidth;
    this.height = this.$refs.threejs.offsetHeight;
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