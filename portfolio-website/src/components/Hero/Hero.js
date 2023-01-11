import * as THREE from "three";
import "./index.css";
import gsap from "gsap";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import React from "react";

function Hero() {
  // Scene
  const scene = new THREE.Scene();

  // Create our scene
  const geometry = new THREE.SphereGeometry(3, 64, 64);
  const material = new THREE.MeshStandardMaterial({
    color: "#00ff83",
    roughness: 0.5,
  });
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  // Sizes
  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  // Light
  const light = new THREE.PointLight(0xffffff, 1, 100);
  light.position.set(0, 10, 10); // x, y, z positions
  light.intensity = 1.25;
  scene.add(light);

  // Camera
  const camera = new THREE.PerspectiveCamera(
    45,
    sizes.width / sizes.height,
    0.1,
    100
  );
  camera.position.z = 20;
  scene.add(camera);

  // Renderer
  const canvas = document.querySelector(".webgl");
  const renderer = new THREE.WebGLRenderer({ canvas });
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(2);
  renderer.render(scene, camera);

  // Controls
  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  controls.enablePan = false;
  controls.enableZoom = false;
  controls.autoRotate = true;

  // Resize
  window.addEventListener("resize", () => {
    // Update sizes
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;
    // Update Camera

    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();
    renderer.setSize(sizes.width, sizes.height);
  });

  const loop = () => {
    controls.update();
    renderer.render(scene, camera);
    window.requestAnimationFrame(loop);
  };
  loop();

  // Timeline animation
  const tl = gsap.timeline({ defaults: { durationL: 1 } });
  tl.fromTo(mesh.scale, { z: 0, x: 0, y: 0 }, { z: 1, x: 1, y: 1 });
  tl.fromTo("nav", { y: "-100%" }, { y: "0%" });
  tl.fromTo(".title", { opacity: 0 }, { opacity: 1 });
  tl.fromTo(".subtitle", { opacity: 0 }, { opacity: 1 });

  // Mouse animation color
  let mouseDown = false;
  let rgb = [];
  window.addEventListener("mousedown", () => (mouseDown = true));
  window.addEventListener("mouseup", () => (mouseDown = false));

  window.addEventListener("mousemove", (e) => {
    if (mouseDown) {
      rgb = [
        Math.round((e.pageX / sizes.width) * 255),
        Math.round((e.pageY / sizes.height) * 255),
        150,
      ];
      // Let's animate
      let newColor = new THREE.Color(`rgb(${rgb.join(",")})`);
      gsap.to(mesh.material.color, {
        r: newColor.r,
        g: newColor.g,
        b: newColor.b,
      });
    }
  });

  return (
    <>
      <nav>
        <a
          href="mailto:liebenbergluca@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          liebenbergluca@gmail.com
        </a>

        <ul>
          <li>About</li>
          <li>Skills</li>
          <li>Contact</li>
        </ul>
      </nav>
      <h1 class="title">Hi, I'm Luca</h1>
      <p class="subtitle">
        Designer, Blockchain enthusiast and Developer, based in Cape Town, SA 💻
        🌍
      </p>
    </>
  );
}

export default Hero;
