import * as THREE from "three";
import {
  Box3,
  Color,
  LoadingManager,
  PerspectiveCamera,
  PMREMGenerator,
  REVISION,
  Vector3,
} from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { MeshoptDecoder } from "three/examples/jsm/libs/meshopt_decoder.module.js";
import { KTX2Loader } from "three/examples/jsm/loaders/KTX2Loader.js";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import { EXRLoader } from "three/examples/jsm/loaders/EXRLoader.js";

const MANAGER = new LoadingManager();
const THREE_PATH = `https://unpkg.com/three@0.${REVISION}.x`;

const DRACO_LOADER = new DRACOLoader(MANAGER).setDecoderPath(
  `${THREE_PATH}/examples/jsm/libs/draco/gltf/`,
);
const KTX2_LOADER = new KTX2Loader(MANAGER).setTranscoderPath(
  `${THREE_PATH}/examples/jsm/libs/basis/`,
);

class Viewer {
  constructor(element, options) {
    this.el = element;

    if (!options) {
      this.state = {
        background: false,
        autoRotate: false,
        ambientIntensity: 0.3,
        ambientColor: "#FFFFFF",
        directIntensity: 0.8 * Math.PI,
        directColor: "#FFFFFF",
        bgColor: "#191919",
      };
    } else {
      this.state = options;
    }

    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
    });

    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(element.clientWidth, element.clientHeight, false);

    this.pmremGenerator = new PMREMGenerator(this.renderer);
    this.pmremGenerator.compileEquirectangularShader();

    this.basicEnvironment = this.pmremGenerator.fromScene(
      new RoomEnvironment(),
    ).texture;

    this.el.appendChild(this.renderer.domElement);
    this.scene = new THREE.Scene();

    this.scene.environment = this.basicEnvironment;

    const fov = 60;
    const aspect = this.el.clientWidth / this.el.clientHeight;
    this.camera = new PerspectiveCamera(fov, aspect, 0.01, 1000);

    this.ambientLight = new THREE.AmbientLight(
      this.state.ambientColor,
      this.state.ambientIntensity,
    );
    this.scene.add(this.ambientLight);

    const directionalLight = new THREE.DirectionalLight(
      this.state.directColor,
      this.state.directIntensity,
    );
    const directionalLight2 = new THREE.DirectionalLight(
      this.state.directColor,
      this.state.directIntensity,
    );

    const directionalLight3 = new THREE.DirectionalLight(
      this.state.directColor,
      this.state.directIntensity,
    );

    const radius = 100;
    const centerX = 0;
    const centerY = 46;
    const centerZ = 0;

    const positions = [
      { angle: 0, light: directionalLight },
      { angle: 120, light: directionalLight2 },
      { angle: 240, light: directionalLight3 },
    ];

    positions.forEach((pos) => {
      const radian = (Math.PI / 180) * pos.angle;
      const x = centerX + radius * Math.cos(radian);
      const z = centerZ + radius * Math.sin(radian);
      pos.light.position.set(x, centerY, z);
      this.scene.add(pos.light);
    });

    this.orbitControls = new OrbitControls(
      this.camera,
      this.renderer.domElement,
    );
    this.orbitControls.enableDamping = true;
    this.orbitControls.dampingFactor = 0.03;

    this.backgroundColor = new Color(this.state.bgColor);
    this.scene.background = this.backgroundColor;

    window.addEventListener("resize", this.resize.bind(this), false);

    this.clock = new THREE.Clock();
    this.render = this.render.bind(this);
    this.render();
  }

  loadModel = (object, clips, isFbx) => {
    this.object = object;

    this.object.updateMatrixWorld();
    const box = new Box3().setFromObject(this.object);
    const size = box.getSize(new Vector3()).length();
    const center = box.getCenter(new Vector3());

    this.object.position.x += this.object.position.x - center.x;
    this.object.position.y += this.object.position.y - center.y;
    this.object.position.z += this.object.position.z - center.z;

    this.orbitControls.maxDistance = size * 10;
    this.camera.near = size / 100;
    this.camera.far = size * 100;
    this.camera.updateProjectionMatrix();

    this.camera.position.copy(center);
    this.camera.position.x = size / 2.0;
    this.camera.position.y = size / 5.0;
    this.camera.position.z = size;
    this.camera.lookAt(center);

    if (isFbx && this.state.setBaseColor) {
      this.object.traverse((node) => {
        if (node.isMesh) {
          node.material.map = null;
          node.material.color.set(this.state.BaseColor || "0x696969");
          node.material.shininess = 100;
          node.needsUpdate = true;
        }
      });
    }

    if (clips.length === 0) {
      this.scene.add(this.object);
      return;
    }

    const animationsClips = clips;

    this.scene.add(this.object);

    this.mixer = new THREE.AnimationMixer(object);

    this.action = this.mixer.clipAction(animationsClips[0]);
    this.action.setLoop(THREE.LoopRepeat, 2);
    this.action.play();
  };

  resize = () => {
    this.camera.aspect = this.el.clientWidth / this.el.clientHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.el.clientWidth, this.el.clientHeight);
  };

  async load(file) {
    const fileExtension = file.split(".").pop();

    if (!fileExtension) return;

    if (fileExtension === "glb") {
      const glfLoader = new GLTFLoader()
        .setCrossOrigin("anonymous")
        .setDRACOLoader(DRACO_LOADER)
        .setKTX2Loader(KTX2_LOADER.detectSupport(this.renderer))
        .setMeshoptDecoder(MeshoptDecoder);

      const gltf = await glfLoader.loadAsync(file);
      this.loadModel(gltf.scene, gltf.animations);
    }
    if (fileExtension === "fbx") {
      const fbxLoader = new FBXLoader();

      const fbx = await fbxLoader.loadAsync(file);
      this.loadModel(fbx, fbx.animations, true);
    }
  }

  async mappingEnvironment(enviroment) {
    const envMap = await new EXRLoader().loadAsync(enviroment);

    this.pmremGenerator.fromEquirectangular(envMap).texture;
    this.pmremGenerator.dispose();

    this.scene.environment = envMap;
    this.scene.background = this.state.background
      ? envMap
      : this.backgroundColor;
  }

  render = () => {
    requestAnimationFrame(this.render);

    if (this.state.autoRotate) {
      this.object?.rotateY(0.005);
    }
    this.renderer.render(this.scene, this.camera);
    this.orbitControls.update();
    if (this.mixer) {
      this.mixer.update(this.clock.getDelta());
    }
  };

  mappingTexture = (path, name) => {
    if (!path || !name || !this.object) return;
    const texture = new THREE.TextureLoader().load(path);
    texture.colorSpace = THREE.SRGBColorSpace;

    this.object.traverse((node) => {
      if (node.isMesh) {
        const material = node.material;
        material[name] = texture;

        material.needsUpdate = true;
      }
    });
  };
}

export default Viewer;
