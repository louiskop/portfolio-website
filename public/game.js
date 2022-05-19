
// background-game on all the pages

// get canvas and context
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

// change canvas size and make vars for easy sizing
canvas.width = window.innerWidth;
canvas.height = window.innerHeight/3.6;
const percWidth = window.innerWidth/100;
const perHeight = window.innerHeight/100;

// keys to monitor for input
let keys = {
    right: false,
    left: false,
    up: false,
    down: false,
};
let jumpCount = 0;
let cooldown = 0;
let alreadyJumping = false;
let platformStand = true;
let socialID;

// player class
class Player {

    constructor(image){

        this.image = image;

        this.width = window.innerHeight/21.6;
        this.height = window.innerHeight/21.6;
            
        this.position = {
            x : window.innerWidth/96,
            y : window.innerHeight/54
        }

        this.velocity = {
            x : 0,
            y : 0,
        }

    }

    // draw the player on the canvas
    draw(){
        c.fillStyle = '#ff5d5d' 
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
        this.height = window.innerHeight/54;

        this.position = {
            x : x,
            y : canvas.height - this.height,
        }
    }

    draw(){
        c.fillStyle = '#38dbff' 
        c.fillRect(this.position.x, this.position.y, this.width, this.height);
    }


}

// social link class
class Link {

    constructor(link, image, x){
        this.link = link
        this.image = image,
    
        this.width = window.innerHeight/36;
        this.height = window.innerHeight/36;

        this.position = {
            x: x,
            y: canvas.height - window.innerHeight/54 - window.innerHeight/21.6,
        }
    }

    draw() {
        c.fillStyle = "#00FF00";
        c.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

}



// create player and platforms and links
const player = new Player(4);
player.update();

const platforms = [new Platform(0, percWidth*10),
                   new Platform(percWidth*10+percWidth*8, percWidth*10),
                   new Platform(percWidth*10+percWidth*8+percWidth*10+percWidth*8, percWidth*10),
                   new Platform(percWidth*10+percWidth*8+percWidth*10+percWidth*8+percWidth*10+percWidth*8, percWidth*10),
                   new Platform(percWidth*10+percWidth*8+percWidth*10+percWidth*8+percWidth*10+percWidth*8+percWidth*10+percWidth*8, percWidth*10),
                   new Platform(percWidth*10+percWidth*8+percWidth*10+percWidth*8+percWidth*10+percWidth*8+percWidth*10+percWidth*8+percWidth*10+percWidth*8, percWidth*10)
                ];
platforms.forEach((platform) => {platform.draw()});

const links = [new Link("https://github.com/louiskop", 0, (percWidth*10+percWidth*8+percWidth*5) - (window.innerHeight/36)/2),
               new Link("LinkedIn", 0, (percWidth*10+percWidth*8+percWidth*5+percWidth*8+percWidth*10) - (window.innerHeight/36)/2),
               new Link("Twitter", 0, (percWidth*10+percWidth*8+percWidth*5+percWidth*8+percWidth*10+percWidth*8+percWidth*10) - (window.innerHeight/36)/2),
               new Link("https://www.instagram.com/louis_dejager/", 0, (percWidth*10+percWidth*8+percWidth*5+percWidth*8+percWidth*10+percWidth*16+percWidth*20) - (window.innerHeight/36)/2),
            ];
links.forEach((link) => {link.draw()});

// check collisions for platforms
function platformCollision(){

    platformStand = false;

    platforms.forEach((platform) => {

        if(platformStand){
            return;
        }

        if (player.position.y + player.height >= platform.position.y && player.position.y + player.height <= platform.position.y + 7 && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width ){
            // player is standing on a platform
            platformStand = true;
            player.position.y = platform.position.y - player.height;
            player.velocity.y = 0;
        }else {
            platformStand = false;
            player.velocity.y = 7;
        }
    });
}


// check collisions on links
function socialCollision(){

    let collided = false;

    links.forEach((link) => {

        if(collided){
            return;
        }

        if(player.position.x + player.width >= link.position.x && player.position.x <= link.position.x + link.width && player.position.y + player.height >= link.position.y){
            socialID = link;
            collided = true;
        }
    });

    // return die variable
    return collided;

}


// main game loop
function animate(){
    
    // make this the game loop
    requestAnimationFrame(animate);

    // clear the canvas
    c.clearRect(0, 0, canvas.width, canvas.height);

    // update player and platforms and links
    player.update();
    platforms.forEach((platform) => {platform.draw()});
    links.forEach((link) => {link.draw()});

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

    // check for socials
    if(socialCollision()){
        // show the thing in the variable
        cooldown++;
        // check if opened
        if(keys.down && socialID != null && cooldown > 50 && !keys.left && !keys.right){
            window.open(socialID.link, '_blank').focus();
            keys.down = false;
            cooldown = 0;
        }
    }



    // check if player is out of bounds (respawn)
    if(player.position.y > canvas.height){
        player.position = {
            x : window.innerWidth/96,
            y : window.innerHeight/54
        }
    }

    if(player.position.x > window.innerWidth){
        player.position.x = 0;
    }
    if(player.position.x < 0){
        player.position.x = window.innerWidth;
    }

}
// Unit tests and function run
animate();

// event listeners 
window.addEventListener('keydown', (e) => {

    switch(e.keyCode){

        // move right (39)
        case 39: keys.right = true; e.preventDefault(); break;

        // move left (37)
        case 37: keys.left = true; e.preventDefault(); break;

        // jump (38)
        case 38: keys.up = true; e.preventDefault(); break;

        // down (40)
        case 40: keys.down = true; e.preventDefault(); break;

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

        // down (40)
        case 40: keys.down = false; break;

    } 
})
