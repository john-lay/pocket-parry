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


var isParrying = false;
document.body.onkeyup = (e) => {
    
    if (e.keyCode == 32) {
        
        if (isParrying) {
            PocketParryModule.KenParry.stop();
            PocketParryModule.KenParry.visible = false;

            PocketParryModule.KenHit.visible = true;
            PocketParryModule.KenHit.play();            
        }
        else {            
            PocketParryModule.KenHit.stop();
            PocketParryModule.KenHit.visible = false;

            PocketParryModule.KenParry.visible = true;
            PocketParryModule.KenParry.play();            
        }

        isParrying = !isParrying;        
    }
}