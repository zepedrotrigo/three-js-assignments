/* -------------- Definition of the scene, camera and renderer -------------- */

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

/* ---------- Definition of an object/geometry and camera position ---------- */

const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshPhongMaterial({
    color: '#006063',
specular: '#a9fcff',
shininess: 100
}); 
const cube = new THREE.Mesh( geometry, material ); 
scene.add( cube ); 
camera.position.z = 5;

// White directional light at half intensity shining from the top.
const directionalLight = new THREE.DirectionalLight( 0xffffff, 1.0 );
directionalLight.position = (0,5,0);
scene.add( directionalLight );

// Ambient Light
const alight = new THREE.AmbientLight(0xffffff);
scene.add(alight);

/* ----------------------------- Scene rendering ---------------------------- */

function render() {
    requestAnimationFrame(render);
    renderer.render(scene, camera);

    /* ----------------------------- Scene animation ---------------------------- */
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
}
render();