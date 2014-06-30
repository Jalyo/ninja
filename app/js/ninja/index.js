define([
    'ninja/loader/assets',
    'ninja/worldCreate',
    'ninja/gameUpdate'
], function(assetsLoader, worldCreate, gameUpdate) {

    var state = {}

    var game = new Phaser.Game(1280, 704, Phaser.AUTO, 'ninja-game', {
        preload: function () {
            assetsLoader(game);
        },
        create: function() {
            worldCreate(game, state);
        }, 
        update: function() {
            gameUpdate(game, state);
        }
    });

    

})