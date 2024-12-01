export const createPlayer = (
  scene: Phaser.Scene,
  platforms: Phaser.Physics.Arcade.StaticGroup
) => {
  const player = scene.physics.add
    .sprite(100, 450, "dude")
    .setScale(1.5)
    .refreshBody();

  player.setBounce(0.2);
  player.setCollideWorldBounds(true);
  player.setGravityY(300);

  scene.physics.add.collider(player, platforms);
  return player;
};

export const setupPlayerAnimations = (scene: Phaser.Scene) => {
  scene.anims.create({
    key: "left",
    frames: scene.anims.generateFrameNumbers("dude", { start: 0, end: 3 }),
    frameRate: 10,
    repeat: -1,
  });

  scene.anims.create({
    key: "turn",
    frames: [{ key: "dude", frame: 4 }],
    frameRate: 20,
  });

  scene.anims.create({
    key: "right",
    frames: scene.anims.generateFrameNumbers("dude", { start: 5, end: 8 }),
    frameRate: 10,
    repeat: -1,
  });
};

export const handlePlayerMovement = (
  scene: Phaser.Scene,
  player: Phaser.Physics.Arcade.Sprite,
  cursors: Phaser.Types.Input.Keyboard.CursorKeys
) => {
  if (cursors.left.isDown) {
    player.setVelocityX(-160);
    player.anims.play("left", true);
  } else if (cursors.right.isDown) {
    player.setVelocityX(160);
    player.anims.play("right", true);
  } else {
    player.setVelocityX(0);
    player.anims.play("turn");
  }

  if (cursors.up.isDown && player.body?.touching.down) {
    player.setVelocityY(-430);
  }
};
