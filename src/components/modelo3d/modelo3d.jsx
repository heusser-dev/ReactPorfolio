import { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Modelo3d = () => {
  const mountRef = useRef(null);
  const [keysPressed, setKeysPressed] = useState({});

  useEffect(() => {
    // Data from the canvas
    const currentRef = mountRef.current;
    const { clientWidth: width, clientHeight: height } = currentRef;

    // Scene, camera, renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(25, width / height, 0.1, 100);
    scene.add(camera);
    camera.position.set(10, 10, 70);
    camera.lookAt(new THREE.Vector3());

    const renderer = new THREE.WebGLRenderer(({ alpha: true }));
    renderer.setSize(width, height);
    currentRef.appendChild(renderer.domElement);

    // OrbitControls
    const orbitControls = new OrbitControls(camera, renderer.domElement);
    orbitControls.enableDamping = true;

    // Resize canvas
    const resize = () => {
      renderer.setSize(currentRef.clientWidth, currentRef.clientHeight);
      camera.aspect = currentRef.clientWidth / currentRef.clientHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", resize);

    const gltfLoader = new GLTFLoader();
    gltfLoader.load('./models/man/scene.gltf', (gltf) => {
      const model = gltf.scene;
      model.scale.set(0.3, 0.3, 0.3); // Ajusta los valores según sea necesario
      scene.add(model);

      // Set the initial rotation of the model
      model.rotation.y = Math.PI / 2; // Rotate 90 degrees initially
    });

    // Event listeners for keyboard input
    const handleKeyDown = (event) => {
      setKeysPressed((prevState) => ({
        ...prevState,
        [event.key]: true,
      }));
    };

    const handleKeyUp = (event) => {
      setKeysPressed((prevState) => ({
        ...prevState,
        [event.key]: false,
      }));
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    // Animate the scene
    const animate = () => {
      orbitControls.update();
      updateCameraPosition();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);

      // Rotate the model
      if (scene.children.length > 0) {
        const model = scene.children.find((child) => child.type === "Group");
        if (model) {
          model.rotation.y += 0.01; // Adjust the rotation speed as needed
        }
      }
    };
    animate();

    const ambientalLight = new THREE.AmbientLight(0xffffff, 2);
    scene.add(ambientalLight);

    // Update camera position based on keys pressed
    const updateCameraPosition = () => {
      const speed = 0.1;

      if (keysPressed["ArrowUp"] || keysPressed["w"]) {
        camera.position.z -= speed;
      }
      if (keysPressed["ArrowDown"] || keysPressed["s"]) {
        camera.position.z += speed;
      }
      if (keysPressed["ArrowLeft"] || keysPressed["a"]) {
        camera.position.x -= speed;
      }
      if (keysPressed["ArrowRight"] || keysPressed["d"]) {
        camera.position.x += speed;
      }
    };

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      currentRef.removeChild(renderer.domElement);
    };
  }, [keysPressed]);

  return (
    <div className='w-full h-48 mx-auto' ref={mountRef}></div>
  );
};

export default Modelo3d;
