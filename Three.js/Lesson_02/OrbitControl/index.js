/* -------------- Definition of the scene, camera and renderer -------------- */

const scene = new THREE.Scene();
const camera = new THREE.OrthographicCamera( -3, 3, -3, 3, 1, 1000 );
scene.add( camera );
//const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

/* ---------- Definition of an object/geometry and camera position ---------- */

const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00, wireframe:true } ); 
const cube = new THREE.Mesh( geometry, material ); 
scene.add( cube ); 
camera.position.z = 5;

/* -------------------------------- Controls -------------------------------- */

const controls = new THREE.OrbitControls(camera, renderer.domElement);
//const controls2 = new THREE.TrackballControls(camera, renderer.domElement);
//const controls3 = new THREE.FirstPersonControls(camera, renderer.domElement);
//const controls4 = new THREE.FlyControls(camera, renderer.domElement);

/* ----------------------------- Scene rendering ---------------------------- */

function render() {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
    controls.update();

    /* ----------------------------- Scene animation ---------------------------- */
    //cube.rotation.x += 0.01;
    //cube.rotation.y += 0.01;
}
render();