declare var Stage: PIXI.Container;

module PocketParryModule {
    'use strict';

    var texture: PIXI.Texture = PIXI.Texture.fromImage('Assets/bg.gif');

    export var Background: PIXI.Sprite = new PIXI.Sprite(texture);
       
    // Setup the position and scale of the background
    Background.position.x = 0;
    Background.position.y = 0;

    Background.scale.x = 2;
    Background.scale.y = 2;
}

Stage.addChild(PocketParryModule.Background);