import Viewer from "../../build/viewer";

document.addEventListener("DOMContentLoaded", async () => {
  const wrapper = document.querySelector(".my_viewer");
  if (!wrapper) {
    throw new Error("Wrapper not found");
  }

  const exampleViewer = new Viewer(wrapper);
  await exampleViewer.load("../sampleAssets/Old_ToadCenser.glb");
});
