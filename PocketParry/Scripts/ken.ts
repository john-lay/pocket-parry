declare var Stage: PIXI.Container;

module PocketParryModule {
    'use strict';

    export var KenParry: PIXI.movieClip;

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
        KenParry = new PIXI.extras.MovieClip(frames);

        /*
        * A MovieClip inherits all the properties of a PIXI sprite
        * so you can change its position, its anchor, mask it, etc
        */
        KenParry.position.set(300, 500);
        KenParry.scale.x = 3;
        KenParry.scale.y = 3;
        KenParry.anchor.set(0.5, 0.5);
        KenParry.animationSpeed = 0.1;

        // make the mc interactive...
        KenParry.interactive = true;       

        KenParry.on("mousedown", () => {
            console.log("click on ken...");
            if (KenParry.playing) {
                KenParry.stop();
            } else {
                KenParry.play();
            }
        });
        
        Stage.addChild(PocketParryModule.KenParry);
    });
}