import { windowHeight, windowWidth } from "../constants";

export const createPlatforms = (scene: Phaser.Scene) => {
  const platforms = scene.physics.add.staticGroup();
  platforms
    .create(windowWidth / 2, windowHeight / 2 + 368, "ground")
    .setScale(2)
    .refreshBody();

  // Additional platforms
  platforms.create(500, 600, "ground");
  platforms.create(50, 500, "ground");
  platforms.create(650, 420, "ground");
  platforms.create(55, 320, "ground");
  platforms.create(500, 170, "ground");
  return platforms;
};
