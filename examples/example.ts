import { Viewer } from "../src/viewer.ts";
import { BasicPreset } from "../src/preset/LightPreset.ts";

document.addEventListener("DOMContentLoaded", async () => {
  const wrapper: HTMLElement | null = document.querySelector(".my_viewer");
  if (!wrapper) {
    throw new Error("Wrapper not found");
  }

  const exampleViewer = new Viewer(wrapper, BasicPreset);
  await exampleViewer.load("../public/Old_ToadCenser.glb");
});
