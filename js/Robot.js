class RoboA{
    constructor(x,y){
     this.x = x
     this.y = y
     AlienRobot = createSprite(this.x,this.y,20,20) 
     AlienRobot.scale = 0.3
     AlienRobot.addAnimation("Idle",IdleRobot);
     AlienRobot.addAnimation("Run",RunRobot);
     AlienRobot.addAnimation("Dead",DeadRobot);
     AlienRobot.addAnimation("JumpSword",JumpSword);
     AlienRobot.addAnimation("Jump",JumpRobot);
     AlienRobot.addAnimation("Sword",Sword);
     AlienRobot.addAnimation("Shoot",Shoot);
     AlienRobot.addAnimation("JumpShoot",JumpShoot);
     AlienRobot.addAnimation("Slide",SlideRobot);
     AlienRobot.addAnimation("RunShoot",RunShoot);

    }
    Idle(){
        AlienRobot.changeAnimation("Idle",IdleRobot);
    }
    Run(){
        AlienRobot.changeAnimation("Run",RunRobot);
        AlienRobot.velocityX = 5;
    }
    Dead(){
        AlienRobot.changeAnimation("Dead",DeadRobot);
    }
    Shoot(){
        AlienRobot.changeAnimation("Shoot",Shoot);

    }
    Jump(){
        AlienRobot.changeAnimation("Jump",JumpRobot);
      //  AlienRobot.velocityY = -3
    }
    JumpnShoot(){
        AlienRobot.changeAnimation("JumpShoot",JumpShoot);

    }
    RunnShoot(){
        AlienRobot.changeAnimation("RunShoot",RunShoot);

    }
    Slide(){
        AlienRobot.changeAnimation("Slide",SlideRobot);
    }
    Sword(){
        AlienRobot.changeAnimation("Sword",Sword);
    }
    JumpSword(){
        AlienRobot.changeAnimation("JumpSword",JumpSword);
    }
    Stop(){
     
        AlienRobot.velocityY=8
    }
}