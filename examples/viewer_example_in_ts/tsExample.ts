import Viewer from "../build/viewer.js";

document.addEventListener("DOMContentLoaded", async () => {
  const wrapper: HTMLElement | null = document.querySelector(".my_viewer");
  if (!wrapper) {
    throw new Error("Wrapper not found");
  }

  const exampleViewer = new Viewer(wrapper);
  await exampleViewer.load("../public/Old_ToadCenser.glb");
});
