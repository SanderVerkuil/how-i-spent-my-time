var game = new Phaser.Game(1280, 720, Phaser.AUTO, 'game', { preload: preload, create: create, update: update});


function preload() {
  this.game.stage.scale.pageAlignHorizontally = true;
  this.game.stage.scale.pageAlignVeritcally = true;
}

function create() {
}

function update() {
}
