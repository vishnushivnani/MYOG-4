var player;var playerAttack,playerAttack2,playerAttack3,playerAttack4,playerAttack5,playerAttack6,playerRun;

//const canvas = document.getElementById("canvas");
var canvas;
var frame;
var rectangle;
var Enemy;var EnemyAttack1;

var aestriod,aestroidImage,aestriod2

var earth,Rearth;

var robo,RoboImg;
var Tankdamaged,Playerdamaged;
var StartButton
var SERVE1 = 1
var SERVE2 = 1.5
var PLAY1  = 2;
var PLAY2 = 2.1;
var PLAY3 = 2.2;
var PLAY4 = 2.3;
var PLAY5 = 2.4;

var END = 3
var gameState =SERVE1;
var Games;
var rand;
var AlienRobot,IdleRobot,DeadRobot,JumpRobot,SlideRobot,JumpSword,JumpShoot,RunRobot,RunShoot,Shoot,Sword;

var Exp = 0;
var BlueFire
var startScreen
var SpaceImg,bg;
var stage1Button_Icon

var tankState;

var map,MapImage;
var Stage1_Img
var stage2Button_Icon,stage3Button_Icon,stage4Button_Icon,stage5Button_Icon,stages;
var stage2_Img1,stage2_Img2,stage3_Img1,stage3_Img2,stage4_Img1,stage4_Img2,stage5_Img1,stage5_Img2;

var LockedButton_Img,PassedButton_Img,UnlockedButton_Img;
var StageScreen,StageScreen_Img;
var StageButton1,StageButton2,StageButton3,StageButton4,StageButton5;

var CancelButton_Icon,CancelButton_Img;
var CancelButton;

var Enemy_img,Tank_Img,NinjaRobo_Img,YellowRobo_Img,BloodMan_Img;

var playerState,Throw;

var Stage1Screen;var Ground
var FireClawThrow_Img;

var tank,FireInAir_Img1,Bullet_Img,Bullet_Img2,TankFire,destroy_Img,tanks;

var Bullet,Bullet_Img2;
var RoboAlien
var StageButton2
var b = 1

var Stage2Screen,Stage2_Img;

// thesewill be the health for tank and player 
let tankHealth = 150,playerHealth = 200;
let zombieMHealth = 125,zombieWHealth = 130
//let playerHealth2 = playerHealth+25

var ZombieM_Img,ZombieM_Attack,ZombieM_Dead,ZombieM_Walk,ZombieW_Img,ZombieW_Attack,ZombieW_Dead,ZombieW_Walk;

var WinScreen,HomeButton,WinScreen_Img;

var WinGreetings,WinGreetings_Img,WinGreetings_Img2,WinGreetings_Img3,Stars_Img;


var attackButton1,attackButton2,

playerInfected;
var Stage3Screen_Img;

var ZombieM,zombieM,launchTime,zombieW;
var frame;
var ButtonState = 1

var PlayerhealthBarWidth = 200;
var PlayerhealthBarHeight = 30;
var healthBar;
var TankhealthBar
var tankHealthA = 150
var playerHealthA = 200
var ZombiehealthBar1,ZombiehealthBar2;
var Zombiedamaged,zombieMHealthA;
var Robohealth;
var RobohealthA;
var Robohealthbar,
Robodamaged;
var Bullet2;
var a=1;
var A3chances = 1;
var B1,B2,B3;
var attackButton3; 
var RoboState = "Idle"

function preload(){

  MapImage = loadImage("Map_img.jpg");

  FireClawThrow_Img = loadImage("Sprites/Images/CharacterFiles/FireClaw/FireClaw(Throw).png")

   playerAttack = loadAnimation("Sprites/Images/CharacterFiles/FireClaw/FireClaw(1).png","Sprites/Images/CharacterFiles/FireClaw/FireClaw(2).png"
  ,"Sprites/Images/CharacterFiles/FireClaw/FireClaw(3).png","Sprites/Images/CharacterFiles/FireClaw/FireClaw(4).png"
  ,"Sprites/Images/CharacterFiles/FireClaw/FireClaw(5).png","Sprites/Images/CharacterFiles/FireClaw/FireClaw(6).png",
  "Sprites/Images/CharacterFiles/FireClaw/FireClaw(6).png","Sprites/Images/CharacterFiles/FireClaw/FireClaw(7).png",
 "Sprites/Images/CharacterFiles/FireClaw/FireClaw(7).png",
  "Sprites/Images/CharacterFiles/FireClaw/FireClaw(7).png", "Sprites/Images/CharacterFiles/FireClaw/FireClaw(7).png");

  playerAttack2 = loadAnimation("Sprites/Images/CharacterFiles/Fly/Fly(1).png","Sprites/Images/CharacterFiles/Fly/Fly(2).png",
  "Sprites/Images/CharacterFiles/Fly/Fly(3).png","Sprites/Images/CharacterFiles/Fly/Fly(4).png",
  "Sprites/Images/CharacterFiles/Fly/Fly(5).png","Sprites/Images/CharacterFiles/Fly/Fly(6).png", 
  "Sprites/Images/CharacterFiles/Fly/Fly(7).png");

  playerAttack3  =loadAnimation("Sprites/Images/CharacterFiles/JumpAxe/JumpAxe(1).png","Sprites/Images/CharacterFiles/JumpAxe/JumpAxe(2).png",
  "Sprites/Images/CharacterFiles/JumpAxe/JumpAxe(2).png","Sprites/Images/CharacterFiles/JumpAxe/JumpAxe(3).png",
  "Sprites/Images/CharacterFiles/JumpAxe/JumpAxe(4).png","Sprites/Images/CharacterFiles/JumpAxe/JumpAxe(5).png",
  "Sprites/Images/CharacterFiles/JumpAxe/JumpAxe(6).png","Sprites/Images/CharacterFiles/JumpAxe/JumpAxe(7).png",
  "Sprites/Images/CharacterFiles/JumpAxe/JumpAxe(8).png","Sprites/Images/CharacterFiles/JumpAxe/JumpAxe(9).png",
  "Sprites/Images/CharacterFiles/JumpAxe/JumpAxe(10).png","Sprites/Images/CharacterFiles/JumpAxe/JumpAxe(11).png");

  playerAttack4  = loadAnimation("Sprites/Images/CharacterFiles/RollSword/RollSword(1).png","Sprites/Images/CharacterFiles/RollSword/RollSword(1).png",
  "Sprites/Images/CharacterFiles/RollSword/RollSword(1).png","Sprites/Images/CharacterFiles/RollSword/RollSword(2).png",
  "Sprites/Images/CharacterFiles/RollSword/RollSword(3).png","Sprites/Images/CharacterFiles/RollSword/RollSword(4).png",
  "Sprites/Images/CharacterFiles/RollSword/RollSword(5).png","Sprites/Images/CharacterFiles/RollSword/RollSword(6).png");

  playerAttack5  = loadAnimation("Sprites/Images/CharacterFiles/Walk/Walk(1).png","Sprites/Images/CharacterFiles/Walk/Walk(2).png",
  "Sprites/Images/CharacterFiles/Walk/Walk(3).png","Sprites/Images/CharacterFiles/Walk/Walk(4).png",
  "Sprites/Images/CharacterFiles/Walk/Walk(5).png","Sprites/Images/CharacterFiles/Walk/Walk(6).png",
  "Sprites/Images/CharacterFiles/Walk/Walk(7).png","Sprites/Images/CharacterFiles/Walk/Walk(8).png",
  "Sprites/Images/CharacterFiles/Walk/Walk(9).png","Sprites/Images/CharacterFiles/Walk/Walk(9).png",
  "Sprites/Images/CharacterFiles/Walk/Walk(5).png","Sprites/Images/CharacterFiles/Walk/Walk(6).png",
  "Sprites/Images/CharacterFiles/Walk/Walk(7).png","Sprites/Images/CharacterFiles/Walk/Walk(8).png",
  "Sprites/Images/CharacterFiles/Walk/Walk(9).png","Sprites/Images/CharacterFiles/Walk/Walk(9).png",
  "Sprites/Images/CharacterFiles/Roll/Roll(1).png","Sprites/Images/CharacterFiles/Roll/Roll(2).png",
  "Sprites/Images/CharacterFiles/Roll/Roll(3).png","Sprites/Images/CharacterFiles/Roll/Roll(4).png",
  "Sprites/Images/CharacterFiles/Roll/Roll(5).png","Sprites/Images/CharacterFiles/Roll/Roll(6).png",
  "Sprites/Images/CharacterFiles/Roll/Roll(7).png","Sprites/Images/CharacterFiles/Roll/Roll(8).png",
  "Sprites/Images/CharacterFiles/Roll/Roll(5).png","Sprites/Images/CharacterFiles/Roll/Roll(6).png",
  "Sprites/Images/CharacterFiles/Roll/Roll(7).png","Sprites/Images/CharacterFiles/Roll/Roll(8).png", 
  "Sprites/Images/CharacterFiles/Roll/Roll(5).png","Sprites/Images/CharacterFiles/Roll/Roll(6).png",
  "Sprites/Images/CharacterFiles/Roll/Roll(7).png","Sprites/Images/CharacterFiles/Roll/Roll(8).png", 
  "Sprites/Images/CharacterFiles/Roll/Roll(5).png","Sprites/Images/CharacterFiles/Roll/Roll(6).png",
  "Sprites/Images/CharacterFiles/Roll/Roll(7).png","Sprites/Images/CharacterFiles/Roll/Roll(8).png");

  playerAttack6 = loadAnimation( "Sprites/Images/CharacterFiles/Walk/Walk(3).png","Sprites/Images/CharacterFiles/Walk/Walk(4).png",
  "Sprites/Images/CharacterFiles/Walk/Walk(5).png","Sprites/Images/CharacterFiles/Walk/Walk(6).png",
  "Sprites/Images/CharacterFiles/Walk/Walk(7).png","Sprites/Images/CharacterFiles/Walk/Walk(8).png",
  "Sprites/Images/CharacterFiles/Walk/Walk(9).png","Sprites/Images/CharacterFiles/Attack 1/Fire(1).png","Sprites/Images/CharacterFiles/Attack 1/Fire(1).png",
  "Sprites/Images/CharacterFiles/Attack 1/Fire(2).png","Sprites/Images/CharacterFiles/Attack 1/Fire(2).png",
  "Sprites/Images/CharacterFiles/Attack 1/Fire(3).png","Sprites/Images/CharacterFiles/Attack 1/Fire(3).png",
  "Sprites/Images/CharacterFiles/Attack 1/Fire(4).png","Sprites/Images/CharacterFiles/Attack 1/Fire(4).png",
  "Sprites/Images/CharacterFiles/Attack 1/Fire(5).png", "Sprites/Images/CharacterFiles/Attack 1/Fire(5).png",
  "Sprites/Images/CharacterFiles/Attack 1/Fire(6).png","Sprites/Images/CharacterFiles/Attack 1/Fire(6).png");

  playerRun = loadAnimation("Sprites/Images/CharacterFiles/Walk/Walk(1).png","Sprites/Images/CharacterFiles/Walk/Walk(2).png",
  "Sprites/Images/CharacterFiles/Walk/Walk(3).png","Sprites/Images/CharacterFiles/Walk/Walk(4).png",
  "Sprites/Images/CharacterFiles/Walk/Walk(5).png","Sprites/Images/CharacterFiles/Walk/Walk(6).png",
  "Sprites/Images/CharacterFiles/Walk/Walk(7).png","Sprites/Images/CharacterFiles/Walk/Walk(8).png",
  "Sprites/Images/CharacterFiles/Walk/Walk(9).png","Sprites/Images/CharacterFiles/Walk/Walk(9).png",
  "Sprites/Images/CharacterFiles/Walk/Walk(5).png","Sprites/Images/CharacterFiles/Walk/Walk(6).png",
  "Sprites/Images/CharacterFiles/Walk/Walk(7).png","Sprites/Images/CharacterFiles/Walk/Walk(8).png",
  "Sprites/Images/CharacterFiles/Walk/Walk(9).png","Sprites/Images/CharacterFiles/Walk/Walk(9).png"
  );

  playerInfected = loadAnimation("Sprites/Images/CharacterFiles/Infected/Infected(1).png","Sprites/Images/CharacterFiles/Infected/Infected(1).png",
  "Sprites/Images/CharacterFiles/Infected/Infected(1).png","Sprites/Images/CharacterFiles/Infected/Infected(2).png",
  "Sprites/Images/CharacterFiles/Infected/Infected(2).png","Sprites/Images/CharacterFiles/Infected/Infected(2).png",
  "Sprites/Images/CharacterFiles/Infected/Infected(3).png","Sprites/Images/CharacterFiles/Infected/Infected(3).png"),

  EnemyAttack1 = loadAnimation("Sprites/Images/EnemySprites/BloodAxe/BloodAxe(1).png","Sprites/Images/EnemySprites/BloodAxe/BloodAxe(2).png",
                               "Sprites/Images/EnemySprites/BloodAxe/BloodAxe(3).png","Sprites/Images/EnemySprites/BloodAxe/BloodAxe(4).png",
                               "Sprites/Images/EnemySprites/BloodAxe/BloodAxe(5).png");

  EnemyAttack2 =  loadAnimation("Sprites/Images/EnemySprites/Scratch/RunningClaw(1).png","Sprites/Images/EnemySprites/Scratch/RunningClaw(2).png",
  "Sprites/Images/EnemySprites/Scratch/RunningClaw(3).png","Sprites/Images/EnemySprites/Scratch/RunningClaw(4).png",
  "Sprites/Images/EnemySprites/Scratch/RunningClaw(5).png","Sprites/Images/EnemySprites/Scratch/RunningClaw(6).png")    
  
  EnemyAttack3   = loadAnimation("Sprites/Images/EnemySprites/SuperScratch/RunningClaw(1).png","Sprites/Images/EnemySprites/SuperScratch/RunningClaw(2).png",
  "Sprites/Images/EnemySprites/SuperScratch/RunningClaw(3).png","Sprites/Images/EnemySprites/SuperScratch/RunningClaw(4).png",
  "Sprites/Images/EnemySprites/SuperScratch/RunningClaw(5).png","Sprites/Images/EnemySprites/SuperScratch/RunningClaw(6).png",
  "Sprites/Images/EnemySprites/SuperScratch/RunningClaw(7).png")

  DeathShot = loadAnimation("Sprites/Images/EnemySprites/RageShot/RageShot(1).png","Sprites/Images/EnemySprites/RageShot/RageShot(2).png",
  "Sprites/Images/EnemySprites/RageShot/RageShot(3).png")

  Death = loadAnimation("Sprites/Images/EnemySprites/Death/Death.png")
                               
  aestroidImage = loadImage("Asteriod.png")

  RoboImg = loadImage("R2.png");

  Rearth = loadAnimation("Sprites/Images/EarthFiles/E(1).png","Sprites/Images/EarthFiles/E(1).png",
  "Sprites/Images/EarthFiles/E(2).png","Sprites/Images/EarthFiles/E(2).png",
  "Sprites/Images/EarthFiles/E(3).png","Sprites/Images/EarthFiles/E(3).png",
  "Sprites/Images/EarthFiles/E(4).png"
  ,"Sprites/Images/EarthFiles/E(5).png","Sprites/Images/EarthFiles/E(6).png",
  "Sprites/Images/EarthFiles/E(7).png","Sprites/Images/EarthFiles/E(8).png",
  "Sprites/Images/EarthFiles/E(9).png","Sprites/Images/EarthFiles/E(10).png")

  SpaceImg = loadImage("Space.jpg");

  //stage1_Button_Icon = loadImage("Stage1.png")

  stage2_Button_Icon1 = loadImage("Sprites/Images/Buttons/Stage2_Button (1).png");
 // stage2_Button_Icon2 = loadImage("Sprites/Images/Buttons/Stage2_Button (2).png");
  stage3_Button_Icon1 = loadImage("Sprites/Images/Buttons/Stage3_Button (1).png");
  stage3_Button_Icon2 = loadImage("Sprites/Images/Buttons/Stage3_Button (2).png");
  stage4_Button_Icon1 = loadImage("Sprites/Images/Buttons/Stage4_Button (1).png");
  stage4_Button_Icon2 = loadImage("Sprites/Images/Buttons/Stage4_Button (2).png");
  stage5_Button_Icon1 = loadImage("Sprites/Images/Buttons/Stage5_Button (1).png");
  stage5_Button_Icon2 = loadImage("Sprites/Images/Buttons/Stage5_Button (2).png");

  LockedButton_Img    = loadImage("Sprites/Images/Buttons/LockedButton.png");
  PassedButton_Img    = loadImage("Sprites/Images/Buttons/PassedButton.png");
  UnlockedButton_Img  = loadImage("Sprites/Images/Buttons/UnlockedButton.png");
  CancelButton_Img    = loadImage("Sprites/Images/Buttons/CancelButton.png");

  StageScreen_Img = loadImage("StageScreen.jpg");

  Tank_Img = loadAnimation("Sprites/Images/TankSprites/Idle/Idle(2).png");

  Stage1_Img = loadImage("Stage1-Battleground.jpg")
  Stage3Screen_Img = loadImage('Stage3-Battleground.jpg')

  FireInAir_Img1= loadAnimation("Sprites/Images/TankSprites/FireInAir/FireInAir(1).png","Sprites/Images/TankSprites/FireInAir/FireInAir(2).png",
                                "Sprites/Images/TankSprites/FireInAir/FireInAir(3).png","Sprites/Images/TankSprites/FireInAir/FireInAir(4).png");
  Bullet_Img = loadImage("Sprites/Images/TankSprites/Fire/Bullet_Img.png")
  Bullet_Img2 = loadImage("Sprites/Images/TankSprites/FireInAir/bullet.png");
  TankFire  = loadAnimation("Sprites/Images/TankSprites/Fire/Fire(1).png","Sprites/Images/TankSprites/Fire/Fire(2).png"
  ,"Sprites/Images/TankSprites/Fire/Fire(2).png","Sprites/Images/TankSprites/Fire/Fire(2).png"
  ,"Sprites/Images/TankSprites/Fire/Fire(3).png","Sprites/Images/TankSprites/Fire/Fire(3).png","Sprites/Images/TankSprites/Fire/Fire(3).png",
  "Sprites/Images/TankSprites/Fire/Fire(3).png","Sprites/Images/TankSprites/Fire/Fire(4).png");
  destroy_Img = loadAnimation("Sprites/Images/TankSprites/Destroyed/Damaged(1).png","Sprites/Images/TankSprites/Destroyed/Damaged(2).png",
  "Sprites/Images/TankSprites/Destroyed/Damaged(3).png","Sprites/Images/TankSprites/Destroyed/Damaged(4).png",
  "Sprites/Images/TankSprites/Destroyed/Damaged(5).png","Sprites/Images/TankSprites/Destroyed/Damaged(6).png",
  "Sprites/Images/TankSprites/Destroyed/Damaged(7).png","Sprites/Images/TankSprites/Destroyed/Damaged(8).png",
  "Sprites/Images/TankSprites/Destroyed/Damaged(9).png","Sprites/Images/TankSprites/Destroyed/Damaged(10).png",)

  Idle = loadAnimation("Sprites/Images/CharacterFiles/Walk/Walk(1).png","Sprites/Images/CharacterFiles/Walk/Walk(1).png","Sprites/Images/CharacterFiles/Walk/Walk(1).png",
  "Sprites/Images/CharacterFiles/Walk/Walk(2).png","Sprites/Images/CharacterFiles/Walk/Walk(2).png","Sprites/Images/CharacterFiles/Walk/Walk(2).png");

  ZombieM_Img = loadAnimation("Sprites/Images/zombiefiles/png/male/Idle/Idle (1).png","Sprites/Images/zombiefiles/png/male/Idle/Idle (2).png",
  "Sprites/Images/zombiefiles/png/male/Idle/Idle (3).png", "Sprites/Images/zombiefiles/png/male/Idle/Idle (4).png",
  "Sprites/Images/zombiefiles/png/male/Idle/Idle (5).png", "Sprites/Images/zombiefiles/png/male/Idle/Idle (6).png"
  , "Sprites/Images/zombiefiles/png/male/Idle/Idle (7).png", "Sprites/Images/zombiefiles/png/male/Idle/Idle (8).png"
  , "Sprites/Images/zombiefiles/png/male/Idle/Idle (9).png", "Sprites/Images/zombiefiles/png/male/Idle/Idle (10).png");

  ZombieM_Attack = loadAnimation("Sprites/Images/zombiefiles/png/male/walk/Walk (1).png","Sprites/Images/zombiefiles/png/male/walk/Walk (2).png",
  "Sprites/Images/zombiefiles/png/male/walk/Walk (3).png","Sprites/Images/zombiefiles/png/male/walk/Walk (4).png",
  "Sprites/Images/zombiefiles/png/male/walk/Walk (5).png","Sprites/Images/zombiefiles/png/male/walk/Walk (6).png",
  "Sprites/Images/zombiefiles/png/male/walk/Walk (7).png","Sprites/Images/zombiefiles/png/male/Attack/Attack (1).png","Sprites/Images/zombiefiles/png/male/Attack/Attack (2).png",
  "Sprites/Images/zombiefiles/png/male/Attack/Attack (3).png","Sprites/Images/zombiefiles/png/male/Attack/Attack (4).png",
  "Sprites/Images/zombiefiles/png/male/Attack/Attack (5).png","Sprites/Images/zombiefiles/png/male/Attack/Attack (6).png",
  "Sprites/Images/zombiefiles/png/male/Attack/Attack (7).png","Sprites/Images/zombiefiles/png/male/Attack/Attack (8).png")


  ZombieM_Dead = loadAnimation("Sprites/Images/zombiefiles/png/male/Dead/Dead (1).png","Sprites/Images/zombiefiles/png/male/Dead/Dead (2).png",
  "Sprites/Images/zombiefiles/png/male/Dead/Dead (3).png","Sprites/Images/zombiefiles/png/male/Dead/Dead (4).png",
  "Sprites/Images/zombiefiles/png/male/Dead/Dead (5).png","Sprites/Images/zombiefiles/png/male/Dead/Dead (6).png",
  "Sprites/Images/zombiefiles/png/male/Dead/Dead (7).png","Sprites/Images/zombiefiles/png/male/Dead/Dead (8).png",
  "Sprites/Images/zombiefiles/png/male/Dead/Dead (9).png","Sprites/Images/zombiefiles/png/male/Dead/Dead (10).png",
  "Sprites/Images/zombiefiles/png/male/Dead/Dead (11).png","Sprites/Images/zombiefiles/png/male/Dead/Dead (12).png",)
 // WinGreetings_Img = loadImage("Sprites/Images/Screen_Imgs/WinScreen_Imgs/WinGreetings.png");
WinScreen_Img = loadImage("Sprites/Images/Screen_Imgs/WinScreen_Imgs/WinScreen.jpg")
Stars_Img = loadImage("Sprites/Images/Screen_Imgs/WinScreen_Imgs/Star.png");
WinGreetings_Img2 = loadImage("Sprites/Images/Screen_Imgs/WinScreen_Imgs/victoryGreetings_img1.png")
WinGreetings_Img3 = loadImage("Sprites/Images/Screen_Imgs/WinScreen_Imgs/victoryGreetings_img6.png")
  ZombieM_Walk = loadAnimation("Sprites/Images/zombiefiles/png/male/walk/Walk (1).png","Sprites/Images/zombiefiles/png/male/walk/Walk (2).png",
  "Sprites/Images/zombiefiles/png/male/walk/Walk (3).png","Sprites/Images/zombiefiles/png/male/walk/Walk (4).png",
  "Sprites/Images/zombiefiles/png/male/walk/Walk (5).png","Sprites/Images/zombiefiles/png/male/walk/Walk (6).png",
  "Sprites/Images/zombiefiles/png/male/walk/Walk (7).png","Sprites/Images/zombiefiles/png/male/walk/Walk (8).png",
  "Sprites/Images/zombiefiles/png/male/walk/Walk (9).png","Sprites/Images/zombiefiles/png/male/walk/Walk (10).png",)
  
  ZombieW_Img = loadAnimation("Sprites/Images/zombiefiles/png/female/Idle/Idle (1).png","Sprites/Images/zombiefiles/png/female/Idle/Idle (2).png",
    "Sprites/Images/zombiefiles/png/female/Idle/Idle (3).png", "Sprites/Images/zombiefiles/png/female/Idle/Idle (4).png",
    "Sprites/Images/zombiefiles/png/female/Idle/Idle (5).png", "Sprites/Images/zombiefiles/png/female/Idle/Idle (6).png"
  , "Sprites/Images/zombiefiles/png/female/Idle/Idle (7).png", "Sprites/Images/zombiefiles/png/female/Idle/Idle (8).png"
  , "Sprites/Images/zombiefiles/png/female/Idle/Idle (9).png", "Sprites/Images/zombiefiles/png/female/Idle/Idle (10).png");

  ZombieW_Attack = loadAnimation("Sprites/Images/zombiefiles/png/female/walk/Walk (1).png","Sprites/Images/zombiefiles/png/female/walk/Walk (2).png",
  "Sprites/Images/zombiefiles/png/female/walk/Walk (3).png","Sprites/Images/zombiefiles/png/female/walk/Walk (4).png",
  "Sprites/Images/zombiefiles/png/female/walk/Walk (5).png","Sprites/Images/zombiefiles/png/female/walk/Walk (6).png",
  "Sprites/Images/zombiefiles/png/female/walk/Walk (7).png","Sprites/Images/zombiefiles/png/female/Attack/Attack (1).png","Sprites/Images/zombiefiles/png/male/Attack/Attack (2).png",
  "Sprites/Images/zombiefiles/png/female/Attack/Attack (3).png","Sprites/Images/zombiefiles/png/female/Attack/Attack (4).png",
  "Sprites/Images/zombiefiles/png/female/Attack/Attack (5).png","Sprites/Images/zombiefiles/png/female/Attack/Attack (6).png",
  "Sprites/Images/zombiefiles/png/female/Attack/Attack (7).png","Sprites/Images/zombiefiles/png/female/Attack/Attack (8).png")


  ZombieW_Dead = loadAnimation("Sprites/Images/zombiefiles/png/female/Dead/Dead (1).png","Sprites/Images/zombiefiles/png/female/Dead/Dead (2).png",
  "Sprites/Images/zombiefiles/png/female/Dead/Dead (3).png","Sprites/Images/zombiefiles/png/female/Dead/Dead (4).png",
  "Sprites/Images/zombiefiles/png/female/Dead/Dead (5).png","Sprites/Images/zombiefiles/png/female/Dead/Dead (6).png",
  "Sprites/Images/zombiefiles/png/female/Dead/Dead (7).png","Sprites/Images/zombiefiles/png/female/Dead/Dead (8).png",
  "Sprites/Images/zombiefiles/png/female/Dead/Dead (9).png","Sprites/Images/zombiefiles/png/female/Dead/Dead (10).png",
  "Sprites/Images/zombiefiles/png/female/Dead/Dead (11).png","Sprites/Images/zombiefiles/png/female/Dead/Dead (12).png",)
 

  ZombieW_Walk = loadAnimation("Sprites/Images/zombiefiles/png/female/walk/Walk (1).png","Sprites/Images/zombiefiles/png/female/walk/Walk (2).png",
  "Sprites/Images/zombiefiles/png/female/walk/Walk (3).png","Sprites/Images/zombiefiles/png/female/walk/Walk (4).png",
  "Sprites/Images/zombiefiles/png/female/walk/Walk (5).png","Sprites/Images/zombiefiles/png/female/walk/Walk (6).png",
  "Sprites/Images/zombiefiles/png/female/walk/Walk (7).png","Sprites/Images/zombiefiles/png/female/walk/Walk (8).png",
  "Sprites/Images/zombiefiles/png/female/walk/Walk (9).png","Sprites/Images/zombiefiles/png/female/walk/Walk (10).png",)

  Stage2_Img = loadImage("Stage2-Battleground.jpg")

  IdleRobot = loadAnimation("Sprites/Images/robotfree/png/Idle (1).png","Sprites/Images/robotfree/png/Idle (2).png",
  "Sprites/Images/robotfree/png/Idle (3).png","Sprites/Images/robotfree/png/Idle (4).png",
  "Sprites/Images/robotfree/png/Idle (5).png","Sprites/Images/robotfree/png/Idle (6).png",
  "Sprites/Images/robotfree/png/Idle (7).png","Sprites/Images/robotfree/png/Idle (8).png",
  "Sprites/Images/robotfree/png/Idle (9).png","Sprites/Images/robotfree/png/Idle (10).png")

  RunRobot = loadAnimation("Sprites/Images/robotfree/png/Run (1).png","Sprites/Images/robotfree/png/Run (2).png",
  "Sprites/Images/robotfree/png/Run (3).png","Sprites/Images/robotfree/png/Run (4).png",
  "Sprites/Images/robotfree/png/Run (5).png","Sprites/Images/robotfree/png/Run (6).png",
  "Sprites/Images/robotfree/png/Run (7).png","Sprites/Images/robotfree/png/Run (8).png");


  DeadRobot = loadAnimation("Sprites/Images/robotfree/png/Dead (1).png","Sprites/Images/robotfree/png/Dead (2).png",
  "Sprites/Images/robotfree/png/Dead (3).png","Sprites/Images/robotfree/png/Dead (4).png",
  "Sprites/Images/robotfree/png/Dead (5).png","Sprites/Images/robotfree/png/Dead (6).png",
  "Sprites/Images/robotfree/png/Dead (7).png","Sprites/Images/robotfree/png/Dead (8).png",
  "Sprites/Images/robotfree/png/Dead (9).png","Sprites/Images/robotfree/png/Dead (10).png")

  JumpRobot = loadAnimation("Sprites/Images/robotfree/png/Jump (1).png","Sprites/Images/robotfree/png/Jump (2).png",
  "Sprites/Images/robotfree/png/Jump (3).png","Sprites/Images/robotfree/png/Jump (4).png",
  "Sprites/Images/robotfree/png/Jump (5).png","Sprites/Images/robotfree/png/Jump (6).png",
  "Sprites/Images/robotfree/png/Jump (7).png","Sprites/Images/robotfree/png/Jump (8).png",
  "Sprites/Images/robotfree/png/Jump (9).png","Sprites/Images/robotfree/png/Jump (10).png");

  JumpShoot = loadAnimation("Sprites/Images/robotfree/png/JumpShoot (1).png","Sprites/Images/robotfree/png/JumpShoot (2).png",
  "Sprites/Images/robotfree/png/JumpShoot (3).png","Sprites/Images/robotfree/png/JumpShoot (4).png",
  "Sprites/Images/robotfree/png/JumpShoot (5).png");

  Shoot = loadAnimation("Sprites/Images/robotfree/png/Shoot (1).png","Sprites/Images/robotfree/png/Shoot (2).png",
  "Sprites/Images/robotfree/png/Shoot (3).png","Sprites/Images/robotfree/png/Shoot (4).png")

  RunShoot = loadAnimation("Sprites/Images/robotfree/png/RunShoot (1).png","Sprites/Images/robotfree/png/RunShoot (2).png",
  "Sprites/Images/robotfree/png/RunShoot (3).png","Sprites/Images/robotfree/png/RunShoot (4).png",
  "Sprites/Images/robotfree/png/RunShoot (5).png","Sprites/Images/robotfree/png/RunShoot (6).png",
  "Sprites/Images/robotfree/png/RunShoot (7).png","Sprites/Images/robotfree/png/RunShoot (8).png",
  "Sprites/Images/robotfree/png/RunShoot (9).png");

  Sword = loadAnimation("Sprites/Images/robotfree/png/Melee (1).png","Sprites/Images/robotfree/png/Melee (2).png",
  "Sprites/Images/robotfree/png/Melee (3).png","Sprites/Images/robotfree/png/Melee (4).png",
  "Sprites/Images/robotfree/png/Melee (5).png","Sprites/Images/robotfree/png/Melee (6).png",
  "Sprites/Images/robotfree/png/Melee (7).png","Sprites/Images/robotfree/png/Melee (8).png");

  JumpSword = loadAnimation("Sprites/Images/robotfree/png/JumpMelee (1).png","Sprites/Images/robotfree/png/JumpMelee (2).png",
  "Sprites/Images/robotfree/png/JumpMelee (3).png","Sprites/Images/robotfree/png/JumpMelee (4).png",
  "Sprites/Images/robotfree/png/JumpMelee (5).png","Sprites/Images/robotfree/png/JumpMelee (6).png",
  "Sprites/Images/robotfree/png/JumpMelee (7).png","Sprites/Images/robotfree/png/JumpMelee (8).png",)

  SlideRobot = loadAnimation("Sprites/Images/robotfree/png/Slide (1).png","Sprites/Images/robotfree/png/Slide (2).png",
  "Sprites/Images/robotfree/png/Slide (3).png","Sprites/Images/robotfree/png/Slide (4).png",
  "Sprites/Images/robotfree/png/Slide (5).png","Sprites/Images/robotfree/png/Slide (6).png",
  "Sprites/Images/robotfree/png/Slide (7).png","Sprites/Images/robotfree/png/Slide (8).png",
  "Sprites/Images/robotfree/png/Slide (9).png","Sprites/Images/robotfree/png/Slide (10).png");


  Bullet_Img2 = loadImage("Sprites/Images/robotfree/png/Objects/Bullet_000.png")
} 



function setup(){
  createCanvas(displayWidth,displayHeight);
  
  

 
 Games = new Game();

  

 
 if(gameState ==="Interface"){
   //Interfaced.display();
   //player.display();
   Games.serve();
 }
 if(gameState === "ShowMap"){
   Games.showMapandStory();
   
 }
 
 if(gameState === PLAY1){
   
  

 
 }
 if(gameState === "Stage1"){
  
   Games.winS1();
  
  

 }
 
  
 

 if(gameState === SERVE1){
  Games.serve()
// Games.stage2(); 
 gameState = "1"

}
//healthBar.display();
//frame() 

}

function draw(){

  //console.log(ButtonState)
 
  if(gameState === SERVE2){
    Games.showMapandStory();
    gameState = "2"
    return false;  }

    if(gameState === PLAY1){
      Games.stage1();
      tankHealth = 150
      playerHealth = 200
      healthBar = new HealthBar(150, height/2-300, PlayerhealthBarWidth, PlayerhealthBarHeight, playerHealth, "green");
      TankhealthBar = new HealthBar(displayWidth/2+300, height/2-300,200,30,tankHealth,"red");
     // frame();
      gameState = "3"
     }
     if(gameState === PLAY2){
       Games.stage2();
       playerHealth = 220
       zombieMHealth = 125
       zombieMHealthA = 125
       ZombiehealthBar1 = new HealthBar(displayWidth/2+300, height/2-300,200,30,zombieMHealth,"red");
       ZombiehealthBar2 =  new HealthBar(displayWidth/2+300, height/2-200,200,30,zombieWHealth,"red");
       healthBar = new HealthBar(150, height/2-300, PlayerhealthBarWidth, PlayerhealthBarHeight, playerHealth, "green");
       gameState = "stage2"
     }

     if(gameState === PLAY3){
       Games.stage3();
       playerHealth  = 235
       playerHealthA = 235
       Robohealth = 200
       RobohealthA = 200
       healthBar = new HealthBar(150, height/2-300, PlayerhealthBarWidth, PlayerhealthBarHeight, playerHealth, "green");
       Robohealthbar = new HealthBar(displayWidth/2+300, height/2-300,200,30,Robohealth,"red");
       gameState = "Stage3"
     }
     if(gameState === "3"||gameState === "stage2"||gameState === "Stage3"){
      attackButton1.show();
      attackButton2.show();
      
    }

   if(tankHealth<=0){
     gameState = END
     Games.winS1();
     tankHealth = 10
   }

  // for attack 1
  if(playerState === "Played@S1"){
    BlueFire.x +=0.1;
    attackButton1.hide();
    attackButton2.hide();
 
  
    if(Throw.x>=tanks.x){  
     tankState = "Fire" 
     BlueFire.IdlePlayer();
     if(tankState==="Fire"){

    var rand = Math.round(random(1,2))
    switch(rand){
            case 1:tanks.Fire();
            Bullet = createSprite(tanks.x-50,tanks.y-20,10,10);
            Bullet.addImage(Bullet_Img);
            Bullet.velocityX = -Throw.velocityX
           // Bullet.x-=50
            Bullet.scale = 0.3
            break;
            case 2:tanks.Fire();
            Bullet = createSprite(tanks.x-50,tanks.y-20,10,10);
            Bullet.addImage(Bullet_Img);
            Bullet.velocityX = -Throw.velocityX
           // Bullet.x-=50
            Bullet.scale = 0.3
            break;
            default:break;
        
        
    }
    tankState= "Idle2"
  }
    
      tankHealth -= Math.round(random(10,20));
      Tankdamaged  = tankHealthA - tankHealth;
      tankHealthA = tankHealth

     TankhealthBar.updateHealth(tankHealth)

       Throw.x = 330
      Throw.velocityX = 0
      Throw.visible = false

    }

    if(tankState==="Idle2"){

      if(Bullet.x<=BlueFire.x){
        playerHealth -=Math.round(random(8,14));
        Playerdamaged = playerHealthA - playerHealth
        playerHealthA = playerHealth;

        healthBar.updateHealth(playerHealth);
      
     playerState = "Idle@S1"
      }

    }
 }
  //console.log(tankHealth,playerHealth)}
// for attack 1
  if(playerState === "Idle@S1"){
    BlueFire.IdlePlayer();
    Throw.x = 330
    Throw.velocityX = 0;
    Throw.visible = false;
    Bullet.visible = false;
    Bullet.x= tanks.x;
    Bullet.velocityX = 0;
    tanks.IdleTank();
    BlueFire.x=250;
  
    
  }
  

 // for attack 2
  if(playerState === "Played2@S1"){
    attackButton1.hide();
    attackButton2.hide();
    BlueFire.x += 6
    BlueFire.Play();


 
    if(BlueFire.x >= tanks.x){
     // playerState = "Idle2@S1"
     tankState = "Fire" 
     BlueFire.IdlePlayer();
     if(tankState==="Fire"){

    var rand = Math.round(random(1,2))
    switch(rand){
            case 1:tanks.Fire();
            Bullet = createSprite(tanks.x-50,tanks.y-20,10,10);
            Bullet.addImage(Bullet_Img);
            Bullet.velocityX = -15
           // Bullet.x-=50
            Bullet.scale = 0.3
            break;
            case 2:tanks.Fire();
            Bullet = createSprite(tanks.x-50,tanks.y-20,10,10);
            Bullet.addImage(Bullet_Img);
            Bullet.velocityX = -12
           // Bullet.x-=50
            Bullet.scale = 0.3
            break;
            default:break;
        
        
    }
    tankState= "Idle2"
  }
    
      tankHealth -= Math.round(random(10,20));
      Tankdamaged  = tankHealthA - tankHealth;
      tankHealthA = tankHealth

     TankhealthBar.updateHealth(tankHealth)

     
          
    }
    if(tankState==="Idle2"){

      if(Bullet.x<=BlueFire.x){
        playerHealth -=Math.round(random(20,28));
        Playerdamaged = playerHealthA - playerHealth
        playerHealthA = playerHealth;

        healthBar.updateHealth(playerHealth);
      
     playerState = "Idle2@S1"
      }

    }

   }


   // for attack 2 
    if(playerState === "Idle2@S1"){
     
      BlueFire.x = 255
      BlueFire.IdlePlayer();
      BlueFire.Stop();
      BlueFire.Reposition();
      Bullet.visible = false;
      Bullet.x= tanks.x;
      Bullet.velocityX = 0;
      tanks.IdleTank();
}

// For the stage 2 attacks and all the properties

  if(playerState === "Played@S2"){
    BlueFire.x +=0.1;
    attackButton1.hide();
    attackButton2.hide();

    ZombieM.attack();
    ZombieM.run();
   
 
    if(Throw.x>=zombieM.x&&zombieM.x>=displayWidth/2+300){
     playerState = "Idle@S2"
     zombieMHealth -= Math.round(random(15,24));
     Zombiedamaged =  (zombieMHealthA - zombieMHealth)*2
     zombieMHealthA = zombieMHealth;
     ZombiehealthBar1.updateHealth(zombieMHealth);
     ZombiehealthBar2.updateHealth(zombieMHealth);
    }
    if(Throw.x>=zombieM.x){
      Throw.visible = false
      zombieMHealth -=Math.round(random(15,25));
      Zombiedamaged = (zombieMHealthA - zombieMHealth)*2
      zombieMHealthA = zombieMHealth
      ZombiehealthBar1.updateHealth(zombieMHealth);
      ZombiehealthBar2.updateHealth(zombieMHealth);
      Throw.x = 130
      Throw.velocityX = 0
    }
    if(zombieM.x<=BlueFire.x){
        BlueFire.Infect()
    }
 if(/*Throw.x===ZombieM.x||*/Throw.x===zombieM.x){
      zombieMHealth -=Math.round(random(30,35));
      Zombiedamaged =  (zombieMHealthA - zombieMHealth)*2
      zombieMHealthA = zombieMHealth
      ZombiehealthBar1.updateHealth(zombieMHealth);
      ZombiehealthBar2.updateHealth(zombieMHealth);
  }
  }
  if(playerState === "Idle@S2"){
    ZombieM.resetPosition();
   // BlueFire.IdlePlayer();
    BlueFire.IdlePlayer();
   BlueFire.x = 225
    Throw.x = 230
    Throw.velocityX = 0;
    Throw.visible = false;

  }
  if(playerState==="Infected"){
    attackButton1.hide();
    attackButton2.hide();
    ZombieM.resetPosition();
    ZombieM.idle();
    playerHealth-=0.2
    Playerdamaged = playerHealthA - playerHealth
    playerHealthA = playerHealth
    healthBar.updateHealth(playerHealth)
    launchTime.velocityX = 5
    launchTime.visible = false
    if(launchTime.x>=displayWidth/2+300){
      launchTime.velocityX = 0
      playerState = "Idle@S2"
    }
  }
  if(playerState === "Played2@S2"){
  
    BlueFire.Play();
    attackButton1.hide();
    attackButton2.hide();
    BlueFire.x+=6
  //  console.log(zombieW.x)
    //console.log(zombieM.x,BlueFire.x)

 if(BlueFire.x>=zombieM.x){
  
   playerState = "Idle2@S2"
   playerHealth -= Math.round(random(20,25));
   Playerdamaged = playerHealthA - playerHealth
   playerHealthA = playerHealth
   zombieMHealth -= Math.round(random(15,21));
   Zombiedamaged = zombieMHealthA - zombieMHealth
   zombieMHealthA = zombieMHealth
   healthBar.updateHealth(playerHealth)
   ZombiehealthBar1.updateHealth(zombieMHealth)
   ZombiehealthBar2.updateHealth(zombieMHealth)

  
 }
 
  }
  if(playerState === "Idle2@S2"){
    ZombieM.resetPosition();
    ZombieM.idle();
    BlueFire.IdlePlayer();
    BlueFire.Reposition();
    ZombieM.StopZombie();
    zombieW.x = displayWidth/2+300+50
    zombieW.y = displayHeight-370+150
    BlueFire.Stop();
    BlueFire.x= 225
  //  console.log(BlueFire.x,zombieM.x,zombieW.x)
  }
 // console.log(playerHealth2,zombieMHealth)
if(zombieMHealth<=0){
  Games.winS2();
  zombieMHealth = 1

}

// attacks for stage 3



if(playerState === "Played@S3"){
  console.log("hidinghereP1")
  attackButton2.hide();
  attackButton1.hide();
  attackButton3.hide();

 //   console.log(caseState)
  rand = Math.round(random(1,2));
  switch(rand){
  case 1: RoboAlien.Shoot();
  Bullet2 = createSprite(RoboAlien.x+10,RoboAlien.y,10,10)
  Bullet2.addImage(Bullet_Img2)
  Bullet2.scale = 0.5
  Bullet2.velocityX = -Throw.velocityX
   if(Bullet2.x<= 583){
  Bullet2.velocityY = -2
}
  if(Bullet2.x>= 583){
    Bullet2.velocityY = 2
  }
  AlienRobot.velocityY = 0
 
  playerState= "Played"
 // console.log(rand)
  break;
  case 2:RoboAlien.Jump();
  AlienRobot.velocityY = -2
  console.log(rand,"mixing")
  playerState= "Played"
  break;
  default:break;
  
 // caseState = "2"
 // console.log(caseState)
 }
 
 
 



 }
 if(playerState === "Played"){
 // console.log(RoboAlien.y,AlienRobot.y)
 //console.log(attackButton1.x,attackButton2.x)
 console.log("hidinghereP")
  attackButton2.hide();
  attackButton1.hide();
  attackButton3.hide();
  
  if(Throw.x>=AlienRobot.x&&AlienRobot.y>=displayHeight-370){
    playerState = "Idle@S3(1)"
    console.log("touching")
    playerHealth -= Math.round(random(15,20))
    healthBar.updateHealth(playerHealth)
    Playerdamaged = playerHealthA-playerHealth
    playerHealthA = playerHealth
    Robohealth -= Math.round(random(15,18))
    Robohealthbar.updateHealth(Robohealth)
    Robodamaged = RobohealthA-Robohealth
    RobohealthA = Robohealth

  }
  
    if(Throw.x>=RoboAlien.x&&AlienRobot.y<displayHeight-370){
    playerState = 'Idle@S3(2)';
    }
  
}


if(playerState === "Idle@S3(1)"){
  //  console.log(1);
   Bullet2.x = RoboAlien.x
   Bullet2.velocityX = 0
   Bullet2.velocityY = 0
   Bullet2.visible = false
   RoboAlien.Idle();
   BlueFire.IdlePlayer();
   Throw.x = 230
   Throw.velocityX =0 
   Throw.visible = false

}
if(playerState === "Idle@S3(2)"){
  //console.log(AlienRobot.y,RoboAlien.y)
  BlueFire.IdlePlayer();
if(AlienRobot.y>=displayHeight-370){
  AlienRobot.velocityY = 0
  RoboAlien.Idle()
}
  if(RoboAlien.y>AlienRobot.y){
  RoboAlien.Stop();
 // RoboAlien.Idle();
}
  }
  if(playerState === "Played2@S3"){
  // BlueFire.x+=6
  console.log("hidinghereP2")
   attackButton1.hide();
    attackButton2.hide();
    attackButton3.hide();
   // console.log(player.x)
    if(player.x>=RoboAlien.x-100){
      RoboAlien.Sword()
     
    }
    if(player.x>=RoboAlien.x){
      playerState = "Idle2@S3"
      playerHealth -= Math.round(random(25,30))
      healthBar.updateHealth(playerHealth)
      Playerdamaged = playerHealthA-playerHealth
      playerHealthA = playerHealth
      Robohealth -= Math.round(random(25,31))
      Robohealthbar.updateHealth(Robohealth)
      Robodamaged = RobohealthA-Robohealth
      RobohealthA = Robohealth
      
    }
  }
  if(playerState === "Idle2@S3"){
    BlueFire.IdlePlayer();
    BlueFire.Reposition();
    BlueFire.Stop();
    RoboAlien.Idle();
  }
  if(gameState === "Stage3"&&Robohealth<=100&&a === 1&&RoboState === "Idle"){
//attackButton3.hide();
RoboState ="powerPlayed"
if(RoboState === "powerPlayed"){
attackButton2.hide();
attackButton1.hide();
console.log("powerplaying")
}
    RoboAlien.JumpnShoot();
  //  Robohealthbar.updateHealth(Robohealth)

 // B1.visible = false;
 if(b === 1 ){
 B1 = createSprite(RoboAlien.x-50,RoboAlien.y+50,10,10)
 B1.addImage(Bullet_Img2)
 B1.scale = 0.3
 // B1.visible = false
 B2 = createSprite(RoboAlien.x-50,RoboAlien.y,10,10)
 B2.addImage(Bullet_Img2)
 B2.scale = 0.3
// B2.visible = false
 B3 = createSprite(RoboAlien.x-50,RoboAlien.y-50,10,10)
 B3.addImage(Bullet_Img2)
 B3.scale = 0.3
// B3.visible = false
 // B2.visible = false
 b = 2
 }if(b===2){
 
  setInterval(() => {
   
 B1.visible = true
 B1.velocityX = -2;
  }, 2000);

   setInterval(() => {
   B2.visible = true;
   B2.velocityX = -2
   RoboAlien.Idle();
  }, 3000);
setInterval(() => {
   B3.visible = true;
  B3.velocityX = -2
  
  return false;
  
 }, 2000);

   setInterval(() => {
     a=2
    
     console.log("ais2")
   }, 5000);
  }
  }
  if(a===2){
   
    attackButton1.hide();
    attackButton2.hide();
   // attackButton3.hide();
  //  console.log("bullets")
  console.log("hidinghereA2")
  

   // RoboState = "Idle2"
 
  b=3
  console.log(b,a);
  
  }
  if(b === 3 ){
    a = 3
  }
  if(RoboState === "Idle2"){a = 3
    var damage = "notGiven"}
  if(a===3){
   
    attackButton1.hide();
   attackButton2.hide();
   if(B1.x<=BlueFire.x){
    playerHealth -= Math.round(random(25,30))
    healthBar.updateHealth(playerHealth)
    Playerdamaged = playerHealthA-playerHealth
    playerHealthA = playerHealth
   B1.x = RoboAlien.x;
   B1.velocityX = 0
   B1.lifetime = 1
   B1.visible = false
  }
  if(B2.x<=BlueFire.x){
    playerHealth -= Math.round(random(25,30))
    healthBar.updateHealth(playerHealth)
    Playerdamaged = playerHealthA-playerHealth
    playerHealthA = playerHealth
    damage = "given"
   B2.x = RoboAlien.x;
   B2.velocityX = 0
   B2.lifetime = 1
   B2.visible = false
 
   
  }
  if(B3.x<=BlueFire.x){
    playerHealth -= Math.round(random(25,30))
    healthBar.updateHealth(playerHealth)
    Playerdamaged = playerHealthA-playerHealth
    playerHealthA = playerHealth
    B3.x = RoboAlien.x
    B3.velocityX = 0
    B3.lifetime = 1
    B3.visible = false
  }
    console.log(a)
    if(damage==="given"){
      RoboState = "Idle3"
    
    }
   
  //  b = 1
   // playerState = "Played3@S3(2)"
   // RoboState = "Idle"
  }
   if(RoboState==='Idle3'){
     
      a = 4
      console.log(a)
      if(a===4){
    attackButton1.show();
    attackButton2.mouseClicked(()=>{
      a = 5
      BlueFire.GroundBlade();
      BlueFire.Play();
       playerState = "Played2@S3"
       
    })
    attackButton1.mouseClicked(()=>{
      a = 5
      BlueFire.GroundFireSword();
      Throw = createSprite(BlueFire.x+80,BlueFire.y-20,20,20);
      Throw.addImage(FireClawThrow_Img);
      Throw.velocityX = 12
      playerState = "Played@S3";
    })
    attackButton2.show();
      }
      if(a ===5){
        attackButton1.hide();
        attackButton2.hide();
      } }
  if(playerState === "Played3@S3"){
    console.log("hidinghereP3")
  attackButton3.hide();
  attackButton2.hide();
  attackButton1.hide();
    if(player.x>=RoboAlien.x){
      A3chances -=1
      playerState = "Idle3@S3"
      Robohealth-=Math.round(random(50,55))
      Robohealthbar.updateHealth(Robohealth)
    }
  }
  if(playerState === "Played3@S3(2)"){
  //  attackButton1.show();
    //attackButton2.show();
  }
  if(playerState === "Idle3@S3"){
    //attackButton3.show();
  //  attackButton2.show();
    //attackButton1.show();
    BlueFire.IdlePlayer();
    BlueFire.Reposition();
    BlueFire.Stop();
  }
  if(gameState === "Stage3"){
if(A3chances>0&&playerHealth<=200&&playerState!=="Played3@S3"&&playerState!=="Played@S3"&&playerState!=="Played2@S3"&&playerState!=="Played"&&a!==2&&b!==2){
  attackButton3.show();
}
else{attackButton3.hide();}
if(A3chances<=0){
  attackButton3.hide();
}}
if(Robohealth<=0){
  gameState = "Win@S3"
  Games.winS3();
}

  drawSprites();
  if(gameState==="3"){
    
  healthBar.display();
  TankhealthBar.display();
  fill("black");
  text(tankHealth,displayWidth/2+300,height/2-300)
  text(playerHealth,150,height/2-300)
  fill("white")
 if(Tankdamaged!==undefined){
   text("-"+Tankdamaged,displayWidth/2+220,height/2)
   if(Playerdamaged!==undefined){
   text("-"+Playerdamaged,350,height/2)}
 }
  }
  if(gameState === "stage2"){
    healthBar.display();
    ZombiehealthBar1.display();
    ZombiehealthBar2.display();
    fill("black");
    text(zombieMHealth,displayWidth/2+300,height/2-200)
    text(zombieMHealth,displayWidth/2+300,height/2-300)
    text(Math.round(playerHealth),150,height/2-300)
    if(Zombiedamaged!==undefined){
      text("-"+Zombiedamaged,displayWidth/2+220,height/2)
      if(Playerdamaged!==undefined){
      text("-"+Math.round(Playerdamaged+1),350,height/2)}
    }
  }
  if(gameState=== "Stage3"){
    healthBar.display();
    Robohealthbar.display();
    fill("black");
    text(Robohealth,displayWidth/2+300,height/2-300)
    text(playerHealth,150,height/2-300)
    if(Robodamaged!==undefined){
      text("-"+Robodamaged,displayWidth/2+220,height/2)
      if(Playerdamaged!==undefined){
      text("-"+Math.round(Playerdamaged+1),350,height/2)}

    }
    if(A3chances>0&&playerHealth<=200&&playerState!=="Played3@S3"){
    text("Chances left:-"+A3chances,attackButton3.x,attackButton3.y)
  }
else{}}
//  healthBar.updateHealth(playerHealth)
}
