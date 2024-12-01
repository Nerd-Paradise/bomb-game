import { windowHeight, windowWidth } from "../constants";

export const createBackground = (scene: Phaser.Scene) => {
  return scene.add.tileSprite(
    windowWidth / 2,
    windowHeight / 2,
    windowWidth,
    windowHeight,
    "sky"
  );
};
