class ViewerOption {
  constructor() {
    this._attribute = ViewerOption.Initial();
  }

  get attribute() {
    return this._attribute;
  }

  set attribute(value) {
    this._attribute = { ...this._attribute, ...value };
  }

  static Initial() {
    return (this._attribute = {
      background: false,
      autoRotate: false,
      ambientIntensity: 0.3,
      ambientColor: "#FFFFFF",
      directIntensity: 0.8 * Math.PI,
      directColor: "#FFFFFF",
      bgColor: "#191919",
    });
  }

  static Polyground() {
    return (this._attribute = {
      background: false,
      autoRotate: true,
      ambientIntensity: 0.3,
      ambientColor: "#FFFFFF",
      directIntensity: 0.8 * Math.PI,
      directColor: "#FFFFFF",
      bgColor: "#191919",
    });
  }

  static Dark() {
    return (this._attribute = {
      background: false,
      autoRotate: false,
      ambientIntensity: 0.1,
      ambientColor: "#FFFFFF",
      directIntensity: 0.2 * Math.PI,
      directColor: "#FFFFFF",
      bgColor: "#191919",
    });
  }

  static Bright() {
    return (this._attribute = {
      background: false,
      autoRotate: false,
      ambientIntensity: 1,
      ambientColor: "#FFFFFF",
      directIntensity: 5,
      directColor: "#FFFFFF",
      bgColor: "#191919",
    });
  }
}

export default ViewerOption;
