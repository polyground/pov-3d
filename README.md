# pov-3d 
### **Introduction to the Pov-3d Viewer Library**

The Web 3D Viewer is a free, open-source web solution for visualizing and navigating 3D models in a browser. With this library, you can easily add 3D model viewer capabilities to your web application without complex setup.

- Key Features:
  - Free and open-source. 
  - Supports various 3D file formats.
  - Responsive design for use on all devices.
  - Utilizes WebGL for high-performance 3D rendering.

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* Installation
  ```sh
  npm install pov-3d 
  yarn add pov-3d
  ```

* Example npm Package Usage
```angular2html
<head>
  <script src="node_modules/pov-3d/build/pov-3d.js"></script>
</head>
```

* Using unpkg.com with `<script>` Tags
```angular2html
<head>
    <script src="https://unpkg.com/pov-3d/build/pov-3d.js"></script>
</head>

```

## Usage
The Web 3D Viewer library is designed to be easy to use and integrate into your web application. You can add a 3D model viewer to your web page by including the `pov-3d-viewer` custom element and setting the desired attributes.

### Basic Example
```angular2html
<pov-3d-viewer model="path/to/3d-model.glb"></pov-3d-viewer>
```

### Attributes
The `pov-3d-viewer` custom element supports the following attributes:
- `model` - The path to the 3D model file.
- `preset` - The preset configuration to use.
  - Available presets: `Initial(Default)`, `Bright`, `Dark`, `Polyground`.
- `baseColor` - The base color of the 3D model.
  - Accepts hex color codes (e.g., `#ff0000`). 
- `autoRotate` - Whether to enable auto-rotation of the 3D model.
- `loadProgress` - Whether to display a loading progress bar.

### Example with Attributes
```angular2html
<pov-3d-viewer 
  model="path/to/3d-model.glb" 
  preset="default" 
  baseColor="#ff0000" 
  autoRotate="on"
  loadProgress="on"
></pov-3d-viewer>
```

### Events
The `pov-3d-viewer` custom element emits the following events:
- `pov-setup` - Emitted when the default environment setup is completed for the pov-3d-viewer.
- `pov-ready` - Emitted when the 3D model is ready to be loaded.
- `pov-event` - Emitted when a custom event is triggered.
- `pov-model-load` - Emitted when the 3D model is loaded.

### Example with Events
```angular2html
<pov-3d-viewer></pov-3d-viewer>
<script>
    const povViewer = document.querySelector('pov-3d-viewer');
    
    povViewer.addEventListener('pov-setup', () => {
      console.log('Default environment setup completed');
      povViewer.setAttribute("preset", "bright");
      povViewer.setAttribute("base_color", "#ff0000");
      povViewer.setAttribute("auto_rotate", "on");
      povViewer.setAttribute("load_progress", "on");
    });
    
    povViewer.addEventListener('pov-ready', () => {
        console.log('3D model is ready to be loaded');
      povViewer.setAttribute("model", "path/to/3d-model.glb");
    });
  
    povViewer.addEventListener('pov-model-load', () => {
        console.log('3D model is loaded');
    });
  
    povViewer.addEventListener('pov-event', (event) => {
        console.log('Custom event:', event.detail);
    });

</script>
```



## Contributing
This project is open-source and welcomes contributions from the community. You can contribute in various ways, including adding new features, fixing bugs, and improving documentation.

## License
This library is distributed under the MIT License.
