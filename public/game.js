
// background-game on all the pages

// get canvas and context
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

// change canvas size
canvas.width = window.innerWidth;
canvas.height = 100;

// player class
class Player {

    constructor(image){

        this.image = image;

        this.width = 50;
        this.height = 50;
            
        this.position = {
            x : 500,
            y : 100
        }

        this.velocity = {
            x : -3,
            y : 0,
        }

    }

    // draw the player on the canvas
    draw(){
        c.fillStyle = '#4287f5' 
        c.rect(10, 20, 20, 20);
        c.fill();
        
    }

    // update the player on the canvas
    update(){
        this.draw();

        // update position
        this.position.x += this.position.x;
        this.position.y += this.position.y;

    }

}

// create player and obstacles
const player = new Player(4);
player.update();

// main game loop
function loop(){
    requestAnimationFrame(loop);

    // clear canvas
    c.clearRect(0,0,canvas.width, canvas.height);

    // update player
    player.update();

    // check for socials

}



// Unit tests 
loop();