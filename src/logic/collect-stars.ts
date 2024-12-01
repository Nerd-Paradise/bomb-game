import { GameState } from "../types";

export const createCollectStarHandler = (
  scene: Phaser.Scene,
  gameState: GameState
) => {
  return (player: any, star: any) => {
    star.disableBody(true, true);

    gameState.score += 10;
    if (gameState.scoreText) {
      gameState.scoreText.setText(`Score: ${gameState.score}`);
    }

    if (gameState.stars?.countActive(true) === 0 && gameState.stars) {
      gameState.stars.children.iterate((child: any) => {
        child.enableBody(true, child.x, 0, true, true);
        return child;
      });

      if (gameState.bombs) {
        const x =
          player.x < 400
            ? Phaser.Math.Between(400, 800)
            : Phaser.Math.Between(0, 400);

        const bomb = gameState.bombs.create(x, 16, "bomb");
        bomb.setBounce(1);
        bomb.setCollideWorldBounds(true);
        bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
      }
    }
  };
};
