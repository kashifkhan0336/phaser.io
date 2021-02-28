class Example1 extends Phaser.Scene {
  constructor() {
    super({ key: "Example1" });
  }

  preload() {
    this.load.image("red_ball", "redball.png");
  }

  create() {
    this.image = this.add.image(400, 300, "red_ball");
  }
}
