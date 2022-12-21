/* -------------- Definition of the scene, camera and renderer -------------- */

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000); // Set the background color to black
document.body.appendChild(renderer.domElement);

/* -------------------------------------------------------------------------- */
/*            Definition of an object/geometry and camera position            */
/* -------------------------------------------------------------------------- */

/* ----------- Render the first 3 triangles ---------- */
const vertices = new Float32Array([
    // pink triangle
    0.0, 0.0, 0.0,
    0.5, 0.75, 0.0,
    1.0, 0.0, 0.0,

    // yellow triangle
    0.0, 0.0, 0.0,
    -0.35, -1.0, 0.0,
    -0.7, 0.25, 0.0,

    // gradient triangle
    -0.2, 0.15, 0.0,
    0.35, 0.65, 0.0,
    -0.85, 0.9, 0.0,
]);

var colors = new Uint8Array([
    255, 0, 255, // pink
    255, 0, 255,
    255, 0, 255,

    255, 255, 0,   // yellow
    255, 255, 0,
    255, 255, 0,

    255, 0, 0,   // gradient
    255, 255, 0,
    0, 0, 255,
]);

var geometry = new THREE.BufferGeometry();
geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3, true));

const geometryMaterial = new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.DoubleSide });
const triangle = new THREE.Mesh(geometry, geometryMaterial);
scene.add(triangle);


/* ----------- Render the 4th triangle (wireframe) ---------- */
const wireFrameTriangleVertices = new Float32Array([
    0.15, -0.95, 0.0,
    0.90, -0.7, 0.0,
    0.65, 0.10, 0.0,
]);

const wireFrameTriangleColors = new Uint8Array([
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
]);

var geometry2 = new THREE.BufferGeometry();
geometry2.setAttribute('position', new THREE.BufferAttribute(wireFrameTriangleVertices, 3));
geometry2.setAttribute('color', new THREE.BufferAttribute(wireFrameTriangleColors, 3, true));

const wireframeMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });
const wireframeTriangle = new THREE.Mesh(geometry2, wireframeMaterial);
scene.add(wireframeTriangle);
/* -------------------------------------------------------------------------- */

camera.position.z = 5;

/* ----------------------------- Scene rendering ---------------------------- */

function render() {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
}
render();
