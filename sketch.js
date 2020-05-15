//Creating a class
class sprite{
    constructor(xPos,yPos,type){
        //Setting all the properties for the object
        this.x = xPos;
        this.y = yPos;
        this.type = type;
        //Setting diameter if the type of object is circle
        if(this.type === "circle"){
            this.diameter = 50;
            this.width = 0;
            this.height = 0;
        }    
        //Setting the width and height if the type of object is rectangle
        else if(this.type === "rectangle"){
            this.width = 50;
            this.height = 50;  
            this.diameter = 0;
        }
        this.velocityX = 0;
        this.velocityY = 0;
    }
    //Function to display the object
    displaySprite(){
        if(this.type === "circle")
            circle(this.x,this.y,this.diameter);
        else if(this.type === "rectangle")
            rect(this.x,this.y,this.width,this.height);
    }
    //Function to set the position
    setSpritePosition(xPos,yPos){
        this.x = xPos;
        this.y = yPos;  
    }
    //Function to set the speed of the sprite
    setSpriteVelocity(xSpeed,ySpeed){
        this.velocityX = xSpeed;
        this.velocityY = ySpeed;    
    }
    //Function to move the object
    moveSprite(){
        this.x += this.velocityX;
        this.y += this.velocityY;
    }
}
//Declaring global variables
var object1, object2;
var whichcircle;
function setup(){
    //Creating the canvas
    createCanvas(400,400);

    //Creating the objects
    object1 = new sprite(200,150,"rectangle");
    object1.height = 150;
    object1.width = 150;
    object1.diameter = 100;

    //You can change the string between rectangle and circle to toggle the shape
    object2 = new sprite(0,160,"circle");
    object2.setSpriteVelocity(3,0);
}
function draw(){
    rectMode(CORNER);
    //Changing the color of background when they collide
    if(isTouching(object2,object1))
        background(0);
    else
        background(255);
    //Displaying the objects
    object1.displaySprite();
    object1.moveSprite();
    object2.displaySprite();
    object2.moveSprite();

    //Setting the object position to the mouse
    //object2.setSpritePosition(mouseX,mouseY);  
}
