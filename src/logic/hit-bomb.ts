import { windowHeight, windowWidth } from "../constants";
import { GameState } from "../types";

export const createHitBombHandler = (scene: Phaser.Scene, gameState: GameState) => {
  return (player: any, bomb: any) => {
    scene.physics.pause();
    player.setTint(0xff0000);
    player.anims.play("turn");

    // Transition to Game Over scene
    scene.scene.start("GameOver", {
      score: gameState.score
    });
  };
};
