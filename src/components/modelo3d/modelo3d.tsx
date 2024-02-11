import { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Modelo3d = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [keysPressed, setKeysPressed] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    if (!mountRef.current) return;

    // Data from the canvas
    const { clientWidth: width, clientHeight: height } = mountRef.current;

    // Scene, camera, renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(25, width / height, 0.1, 100);
    scene.add(camera);
    camera.position.set(10, 10, 70);
    camera.lookAt(new THREE.Vector3());

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);

    // OrbitControls
    const orbitControls = new OrbitControls(camera, renderer.domElement);
    orbitControls.enableDamping = true;

    // Resize canvas
    const resize = () => {
      renderer.setSize(mountRef.current!.clientWidth, mountRef.current!.clientHeight);
      camera.aspect = mountRef.current!.clientWidth / mountRef.current!.clientHeight;
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
    const handleKeyDown = (event: KeyboardEvent) => {
      setKeysPressed((prevState) => ({
        ...prevState,
        [event.key]: true,
      }));
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      setKeysPressed((prevState) => ({
        ...prevState,
        [event.key]: false,
      }));
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    // Define la función updateCameraPosition
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

    // Animate the scene
    const animate = () => {
      orbitControls.update();
      updateCameraPosition(); // Llama a updateCameraPosition aquí
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    const ambientalLight = new THREE.AmbientLight(0xffffff, 2);
    scene.add(ambientalLight);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      mountRef.current!.removeChild(renderer.domElement);
    };
  }, [keysPressed]);

  return (
    <div className='w-full h-48 mx-auto' ref={mountRef}></div>
  );
};

export default Modelo3d;
