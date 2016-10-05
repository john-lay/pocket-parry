declare var Stage: PIXI.Container;

module PocketParryModule {
    'use strict';

    export var KenHit: PIXI.movieClip;

    PIXI.loader
        .add('Scripts/ken-hit_sprites.json')
        .load(() => {
        // create an array of textures from an image path
        var frames = [];        

        // add the hit frames
        frames.push(PIXI.Texture.fromFrame('kenHit0000.png'));
        frames.push(PIXI.Texture.fromFrame('kenHit0001.png'));
        frames.push(PIXI.Texture.fromFrame('kenHit0002.png'));

        // create a MovieClip (brings back memories from the days of Flash, right ?)
        KenHit = new PIXI.extras.MovieClip(frames);

        /*
        * A MovieClip inherits all the properties of a PIXI sprite
        * so you can change its position, its anchor, mask it, etc
        */
        KenHit.position.set(300, 500);
        KenHit.scale.x = 3;
        KenHit.scale.y = 3;
        KenHit.anchor.set(0.5, 0.5);
        KenHit.animationSpeed = 0.1;
        KenHit.visible = false;       
                
        Stage.addChild(PocketParryModule.KenHit);
    });
}