var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["3ed0aca5-eab7-4dac-b652-b020b724b19a","3bec7eb7-094c-4c61-93ca-781c54927f8f","08a343d8-eeeb-4d75-8bbc-d189b0c580ca","670b7083-e1d7-4e6d-bcb5-24c8e5e923da","98f8889f-1f22-4b4e-913d-a1f3fe3e80ab","ca057504-9f12-4f9b-a723-45f69888f131","799365e6-647a-45f9-b7cd-8793385ab06e","86c50944-2a66-4435-b944-5a596b91678d","c1244366-c961-4b20-a4e7-3975a37b322b","91309555-fa25-41d2-8990-0aa4eea65281","5a8f0645-706e-4e92-988e-d2a82cddcb40","37a368f0-f4d0-4398-a479-89796b25a8d3","f9bef00e-e535-467a-986e-2ddcd20d677b","6764abb2-e322-4dfb-9317-f5a1109fbb9b"],"propsByKey":{"3ed0aca5-eab7-4dac-b652-b020b724b19a":{"name":"elephant_1_1","sourceUrl":"assets/api/v1/animation-library/gamelab/lrVGAKTg20mzAj5zvcQKzuFItmhf50be/category_animals/elephant_1.png","frameSize":{"x":398,"y":323},"frameCount":1,"looping":true,"frameDelay":2,"version":"lrVGAKTg20mzAj5zvcQKzuFItmhf50be","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":398,"y":323},"rootRelativePath":"assets/api/v1/animation-library/gamelab/lrVGAKTg20mzAj5zvcQKzuFItmhf50be/category_animals/elephant_1.png"},"3bec7eb7-094c-4c61-93ca-781c54927f8f":{"name":"living_room_1","sourceUrl":"assets/api/v1/animation-library/gamelab/ysHVw5mmZbMIqwDVXi7C.B4OuPqNMHVm/category_backgrounds/living_room.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"ysHVw5mmZbMIqwDVXi7C.B4OuPqNMHVm","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/ysHVw5mmZbMIqwDVXi7C.B4OuPqNMHVm/category_backgrounds/living_room.png"},"08a343d8-eeeb-4d75-8bbc-d189b0c580ca":{"name":"pine_trees_1","sourceUrl":"assets/api/v1/animation-library/gamelab/aXDGFLKigHda5qAkWF.aTWPcdAB_SAWJ/category_backgrounds/pine_trees.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"aXDGFLKigHda5qAkWF.aTWPcdAB_SAWJ","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/aXDGFLKigHda5qAkWF.aTWPcdAB_SAWJ/category_backgrounds/pine_trees.png"},"670b7083-e1d7-4e6d-bcb5-24c8e5e923da":{"name":"cuteanimals_lion_hello_1","sourceUrl":"assets/api/v1/animation-library/gamelab/prxDEhDWqFmkJ5tHPG8xEPmgvFrqX.9_/category_animals/cuteanimals_lion_hello.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"prxDEhDWqFmkJ5tHPG8xEPmgvFrqX.9_","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/prxDEhDWqFmkJ5tHPG8xEPmgvFrqX.9_/category_animals/cuteanimals_lion_hello.png"},"98f8889f-1f22-4b4e-913d-a1f3fe3e80ab":{"name":"cuteanimals_lion_hello_1_copy_1","sourceUrl":"assets/api/v1/animation-library/gamelab/prxDEhDWqFmkJ5tHPG8xEPmgvFrqX.9_/category_animals/cuteanimals_lion_hello.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"prxDEhDWqFmkJ5tHPG8xEPmgvFrqX.9_","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/prxDEhDWqFmkJ5tHPG8xEPmgvFrqX.9_/category_animals/cuteanimals_lion_hello.png"},"ca057504-9f12-4f9b-a723-45f69888f131":{"name":"cuteanimals_lion_hello_1_copy_1_copy_1","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"igIkVt_Ste2dSAGDAwc4hQRWJpyOQIsA","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/ca057504-9f12-4f9b-a723-45f69888f131.png"},"799365e6-647a-45f9-b7cd-8793385ab06e":{"name":"cuteanimals_lion_hello_1_copy_1_copy_1_copy_1","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"9VEore5TOU5AubIEAgIxDlgQphDH1sch","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/799365e6-647a-45f9-b7cd-8793385ab06e.png"},"86c50944-2a66-4435-b944-5a596b91678d":{"name":"cuteanimals_elephant_1","sourceUrl":"assets/api/v1/animation-library/gamelab/8i0b1pyuk6hOQ1VOUifoCku5wIRs6djj/category_animals/cuteanimals_elephant.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"8i0b1pyuk6hOQ1VOUifoCku5wIRs6djj","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/8i0b1pyuk6hOQ1VOUifoCku5wIRs6djj/category_animals/cuteanimals_elephant.png"},"c1244366-c961-4b20-a4e7-3975a37b322b":{"name":"cuteanimals_elephant_1_copy_1","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"s4bPl0thvd8ahMAfTs7q8f680a_TSV.S","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/c1244366-c961-4b20-a4e7-3975a37b322b.png"},"91309555-fa25-41d2-8990-0aa4eea65281":{"name":"cuteanimals_elephant_1_copy_1_copy_1","sourceUrl":"assets/api/v1/animation-library/gamelab/8i0b1pyuk6hOQ1VOUifoCku5wIRs6djj/category_animals/cuteanimals_elephant.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"8i0b1pyuk6hOQ1VOUifoCku5wIRs6djj","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/8i0b1pyuk6hOQ1VOUifoCku5wIRs6djj/category_animals/cuteanimals_elephant.png"},"5a8f0645-706e-4e92-988e-d2a82cddcb40":{"name":"cuteanimals_elephant_1_copy_1_copy_1_copy_1","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"n5DLqDa7JXTXhf.4K9aclnD9WtRuQETT","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/5a8f0645-706e-4e92-988e-d2a82cddcb40.png"},"37a368f0-f4d0-4398-a479-89796b25a8d3":{"name":"background_landscape05_1","sourceUrl":"assets/api/v1/animation-library/gamelab/33483OYhVDVsX.GNODCgRASPM5bNdz.q/category_backgrounds/background_landscape05.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"33483OYhVDVsX.GNODCgRASPM5bNdz.q","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/33483OYhVDVsX.GNODCgRASPM5bNdz.q/category_backgrounds/background_landscape05.png"},"f9bef00e-e535-467a-986e-2ddcd20d677b":{"name":"house_04_1","sourceUrl":"assets/api/v1/animation-library/gamelab/SdWQxWCDyex8hClWCHLD12UVJYsbTgk9/category_buildings/house_04.png","frameSize":{"x":396,"y":275},"frameCount":1,"looping":true,"frameDelay":2,"version":"SdWQxWCDyex8hClWCHLD12UVJYsbTgk9","categories":["buildings"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":396,"y":275},"rootRelativePath":"assets/api/v1/animation-library/gamelab/SdWQxWCDyex8hClWCHLD12UVJYsbTgk9/category_buildings/house_04.png"},"6764abb2-e322-4dfb-9317-f5a1109fbb9b":{"name":"retro_powerup_heart_1","sourceUrl":"assets/api/v1/animation-library/gamelab/TYdIIrFBMhvSaF09aD9YcAVj4Q1KENbF/category_retro/retro_powerup_heart.png","frameSize":{"x":352,"y":352},"frameCount":1,"looping":true,"frameDelay":2,"version":"TYdIIrFBMhvSaF09aD9YcAVj4Q1KENbF","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":352,"y":352},"rootRelativePath":"assets/api/v1/animation-library/gamelab/TYdIIrFBMhvSaF09aD9YcAVj4Q1KENbF/category_retro/retro_powerup_heart.png"}}};
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

var lives=5;
var bg= createSprite(200,200);
bg.setAnimation("background_landscape05_1");
var elephant = createSprite(50,370,10,10);
elephant.setAnimation("elephant_1_1");
elephant.shapecolour="red";
elephant.scale=0.15;
var lion1 = createSprite(1,298,10,10);
lion1.setAnimation("cuteanimals_lion_hello_1");
lion1.scale=0.1;

var lion2 = createSprite(390,190,10,10);
lion2.setAnimation("cuteanimals_lion_hello_1");
lion2.scale=0.1;

var lion3 = createSprite(1,90,10,10);
lion3.setAnimation("cuteanimals_lion_hello_1");
lion3.scale=0.1;

var baby1 = createSprite(367,365,10,10);
baby1.setAnimation("cuteanimals_elephant_1");
baby1.scale=0.1;

var baby2 = createSprite(52,240,10,10);
baby2.setAnimation("cuteanimals_elephant_1_copy_1");
baby2.scale=0.1;

var baby3 = createSprite(221,146,10,10);
baby3.setAnimation("cuteanimals_elephant_1");
baby3.scale=0.1;

var baby4 = createSprite(120,50,365,10,10);
baby4.setAnimation("cuteanimals_elephant_1_copy_1");
baby4.scale=0.1;

var boundary1 = createSprite(4,0,10,800);
var boundary2 = createSprite(399,0,10,800);
var boundary3 = createSprite(200,0,800,10);
var boundary4 = createSprite(280,400,800,10);

boundary1.shapeColor="green";
boundary2.shapeColor="green";
boundary3.shapeColor="blue";
boundary4.shapeColor="green";
  lion1.velocityX=8;
  lion2.velocityX=-8;
  lion3.velocityX=8;
var heart=createSprite(30,26,10,10);
heart.setAnimation("retro_powerup_heart_1");
heart.scale=0.15;
var baby1Touched = "false";
var baby2Touched = "false";
var baby3Touched = "false";
var baby4Touched = "false";
var house =createSprite(360,31,10,10);
house.setAnimation("house_04_1");
house.scale=0.25;

 
function draw() {
  background("Pink");
 
 createEdgeSprites();

 
  MoveElephant();
  CreateLionAnimation();
  MoveBaby();


  lion1.bounceOff(boundary1);
  lion1.bounceOff(boundary2);
  lion2.bounceOff(boundary1);
  lion2.bounceOff(boundary2);
  lion3.bounceOff(boundary1);
  lion3.bounceOff(boundary2);
  elephant.bounceOff(boundary1);
  elephant.bounceOff(boundary2);
  elephant.bounceOff(boundary3);
  elephant.bounceOff(boundary4);


  if (elephant.isTouching(lion1)||
      elephant.isTouching(lion2)||
      elephant.isTouching(lion3))
      
      {
        elephant.x=50;
        elephant.y=370;
        lives=lives-1;
      }
    if (lives==0)
      {
        lion1.velocityX=0;
         lion2.velocityX=0;
         lion3.velocityX=0;
        elephant.velocity=0;
        textSize(24);
        text("Game Over! You Lose!",80,200);
      }
    if(elephant.isTouching(house) &&
       baby1Touched == "true" &&
       baby2Touched == "true" &&
       baby3Touched == "true" &&
       baby4Touched == "true")
       {
         lion1.velocityX=0;
         lion2.velocityX=0;
         lion3.velocityX=0;
         elephant.velocityX=0;
         elephant.velocity=0;
         textSize(24);
         text("You Win!",150,200);
       }
       
       if (elephant.isTouching(baby1))
       {
         baby1Touched = "true";
         
       }
       
       if (elephant.isTouching(baby2))
       {
         baby2Touched = "true";
         
       }
       
       if (elephant.isTouching(baby3))
       {
         baby3Touched = "true";
       }
       
       if (elephant.isTouching(baby4))
       {
         baby4Touched = "true";
       }
  drawSprites();
  fill("blue");
  textSize(20);
   text (lives, 60,30);
  
    
  
 }
 
 
 function MoveBaby()
 {
   
    if ( keyDown("up") || keyDown("left") || keyDown("right") || keyDown("down") )
    {
      if (baby1Touched == "true")
      {
        baby1.x=elephant.x- 50;
        baby1.y=elephant.y;
      }
      
      if (baby2Touched == "true")
      {
        baby2.x=elephant.x-100;
        baby2.y=elephant.y;
      }
      
      if (baby3Touched == "true")
      {
        baby3.x=elephant.x-150;
        baby3.y=elephant.y;
      }
      
      if (baby4Touched == "true")
      {
        baby4.x=elephant.x-200;
        baby4.y=elephant.y;
      }
    }
    
 }
 
 function CreateLionAnimation()
 {
    if (lion1.isTouching(boundary1))
    {
      lion1.setAnimation("cuteanimals_lion_hello_1");
    }
    if (lion1.isTouching(boundary2))
    {
      lion1.setAnimation("cuteanimals_lion_hello_1_copy_1_copy_1");
    }
    
    if (lion2.isTouching(boundary1))
    {
      lion2.setAnimation("cuteanimals_lion_hello_1");
    }
    if (lion2.isTouching(boundary2))
    {
      lion2.setAnimation("cuteanimals_lion_hello_1_copy_1_copy_1");
    }
    
    if (lion3.isTouching(boundary1))
    {
      lion3.setAnimation("cuteanimals_lion_hello_1");
    }
    if (lion3.isTouching(boundary2))
    {
      lion3.setAnimation("cuteanimals_lion_hello_1_copy_1_copy_1");
    }
 }
function MoveElephant()
{
   if (keyDown(UP_ARROW))
  
  {
    elephant.y=elephant.y-10;
  }
   if (keyDown("down"))
  
  {
    elephant.y=elephant.y+10;
  }
  if (keyDown("RIGHT_ARROW"))
  
  {
    elephant.x=elephant.x+10;
  }
  if (keyDown("LEFT_ARROW"))
  
  {
    elephant.x=elephant.x-10;
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
