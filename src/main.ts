import { windowHeight, windowWidth } from "./constants";
import { createBlueSkyScene, createGameOverScene } from "./scenes";

import { Game, Types } from "phaser";

const config: Types.Core.GameConfig = {
  type: Phaser.AUTO, // Phaser.AUTO, Phaser.CANVAS, Phaser.WEBGL or Phaser.HEADLESS
  width: windowWidth,
  height: windowHeight,
  parent: "game-container", // id of the div element in index.html
  backgroundColor: "#ffff",
  physics: {
    default: "arcade",
    arcade: {
      gravity: { x: 0, y: 300 },
      debug: false,
    },
  },
  scene: [createBlueSkyScene(), createGameOverScene()],
};

export default new Game(config);
