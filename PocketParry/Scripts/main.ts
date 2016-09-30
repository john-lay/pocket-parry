/*
 * Main game loop
 * 
 */

var animate = () => {
    // start the timer for the next animation loop
    requestAnimationFrame(animate);

    // each frame we spin the bunny around a bit
    //bunny.rotation += 0.01;

    // this is the main render call that makes pixi draw your container and its children.
    renderer.render(Stage);
};

animate();