import { useEffect } from "react";
function App() {
  useEffect(() => {
    // document.addEventListener("DOMContentLoaded", async () => {
    //   const wrapper = document.querySelector(".my_viewer");
    //   if (!wrapper) {
    //     throw new Error("Wrapper not found");
    //   }
    //
    //   const exampleViewer = new Viewer(wrapper);
    //   await exampleViewer.load("../../sampleAssets/Old_ToadCenser.glb");
    // });
  }, []);

  return (
    <>
      <main>
        <div className="description">
          <header>
            <h1>
              <a href="../index.html">Pov-3d</a>
            </h1>
          </header>
          <p>
            This is a simple example of how to use Pov-3d. You can drag and drop
            a glTF 2.0 file or folder here to view it.
          </p>
        </div>
        <div className="my_viewer"></div>
      </main>
      <footer>
        <p>© 2024 Pov-3d</p>
      </footer>
    </>
  );
}

export default App;
