// Basic Three.JS scene from documentation, importing Three.JS through a CDN 
// https://threejs.org/docs/#manual/en/introduction/Creating-a-scene


//~~~~~~~Import Three.js (also linked to as import map in HTML)~~~~~~
// import * as THREE from 'three';

// Import add-ons
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';


// ~~~~~~~~~~~~~~~~Create scene here~~~~~~~~~~~~~~~~
let scene, camera, renderer, cone, cube, ring;

function init() {
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);

    const geometry = new THREE.ConeGeometry( 1, 5, 8 );
    // const material = new THREE.MeshBasicMaterial( { color: 0x0000ff } );

    const texture = new THREE.TextureLoader().load('textures/dripstone.jpg');
    const material = new THREE.MeshBasicMaterial( { map: texture } );

    cone = new THREE.Mesh( geometry, material );
    scene.add( cone );



    const geometry2 = new THREE.BoxGeometry( 2, 2, 2 );
    // const material = new THREE.MeshBasicMaterial( { color: 0x0000ff } );

    const texture2 = new THREE.TextureLoader().load('textures/grass.jpg');
    const material2 = new THREE.MeshBasicMaterial( { map: texture2 } );

    cube = new THREE.Mesh( geometry2, material2 );
    scene.add( cube );



    const geometry3 = new THREE.RingGeometry( 1, 5, 32 );
    // const material = new THREE.MeshBasicMaterial( { color: 0x0000ff } );

    const texture3 = new THREE.TextureLoader().load('textures/Ice.jpg');
    const material3 = new THREE.MeshBasicMaterial( { map: texture3 } );

    ring = new THREE.Mesh( geometry3, material3 );
    scene.add( ring );

camera.position.z = 5;
}

function animate() {
    requestAnimationFrame(animate);

    cone.rotation.x += 0.01;

    cone.rotation.y += 0.01;

    cube.rotation.x += 0.05;

    cube.rotation.y += 0.05;

    ring.rotation.x += 0.1;

    ring.rotation.y += 0.1;

    renderer.render(scene, camera);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false);

init();
animate();



// ~~~~~~~~~~~~~~~~ Initiate add-ons ~~~~~~~~~~~~~~~~
// const controls = new OrbitControls(camera, renderer.domElement);
// const loader = new GLTFLoader(); // to load 3d models


// →→→→→→ Follow next steps in tutorial: 
// // https://threejs.org/docs/#manual/en/introduction/Creating-a-scene