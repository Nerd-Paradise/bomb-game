import { Scene } from "phaser";
import { windowHeight, windowWidth } from "../constants";
import {
  setupPlayerAnimations,
  createStars,
  createPlatforms,
  createPlayer,
  createBombs,
  createCollectStarHandler,
  handlePlayerMovement,
  createHitBombHandler,
  createBackground,
} from "../logic";
import { GameState } from "../types";

export const createBlueSkyScene = () => {
  const gameState: GameState = {
    background: null,
    score: 0,
    player: null,
    platforms: null,
    stars: null,
    bombs: null,
    scoreText: null,
    cursors: null,
  };

  return class BlueSky extends Scene {
    constructor() {
      super("BlueSky");
    }

    preload() {
      this.load.setPath("assets");

      this.load.image("sky", "bg.png");
      this.load.image("ground", "platform.png");
      this.load.image("star", "star.png");
      this.load.image("bomb", "bomb.png");
      this.load.spritesheet("dude", "dude.png", {
        frameWidth: 32,
        frameHeight: 48,
      });
    }

    create() {
      gameState.score = 0;
      // Moving Background
      gameState.background = createBackground(this);

      // Platforms
      gameState.platforms = createPlatforms(this);

      // Player
      gameState.player = createPlayer(this, gameState.platforms);

      // Animations
      setupPlayerAnimations(this);

      // Stars
      gameState.stars = createStars(this, gameState.platforms);

      // Collect Star Handler
      const collectStar = createCollectStarHandler(this, gameState);
      this.physics.add.overlap(
        gameState.player,
        gameState.stars,
        collectStar,
        undefined,
        this
      );

      // Bombs
      gameState.bombs = createBombs(this, gameState.platforms);

      // Hit Bomb Handler
      const hitBomb = createHitBombHandler(this, gameState);
      this.physics.add.collider(
        gameState.player,
        gameState.bombs,
        hitBomb,
        undefined,
        this
      );

      // Score
      gameState.scoreText = this.add.text(10, 16, "Score: 0", {
        fontSize: "32px",
        fontStyle: "bold",
        color: "#ffff",
      });
    }

    update() {
      // Move the background downward
      if (gameState.background) {
        gameState.background.tilePositionY += 0.5;
      }

      gameState.cursors = this.input.keyboard?.createCursorKeys()!;

      if (gameState.player && gameState.cursors) {
        handlePlayerMovement(this, gameState.player, gameState.cursors);
      }
    }
  };
};
