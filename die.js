function Die(x,y,sprite,max){
  this.x = x;
  this.y = y;
  this.sprite = sprite;
  this.max = max;
  this.num = this.max;
  this.draw = function(){
    c.drawImage(this.sprite[set], 0, 0, 128, 128, this.x, this.y, 64, 64);
    if (set == 1 || set == 4) c.fillStyle = "white";
    else c.fillStyle = "black";
    c.font = "24px Arial";
    if (this.max >= 12){
      if (this.num <= 9) c.fillText(this.num,this.x+24,this.y+40);
      else if (this.num >= 10) c.fillText(this.num,this.x+18,this.y+42);
    }
    else if (this.max == 10){
      if (this.num <= 9) c.fillText(this.num,this.x+24,this.y+48);
      else if (this.num >= 10) c.fillText(this.num,this.x+16,this.y+48);
    }
    else if (this.max == 8){
      c.fillText(this.num,this.x+24,this.y+36);
    }
    else if (this.max == 6){
      c.fillText(this.num,this.x+28,this.y+44);
    }
    else c.fillText(this.num,this.x+24,this.y+44);
  };
  this.update = function(){
    this.draw();
  };
}