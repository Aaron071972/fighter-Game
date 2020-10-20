class Game{
constructor(){
}
getState(){
    var gameStateRef = database.ref('gameState');
    gameStateRef.on("value", function(data){
        gameState = data.val();
    })
}
update(state){
database.ref('/').update({
    gameState: state
});
}
async start(){
    if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
         if(playerCountRef.exists()){
             playerCount = playerCountRef.val();
             player.getCount()
         }
         form = new Form()
         form.display();
    }



fighter1=createSprite(displayWidth/4, displayHeight/1.3, 10, 10)
fighter1.addAnimation("stand2", f1Idle)
fighter1.addAnimation("run2", f1_run)
fighter1.addAnimation("jump2", f1Jump)
fighter1.addAnimation("reverseStand2", f1Rstand)
fighter1.addAnimation("reverseRun2", f1Rrun)
fighter1.addAnimation("dead2", f1_dead)
fighter1.addAnimation("d2", dead1)
fighter1.addAnimation("a2", f1_a2)
fighter1.addAnimation("hit2", f1_hit)
fighter1.addAnimation("JA2", f1_JA)
fighter1.addAnimation("rj", f1rj)
fighter1.addAnimation("ra2", f1ra1)
fighter1.addAnimation("rja2", f1rja)
fighter1.scale=0.55   

fighter1.debug=false
fighter1.setCollider('rectangle', 0,0, width/14, height/2.5)

fighter2=createSprite(displayWidth/1.35, displayHeight/1.2, 10, 10)
fighter2.addAnimation("stand", f2Idle)
fighter2.addAnimation("run", f2_run)
fighter2.addAnimation("jump", f2jump)
fighter2.addAnimation("reverseStand", f2Rstand)
fighter2.addAnimation("reverseRun", f2Rrun)
fighter2.addAnimation("dead", f2_dead)
fighter2.addAnimation("d1", dead2)
fighter2.addAnimation("a1", f2_a1)
fighter2.addAnimation("hit1", f2_hit)
fighter2.addAnimation("reverseJump", f2rj)
fighter2.addAnimation("JA", f2_JA)
fighter2.addAnimation("ra1", f2ra1)
fighter2.addAnimation("rja", f2rja)


fighter2.scale=0.5

fighter2.debug=false
fighter2.setCollider('rectangle', 0,0, width/14, height/2.25)


fighters = [fighter1, fighter2];

fireBall=createSprite(displayWidth/60, displayHeight/5.4, 85, 40)
fireBall.shapeColor="orange"

wolfBall=createSprite(displayWidth-65, displayHeight/5.4, 85, 40)
wolfBall.shapeColor="blue"

f1_attack1=createSprite(displayWidth/55, displayHeight/3.9, 150, 40)
f1_attack1.shapeColor="red"

f2_attack1=createSprite(displayWidth-65, displayHeight/3.9, 150, 40)
f2_attack1.shapeColor="purple"

f1_attack2=createSprite(displayWidth/55, displayHeight/3.07, 150, 40)
f1_attack2.shapeColor="yellow"

f2_attack2=createSprite(displayWidth-60, displayHeight/3.07, 150, 40)
f2_attack2.shapeColor="white"






ground=createSprite(displayWidth/2, displayHeight/1.15, displayWidth, 20)
ground.visible=false

topGround=createSprite(displayWidth/2, displayHeight/2.7, displayWidth, 20)
topGround.visible=false

rightground=createSprite(displayWidth/250, fighter1.y, 20, displayHeight/3)
rightground.visible=false

health=createSprite(displayWidth/18, displayHeight/11.5, 200, 40)
health.shapeColor="purple"

health2=createSprite(displayWidth/1.07, displayHeight/11.5, 200, 40)
health2.shapeColor="pink"

fireBall.debug=false


}
play(){
    form.hide();

    Player.getPlayerInfo();

    if(allPlayers !== undefined){
       background("white")
image(bg, 0,0, displayWidth-20, displayHeight-30)
        var index = 0

        var x =400
        var y = 650

        for(var plr in allPlayers){
            index = index+1;

            x = +400
            y = 650

            fighters[index-1].x = x;
            fighters[index-1].y = y;

            if(index === player.index){
                stroke(10);
                fill("red");
                elipse(x, y, 60, 60)
                fighters[index-1].shapeColor = "red"
                // camera.position.x = fighters[index1].x
                // camera.position.y = displayWidth/2;
            }
        }
    }

    fighter1.collide(ground)
    fighter2.collide(ground)



    if(keyWentDown(LEFT_ARROW)){
         fighter2.changeAnimation("run", f2_run)
         fighter2.velocityX=-14
    }
    if(keyWentUp(LEFT_ARROW)){
         fighter2.changeAnimation("stand", f2Idle)
         fighter2.velocityX=0
    }
    if(keyWentDown(RIGHT_ARROW)){
        fighter2.changeAnimation("reverseRun", f2Rrun)
        fighter2.velocityX=14
    }
    if(keyWentUp(RIGHT_ARROW)){
        fighter2.changeAnimation("reverseStand", f2Rstand)
        fighter2.velocityX=0
    }
    if(keyWentDown(UP_ARROW)){
        fighter2.changeAnimation("jump", f2jump)
        fighter2.velocityY=-15
        fighter2.velocityX=-4
    }
    if(keyWentUp(UP_ARROW)){
        fighter2.changeAnimation("stand", f2Idle)
        fighter2.velocityY=15
        fighter2.velocityX=0
    }
    if(keyWentDown(UP_ARROW)&&fighter2.x<fighter1.x){
        fighter2.changeAnimation("reverseJump", f2rj)
        fighter2.velocityY=-15
        fighter2.velocityX=4
    }

 
    if(keyWentDown('d')){
        fighter1.changeAnimation("run2", f1_run)
         fighter1.velocityX=14
    }
    if(keyWentUp('d')){
            fighter1.changeAnimation("stand2", f1Idle)
            fighter1.velocityX=0
    }
    if(keyWentDown('a')){
            fighter1.changeAnimation("reverseRun2", f1Rrun)
            fighter1.velocityX=-14
    }
    if(keyWentUp('a')){
            fighter1.changeAnimation("reverseStand2", f1Rstand)
            fighter1.velocityX=0
    }
    if(keyWentDown('w')&&fighter1.y>790){
            fighter1.changeAnimation("jump2", f1Jump)
            fighter1.velocityY=-15
            fighter1.velocityX=4
    }
    if(keyWentUp('w')){
            fighter1.changeAnimation("stand2", f1Idle)
            fighter1.velocityY=14
            fighter1.velocityX=0
    }
    if(keyWentDown('w')&&fighter1.x>fighter2.x){
        fighter1.changeAnimation("rj", f1rj)
        fighter1.velocityY=-15
        fighter1.velocityX=-4
    }





    if(fighter1.isTouching(topGround)){
        fighter1.velocityY=14
    }
    if(fighter2.isTouching(topGround)){
        fighter2.velocityY=14
    }

    if(f1_score<1){
        fighter1.changeAnimation("d2", dead1)
        gameState=2
        f1_score=0
        health.visible=false
    }
    if(f2_score<1){
        fighter2.changeAnimation("d1", dead2)
        gameState=2
        f2_score=0
        health2.visible=false
    }

    if(fighter1.isTouching(rightground)){
        fighter1.x=fighter1.x+60
    }

    if(touches.length>0||mousePressedOver(fireBall)&&fighter1.x<fighter2.x){
      //fb1()
      touches=[];
      if(frameCount%10===0){
        fb1 = createSprite(fighter1.x, fighter1.y, 1, 1)
        fb1.addAnimation("fb1", fb1Img)
        fireballSound.play();
        fb1.velocityX=25
        fb1.debug=false
        fb1.setCollider('rectangle', 0, 0, width/12, height/10)
        redFireballGroup.add(fb1)

       
        }
    }

    if(touches.length>0||mousePressedOver(fireBall) &&fighter1.x>fighter2.x){
        //fb1()
        touches=[];
        if(frameCount%10===0){
          fb1 = createSprite(fighter1.x, fighter1.y, 1, 1)
          fb1.addAnimation("fb1R", Rfb)
          fireballSound.play();
          fb1.velocityX=-25
          fb1.debug=false
          fb1.setCollider('rectangle', 0, 0, width/12, height/10)
          redFireballGroup.add(fb1)

          }
      }


    if(touches.length>0 ||mousePressedOver(wolfBall) &&fighter1.x<fighter2.x){
        //fb1()
        touches=[];
        if(frameCount%10===0){
            fb2 = createSprite(fighter2.x, fighter2.y-10, 1, 1)
            fb2.addAnimation("fb2", fb2Img)
            fireballSound.play();
            fb2.velocityX=-25
            fb2.debug=false
            fb2.setCollider('rectangle', 0, 0, width/12, height/10)
            blueFireballGroup.add(fb2)
          }
      }
       
      
      if(touches.length>0||mousePressedOver(wolfBall) &fighter1.x>fighter2.x){
        //fb1()
        touches=[];
        if(frameCount%10===0){
            fb2 = createSprite(fighter2.x, fighter2.y-10, 1, 1)
            fb2.addAnimation("fb2R", Rwf)
            fireballSound.play();
            fb2.velocityX=25
            fb2.debug=false
            fb2.setCollider('rectangle', 0, 0, width/12, height/10)
            blueFireballGroup.add(fb2)
          }
      }

      

      if(redFireballGroup.isTouching(blueFireballGroup)){
          redFireballGroup.destroyEach()
          blueFireballGroup.destroyEach()
      } 
      if(redFireballGroup.isTouching(fighter2)){
          redFireballGroup.destroyEach()
          fighter2.changeAnimation("hit1", f2_hit)
          f2_score=f2_score-10
          health2.width=health2.width-20
      }
      if(blueFireballGroup.isTouching(fighter1)){
          blueFireballGroup.destroyEach()
          fighter1.changeAnimation("hit2", f1_hit)
          f1_score=f1_score-10
          health.width=health.width-20
      }
      if(fighter1.isTouching(ground)){
        fighter1.changeAnimation("stand2", f1Idle)
      }


      //Sword Attack
    if(mousePressedOver(f1_attack1)){
        fighter1.changeAnimation("a2", f1_a2)
        slice.play()
    }
    if(mousePressedOver(f1_attack1) && fighter1.isTouching(fighter2)){
        fighter1.changeAnimation("a2", f1_a2)
        f2_score=f2_score-15
        fighter2.x=fighter2.x+200
        health2.width=health2.width-30
        fighter2.changeAnimation("hit", f2_hit)
    }

    if(mousePressedOver(f2_attack1)){
        fighter2.changeAnimation("a1", f2_a1)
        slice.play()
    }
       if(mousePressedOver(f2_attack1) && fighter2.isTouching(fighter1)){
        fighter2.changeAnimation("a1", f2_a1)
        f1_score=f1_score-15
        health.width=health.width-30
        fighter1.x=fighter1.x-200
        fighter1.changeAnimation("hit2", f1_hit)
    }





//reverse sword attack
      if(mousePressedOver(f1_attack1)&&fighter1.x>fighter2.x){
        fighter1.changeAnimation("ra2", f1ra1)
        slice.play()
    }
      if(mousePressedOver(f1_attack1) && fighter1.isTouching(fighter2) && fighter1.x>fighter2.x){
        fighter1.changeAnimation("ra2", f1ra1)
        f2_score=f2_score-15
        fighter2.x=fighter2.x-200    
        health2.width=health2.width-30
        fighter2.changeAnimation("hit", f2_hit)
    }

      if(mousePressedOver(f2_attack1)&&fighter2.x<fighter1.x){
        fighter2.changeAnimation("ra1", f2ra1)
        slice.play()
    }
      if(mousePressedOver(f2_attack1) && fighter2.isTouching(fighter1)&&fighter2.x<fighter1.x){
        fighter2.changeAnimation("ra1", f2ra1)
        f1_score=f1_score-15
        health.width=health.width-30
        fighter1.x=fighter1.x+200
        fighter1.changeAnimation("hit2", f1_hit)
    }


//Jump Attack
     if(mousePressedOver(f1_attack2)){ 
         fighter1.changeAnimation("JA2", f1_JA)
         slice.play()
         fighter1.velocityY=-15
         fighter1.velocityX=6
    }
       if(mousePressedOver(f1_attack2)&& fighter1.isTouching(fighter2)){
        fighter1.changeAnimation("JA2", f1_JA)
        f2_score=f2_score-20
        fighter2.x=fighter2.x+200
        health2.width=health2.width-40
        fighter2.changeAnimation("hit", f2_hit)
       }
       
       if(mousePressedOver(f2_attack2)){ 
        fighter2.changeAnimation("JA", f2_JA)
        slice.play()
        fighter2.velocityY=-15
        fighter2.velocityX=-6
   }
         if(mousePressedOver(f2_attack2)&& fighter2.isTouching(fighter1)){
         fighter1.changeAnimation("JA", f2_JA)
         f1_score=f1_score-20
         health.width=health.width-40
         fighter1.x=fighter1.x-200
         fighter1.changeAnimation("hit2", f1_hit)
   }

   //reverse jump attack
   if(mousePressedOver(f1_attack2)&&fighter1.x>fighter2.x){ 
    fighter1.changeAnimation("rja2", f1rja)
    slice.play()
    fighter1.velocityY=-15
    fighter1.velocityX=-6
}
  if(mousePressedOver(f1_attack2)&& fighter1.isTouching(fighter2)){
   fighter1.changeAnimation("rja2", f1rja)
   f2_score=f2_score-20
   fighter2.x=fighter2.x-200
   health2.width=health2.width-40
   fighter2.changeAnimation("hit", f2_hit)
  }

  if(mousePressedOver(f2_attack2)&&fighter1.x>fighter2.x){ 
    fighter2.changeAnimation("rja", f2rja)
    slice.play()
    fighter2.velocityY=-15
    fighter2.velocityX=6
}
     if(mousePressedOver(f2_attack2)&& fighter2.isTouching(fighter1)){
     fighter1.changeAnimation("rja", f2rja)
     f1_score=f1_score-20
     health.width=health.width-40
     fighter1.x=fighter1.x+200
     fighter1.changeAnimation("hit2", f1_hit)
}

if(fighter2.x===displayWidth/1.35&&fighter1.x===displayWidth/4){
   	textFont('Georgia')
	textSize(30)
	fill('yellow')
	text("Move a Player to Begin", displayWidth/2.4, displayHeight/2.5)
}
  

// if(mousePressedOver(f1Jump)){
//     // fighter1.changeAnimation("jump2", f1Jump)
//      fighter1.velocityY=-15
//      fighter1.velocityX=4
// }
// if(mousePressedOver(F1Right)){
//  fighter1.changeAnimation("run2", f1_run)
//   fighter1.velocityX=14
// }
// if(mousePressedOver(F1Left)){
//     fighter1.changeAnimation("reverseRun2", f1Rrun)
//     fighter1.velocityX=-14
// }



drawSprites();

fill("white")
textSize(20)
text("Fighter 1 Health: " + f1_score, 15, 100)
fill("white")
textSize(20)
text("Fighter 2 Health: " + f2_score, 1700, 100)

textSize(18)
fill("red")
text("FireBall", 5, 205)

textSize(18)
fill("White")
text("WolfBall", 1820, 205)

textSize(18)
fill("yellow")
text("Sword Attack", 2, 280)

textSize(18)
fill("blue")
text("Sword Attack", 1786, 280)

textSize(18)
fill("purple")
text("Jump Attack", 1787, 355)

textSize(18)
fill("orange")
text("Jump Attack", 2, 355)


}








end(){
    console.log("Game Over")
    gameState.update(2)
}
fb1(){
    if(frameCount%200===0){
    fb1 = createSprite(fighter1.x, fighter2.y, 1, 1)
    fb1.addAnimation("fb1", fb1Img)
    fb1.velocityX=14
    }
}
}