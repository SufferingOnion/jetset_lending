import * as THREE from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();

renderer.outputEncoding = THREE.sRGBEncoding;


renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );



let logo = {};
const loader = new GLTFLoader();

loader.load( '/GTLF/Logo/Logo.gltf', function ( result ) {
    logo = result.scene;
    logo.scale.set(5,5,5);
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
camera.position.z = 35;

const animate = function () {
    requestAnimationFrame( animate );


    window.addEventListener( 'mousemove', LogoRotation);



    renderer.render( scene, camera );
}
const LogoRotation = function (e){

    logo.rotation.z = (e.clientX - window.innerWidth/2)/1000;
    logo.rotation.x = 1.4+(e.clientY - window.innerHeight/2)/1000;
}



export default animate;