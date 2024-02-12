import { useRef, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Modelo3d = () => {
  const mountRef = useRef(null);

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
    gltfLoader.load('./models/female/scene.gltf', (gltf) => {
      const model = gltf.scene;
      model.scale.set(0.3, 0.3, 0.3); // Ajusta los valores según sea necesario
      scene.add(model);

      // Set the initial rotation of the model
      model.rotation.y = Math.PI / 2; // Rotate 90 degrees initially
    });

    // Animate the scene
    const animate = () => {
      orbitControls.update();
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

    return () => {
      window.removeEventListener("resize", resize);
      currentRef.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className='w-full h-56 ml-0' ref={mountRef}></div>
  );
};

export default Modelo3d;
