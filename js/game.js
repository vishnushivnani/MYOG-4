class Game{
    constructor(){

    }
    serve(){
        startScreen  = new Interface(displayWidth/2,displayHeight/2,500,500);
        startScreen.display();
       

    }
    showMapandStory(){
        background(200);
        
        
            map  = createSprite(displayWidth/2,displayHeight/2,500,500);
            map.addImage(MapImage)

        

         
            StageScreen = createSprite(displayWidth/2,displayHeight/2,displayWidth*1.5,displayHeight*1.2);
            StageScreen.visible = false;  
          
            CancelButton = createButton("");
            CancelButton.style("background-image","url(Sprites/Images/Buttons/CancelButton.png)");
            CancelButton.style("background-size","120%");
            CancelButton.style("background-repeat","no-repeat");
            CancelButton.style("background-position","center");
            CancelButton.style("border-radius","50px")
            CancelButton.style("border-color","red");
            CancelButton.size(30,30)
           // CancelButton.style('background','#D73743');
            CancelButton.hide();
            CancelButton.position(940,90);
            Enemy_img = createSprite(displayWidth/2+300,displayHeight/2,20,20);

            Enemy_img.visible = false
            Enemy_img.addAnimation("IMAGE",Tank_Img);
            Enemy_img.scale = 2.3


            stages = [stage1Button_Icon,stage2Button_Icon,stage3Button_Icon,stage4Button_Icon,stage5Button_Icon]
           
        /*  stage1Button_Icon  = createSprite(550,550,20,20);
          stage1Button_Icon.addImage(UnlockedButton_Img)
          stage1Button_Icon.scale = 0.3*/
          StageButton1 = createButton('');
          StageButton1.size(40,40);
         // StageButton1.style("background","pink")
          StageButton1.style("background-image","url(Sprites/Images/Buttons/UnlockedButton.png)");
          StageButton1.style("background-size","120%");
          StageButton1.style("background-repeat","no-repeat");
          StageButton1.style("background-position","center");
          StageButton1.style("border-radius","50px")
          StageButton1.style("border-color","red");
          StageButton1.position(538,537);
         // StageButton1.size(50,60)
         
        //  <html><button type="button" class="btn btn-danger">Danger</button></html>
        // ButtonState = 1
          StageButton1.mouseClicked(()=>
          {// StageButton1.html('Stage 1') 
             StageButton1.style("background","pink")
            StageButton1.size(80,50)
            StageButton1.style("background-image","url(Sprites/Images/Buttons/Stage1.png)");
            StageButton1.style("background-size","200%");
            StageButton1.style("border-radius","50px")
            StageButton1.style("border-color","yellow");
            StageButton1.style("background-repeat","no-repeat");
            StageButton1.style("background-position","center");
            StageButton2.hide();
            StageButton3.hide();
            StageButton4.hide();
            StageButton5.hide();
              StageScreen.visible = true
              StageScreen.visibility = 100
              
           ButtonState = 2
              StageButton1.position(displayWidth/2,displayHeight-200);
           
            
              StageScreen.addImage(StageScreen_Img);
              robo = createSprite(displayWidth/2-300,displayHeight/2)
              robo.addImage(RoboImg);
              robo.scale = 0.9
              Enemy_img.visible = true;
            //  Stage1Screen.visible = false
              CancelButton.show();

              
              
              CancelButton.mousePressed(()=>{
                StageButton1.style("background-image","url(Sprites/Images/Buttons/UnlockedButton.png)");
                StageButton1.style("background-size","120%");
                StageButton1.style("background-repeat","no-repeat");
                StageButton1.style("background-position","center");
                StageButton1.style("border-radius","50px")
                StageButton1.style("border-color","white");
                StageButton1.size(40,40);
                StageButton1.position(538,537);
                  StageScreen.visible = false
                  StageButton1.position(538,537);
                  StageButton2.show();
                  StageButton3.show();
                  StageButton4.show();
                  StageButton5.show();     
                  robo.visible              = false
                  Enemy_img.visible         = false;
                  CancelButton.hide();
                  //this.showMapandStory();
                  ButtonState = 1
              })
              if(ButtonState !== 1){
              StageButton1.mousePressed(()=>{

                map.visible = false;
                StageButton1.hide();
                StageButton2.hide();
                StageButton3.hide();
                StageButton4.hide();
                StageButton5.hide();
                StageScreen.visible = false;
                robo.visible              = false
                Enemy_img.visible         = false;
                gameState = PLAY1
                this.stage1();
                CancelButton.hide();
              })}
          })
         
         
           
         StageButton2 = createButton('')
         StageButton2.style("background-image","url(Sprites/Images/Buttons/LockedButton.png)");
         StageButton2.style("background-size","120%");
         StageButton2.style("border-radius","80px")
         StageButton2.style("border-color","white");
         StageButton2.style("background-repeat","no-repeat");
         StageButton2.style("background-position","center");
         StageButton2.position(238,387);
         StageButton2.size(40,40)
         StageButton2.mouseClicked(()=>{
         gameState = PLAY2
          StageButton1.hide();
          StageButton2.hide();
          StageButton3.hide();
          StageButton4.hide();
          StageButton5.hide();

         })

        
          StageButton3 = createButton('')
          StageButton3.style("background-image","url(Sprites/Images/Buttons/LockedButton.png)");
          StageButton3.style("background-size","120%");
          StageButton3.style("border-radius","80px")
          StageButton3.style("border-color","white");
          StageButton3.style("background-repeat","no-repeat");
          StageButton3.style("background-position","center");
          StageButton3.position(418,287);
          StageButton3.size(40,40)
          StageButton3.mouseClicked(()=>{
         gameState = PLAY3
            StageButton1.hide();
            StageButton2.hide();
            StageButton3.hide();
            StageButton4.hide();
            StageButton5.hide();
          })

     
          
          StageButton4 = createButton('')
          StageButton4.style("background-image","url(Sprites/Images/Buttons/LockedButton.png)");
          StageButton4.style("background-size","120%");
          StageButton4.style("border-radius","80px")
          StageButton4.style("border-color","white");
          StageButton4.style("background-repeat","no-repeat");
          StageButton4.style("background-position","center");
          StageButton4.position(608,237);
          StageButton4.size(40,40)


     
       
          StageButton5  =createButton('')
          StageButton5.style("background-image","url(Sprites/Images/Buttons/LockedButton.png)");
          StageButton5.style("background-size","120%");
          StageButton5.style("border-radius","80px")
          StageButton5.style("border-color","white");
          StageButton5.style("background-repeat","no-repeat");
          StageButton5.style("background-position","center");
          StageButton5.position(788,337);
          StageButton5.size(40,40)


           

           
        drawSprites();
    }
    stage1(){
     
     Stage1Screen = createSprite(width/2,height/2,2000,2000);
     Stage1Screen.addImage(Stage1_Img)
     Stage1Screen.scale = 0.7
    
      attackButton1 = createButton("");
      attackButton1.position(width/2,height/2);
     // attackButton1.style("background-image","url(https://www.fixpicture.org/medias/1625104432_tmp_RollSword_4_.png)");
      attackButton1.style("background-size","120%");
      attackButton1.style("border-radius","80px")
      attackButton1.style("border-color","red");
      attackButton1.style("background-repeat","no-repeat");
      attackButton1.style("background-position","right");
      attackButton1.hide();
      attackButton1.size(50,50)
    
         BlueFire = new Player(250,displayHeight-370);
         tanks    = new Tank(displayWidth/2+300,displayHeight-370);
         

        attackButton2 = createButton("");
        attackButton2.position(width/2-200,height/2);
       // attackButton2.style("background-image","url(https://www.fixpicture.org/medias/1625104432_tmp_RollSword_4_.png)");
        attackButton2.style("background-size","120%");
        attackButton2.style("border-radius","80px")
        attackButton2.style("border-color","red");
        attackButton2.style("background-repeat","no-repeat");
        attackButton2.style("background-position","right");
        attackButton2.size(50,50)
        attackButton2.hide();
     
      
   
      
        attackButton1.mouseClicked(()=>{
        BlueFire.GroundFireSword();
        Throw = createSprite(BlueFire.x+80,BlueFire.y-20,20,20);
        Throw.addImage(FireClawThrow_Img);
        Throw.velocityX = random(5,12)

        
       
     

          attackButton2.show();
         tankState="Idle"
       
      playerState = "Played@S1";
     
      
    })
    attackButton2.mouseClicked(()=>{
       
        attackButton1.hide();
        BlueFire.GroundBlade();
        playerState = "Played2@S1"
    })
  }
  winS1(){
      
      WinScreen = createSprite(displayWidth/2,displayHeight/2,displayWidth*1.5,displayHeight*1.2);
      //WinScreen.shapeColor = color(0,0,0)
      WinScreen.addImage(WinScreen_Img)
     WinScreen.scale = 1.3
    //  WinGreetings = createSprite(displayWidth/2,150,20,20);
      //WinGreetings.addImage(WinGreetings_Img)
      //WinGreetings.scale = 2
      var Robo = createSprite(width/2,height/2,10,10);
      Robo.addImage(RoboImg)
      
      var  Star1 = createSprite(displayWidth/2-80,displayHeight/2-200,10,10)
      Star1.addImage(Stars_Img)
      Star1.scale = 0.2
      var Star2 = createSprite(displayWidth/2,displayHeight/2-250,10,10);
      Star2.addImage(Stars_Img);
      Star2.scale = 0.2
      var Star3 = createSprite(displayWidth/2+80,displayHeight/2-200,10,10);
      Star3.addImage(Stars_Img);
      Star3.scale = 0.2
      var WinGreetings1 = createSprite(displayWidth/2-180,displayHeight/2-200,10,10);
      WinGreetings1.addImage(WinGreetings_Img2);
      WinGreetings1.scale = 0.3
      var WinGreetings2 = createSprite(displayWidth/2+180,displayHeight/2-200,10,10);
      WinGreetings2.addImage(WinGreetings_Img3);
      WinGreetings2.scale = 0.3
     
      var WinButton = createButton("");
      WinButton.position(displayWidth/2,height/2+230);
      attackButton2.hide();
      attackButton1.hide();
      WinButton.size(50,50)
      WinButton.style("background-image","url(Sprites/Images/Buttons/HomeButton.png)");
      WinButton.style("background-size","150%");
      WinButton.style("border-radius","80px")
      WinButton.style("border-color","white");
      WinButton.style("background-repeat","no-repeat");
      WinButton.style("background-position","center");
      WinButton.mousePressed(()=>{
      WinButton.hide();
    
ButtonState = 3
        
      this.showMapandStory();
      StageButton1.style("background-image","url(Sprites/Images/Buttons/PassedButton.png)");
      StageButton1.style("background-size","120%");
      StageButton1.style("border-radius","80px")
      StageButton1.style("border-color","green");
      StageButton2.style("background-image","url(Sprites/Images/Buttons/UnlockedButton.png)");
      StageButton2.style("background-size","120%");
      StageButton2.style("border-radius","80px")
      StageButton2.style("border-color","white");
       
  if(ButtonState===3){
    StageButton1.mousePressed(()=>{
      WinScreen = createSprite(displayWidth/2,displayHeight/2,displayWidth*1.5,displayHeight*1.2);
      //WinScreen.shapeColor = color(0,0,0)
      WinScreen.addImage(WinScreen_Img)
     WinScreen.scale = 1.3
    //  WinGreetings = createSprite(displayWidth/2,150,20,20);
      //WinGreetings.addImage(WinGreetings_Img)
      //WinGreetings.scale = 2
      var Robo = createSprite(width/2,height/2,10,10);
      Robo.addImage(RoboImg)
      
      var  Star1 = createSprite(displayWidth/2-80,displayHeight/2-200,10,10)
      Star1.addImage(Stars_Img)
      Star1.scale = 0.2
      var Star2 = createSprite(displayWidth/2,displayHeight/2-250,10,10);
      Star2.addImage(Stars_Img);
      Star2.scale = 0.2
      var Star3 = createSprite(displayWidth/2+80,displayHeight/2-200,10,10);
      Star3.addImage(Stars_Img);
      Star3.scale = 0.2
      var WinGreetings1 = createSprite(displayWidth/2-180,displayHeight/2-200,10,10);
      WinGreetings1.addImage(WinGreetings_Img2);
      WinGreetings1.scale = 0.3
      var WinGreetings2 = createSprite(displayWidth/2+180,displayHeight/2-200,10,10);
      WinGreetings2.addImage(WinGreetings_Img3);
      WinGreetings2.scale = 0.3
      var CancelButton2 = createButton('')
      CancelButton2.show();
      CancelButton2.mousePressed(()=>{
        Robo.visible = false;
        Star2.visible = false;
        Star3.visible = false;
        Star1.visible = false;
        WinScreen.visible = false
        this.showMapandStory();
        StageButton1.style("background-image","url(Sprites/Images/Buttons/PassedButton.png)");
        StageButton1.style("background-size","120%");
        StageButton1.style("border-radius","80px")
        StageButton1.style("border-color","green");
        StageButton2.style("background-image","url(Sprites/Images/Buttons/UnlockedButton.png)");
        StageButton2.style("background-size","120%");
        StageButton2.style("border-radius","80px")
        StageButton2.style("border-color","white");
        StageButton2.mouseClicked(()=>{
          StageButton1.hide();
          StageButton2.style("background","pink")
          StageButton2.size(80,50)
          StageButton2.style("background-image","url(Sprites/Images/Buttons/Stage2Button.png)");
          StageButton2.style("background-size","200%");
          StageButton2.style("border-radius","50px");
          StageButton2.style("border-color","yellow");
          StageButton2.style("background-repeat","no-repeat");
          StageButton2.style("background-position","center");
          StageButton3.hide();
          StageButton4.hide();
          StageButton5.hide();
          StageScreen.visible = true
          StageScreen.visibility = 100
          StageButton2.position(displayWidth/2,displayHeight-200);
          StageScreen.addImage(StageScreen_Img);
          
          robo = createSprite(displayWidth/2-300,displayHeight/2)
          robo.addImage(RoboImg);
          robo.scale = 0.9

          Enemy_img.visible = true;
          Enemy_img.addAnimation("Idle",ZombieM_Img)
          Enemy_img.changeAnimation("Idle",ZombieM_Img);
          Enemy_img.scale = 0.4
        //  Stage1Screen.visible = false
          CancelButton.show();
          CancelButton.mousePressed(()=>{
              StageScreen.visible = false
              StageButton2.position(238,387);
              robo.visible              = false
              Enemy_img.visible         = false;
              CancelButton.hide();
              StageButton1.show();
              StageButton2.show();
              StageButton3.show();
              StageButton4.show();
              StageButton5.show();
          })
          StageButton2.mouseClicked(()=>{
  
            map.visible = false
           
            StageButton2.hide();
            StageScreen.visible = false
        
            robo.visible              = false
            Enemy_img.visible         = false;
            gameState = PLAY
            this.stage2();
            CancelButton.hide();
          })
      
  
        })
      
         
      })

    })
  }
        StageButton2.mouseClicked(()=>{
          StageButton1.hide();
          StageButton2.style("background","pink")
          StageButton2.size(80,50)
          StageButton2.style("background-image","url(Sprites/Images/Buttons/Stage2Button.png)");
          StageButton2.style("background-size","200%");
          StageButton2.style("border-radius","50px");
          StageButton2.style("border-color","yellow");
          StageButton2.style("background-repeat","no-repeat");
          StageButton2.style("background-position","center");
          StageButton3.hide();
          StageButton4.hide();
          StageButton5.hide();
          StageScreen.visible = true
          StageScreen.visibility = 100
          StageButton2.position(displayWidth/2,displayHeight-200);
          StageScreen.addImage(StageScreen_Img);
          
          robo = createSprite(displayWidth/2-300,displayHeight/2)
          robo.addImage(RoboImg);
          robo.scale = 0.9

          Enemy_img.visible = true;
          Enemy_img.addAnimation("Idle",ZombieM_Img)
          Enemy_img.changeAnimation("Idle",ZombieM_Img);
          Enemy_img.scale = 0.4
        //  Stage1Screen.visible = false
          CancelButton.show();
          CancelButton.mousePressed(()=>{
              StageScreen.visible = false
              StageButton2.position(238,387);
              robo.visible              = false
              Enemy_img.visible         = false;
              CancelButton.hide();
              StageButton1.show();
              StageButton2.show();
              StageButton3.show();
              StageButton4.show();
              StageButton5.show();
          })
          StageButton2.mouseClicked(()=>{
  
            map.visible = false
           
            StageButton2.hide();
            StageScreen.visible = false
        
            robo.visible              = false
            Enemy_img.visible         = false;
            gameState = PLAY2
            this.stage2();
            CancelButton.hide();
          })
      
  
        })
      })

      gameState = "winS1"
     /*
*/
  }
  stage2(){

   
   Stage2Screen = createSprite(width/2,height/2,2000,2000)
   Stage2Screen.addImage(Stage2_Img)
   Stage2Screen.scale = 1.35
  
       attackButton1 = createButton("1");
       attackButton1.position(width/2,height/2);
     //  attackButton1.style("background-image","url(https://www.fixpicture.org/medias/1625104432_tmp_RollSword_4_.png)");
       attackButton1.style("background-size","120%");
       attackButton1.style("border-radius","80px")
       attackButton1.style("border-color","red");
       attackButton1.style("background-repeat","no-repeat");
       attackButton1.style("background-position","right");
       attackButton1.size(50,50)
       attackButton1.hide();
      
       BlueFire = new Player(250,displayHeight-370);
     
       ZombieM = new Zombie(displayWidth/2+300,displayHeight-370);
      
      attackButton2 = createButton("2");
      attackButton2.position(width/2-200,height/2);
      //attackButton2.style("background-image","url(https://www.fixpicture.org/medias/1625104432_tmp_RollSword_4_.png)");
      attackButton2.style("background-size","120%");
      attackButton2.style("border-radius","80px")
      attackButton2.style("border-color","red");
      attackButton2.style("background-repeat","no-repeat");
      attackButton2.style("background-position","right");
      attackButton2.size(50,50)
      attackButton2.hide();
   
    
 
    
      attackButton1.mouseClicked(()=>{
      BlueFire.GroundFireSword();
      Throw = createSprite(BlueFire.x+80,BlueFire.y-20,20,20);
      Throw.addImage(FireClawThrow_Img);
      Throw.velocityX = 12
     playerState = "Played@S2";
   
    
  })
  attackButton2.mousePressed(()=>{
     ZombieM.idle();
     BlueFire.Reposition()
    //attackButton1.hide();
      BlueFire.GroundBlade();
      playerState = "Played2@S2"
      ZombieM.attackW();
  })
}
winS2(){
  
    WinScreen = createSprite(displayWidth/2,displayHeight/2,displayWidth*1.5,displayHeight*1.2);
    WinScreen.addImage(WinScreen_Img)
    WinScreen.scale = 1.3
    var Robo = createSprite(width/2,height/2,10,10);
    Robo.addImage(RoboImg)
    
    var  Star1 = createSprite(displayWidth/2-80,displayHeight/2-200,10,10)
    Star1.addImage(Stars_Img)
    Star1.scale = 0.2
    var Star2 = createSprite(displayWidth/2,displayHeight/2-250,10,10);
    Star2.addImage(Stars_Img);
    Star2.scale = 0.2
    var Star3 = createSprite(displayWidth/2+80,displayHeight/2-200,10,10);
    Star3.addImage(Stars_Img);
    Star3.scale = 0.2
    var WinGreetings1 = createSprite(displayWidth/2-180,displayHeight/2-200,10,10);
    WinGreetings1.addImage(WinGreetings_Img2);
    WinGreetings1.scale = 0.3
    var WinGreetings2 = createSprite(displayWidth/2+180,displayHeight/2-200,10,10);
    WinGreetings2.addImage(WinGreetings_Img3);
    WinGreetings2.scale = 0.3
   
    attackButton1.hide();
    attackButton2.hide();
    var WinButton = createButton("");
    WinButton.size(50,50)
    WinButton.style("background-image","url(Sprites/Images/Buttons/HomeButton.png)");
    WinButton.style("background-size","150%");
    WinButton.style("border-radius","80px")
    WinButton.style("border-color","white");
    WinButton.style("background-repeat","no-repeat");
    WinButton.style("background-position","center");
  
    WinButton.mouseClicked(()=>{
      WinButton.hide();
      this.showMapandStory()
      StageButton1.style("background-image","url(Sprites/Images/Buttons/PassedButton.png)");
      StageButton1.style("background-size","120%");
      StageButton1.style("border-radius","80px")
      StageButton1.style("border-color","green");
      StageButton2.style("background-image","url(Sprites/Images/Buttons/PassedButton.png)");
      StageButton2.style("background-size","120%");
      StageButton2.style("border-radius","80px");
      StageButton2.style("border-color","white");
      StageButton3.style("background-image","url(Sprites/Images/Buttons/UnlockedButton.png)");
      StageButton3.style("background-size","120%");
      StageButton3.style("border-radius","80px");
      StageButton3.style("border-color","white");
  
       
  
        StageButton3.mouseClicked(()=>{
          StageButton1.hide();
          StageButton2.hide();
          StageButton3.style("background","pink")
          StageButton3.size(80,50)
          StageButton3.style("background-image","url(Sprites/Images/Buttons/Stage3_Button (1).png)");
          StageButton3.style("background-size","200%");
          StageButton3.style("border-radius","50px");
          StageButton3.style("border-color","yellow");
          StageButton3.style("background-repeat","no-repeat");
          StageButton3.style("background-position","center");
          StageButton4.hide();
          StageButton5.hide();
          StageScreen.visible = true
          StageScreen.visibility = 100
          StageButton3.position(displayWidth/2,displayHeight-200);
          StageScreen.addImage(StageScreen_Img);
          
          robo = createSprite(displayWidth/2-300,displayHeight/2)
          robo.addImage(RoboImg);
          robo.scale = 0.9
  
          Enemy_img.visible = true;
          Enemy_img.addAnimation("Idle",ZombieM_Img)
          Enemy_img.changeAnimation("Idle",ZombieM_Img);
          Enemy_img.scale = 0.4
        //  Stage1Screen.visible = false
          CancelButton.show();
          CancelButton.mousePressed(()=>{
              StageScreen.visible = false
              StageButton3.position(238,387);
              robo.visible              = false
              Enemy_img.visible         = false;
              CancelButton.hide();
              StageButton1.show();
              StageButton2.show();
              StageButton3.show();
              StageButton4.show();
              StageButton5.show();
          })
          StageButton3.mouseClicked(()=>{
  
            map.visible = false
           
            StageButton2.hide();
            StageScreen.visible = false
        
            robo.visible              = false;
            Enemy_img.visible         = false;
            gameState = PLAY
            this.stage3();
            CancelButton.hide();
          })
      
  
        })
  
    })
    WinButton.position(width/2,height/2);
   

    gameState = "winS2"
   /*
*/

}
stage3(){
  gameState = "Stage3"
var  Stage3Screen = createSprite(width/2,height/2,10,10);
  Stage3Screen.addImage(Stage3Screen_Img)
  Stage3Screen.scale = 1.28
  attackButton1 = createButton("1");
  attackButton1.position(width/2,height/2);
//  attackButton1.style("background-image","url(https://www.fixpicture.org/medias/1625104432_tmp_RollSword_4_.png)");
  attackButton1.style("background-size","120%");
  attackButton1.style("border-radius","80px")
  attackButton1.style("border-color","red");
  attackButton1.style("background-repeat","no-repeat");
  attackButton1.style("background-position","right");
  attackButton1.size(50,50)
  attackButton1.hide();
  RoboAlien = new RoboA(displayWidth/2+300,displayHeight-370);

  BlueFire = new Player(250,displayHeight-370);

 
 // ZombieM = new Zombie(displayWidth/2+300,displayHeight-370);
 
 attackButton2 = createButton("2");
 attackButton2.position(width/2-200,height/2);
 //attackButton2.style("background-image","url(https://www.fixpicture.org/medias/1625104432_tmp_RollSword_4_.png)");
 attackButton2.style("background-size","120%");
 attackButton2.style("border-radius","80px")
 attackButton2.style("border-color","red");
 attackButton2.style("background-repeat","no-repeat");
 attackButton2.style("background-position","right");
 attackButton2.size(50,50)
 attackButton2.hide();

 attackButton3 = createButton("3");
 attackButton3.position(width/2-100,height/2+100);
 //attackButt3n2.style("background-image","url(https://www.fixpicture.org/medias/1625104432_tmp_RollSword_4_.png)");
 attackButton3.style("background-size","120%");
 attackButton3.style("border-radius","80px")
 attackButton3.style("border-color","red");
 attackButton3.style("background-repeat","no-repeat");
 attackButton3.style("background-position","right");
 attackButton3.size(50,50)
 //attackButton3.hide();


 attackButton1.mouseClicked(()=>{
 BlueFire.GroundFireSword();
 Throw = createSprite(BlueFire.x+80,BlueFire.y-20,20,20);
 Throw.addImage(FireClawThrow_Img)
 Throw.velocityX = 12
 playerState = "Played@S3";
 //Robo.Run();
 
 



})
attackButton2.mousePressed(()=>{

BlueFire.Reposition()
//attackButton1.hide();
 BlueFire.GroundBlade();
BlueFire.Play();
 playerState = "Played2@S3"
 
})
attackButton3.mouseClicked(()=>{
  //setInterval(1000,BlueFire.Reposition())
  BlueFire.Reposition()
  BlueFire.FireRoll();
  BlueFire.Play();
  playerState = "Played3@S3"
})
}
winS3(){
  WinScreen = createSprite(displayWidth/2,displayHeight/2,displayWidth*1.5,displayHeight*1.2);
  WinScreen.addImage(WinScreen_Img)
  WinScreen.scale = 1.3
  var Robo = createSprite(width/2,height/2,10,10);
  Robo.addImage(RoboImg)
  
  var  Star1 = createSprite(displayWidth/2-80,displayHeight/2-200,10,10)
  Star1.addImage(Stars_Img)
  Star1.scale = 0.2
  var Star2 = createSprite(displayWidth/2,displayHeight/2-250,10,10);
  Star2.addImage(Stars_Img);
  Star2.scale = 0.2
  var Star3 = createSprite(displayWidth/2+80,displayHeight/2-200,10,10);
  Star3.addImage(Stars_Img);
  Star3.scale = 0.2
  var WinGreetings1 = createSprite(displayWidth/2-180,displayHeight/2-200,10,10);
  WinGreetings1.addImage(WinGreetings_Img2);
  WinGreetings1.scale = 0.3
  var WinGreetings2 = createSprite(displayWidth/2+180,displayHeight/2-200,10,10);
  WinGreetings2.addImage(WinGreetings_Img3);
  WinGreetings2.scale = 0.3
 
  attackButton1.hide();
  attackButton2.hide();
  var WinButton2 = createButton("");
  WinButton2.position(width/2,height/2-100)
  WinButton2.size(50,50)
  WinButton2.style("background-image","url(Sprites/Images/Buttons/HomeButton.png)");
  WinButton2.style("background-size","150%");
  WinButton2.style("border-radius","80px")
  WinButton2.style("border-color","white");
  WinButton2.style("background-repeat","no-repeat");
  WinButton2.style("background-position","center");

  var btn = createButton()
 
  WinButton2.mouseClicked(()=>{
 //WinButton.hide();
    this.showMapandStory()
    StageButton1.style("background-image","url(Sprites/Images/Buttons/PassedButton.png)");
    StageButton1.style("background-size","120%");
    StageButton1.style("border-radius","80px")
    StageButton1.style("border-color","green");
    StageButton2.style("background-image","url(Sprites/Images/Buttons/PassedButton.png)");
    StageButton2.style("background-size","120%");
    StageButton2.style("border-radius","80px");
    StageButton2.style("border-color","white");
    StageButton3.style("background-image","url(Sprites/Images/Buttons/UnlockedButton.png)");
    StageButton3.style("background-size","120%");
    StageButton3.style("border-radius","80px");
    StageButton3.style("border-color","white");
    StageButton4.style("background-image","url(Sprites/Images/Buttons/UnlockedButton.png)");
    StageButton4.style("background-size","120%");
    StageButton4.style("border-radius","80px");
    StageButton4.style("border-color","white");

     

      StageButton4.mouseClicked(()=>{
        StageButton1.hide();
        StageButton2.hide();
        StageButton4.style("background","pink")
        StageButton4.size(80,50)
        StageButton4.style("background-image","url(Sprites/Images/Buttons/Stage3_Button (1).png)");
        StageButton4.style("background-size","200%");
        StageButton4.style("border-radius","50px");
        StageButton4.style("border-color","yellow");
        StageButton4.style("background-repeat","no-repeat");
        StageButton4.style("background-position","center");
        StageButton3.hide();
        StageButton5.hide();
        StageScreen.visible = true
        StageScreen.visibility = 100
        StageButton4.position(displayWidth/2,displayHeight-200);
        StageScreen.addImage(StageScreen_Img);
        
        robo = createSprite(displayWidth/2-300,displayHeight/2)
        robo.addImage(RoboImg);
        robo.scale = 0.9

        Enemy_img.visible = true;
        Enemy_img.addAnimation("Idle",ZombieM_Img)
        Enemy_img.changeAnimation("Idle",ZombieM_Img);
        Enemy_img.scale = 0.4
      //  Stage1Screen.visible = false
        CancelButton.show();
        CancelButton.mousePressed(()=>{
            StageScreen.visible = false
            StageButton3.position(238,387);
            robo.visible              = false
            Enemy_img.visible         = false;
            CancelButton.hide();
            StageButton1.show();
            StageButton2.show();
            StageButton3.show();
            StageButton4.show();
            StageButton5.show();
        })
        StageButton4.mouseClicked(()=>{

          map.visible = false
         
          StageButton2.hide();
          StageScreen.visible = false
      
          robo.visible              = false;
          Enemy_img.visible         = false;
          gameState = PLAY
          this.stage4();
          CancelButton.hide();
        })
  

      })

  })
 // WinButton.position(width/2,height/2);
 

  gameState = "Win@S3"
 /*
*/

}
stage4(){

}

}

