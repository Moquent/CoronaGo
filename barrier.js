class Shield{
    constructor(x, y){
        this.body = createVector(x, y, 50, 50);
        this.angle = random(0, 360);
    }

    display(){
        this.angle += 7;
        push();
        translate(this.body.x, this.body.y);
        angleMode(DEGREES);
        rotate(this.angle);
        fill("black");
        rect(this.body.x, this.body.y, 10, 20);
        pop();
    }
}