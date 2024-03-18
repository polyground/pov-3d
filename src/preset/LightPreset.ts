import { ViewerOptions } from "../viewer.type.ts";

export const BasicPreset: ViewerOptions = {
  background: false,
  autoRotate: false,
  ambientIntensity: 0.3,
  ambientColor: "#FFFFFF",
  directIntensity: 0.8 * Math.PI,
  directColor: "#FFFFFF",
  bgColor: "#191919",
};

export const BrightPreset: ViewerOptions = {
  background: false,
  autoRotate: false,
  ambientIntensity: 1,
  ambientColor: "#FFFFFF",
  directIntensity: 5,
  directColor: "#FFFFFF",
  bgColor: "#191919",
};
