var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var goal2=createSprite(200,372,100,20)
 goal2.shapeColor="yellow"
var goal1=createSprite(200,28,100,20)
goal1.shapeColor="yellow"
var playerMallet = createSprite(200,350,50,10);
playerMallet.shapeColor="black"
var compMallet = createSprite(200,50,50,10);
compMallet.shapeColor="black";
var ball = createSprite(200, 200, 10, 10);
ball.shapeColor="white"
 var wall1,wall2,wall3,wall4,wall5,wall6
 wall1=createSprite(380,200,10,400)
 wall1.shapeColor="green"
 wall2=createSprite(20,200,10,400)
 wall2.shapeColor="green"
 wall3=createSprite(200,380,400,10)
 wall3.shapeColor="green"
 wall4=createSprite(200,20,400,10)
 wall4.shapeColor="green"
 wall5=createSprite(200,125,400,10)
 wall5.shapeColor="green"
 wall6=createSprite(200,275,400,10)
 wall6.shapeColor="green"
 var compScore=0;
 var playerScore=0;
 var gameState="serve";
 
 for (var i = 0; i < 400; i=i+20) 
{
  var line  = createSprite(i, 200, 13, 1);
  line.shapeColor="black";
}

  function draw() {
    background("green");
  if (gameState==="serve") {
    textSize(18);
    
  fill("white");
      text("Press space to strike",202,158);
      compMallet.x=200
      compMallet.y=50
    } 
    fill("white");
    
     text(playerScore,40,215 )
     text(compScore,40,195)
     
    
  playerMallet.velocityX=0
  playerMallet.velocityY=0

    ball.bounceOff(wall1)|| ball.bounceOff(wall2)|| ball.bounceOff(wall3)
    || ball.bounceOff(wall4)||ball.bounceOff(playerMallet)||
    ball.bounceOff(compMallet)
    
  playerMallet.bounceOff(wall1)||playerMallet.bounceOff(wall2)||
   playerMallet.bounceOff(wall3)||playerMallet.bounceOff(wall4)
    
    compMallet.bounceOff(wall5)
    playerMallet.bounceOff(wall6)
  
   
    
if (keyDown("space")&& gameState==="serve") {
      ball.velocityX=7
      ball.velocityY=-5
      gameState="play"
      
    }
    
if (keyDown(RIGHT_ARROW)) {
      playerMallet.velocityX=7
      playerMallet.velocityY=0
      
    }
    
    if (keyDown(LEFT_ARROW)) {
      playerMallet.velocityX=-7
      playerMallet.velocityY=0
      
    }
    
    if (keyDown(DOWN_ARROW)) {
      playerMallet.velocityX=0
      playerMallet.velocityY=7
      
    }
    if (keyDown(UP_ARROW)) {
      playerMallet.velocityX=0
      playerMallet.velocityY=-7
      
    }
    
    compMallet.x=ball.x
    
    if (ball.isTouching(goal1)||ball.isTouching(goal2)) {
      
      if (ball.isTouching(goal1)) {
        playerScore=playerScore+1;
      }
      if (ball.isTouching(goal2)) {
        compScore=compScore+1;
      }
      
   
    
    reset();
     gameState="serve";  
    }
    if (playerScore===5||compScore===5) {
      gameState="End"
     text("Game Over",170,160) ;
     text("Press R to restart",150,180)
     playerMallet.x=200
     playerMallet.y=350
    }
    
  if (keyDown("r")&& gameState==="End") {
        gameState="serve"
        compScore=0
        playerScore=0
      }
          
    
    function reset()
    {
       ball.x=200
       ball.y=200
        
    ball.velocityX=0
    ball.velocityY=0
    
  }
  
  
    


drawSprites();

}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
