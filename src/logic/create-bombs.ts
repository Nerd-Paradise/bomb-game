export const createBombs = (
  scene: Phaser.Scene,
  platforms: Phaser.Physics.Arcade.StaticGroup
) => {
  const bombs = scene.physics.add.group();
  scene.physics.add.collider(bombs, platforms);
  return bombs;
};
