var player, score;


function setup() {
    createCanvas(displayWidth,displayHeight-143);
    player = createSprite(displayWidth/2,displayHeight/2,30,30);
    player.shapeColor="red";
    
}
function draw(){
    background("pink");
    // text for score
    fill("black");
    textSize(30);
    text("Collect only the white squares",displayWidth/2-200,200)
    text("Score :"+ score,950,100);
    // score count
    score = Math.round(frameCount/10);


    if(keyDown(LEFT_ARROW)){
        player.x -= 7;
    }
    if(keyDown(RIGHT_ARROW)){
        player.x += 7;
    }
    if(keyDown(UP_ARROW)){
        player.y -= 7;
    }
    if(keyDown(DOWN_ARROW)){
        player.y += 7;
    }
    console.log(displayHeight);
     perks();
      danger();
    drawSprites();
}


function perks() {
    if(frameCount%200===0){
    var gift = createSprite(10,20,20,20);
    gift.x = Math.round(random(250,displayWidth-250));
   gift.shapeColor=rgb(255,255,255);
    gift.velocityY=2;
    gift.lifetime = 900;
    }
}


function danger() {
    if(frameCount%110===0){
    var bomb = createSprite(10,20,20,20);
    bomb.x = Math.round(random(250,displayWidth-250));
    bomb.shapeColor=rgb(random(110,255),random(100,250),random(0,255));
    


    bomb.velocityY=2;
    bomb.lifetime =700;
    }
}