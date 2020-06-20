var batman;
var virus = [];
var bar = [];
var gun;
var bullet = [], bulimg;
var check = 0;
var vir;
var d = 0;
var a = 0;

function preload(){
  bulimg = loadImage("sprites/virus.png");
}
function setup() {
  var canvas = createCanvas(600, 600);

  batman = new Bat(300, 450);

  
  gun = new Gun(400, 420);

  virus[0] = createSprite(100, 100, 30, 30);
  virus[1] = createSprite(200, 100, 30, 30);
  virus[2] = createSprite(300, 100, 30, 30);
  virus[3] = createSprite(400, 100, 30, 30);
  virus[4] = createSprite(500, 100, 30, 30);
  virus[5] = createSprite(100, 200, 30, 30);
  virus[6] = createSprite(200, 200, 30, 30);
  virus[7] = createSprite(300, 200, 30, 30);
  virus[8] = createSprite(400, 200, 30, 30);
  virus[9] = createSprite(500, 200, 30, 30);

  vir = createSprite(gun.x - 100, gun.y - 100, 3, 15);
  vir.visible = false;
  vir.shapeColor = "red";


  for(var i = 0; i < virus.length; i++){
    virus[i].addImage(bulimg);
    virus[i].scale = 0.2;
    virus[i].setCollider("rectangle", 0, 0, 230, 230);
    virus[i].depth = 1;
  }

  vir.depth = virus[0].depth;

  bar[0] = new Shield(100, 100);
  bar[1] = new Shield(200, 100);
  bar[2] = new Shield(300, 100);
  bar[3] = new Shield(400, 100);
  bar[4] = new Shield(500, 100);
  bar[5] = new Shield(100, 100);
  bar[6] = new Shield(200, 100);
  bar[7] = new Shield(300, 100);
  bar[8] = new Shield(400, 100);
  bar[9] = new Shield(500, 100);
  bar[10] = new Shield(random(10, 590), random(0, 100));
  bar[11] = new Shield(random(10, 590), random(0, 100));
  bar[12] = new Shield(random(10, 590), random(0, 100));
  bar[13] = new Shield(random(10, 590), random(0, 100));
  bar[14] = new Shield(random(10, 590), random(0, 100));
  
}


function draw() {
  background("lightblue");
  textSize(20);
  fill("black");
  text("HIT THE SPACE BAR TO SHOOT THE VIRUS", 100, 50);

  bar[0].display();
  bar[1].display();
  bar[2].display();
  bar[3].display();
  bar[4].display();
  bar[5].display();
  bar[6].display();
  bar[7].display();
  bar[8].display();
  bar[9].display();
  bar[10].display();
  bar[11].display();
  bar[12].display();
  bar[13].display();
  bar[14].display();

  gun.x = batman.x;
  batman.display();
  gun.display();
  

  if(keyWentDown(32)){
    vir.x = gun.x - 100;
    vir.y = gun.y - 100
    vir.visible = true;
    vir.velocityY = -5;

    check = check + 1;
    d = 1;
  }
  else if(keyWentUp(32)){
    d = 0;
  }

  for(var i = 0; i < virus.length; i++){
    if(vir.collide(virus[i])){
      virus[i].destroy();
      vir.visible = false;
      console.log("HELLO");
      a++;
    }
  }

  if(a == 10){
    background("black");
    textSize(20);
    fill("white");
    text("YOU WIN!!!", 200, 200);
  }
  

  if (keyDown(RIGHT_ARROW) && batman.x < 700) {
    batman.x = batman.x + 10;
    gun.x = gun.x + 10;
  }
  else if (keyDown(LEFT_ARROW) && batman.x > 0) {
    batman.x = batman.x - 10;
    gun.x = gun.x + 10;
  }

  drawSprites();
}
