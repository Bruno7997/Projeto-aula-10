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

var Sam = createSprite(20, 190,13,13);
Sam.shapeColor = "green";
var l1 = createSprite(200, 260, 400, 10);
var l2 = createSprite(200, 120, 400, 10);
var C1 = createSprite(120, 200, 10,10);
var C2 =createSprite(160, 200, 10, 10);
var C3 =createSprite(200, 200, 10, 10);
var C4 = createSprite(240, 200, 10, 10);
C1.setVelocity(0, -8);
C2.setVelocity(0, 8);
C3.setVelocity(0, -8);
C4.setVelocity(0, 8);
C1.shapeColor = "red";
C2.shapeColor = "red";
C3.shapeColor = "red";
C4.shapeColor = "red";
var Vida = 0;
var a = 1;
for(var l = 0; l <= 360; l = l + 40){
    var la = createSprite(l, 190, 20, 10);
    la.shapeColor = "yellow";
  la.depth = 0;
  console.log(l);
  }
  
function draw() {
if (a == 1){
  
  if (keyDown(RIGHT_ARROW)){
    Sam.x = Sam.x + 2;
  }
  if (keyDown(LEFT_ARROW)){
    Sam.x = Sam.x - 2;
  }
  background("white");
  text("Vidas: " + Vida,350, 100);
  rect(0, 120, 400, 135);
  fill("yellow");
  rect(385, 115, 20, 148);
  C1.bounceOff(l2);
  C1.bounceOff(l1);
  C2.bounceOff(l2);
  C2.bounceOff(l1);
  C3.bounceOff(l2);
  C3.bounceOff(l1);
  C4.bounceOff(l2);
  C4.bounceOff(l1);
  
  if (Sam.collide(C1) || Sam.collide(C2) || Sam.collide(C3) || Sam.collide(C4)){
    Sam.destroy();
    Sam = createSprite(20, 190,13,13);
    Vida = Vida + 1;
    Sam.shapeColor = "green";
  }
  if (Sam.x == 385){
    a == 2;
  }
  rotate(90);
  fill ("black");
  stroke("red");
  text("O T I C A", 165, -390);
  rotate(-90);
  stroke("black");
  drawSprites();
}
if (a == 2){
  text("voce venceu", 150, 200);
}
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
