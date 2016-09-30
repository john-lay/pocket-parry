/// <reference path="typings/pixi/pixi.d.ts" />
/// <reference path="typings/custom.d.ts" />

// You can use either `new PIXI.WebGLRenderer`, `new PIXI.CanvasRenderer`, or `PIXI.autoDetectRenderer`
// which will try to choose the best renderer for the environment you are in.
var renderer: PIXI.IPixiRenderer = new PIXI.WebGLRenderer(960, 640);

// The renderer will create a canvas element for you that you can then insert into the DOM.
document.body.appendChild(renderer.view);

// You need to create a root container that will hold the scene you want to draw.
var Stage: PIXI.Container = new PIXI.Container();


// Declare a global variable for our sprite so that the animate function can access it.
//var bunny: PIXI.DisplayObject = null;

// load the texture we need
//PIXI.loader.add('bunny', 'Assets/bunny.png').load(function (loader, resources) {
//    // This creates a texture from a 'bunny.png' image.
//    bunny = new PIXI.Sprite(resources.bunny.texture);

//    // Setup the position and scale of the bunny
//    bunny.position.x = 400;
//    bunny.position.y = 300;

//    bunny.scale.x = 2;
//    bunny.scale.y = 2;

//    // Add the bunny to the scene we are building.
//    Stage.addChild(bunny);

//    // kick off the animation loop (defined below)
//    animate();
//});

//declare var ken: PIXI.movieClip;
//declare var chun: PIXI.movieClip;
//function animate() {
//    // start the timer for the next animation loop
//    requestAnimationFrame(animate);

//    // each frame we spin the bunny around a bit
//    //bunny.rotation += 0.01;

//    // this is the main render call that makes pixi draw your container and its children.
//    renderer.render(Stage);
//}

//animate();