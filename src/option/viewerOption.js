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

  updateAttribute(key, value) {
    this._attribute[key] = value;
  }

  static Initial() {
    return (this._attribute = {
      background: false,
      ambientIntensity: 0.3,
      ambientColor: "#FFFFFF",
      directIntensity: 0.8 * Math.PI,
      directColor: "#FFFFFF",
    });
  }

  static Polyground() {
    return (this._attribute = {
      background: false,
      ambientIntensity: 0.3,
      ambientColor: "#FFFFFF",
      directIntensity: 0.8 * Math.PI,
      directColor: "#FFFFFF",
    });
  }

  static Dark() {
    return (this._attribute = {
      background: false,
      ambientIntensity: 0.1,
      ambientColor: "#FFFFFF",
      directIntensity: 0.2 * Math.PI,
      directColor: "#FFFFFF",
    });
  }

  static Bright() {
    return (this._attribute = {
      background: false,
      ambientIntensity: 1,
      ambientColor: "#FFFFFF",
      directIntensity: 5,
      directColor: "#FFFFFF",
    });
  }
}

export default ViewerOption;
