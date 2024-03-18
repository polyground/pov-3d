import {
  AnimationClip,
  Color,
  Object3D,
  Object3DEventMap,
  PMREMGenerator,
} from "three";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export interface ViewerImpl {
  object: Object3D | undefined;
  renderer: THREE.WebGLRenderer;
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  ambientLight: THREE.AmbientLight;
  mixer?: THREE.AnimationMixer;
  action?: THREE.AnimationAction;
  orbitControls: OrbitControls;
  clock: THREE.Clock;
  el: HTMLElement;
  pmremGenerator: PMREMGenerator;
  basicEnvironment: any;
  backgroundColor: Color;
  state: ViewerOptions;
  loadModel: (
    object: Object3D<Object3DEventMap>,
    clips: AnimationClip[],
    isFbx?: boolean,
  ) => void;
  resize: () => void;
  render: () => void;
  load: (file: string) => Promise<void>;
  mappingTexture: (path: any, name: string) => void;
  mappingEnvironment: (enviroment: any) => void;
}

export interface ViewerOptions {
  background: boolean;
  autoRotate: boolean;
  ambientIntensity: number;
  ambientColor: string;
  directIntensity: number;
  directColor: string;
  bgColor: string;
  setBaseColor?: boolean;
  BaseColor?: string;
}
