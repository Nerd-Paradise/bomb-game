import { windowHeight, windowWidth } from "../constants";

export const createHitBombHandler = (scene: Phaser.Scene) => {
  return (player: any, bomb: any) => {
    scene.physics.pause();
    player.setTint(0xff0000);
    player.anims.play("turn");

    // Transition to Game Over scene
    scene.scene.start("GameOver");
  };
};
