class Random {
  static random (min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
}

module.exports = Random