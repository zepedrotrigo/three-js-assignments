const scene = new THREE.Scene();

/* ---------------------------- Set up the camera --------------------------- */
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 5);
camera.lookAt(0, 0, 0);

/* --------------------------- Set up the renderer -------------------------- */
const renderer = new THREE.WebGLRenderer();
renderer.setClearColor(new THREE.Color(0xffffff));
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

/* -------------------------- Create a box geometry ------------------------- */
const boxGeometry = new THREE.BoxGeometry(1, 1, 1);

/* ---------------------------- Create a material --------------------------- */
const boxMaterial = new THREE.MeshPhongMaterial({
    color: 0xc7eaff,
    opacity: 0.5,
    transparent: true
});

/* ------------------------------ Create a mesh ----------------------------- */
const box = new THREE.Mesh(boxGeometry, boxMaterial);

/* ------------------ Set the position and scale of the box ----------------- */
box.position.set(0, 0, 0);
box.scale.set(2, 1, 4);

/* ------------------------ Create a sphere geometry ------------------------ */
const sphereGeometry = new THREE.SphereGeometry(0.5, 8, 8);

/* ---------------------------- Create a material --------------------------- */
const sphereMaterial = new THREE.MeshPhongMaterial({
    color: 0xd900000,
    opacity: 1,
    transparent: true
});

/* ---------------------- Create a mesh for each sphere --------------------- */
const sphere1 = new THREE.Mesh(sphereGeometry, sphereMaterial);
const sphere2 = new THREE.Mesh(sphereGeometry, sphereMaterial);
const sphere3 = new THREE.Mesh(sphereGeometry, sphereMaterial);
const sphere4 = new THREE.Mesh(sphereGeometry, sphereMaterial);

/* --------------------- Set the position of each sphere -------------------- */
sphere1.position.set(-1, -0.5, -2);
sphere2.position.set(1, -0.5, -2);
sphere3.position.set(-1, -0.5, 2);
sphere4.position.set(1, -0.5, 2);

/* ----------------------- Create a cylinder geometry ----------------------- */
const axisCylinderGeometry = new THREE.CylinderGeometry(0.1, 0.1, 1);

/* ---------------------------- Create a material --------------------------- */
const axisCylinderMaterials = [
  new THREE.MeshPhongMaterial({
    color: 0x0000ff,
    opacity: 1,
    transparent: true
  }),
  new THREE.MeshPhongMaterial({
    color: 0x00ff00,
    opacity: 1,
    transparent: true
  }),
  new THREE.MeshPhongMaterial({
    color: 0xff0000,
    opacity: 1,
    transparent: true
  })
];

/* ---------------------- Create a mesh for each sphere --------------------- */
const axisCylinders = axisCylinderMaterials.map((material, index) => {
  const axisCylinder = new THREE.Mesh(axisCylinderGeometry, material);
  if (index === 0) {
    axisCylinder.position.set(0, 0, 1);
    axisCylinder.rotation.x = Math.PI / 2;
  } else if (index === 1) {
    axisCylinder.position.set(0, 0.5, 0.5);
  } else if (index === 2) {
    axisCylinder.position.set(0.5, 0, 0.5);
    axisCylinder.rotation.z = Math.PI / 2;
  }
  return axisCylinder;
});

/* -------------------------------------------------------------------------- */
const axis = new THREE.Object3D();
axis.add(...axisCylinders);
axis.rotation.y = Math.PI / 4;
scene.add(axis);

const cylinderGeometry = new THREE.CylinderGeometry(0.5, 0.5, 0.2);
const cylinderMaterial = new THREE.MeshPhongMaterial({
  color: 0x64271C,
  opacity: 1,
  transparent: true
});

const cylinderPositions = [
  [1, -0.5, 2],
  [1, -0.5, -2],
  [-1, -0.5, 2],
  [-1, -0.5, -2]
];

const cylinders = cylinderPositions.map(([x, y, z]) => {
  const cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
  cylinder.position.set(x, y, z);
  cylinder.rotation.x = Math.PI / 2;
  cylinder.rotation.z = Math.PI / 2;
return cylinder;
});


// Add the box and spheres meshes to into a single 3d object and add it to the scene
const car = new THREE.Object3D();
const objects = [box, ...cylinders];
objects.forEach(object => car.add(object));
scene.add(car);

/* ---------------------- Add a white directional light --------------------- */
const directionalLight = new THREE.DirectionalLight(0xffffff, 3);
directionalLight.position.set(0, 5, 0);
directionalLight.castShadow = true;
scene.add(directionalLight);

/* -------------------------- Add an ambient light -------------------------- */
const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(ambientLight);

/* ---------------------------- Render the scene ---------------------------- */
let step = 0;
function render() {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
    step += 0.01;
    car.position.x = step % 2;
    car.position.z = step % 2;
}
render();
