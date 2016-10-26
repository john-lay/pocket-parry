declare var Stage: PIXI.Container;

module PocketParryModule {
    'use strict';

    export var KenHit: PIXI.movieClip;

    PIXI.loader
        .add('Scripts/ken-hit_sprites.json')
        .load(() => {
        // create an array of textures from an image path
        var frames = [];        


        // getting hit by first flurry of kicks
        frames.push(PIXI.Texture.fromFrame('kenHit0001.png'));
        frames.push(PIXI.Texture.fromFrame('kenHit0002.png'));
        frames.push(PIXI.Texture.fromFrame('kenHit0001.png'));
        frames.push(PIXI.Texture.fromFrame('kenHit0002.png'));

        // chun turns
        frames.push(PIXI.Texture.fromFrame('ken0000.png'));
        frames.push(PIXI.Texture.fromFrame('ken0000.png'));

        // getting hit by second flurry of kicks
        for (var i = 0; i <= 3; i++) {
            frames.push(PIXI.Texture.fromFrame('kenHit0001.png'));
            frames.push(PIXI.Texture.fromFrame('kenHit0002.png'));
        }

        // chun turns again
        frames.push(PIXI.Texture.fromFrame('kenHit0002.png'));
        frames.push(PIXI.Texture.fromFrame('kenHit0002.png'));

        // final up kick
        frames.push(PIXI.Texture.fromFrame('kenHit0001.png'));
        
        // create a MovieClip (brings back memories from the days of Flash, right ?)
        KenHit = new PIXI.extras.MovieClip(frames);

        /*
        * A MovieClip inherits all the properties of a PIXI sprite
        * so you can change its position, its anchor, mask it, etc
        */
        KenHit.position.set(700, 500);
        KenHit.scale.x = -3;
        KenHit.scale.y = 3;
        KenHit.anchor.set(0.5, 0.5);
        KenHit.animationSpeed = 0.1;
        KenHit.visible = false;
        KenHit.loop = false;
                
        Stage.addChild(PocketParryModule.KenHit);
    });
}