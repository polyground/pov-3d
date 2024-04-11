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
import { KTX2Loader } from "three/addons/loaders/KTX2Loader.js";
import { DRACOLoader } from "three/addons/loaders/DRACOLoader.js";
import { FBXLoader } from "three/addons/loaders/FBXLoader.js";
import { MeshoptDecoder } from "three/addons/libs/meshopt_decoder.module.js";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";
import { EXRLoader } from "three/addons/loaders/EXRLoader.js";
import ViewerOption from "./option/viewerOption";
import { OBJLoader } from "three/addons/loaders//OBJLoader.js";

const MANAGER = new LoadingManager();
const THREE_PATH = `https://unpkg.com/three@0.${REVISION}.x`;

const DRACO_LOADER = new DRACOLoader(MANAGER).setDecoderPath(
  `${THREE_PATH}/examples/jsm/libs/draco/gltf/`,
);
const KTX2_LOADER = new KTX2Loader(MANAGER).setTranscoderPath(
  `${THREE_PATH}/examples/jsm/libs/basis/`,
);

export class Pov_3d_viewer extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    this.checkinitalAttribute = {
      model: !!this.model,
      preset: !!this.preset,
      base_color: !!this.baseColor,
      load_progress: !!this.loadProgress,
      auto_rotate: !!this.autoRotate,
    };

    this.viewerOption = new ViewerOption();

    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
    });

    this.renderer.setPixelRatio(window.devicePixelRatio);

    this.pmremGenerator = new PMREMGenerator(this.renderer);
    this.pmremGenerator.compileEquirectangularShader();

    this.basicEnvironment = this.pmremGenerator.fromScene(
      new RoomEnvironment(),
    ).texture;

    this.scene = new THREE.Scene();

    this.scene.environment = this.basicEnvironment;

    this.initialSetup();
  }
  connectedCallback() {
    this.dispatchEvent(
      new CustomEvent("pov-ready", { detail: { viewer: this } }),
    );
  }

  static get observedAttributes() {
    return [
      "model",
      "preset",
      "base_color",
      "background_color",
      "width",
      "height",
    ];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case "width":
        this.viewerWidth = newValue;
        this.resize();
        break;
      case "height":
        this.viewerHeight = newValue;
        this.resize();
        break;
      case "preset":
        if (this.checkinitalAttribute.preset) {
          this.checkinitalAttribute.preset = false;
          return;
        }
        this.viewerOption.attribute =
          ViewerOption[newValue]() || ViewerOption.Initial;
        this.lightSetup();
        this.backgroundSetup();
        break;
      case "background_color":
        this.backgroundSetup();
        break;
      case "model":
        this.load(newValue)
          .then(() => {
            if (this.baseColor) {
              this.baseColorSetup();
            }
            console.log("Model loaded successfully");
          })
          .catch((error) => console.error("Error while loading model", error));
        break;
      case "base_color":
        if (this.checkinitalAttribute.base_color) {
          this.checkinitalAttribute.base_color = false;
          return;
        }
        this.baseColorSetup();
        break;
    }
  }

  initialSetup = () => {
    this.dispatchEvent(
      new CustomEvent("pov-setup", { detail: { viewer: this } }),
    );

    if (this.preset) {
      this.viewerOption.attribute = ViewerOption[this.preset]();
    }

    this.viewerWidth = this.width || this.clientWidth || 500;
    this.viewerHeight = this.height || this.clientHeight || 500;

    this.renderer.setSize(this.viewerWidth, this.viewerHeight);
    const fov = 60;
    const aspect = this.viewerWidth / this.viewerHeight;
    this.camera = new PerspectiveCamera(fov, aspect, 0.01, 1000);

    this.lightSetup();

    this.controlSetup();

    this.backgroundSetup();

    this.shadowRoot.appendChild(this.renderer.domElement);

    this.canvas = this.shadowRoot.querySelector("canvas");

    window.addEventListener("resize", this.resize.bind(this), false);

    this.clock = new THREE.Clock();
    this.render();
  };

  controlSetup = () => {
    this.orbitControls = new OrbitControls(
      this.camera,
      this.renderer.domElement,
    );
    this.orbitControls.enableDamping = true;
    this.orbitControls.dampingFactor = 0.03;
  };

  backgroundSetup = () => {
    this.scene.background = new Color(this.backgroundColor);
  };

  lightSetup = () => {
    if (this.ambientLight) this.scene.remove(this.ambientLight);
    if (this.directionalLight) this.scene.remove(this.directionalLight);
    if (this.directionalLight2) this.scene.remove(this.directionalLight2);
    if (this.directionalLight3) this.scene.remove(this.directionalLight3);

    this.ambientLight = new THREE.AmbientLight(
      this.viewerOption.attribute.ambientColor,
      this.viewerOption.attribute.ambientIntensity,
    );

    this.scene.add(this.ambientLight);

    this.directionalLight = new THREE.DirectionalLight(
      this.viewerOption.attribute.directColor,
      this.viewerOption.attribute.directIntensity,
    );
    this.directionalLight2 = new THREE.DirectionalLight(
      this.viewerOption.attribute.directColor,
      this.viewerOption.attribute.directIntensity,
    );

    this.directionalLight3 = new THREE.DirectionalLight(
      this.viewerOption.attribute.directColor,
      this.viewerOption.attribute.directIntensity,
    );

    const radius = 100;
    const centerX = 0;
    const centerY = 46;
    const centerZ = 0;

    const positions = [
      { angle: 0, light: this.directionalLight },
      { angle: 120, light: this.directionalLight2 },
      { angle: 240, light: this.directionalLight3 },
    ];

    positions.forEach((pos) => {
      const radian = (Math.PI / 180) * pos.angle;
      const x = centerX + radius * Math.cos(radian);
      const z = centerZ + radius * Math.sin(radian);
      pos.light.position.set(x, centerY, z);
      this.scene.add(pos.light);
    });
  };

  baseColorSetup = () => {
    if (!this.object) return;

    this.object.traverse((node) => {
      if (node.isMesh) {
        if (this.objectType === "fbx") {
          node.material.map = null;
        }

        node.material.color.set(new Color(this.baseColor || "#696969"));

        node.material.shininess = 100;
        node.needsUpdate = true;
      }
    });
  };

  traverseMaterials(object, callback) {
    object.traverse((node) => {
      if (!node.geometry) return;
      const materials = Array.isArray(node.material)
        ? node.material
        : [node.material];
      materials.forEach(callback);
    });
  }

  clear() {
    if (!this.object) return;

    this.scene.remove(this.object);

    // dispose geometry
    this.object.traverse((node) => {
      if (!node.geometry) return;

      node.geometry.dispose();
    });

    // dispose textures
    this.traverseMaterials(this.object, (material) => {
      for (const key in material) {
        if (key !== "envMap" && material[key] && material[key].isTexture) {
          material[key].dispose();
        }
      }
    });
  }

  addProgressBar = () => {
    if (this.loadProgress !== "on") return;

    let style = document.createElement("style");

    style.textContent = `
        .progress_wrapper {
            width: 100%;
            height: 20px;
            background-color: rgba(0,0,0,0.5);
            display: flex;
            z-index: 100;
            color: #fff;
            font-size: 20px;
            font-weight: bold;
            }
            
        .progress_bar {
            width: 0%;
            height: 100%;
            background-color: gray;
        }
   `;

    this.shadowRoot.appendChild(style);

    this.progressWrapper = document.createElement("div");
    this.progressWrapper.setAttribute("class", "progress_wrapper");

    this.progressBar = document.createElement("div");

    this.progressBar.setAttribute("class", "progress_bar");

    this.shadowRoot.insertBefore(this.progressWrapper, this.canvas);
    this.progressWrapper.appendChild(this.progressBar);
  };

  removeProgressBar = () => {
    if (
      this.loadProgress === "on" &&
      this.shadowRoot.contains(this.progressWrapper)
    ) {
      this.shadowRoot.removeChild(this.progressWrapper);
    }
  };

  setLoadProgress = (progressEvent) => {
    if (!this.progressWrapper) return;

    this.progressState = (progressEvent.loaded / progressEvent.total) * 100;

    this.progressBar.style.width = `${this.progressState}%`;

    this.dispatchEvent(
      new CustomEvent("pov-event", {
        detail: {
          type: "load-progress",
          loaded: progressEvent.loaded,
          total: progressEvent.total,
        },
      }),
    );
  };

  async load(file) {
    this.addProgressBar();

    if (!file) return;
    const fileExtension = file.split(".").pop();

    if (
      fileExtension !== "glb" &&
      fileExtension !== "fbx" &&
      fileExtension !== "obj"
    )
      throw new Error("File extension not found");

    if (fileExtension === "obj") {
      this.objectType = "obj";
      const objLoader = new OBJLoader();
      await objLoader
        .loadAsync(file, (progressEvent) => this.setLoadProgress(progressEvent))
        .then((obj) => {
          this.modelSetup(obj, []);
          this.dispatchEvent(new CustomEvent("pov-model-loaded"));
        })
        .catch((error) => {
          console.error("Error while loading obj file", error);
        });
    }

    if (fileExtension === "glb") {
      this.objectType = "glb";
      const glfLoader = new GLTFLoader()
        .setCrossOrigin("anonymous")
        .setDRACOLoader(DRACO_LOADER)
        .setKTX2Loader(KTX2_LOADER.detectSupport(this.renderer))
        .setMeshoptDecoder(MeshoptDecoder);

      await glfLoader
        .loadAsync(file, (progressEvent) => this.setLoadProgress(progressEvent))
        .then((gltf) => {
          this.modelSetup(gltf.scene, gltf.animations);
          this.dispatchEvent(new CustomEvent("pov-model-loaded"));
        })
        .catch((error) => {
          console.error("Error while loading gltf file", error);
        });
    }
    if (fileExtension === "fbx") {
      this.objectType = "fbx";
      const fbxLoader = new FBXLoader();

      await fbxLoader
        .loadAsync(file, (progressEvent) => this.setLoadProgress(progressEvent))
        .then((fbx) => {
          this.modelSetup(fbx, fbx.animations, true);
          this.dispatchEvent(
            new CustomEvent("load-finish", { detail: { viewer: this } }),
          );
        })
        .catch((error) => {
          console.error("Error while loading fbx file", error);
        });
    }
  }

  modelSetup = (object, clips) => {
    this.clear();

    this.object = object;

    this.object.updateMatrixWorld();
    const box = new Box3().setFromObject(object);
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

    if (clips.length === 0) {
      this.scene.add(this.object);
      this.removeProgressBar();
      return;
    }

    const animationsClips = clips;

    this.mixer = new THREE.AnimationMixer(object);

    this.action = this.mixer.clipAction(animationsClips[0]);
    this.action.setLoop(THREE.LoopRepeat, 2);
    this.action.play();
    this.scene.add(this.object);

    this.removeProgressBar();
  };

  resize = () => {
    if (this.width && this.height) return;
    this.viewerWidth = this.width || this.shadowRoot.host.clientWidth;
    this.viewerHeight = this.height || this.shadowRoot.host.clientHeight;

    this.camera.aspect = this.viewerWidth / this.viewerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.viewerWidth, this.viewerHeight);
  };

  render = () => {
    requestAnimationFrame(this.render);

    if (this.autoRotate === "on") {
      this.object?.rotateY(0.005);
    }

    this.renderer.render(this.scene, this.camera);
    this.orbitControls.update();

    if (this.mixer) {
      this.mixer.update(this.clock.getDelta());
    }
  };

  // mappingTexture = (path, name) => {
  //   if (!path || !name || !this.object) return;
  //   const texture = new THREE.TextureLoader().load(path);
  //   texture.colorSpace = THREE.SRGBColorSpace;
  //
  //   this.object.traverse((node) => {
  //     if (node.isMesh) {
  //       const material = node.material;
  //       material[name] = texture;
  //
  //       material.needsUpdate = true;
  //     }
  //   });
  // };

  // async mappingEnvironment(enviroment) {
  //   const envMap = await new EXRLoader().loadAsync(enviroment);
  //
  //   this.pmremGenerator.fromEquirectangular(envMap).texture;
  //   this.pmremGenerator.dispose();
  //
  //   this.scene.environment = envMap;
  //   this.scene.background = this.viewerOption.attribute.background
  //     ? envMap
  //     : this.backgroundColor;
  // }

  get model() {
    return this.getAttribute("model");
  }

  get width() {
    return this.getAttribute("width");
  }

  get height() {
    return this.getAttribute("height");
  }

  get preset() {
    return this.getAttribute("preset");
  }

  get baseColor() {
    return this.getAttribute("base_color");
  }
  get backgroundColor() {
    return this.getAttribute("background_color") || "#000000";
  }

  get loadProgress() {
    return this.getAttribute("load_progress");
  }

  get autoRotate() {
    return this.getAttribute("auto_rotate");
  }
}

customElements.define("pov-3d-viewer", Pov_3d_viewer);
