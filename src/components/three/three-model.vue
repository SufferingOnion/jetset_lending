<template>
  <div id="container">
    <canvas ref="threejs"></canvas>
  </div>
</template>
<script>
// import animate from "@/components/three/initthree";

import * as THREE from "three";

import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
// import { HDRCubeTextureLoader } from 'three/examples/jsm/loaders/HDRCubeTextureLoader.js';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';

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
      generatedCubeRenderTarget: null,
    }
  },
  methods: {
    init() {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      // SCENE AND CAMERA
      this.scene = new THREE.Scene();

      this.camera = new THREE.PerspectiveCamera( 45, ( this.width ) / this.height, 1000, 2000 );
      this.camera.position.z = 1500;

      // RENDERER

      this.renderer = new THREE.WebGLRenderer({
        canvas: this.$refs.threejs,
        antialiasing: true
      });
      this.renderer.physicallyCorrectLights = true;
      this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
      this.renderer.toneMappingExposure = 1;
      this.renderer.outputEncoding = THREE.sRGBEncoding;
      this.renderer.setClearColor( 0xcccccc );
      this.renderer.setPixelRatio(window.devicePixelRatio);
      this.renderer.setSize(this.width, this.height);


      // FXAA

      this.renderPass = new RenderPass(this.scene, this.camera);
      this.fxaaPass = new ShaderPass(FXAAShader);

      const pixelRatio = this.renderer.getPixelRatio();

      this.fxaaPass.material.uniforms['resolution'].value.x = 1 / (this.width * pixelRatio);
      this.fxaaPass.material.uniforms['resolution'].value.y = 1 / (this.height * pixelRatio);

      this.composer1 = new EffectComposer(this.renderer);
      this.composer1.addPass(this.renderPass);
      this.composer1.addPass(this.fxaaPass);


      //LOGO MODEL LOAD

      const loader = new GLTFLoader();
      let vm = this;
      if(process.env.NODE_ENV === 'production'){
        loader.load('/GTLF/Logo/Logo.gltf', function (result) {
          vm.logo = result.scene || result.scenes[0];
          vm.logo.scale.set(300, 300, 300);
          vm.logo.position.set(-400, -50, 0);
          vm.logo.rotation.set(0, .1, 0);
          vm.scene.add(vm.logo);

        }, undefined, function (error) {
          console.error(error, 'не загрузился');
        });
      } else {
        loader.load('/GTLF/Logo/Logo.gltf', function (result) {
          vm.logo = result.scene || result.scenes[0];
          vm.logo.scale.set(300, 300, 300);
          vm.logo.position.set(-window.innerWidth/100*20, -50, 0);
          vm.logo.rotation.set(0, .3, 0);
          vm.scene.add(vm.logo);

        }, undefined, function (error) {
          console.error(error, 'не загрузился');
        });
      }


      //HELPERS


      //EVENTS

      window.addEventListener('resize', this.onWindowResize);

      // LIGHTS

      const light = new THREE.AmbientLight(0xffffff, 2); // soft white light
      this.scene.add(light);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
      directionalLight.target.position.set(-400, -50, 0);
      this.scene.add(directionalLight.target);

      const HemisphereLight = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
      this.scene.add( HemisphereLight );


      // BACKGROUND

      this.scene.background = new THREE.Color(0xffffff);
      this.$refs.threejs.addEventListener('mousemove', this.onDocumentMouseMove,{ passive: true });

      //ENVIRONMENT
      const pmremGenerator = new THREE.PMREMGenerator( this.renderer );
      pmremGenerator.compileEquirectangularShader();

      new RGBELoader()
          .setDataType( THREE.UnsignedByteType )
          .setPath(process.env.NODE_ENV === 'production'?'/hdr/':'./hdr/')
          .load( 'background2.hdr', function ( texture ) {

            const envMap = pmremGenerator.fromEquirectangular( texture ).texture;

            vm.scene.environment = envMap;

            texture.dispose();
            pmremGenerator.dispose();

          } );
    },
    onDocumentMouseMove: function(e){
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
    },
    render: function(){
        this.logo.rotation.z = -0.35-(this.mouseX - this.width / 2) / 5000;
        this.logo.rotation.x = 1.3 + (this.mouseY - this.height / 2) / 5000;
    },
    animate: function () {
      requestAnimationFrame(this.animate);
      this.renderer.setViewport( 0, 0, this.width, this.height );
      this.render();
      this.composer1.render();
    },
    onWindowResize: function () {
      if(this.width === window.innerWidth) {
        return;
      }
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      requestAnimationFrame(this.onWindowResize);
      this.camera.aspect = this.width / this.height;
      this.camera.updateProjectionMatrix();

      this.renderer.setSize( this.width, this.height );
      this.composer1.setSize( this.width, this.height );

      const pixelRatio = this.renderer.getPixelRatio();

      this.fxaaPass.material.uniforms[ 'resolution' ].value.x = 1 / ( this.width * pixelRatio );
      this.fxaaPass.material.uniforms[ 'resolution' ].value.y = 1 / ( this.height * pixelRatio );
      this.logo.position.set(-this.width/100*20, -50, 0);
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
  width: 100%;

  overflow-x: hidden;

  canvas {

    top: 0;
    left: 0;
    width: 100%;

  }
}
</style>
