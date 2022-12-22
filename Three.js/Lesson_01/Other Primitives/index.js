/* -------------- Definition of the scene, camera and renderer -------------- */

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

/* ---------- Definition of an object/geometry and camera position ---------- */

const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00, wireframe: true  } ); 
const cube = new THREE.Mesh( geometry, material ); 
scene.add( cube );


camera.position.set(0, 0, 5);
camera.lookAt(0, 0, 0);


/* ----------------------------- Sphere ---------------------------- */

// Create a sphere geometry
const geometry2 = new THREE.SphereGeometry(1, 32, 32);

// Create a material
const material2 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });

// Create a mesh
const sphere = new THREE.Mesh(geometry2, material2);

// Add the sphere to the scene
scene.add(sphere);

sphere.position.set(2, 0, 0);


/* ----------------------------- Hexagon ---------------------------- */

// Create a shape for the hexagon
const shape = new THREE.Shape();

// Set the starting point for the shape
shape.moveTo(0, 1);

// Add lines to the shape to create the hexagon
shape.lineTo(Math.sqrt(3) / 2, 0.5);
shape.lineTo(Math.sqrt(3) / 2, -0.5);
shape.lineTo(0, -1);
shape.lineTo(-Math.sqrt(3) / 2, -0.5);
shape.lineTo(-Math.sqrt(3) / 2, 0.5);
shape.lineTo(0, 1);

// Create an extrude geometry from the shape
const geometry3 = new THREE.ExtrudeGeometry(shape, {
  depth: 1, // set the depth of the hexagon
  bevelEnabled: false // disable beveling
});

// Create a material
const material3 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });

// Create a mesh
const hexagon = new THREE.Mesh(geometry3, material3);

// Add the hexagon to the scene
scene.add(hexagon);

hexagon.position.set(4, 0, 0);


/* ----------------------------- Cone ---------------------------- */

// Create a cone geometry
const geometry4 = new THREE.ConeGeometry(1, 2, 32);

// Create a material
const material4 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });

// Create a mesh
const cone = new THREE.Mesh(geometry4, material4);

// Add the cone to the scene
scene.add(cone);

cone.position.set(-2, 0, 0);

/* ----------------------------- Cylinder ---------------------------- */

// Create a cylinder geometry
const geometry5 = new THREE.CylinderGeometry(1, 1, 2, 32);

// Create a material
const material5 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });

// Create a mesh
const cylinder = new THREE.Mesh(geometry5, material5);

// Add the cylinder to the scene
scene.add(cylinder);

cylinder.position.set(-4, 0, 0);

/* ----------------------------- Scene rendering ---------------------------- */

function render() {
    requestAnimationFrame(render);
    renderer.render(scene, camera);

    /* ----------------------------- Scene animation ---------------------------- */
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    sphere.rotation.x += 0.01;
    sphere.rotation.y += 0.01;

    hexagon.rotation.x += 0.01;
    hexagon.rotation.y += 0.01;

    cone.rotation.x += 0.01;
    cone.rotation.y += 0.01;

    cylinder.rotation.x += 0.01;
    cylinder.rotation.y += 0.01;

}
render();

