var game = new Phaser.Game(1280, 720, Phaser.AUTO, 'game', { preload: preload, create: create, update: update, render: render});
var platforms, cursors, player;

var result = "faggot";
var step = Math.PI * 2 / 360;
var counter = 0;

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
  if (player.dragging)
  {
    var tStep = 1 + Math.sin( counter );
    player.scale.setTo(2 + tStep);
    counter += step * 10;
  }
}


function onDragStart(sprite, pointer) {
  sprite.dragging = true;
  counter = 0;
}

function onDragStop(sprite, pointer) {
  this.add.tween
  sprite.dragging = false;
  game.add.tween(player.scale).to({x: 2.0, y: 2.0}, 500, Phaser.Easing.Bounce.Out, true);
}

function render() {
  game.debug.text(result, 32, 32);
}
