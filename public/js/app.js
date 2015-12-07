var game = new Phaser.Game(1280, 720, Phaser.AUTO, 'game', { preload: preload, create: create, update: update, render: render});
var platforms, cursors, player;

var result = "faggot";

function preload() {
  game.load.image('sky', 'img/sky.jpg');
  game.load.image('hill', 'img/hill.png');
  game.load.spritesheet('dude', 'img/dude.png', 32, 48);
}

function create() {
  game.add.sprite(0, 0, 'sky');
  game.add.sprite(0, 0, 'hill');


  // The player and its settings
  player = game.add.sprite(32, game.world.height - 150, 'dude');
  player.scale.setTo(2);
  player.anchor.setTo(0.5, 0.5);
  player.events.onDragStart.add(onDragStart, this);
  player.events.onDragStop.add(onDragStop, this);
}

function update() {
  player.frame = 4;
  player.inputEnabled = true;
  player.input.enableDrag(true);
}


function onDragStart(sprite, pointer) {
  sprite.
}

function onDragStop(sprite, pointer) {

}

function render() {
  game.debug.text(result, 32, 32);
}
