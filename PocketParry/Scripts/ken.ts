/// <reference path="typings/pixi/pixi.d.ts" />
/// <reference path="typings/custom.d.ts" />

declare var Stage: PIXI.Container;

// Declare a global variable for our sprite so that the animate function can access it.
var ken: PIXI.DisplayObject = null;

module PocketParryModule {
    'use strict';

    export class Ken implements IKenSprite {

        //private id: string = 'bg';
        private path: string = 'Scripts/ken_sprites.json';
        private movie: PIXI.MovieClip;

        public CanParry: boolean;

        draw = () => {
            // load the texture we need
            PIXI.loader
                .add(this.path)
                .load(this.onAssetLoad);
        }

        onAssetLoad = () => {
            // create an array of textures from an image path
            var frames = [];
            
            // add the neutral frame
            frames.push(PIXI.Texture.fromFrame('ken0000.png'));

            // add the parry frame
            frames.push(PIXI.Texture.fromFrame('kenParry0001.png'));
            
            // create a MovieClip (brings back memories from the days of Flash, right ?)
            this.movie = new PIXI.extras.MovieClip(frames);

            /*
             * A MovieClip inherits all the properties of a PIXI sprite
             * so you can change its position, its anchor, mask it, etc
             */
            this.movie.position.set(300, 500);
            this.movie.scale.x = 3;
            this.movie.scale.y = 3;
            this.movie.anchor.set(0.5, 0.5);
            this.movie.animationSpeed = 0.1;

            if (this.CanParry) {
                this.movie.play();
            } else {
                this.movie.stop();
            }            

            Stage.addChild(this.movie);

            //animate();
            
        }
    }
}

// instantiate the class and draw
new PocketParryModule.Ken().draw();