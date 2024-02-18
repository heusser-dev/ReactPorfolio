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
    camera.position.set(48,13,20);
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
      console.log(camera)
    };
    window.addEventListener("resize", resize);

    const gltfLoader = new GLTFLoader();
    gltfLoader.load('./models/earth/scene.gltf', (gltf) => {
      const model = gltf.scene;
      
      model.scale.set(2.6, 2.6, 2.6); 
      model.position.y = 0; // Ajusta la posición en el eje Y según sea necesario/ Ajusta los valores según sea necesario1
      scene.add(model);
      

      // Set the initial rotation of the model
      model.rotation.y = Math.PI / 2; // Rotate 90 degrees initially
      console.log(model)
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
                    model.rotation.y += 0.003;
                    model.rotation.x += 0.0008  ; // Adjust the rotation speed as needed
                    // Adjust the rotation speed as needed
        }
      }
    };
    animate();

    const ambientalLight = new THREE.AmbientLight(0xffffff, 4);
    scene.add(ambientalLight);

    return () => {
      window.removeEventListener("resize", resize);
      currentRef.removeChild(renderer.domElement);
      console.log(camera)
    };
  }, []);

  return (
    <div>

    <h2 className=" text-white text-2xl"></h2>
    <div className='w-full h-96 ml-0 mr-0 mt-6 pt-0' ref={mountRef}></div>
    </div>
  );
};

export default Modelo3d;
