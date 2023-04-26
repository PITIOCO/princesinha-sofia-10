var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["0a40298f-38f7-4fae-88f2-0ad18916d992"],"propsByKey":{"0a40298f-38f7-4fae-88f2-0ad18916d992":{"name":"sofia","sourceUrl":"assets/api/v1/animation-library/gamelab/6ilCPXzP1HUKGzaSpg6oHUcE.Nv8KRqD/category_faces/kidportrait_08.png","frameSize":{"x":352,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"6ilCPXzP1HUKGzaSpg6oHUcE.Nv8KRqD","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":352,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/6ilCPXzP1HUKGzaSpg6oHUcE.Nv8KRqD/category_faces/kidportrait_08.png"}}};
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

var box = createSprite(190, 20, 300, 10);
var box1 = createSprite(165, 20, 300, 10);
var box2 = createSprite(20, 165, 10, 300);
var box3 = createSprite(120, 315, 300, 10);
var box4 = createSprite(120, 90, 190, 10);
var box5 = createSprite(335, 170, 10, 300);
var box6 = createSprite(212, 170, 255, 10);
var box7 = createSprite(265, 280, 10, 70);
var box8 = createSprite(200, 280, 10, 70);
var box9 = createSprite(115, 250, 180, 10);
var sofia = createSprite(60, 50);
sofia.setAnimation("sofia");
sofia.scale = 0.13;
function draw() {
  background("white");
  if (keyDown("left")) {
    sofia.x = sofia.x-5;
  }
  if (keyDown("up")) {
    sofia.y = sofia.y-5;
  }
  if (keyDown("down")) {
    sofia.y = sofia.y+5;
  }
  if (keyDown("right")) {
    sofia.x = sofia.x+5;
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
