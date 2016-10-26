declare var Stage: PIXI.Container;

module PocketParryModule {
    'use strict';

    export var Chun: PIXI.movieClip;

    PIXI.loader
        .add('Scripts/chun_sprites.json')
        .load(() => {

        // create an array of textures from an image path
        var frames = [];
        

        // add the first flurry of kick frames
        for (var i = 0; i <= 6; i++) {
                
            // magically works since the spritesheet was loaded with the pixi loader
            frames.push(PIXI.Texture.fromFrame('chunAttack000' + i + '.png'));
        }

        // add the turn frames
        frames.push(PIXI.Texture.fromFrame('chunTurnKick0000.png'));
        frames.push(PIXI.Texture.fromFrame('chunTurnKick0001.png'));

        // add the second flurry of kick frames
        for (var i = 0; i <= 6; i++) {
            frames.push(PIXI.Texture.fromFrame('chunAttack000' + i + '.png'));
        }

        // add the turn and upkick frames
        for (var i = 0; i <= 7; i++) {
            // these frames are 92x92 px and the others are 70x70, so we need to
            // add an offset. (92-70)/2 = 11. therefore we see "y": -11  
            frames.push(PIXI.Texture.fromFrame('chunTurnKick000' + i + '.png'));
        }              

        // create a MovieClip (brings back memories from the days of Flash, right ?)
        Chun = new PIXI.extras.MovieClip(frames);

        /*
        * A MovieClip inherits all the properties of a PIXI sprite
        * so you can change its position, its anchor, mask it, etc
        */
        Chun.position.set(300, 500);
        Chun.scale.x = -3;
        Chun.scale.y = 3;
        Chun.anchor.set(0.5, 0.5);
        Chun.animationSpeed = 0.1;
        Chun.loop = false;

        Chun.play();

        Stage.addChild(PocketParryModule.Chun);
    });
}