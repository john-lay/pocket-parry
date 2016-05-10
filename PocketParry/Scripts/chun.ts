﻿/// <reference path="typings/pixi/pixi.d.ts" />
/// <reference path="typings/custom.d.ts" />

declare var Stage: PIXI.Container;

// Declare a global variable for our sprite so that the animate function can access it.
var chun: PIXI.DisplayObject = null;

module PocketParryModule {
    'use strict';

    export class ChunLi implements ISprite {

        private id: string = 'bg';
        private path: string = 'Scripts/sprites.json';
        private movie: PIXI.MovieClip;

        draw = () => {
            // load the texture we need
            PIXI.loader
                .add(this.path)
                .load(this.onAssetLoad);          
        }

        onAssetLoad = () => {
            // create an array of textures from an image path
            var frames = [];

            for (var i = 0; i <= 6; i++) {
                
                // magically works since the spritesheet was loaded with the pixi loader
                frames.push(PIXI.Texture.fromFrame('chunAttack000' + i + '.png'));
            }

            // create a MovieClip (brings back memories from the days of Flash, right ?)
            this.movie = new PIXI.extras.MovieClip(frames);

            /*
             * A MovieClip inherits all the properties of a PIXI sprite
             * so you can change its position, its anchor, mask it, etc
             */
            this.movie.position.set(700, 500);
            this.movie.scale.x = 3;
            this.movie.scale.y = 3;
            this.movie.anchor.set(0.5, 0.5);
            this.movie.animationSpeed = 0.1;

            this.movie.play();

            Stage.addChild(this.movie);

            animate();
        }
    } 
}

// instantiate the class and draw
new PocketParryModule.ChunLi().draw();