/*
 * Main game loop
 * 
 */

// Prepare for first frame of game loop/animation
var lasttime = new Date().getTime();
var FRAMERATE = 0.08;
var VELOCITY = 55;

var animate = () => {
    // start the timer for the next animation loop
    requestAnimationFrame(animate);

    // Determine seconds elapsed since last frame
    var currtime = new Date().getTime();
    var delta = (currtime - lasttime) / 1000;

    // Move Chun towards Ken when game starts    
    if (PocketParryModule.Chun.position.x < 590) {
        PocketParryModule.Chun.position.x += VELOCITY * delta;
    } else {
        PocketParryModule.KenParry.stop();
        PocketParryModule.KenParry.visible = false;
        PocketParryModule.KenHit.visible = true;
        PocketParryModule.KenHit.play();
    }

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