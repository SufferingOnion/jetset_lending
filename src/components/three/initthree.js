import * as THREE from "three";

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { EffectComposer } from './postprocessing/EffectComposer.js';
import { RenderPass } from './postprocessing/RenderPass.js';
import { ShaderPass } from './postprocessing/ShaderPass.js';
import { FXAAShader } from './shaders/FXAAShader.js';

let composer1, fxaaPass, container;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight, 0.1, 1000 );

container = document.getElementById( 'container' );
// RENDERER
const renderer = new THREE.WebGLRenderer({
    canvas: this.$refs.threejs,
});
renderer.autoClear = false;
renderer.setPixelRatio( window.devicePixelRatio );





// FXAA
const renderPass = new RenderPass( scene, camera );

//

fxaaPass = new ShaderPass( FXAAShader );

const pixelRatio = renderer.getPixelRatio();

fxaaPass.material.uniforms[ 'resolution' ].value.x = 1 / ( container.offsetWidth * pixelRatio );
fxaaPass.material.uniforms[ 'resolution' ].value.y = 1 / ( container.offsetHeight * pixelRatio );

composer1 = new EffectComposer( renderer );
composer1.addPass( renderPass );
composer1.addPass( fxaaPass );

//



let logo = {};
const loader = new GLTFLoader();

loader.load( '/GTLF/Logo/Logo.gltf', function ( result ) {
    logo = result.scene;
    logo.scale.set(6,6,6);
    logo.position.set(0, 0, 0);
    logo.rotation.set(1.5, 0, 0);
    scene.add(logo);

}, undefined, function ( error ) {

    console.error( error, 'не загрузился' );

} );
//HELPERS
const axesHelper = new THREE.AxesHelper( 35 );
scene.add( axesHelper );
//EVENTS
// window.addEventListener( 'resize', onWindowResize );

// LIGHTS
const light = new THREE.AmbientLight( 0xffffff, 1 ); // soft white light
scene.add( light );
const directionalLight = new THREE.DirectionalLight( 0xffffff, 1 );
scene.add( directionalLight );

scene.background = new THREE.Color( 0xffffff );
camera.position.z = 40;

const animate = function () {
    requestAnimationFrame( animate );


    window.addEventListener( 'mousemove', LogoRotation);



    composer1.render();
}
const LogoRotation = function (e){

    logo.rotation.z = (e.clientX - window.innerWidth/2)/5000;
    logo.rotation.x = 1.4+(e.clientY - window.innerHeight/2)/5000;
}



export default animate;