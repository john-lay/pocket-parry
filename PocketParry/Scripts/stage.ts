/// <reference path="typings/pixi/pixi.d.ts" />
/// <reference path="typings/custom.d.ts" />

// You can use either `new PIXI.WebGLRenderer`, `new PIXI.CanvasRenderer`, or `PIXI.autoDetectRenderer`
// which will try to choose the best renderer for the environment you are in.
var renderer: PIXI.IPixiRenderer = new PIXI.WebGLRenderer(960, 640);

// The renderer will create a canvas element for you that you can then insert into the DOM.
document.body.appendChild(renderer.view);

// You need to create a root container that will hold the scene you want to draw.
var Stage: PIXI.Container = new PIXI.Container();