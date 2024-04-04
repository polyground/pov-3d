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

* Basic Usage: To display a 3D model on your web page, use the following code
```angular2html
<head>
  <script src="node_modules/pov-3d/build/viewer.js"></script>
</head>
<body>
<pov-3d-viewer 
        id="pov-3d-viewer"
        preset="Polyground"
        base_color="#ffffff"
        load_progress="on"
        model="../sampleModel/Old_ToadCenser.glb"
>
</pov-3d-viewer>
</body>
```
* Only Usage HTML
```angular2html
<head>
    <script src="https://unpkg.com/pov-3d/build/viewer.js"></script>
</head>
<body>
    <pov-3d-viewer 
        id="pov-3d-viewer"
        preset="Polyground"
        base_color="#ffffff"
        load_progress="on"
        model="../sampleModel/Old_ToadCenser.glb"
    >
    </pov-3d-viewer>
</body>
```


