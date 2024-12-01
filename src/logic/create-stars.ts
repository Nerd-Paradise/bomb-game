export const createStars = (
  scene: Phaser.Scene,
  platforms: Phaser.Physics.Arcade.StaticGroup
) => {
  const stars = scene.physics.add.group({
    key: "star",
    repeat: 11,
    setXY: { x: 12, y: 70, stepX: 45, stepY: 40 },
  });

  stars.children.iterate((child: any) => {
    child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
    return child;
  });

  scene.physics.add.collider(stars, platforms);
  return stars;
};
