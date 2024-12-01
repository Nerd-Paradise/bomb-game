export interface GameState {
  background: Phaser.GameObjects.TileSprite | null;
  score: number;
  player: Phaser.Physics.Arcade.Sprite | null;
  platforms: Phaser.Physics.Arcade.StaticGroup | null;
  stars: Phaser.Physics.Arcade.Group | null;
  bombs: Phaser.Physics.Arcade.Group | null;
  scoreText: Phaser.GameObjects.Text | null;
  cursors: Phaser.Types.Input.Keyboard.CursorKeys | null;
}
