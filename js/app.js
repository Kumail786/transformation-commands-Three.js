import * as THREE from "/js/three.module.js";
import {OrbitControls} from "/js/OrbitControls.js"; 
import * as TURTLE from "/js/turtle.js";
import  {Shape} from "/js/Shape.js"
// Get the HTML component first (by specific Id) in which you want to render your world
var main = document.getElementById("main");

// Create your scene
const scene = new THREE.Scene();

// Choose/Create and set your camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 5, 50).setLength(100);

// Create the renderer which will draw your world on web browser
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

// Pass the renderer to the HTML component of your app you have chossen earlier
main.appendChild(renderer.domElement);

// This will create imaginary oorbits around your world.
// Orbit controls allow the camera to orbit around a target.
let controls = new OrbitControls(camera, renderer.domElement)

// this grid helper will help you in alligning your objects
//you can remove this peice of code after your are done with designing your world








// WOW! now you are done with all necessary setup

// This initialize function will initialize all your objects to your world
// All of your objects are created in the definition part of your init function
initialize();
// This animate fuction will recall itself on every next frame and
// it is supposed responsible to show every animation in your world.
animate();

// Now dive into your world and start creating creating your awesome world
// Declare all the object variables here first

// Now initialize above objects in the function below
function initialize() {

// Cartesian plan x
const cartesianXCoordinates = [
  {
    x : -10,
    y : 0
  },
  {
    x : 0,
    y : 0
  },
  {
    x : 10,
    y : 0
  },
]
const cartesian_x = new Shape()
const x_plane = cartesian_x.drawShape(cartesianXCoordinates)
scene.add(x_plane)

const cartesianYCoordinates = [
  {
    x : 0,
    y : 6
  },
  {
    x : 0,
    y : 0
  },
  {
    x : 0,
    y : -6
  },
]
const cartesian_y = new Shape()
const y_plane = cartesian_y.drawShape(cartesianYCoordinates)
scene.add(y_plane)

const triangleCoordinates = [
  {
    x : 2,
    y : 4
  },
  {
    x : 4,
    y : 6
  },
  {
    x : 2,
    y : 6
  },
  {
    x : 2,
    y : 4
  },
]
const triangle = new Shape()
const triangleScene = triangle.drawShape(triangleCoordinates)
scene.add(triangleScene)

const getLinePoints = ()=>{
  let points = []
  for(let i = -1;i<10;i++){
   let y = (1/2 * i) + 2
   points.push({
     x : i,
     y
   })
  }
  return points
}

const lineCordinates = getLinePoints()
const line = new Shape()
const lineScene = line.drawShape(lineCordinates)
scene.add(lineScene)


lineScene.geometry.translate(0,-2,0)
lineScene.geometry.rotateZ(-26.54*Math.PI/180);

triangleScene.geometry.translate(0,-2,0)
triangleScene.geometry.rotateZ(-26.54*Math.PI/180);

triangleScene.geometry.scale(1,-1,1); 

triangleScene.geometry.rotateZ(26.54*Math.PI/180);
triangleScene.geometry.translate(0,2,0)


lineScene.geometry.rotateZ(26.54*Math.PI/180);
lineScene.geometry.translate(0,2,0)


console.log(triangleScene.geometry)
  

}

// Specify all animation effect in the animation function you are seeing below
function animate() {
  requestAnimationFrame(animate);
  

  render();
}

function render() {
  renderer.render(scene, camera);
}
