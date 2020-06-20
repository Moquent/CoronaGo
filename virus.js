class Virus{
    constructor(x, y){
        this.body = createSprite(x, y, 30, 30);
        this.width = 30;
        this.height = 30;
        this.image = loadImage("sprites/virus.png");
        this.body.addImage(this.image);
        this.body.scale = 0.2;
    }
}
