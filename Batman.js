class Bat{
  constructor(x, y){
    this.body = createVector(x, y, 30, 30);
    this.x = x;
    this.y = y;
    this.width = 30;
    this.height = 30;
    this.image = loadImage("sprites/batman.png");
  }
  
  display(){
    imageMode(CENTER)
    image(this.image, this.x, this.y, 250, 300);
  }
  
}
