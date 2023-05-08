class Cylinder {
  constructor(r, h) {
    this.r = r;
    this.h = h;
  }
  getVolume() {
    const volume = Math.PI * Math.pow(this.r, 2) * this.h;
    console.log(volume.toFixed(4));
  }
}

const obj = new Cylinder(5, 6);
obj.getVolume();
