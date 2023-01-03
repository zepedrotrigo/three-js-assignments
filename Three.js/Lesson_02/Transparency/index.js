/* -------------- Definition of the scene, camera and renderer -------------- */

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

camera.position.set(0, 0, 5);
camera.lookAt(0, 0, 0);

/* ---------- Definition of an object/geometry and camera position ---------- */

// Create a sphere geometry
const geometry = new THREE.SphereGeometry(1, 12, 12);
const geometry2 = new THREE.SphereGeometry(1, 10, 10);

// Create a material
const material = new THREE.MeshPhongMaterial({
    color: '#006063',
specular: '#a9fcff',
shininess: 100
});

const emerald = new THREE.MeshPhongMaterial({
    shading: THREE.SmoothShading	});
    emerald.color = new THREE.Color(0.07568, 0.61424, 0.07568);
    emerald.specular= new THREE.Color(0.633, 0.7278, 0.633);
    emerald.shininess = 0.6 * 256;


const gold = new THREE.MeshPhongMaterial({
    shading: THREE.SmoothShading	});
    gold.color = new THREE.Color(0.75164, 0.60648, 0.22648);
    gold.specular= new THREE.Color(0.633, 0.727811, 0.633);
    gold.shininess = 0.4 * 256;

const glassMaterial = new THREE.MeshPhongMaterial( { 
    color: 0x222222, 
    specular: 0xFFFFFF,
    shininess: 100, 
    opacity: 0.3, 
    transparent: true 
    } );

// Create a mesh
const sphere = new THREE.Mesh(geometry2, emerald);

// Add the sphere to the scene
scene.add(sphere);

sphere.position.set(-2.5, 0, 0);


// Create a mesh
const sphere3 = new THREE.Mesh(geometry, glassMaterial);

// Add the sphere to the scene
scene.add(sphere3);

sphere3.position.set(-2.5, 0, 0);



// Create a mesh
const sphere2 = new THREE.Mesh(geometry2, gold);

// Add the sphere to the scene
scene.add(sphere2);

sphere2.position.set(2.5, 0, 0);


// Create a mesh
const sphere4 = new THREE.Mesh(geometry, glassMaterial);

// Add the sphere to the scene
scene.add(sphere4);

sphere4.position.set(2.5, 0, 0);


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
    sphere.rotation.x += 0.01;
    sphere.rotation.y += 0.01;

    sphere2.rotation.x += 0.01;
    sphere2.rotation.y += 0.01;

    sphere3.rotation.x += 0.01;
    sphere3.rotation.y += 0.01;

    sphere4.rotation.x += 0.01;
    sphere4.rotation.y += 0.01;
}
render();