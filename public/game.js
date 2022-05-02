
// background-game on all the pages

// get canvas and context
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

// change canvas size
canvas.width = window.innerWidth;
canvas.height = 300;

// keys to monitor for input
let keys = {
    right: false,
    left: false,
    up: false,
    down: false,
};
let jumpCount = 0;
let alreadyJumping = false;
let platformStand = true;

// player class
class Player {

    constructor(image){

        this.image = image;

        this.width = 50;
        this.height = 50;
            
        this.position = {
            x : 20,
            y : 20
        }

        this.velocity = {
            x : 0,
            y : 0,
        }

    }

    // draw the player on the canvas
    draw(){
        c.fillStyle = '#4287f5' 
        c.fillRect(this.position.x, this.position.y, this.width, this.height);        
    }

    // update the player on the canvas
    update(){
        this.draw();

        // update position
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

    }

}

// platform class 
class Platform {

    constructor(x, width){
    
        this.width = width;
        this.height = 20;

        this.position = {
            x : x,
            y : 280,
        }
    }

    draw(){
        c.fillStyle = '#FF0000' 
        c.fillRect(this.position.x, this.position.y, this.width, this.height);
    }


}

// create player and platforms
const player = new Player(4);
player.update();
const platforms = [new Platform(0, 200), new Platform(300, 50)];
platforms.forEach((platform) => {platform.draw()});

function platformCollision(){

    platformStand = false;

    platforms.forEach((platform) => {

        if(platformStand){
            return;
        }

        if (player.position.y + player.height >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width ){
            // player is standing on a platform
            platformStand = true;
            player.velocity.y = 0;
        }else {
            platformStand = false;
            player.velocity.y = 7;
        }
    });
}


// main game loop
function animate(){
    
    // make this the game loop
    requestAnimationFrame(animate);

    // clear the canvas
    c.clearRect(0, 0, canvas.width, canvas.height);

    // update player and platforms
    player.update();
    platforms.forEach((platform) => {platform.draw()});

    // collision checking and gravity
    platformCollision();

    // handle controls
    // jump
    let canJump = alreadyJumping || keys.up && platformStand;
    if(canJump){
    
        // check if the player is currently jumping
        alreadyJumping = true;

        // increase velocity for jump based on duration
        if(jumpCount < 5){
            player.velocity.y = -15;
        }else if(jumpCount < 10){
            player.velocity.y = -10
        }
        else{
            player.velocity.y = -5;
        }
        

        // time how long the player jumps
        jumpCount++;

        // stop jump after 30 frames
        if(jumpCount > 20){
            player.velocity.y = 0;
            jumpCount = 0
            keys.up = false;
            canJump = false;
            alreadyJumping = false;
        }


    }

    // move right
    if(keys.right){
        player.velocity.x = 7;     
    }
    // move left
    else if(keys.left){
        player.velocity.x = -7;
    }else {
        player.velocity.x = 0;
    }

    // // check for socials
    // if(keys.down){
    //     // check if on social and visit that social
    // }


    // check if player is out of bounds (respawn)

}

// Unit tests and function run
animate();

// event listeners 
window.addEventListener('keydown', ({keyCode}) => {

    switch(keyCode){

        // move right (39)
        case 39: keys.right = true; break;

        // move left (37)
        case 37: keys.left = true; break;

        // jump (38)
        case 38: keys.up = true; break;

        // down (40)
        case 40: keys.down = true; break;

    } 
})

window.addEventListener('keyup', ({keyCode}) => {

    switch(keyCode){

        // move right (39)
        case 39: keys.right = false; break;

        // move left (37)
        case 37: keys.left = false; break;

        // jump (38)
        case 38: keys.up = false; break;

    } 
})

