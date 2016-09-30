declare var Stage: PIXI.Container;

module PocketParryModule {
    'use strict';

    export var Ken: PIXI.movieClip;

    PIXI.loader
        .add('Scripts/ken_sprites.json')
        .load(() => {

        // create an array of textures from an image path
        var frames = [];        

        // add the neutral frame
        frames.push(PIXI.Texture.fromFrame('ken0000.png'));

        // add the parry frame
        frames.push(PIXI.Texture.fromFrame('kenParry0001.png'));

        // create a MovieClip (brings back memories from the days of Flash, right ?)
        Ken = new PIXI.extras.MovieClip(frames);

        /*
        * A MovieClip inherits all the properties of a PIXI sprite
        * so you can change its position, its anchor, mask it, etc
        */
        Ken.position.set(300, 500);
        Ken.scale.x = 3;
        Ken.scale.y = 3;
        Ken.anchor.set(0.5, 0.5);
        Ken.animationSpeed = 0.1;

        // make the mc interactive...
        Ken.interactive = true;       

        Ken.on("mousedown", () => {
            console.log("click on ken...");
            if (Ken.playing) {
                Ken.stop();
            } else {
                Ken.play();
            }
        });

        Stage.addChild(PocketParryModule.Ken);
    });
}