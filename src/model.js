import * as tf from "@tensorflow/tfjs";

export class LandmarkModel {
  constructor() {
    this.initFinished = false;
  }
  async initModel() {
    this.model = await tf.loadLayersModel(
      "https://jsjung00.github.io/model-json/deep4_400.json"
    );
    this.initFinished = true;
  }

  predict(landmarkArr) {
    if (!this.initFinished) {
      return;
    }
    return this.model.predict(landmarkArr);
  }
}