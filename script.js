//load a sprite for the player
let img = new Image();
img.src = 'res/sprite.png';
let d4White = new Image();
d4White.src = 'res/d4.png';
let d6White = new Image();
d6White.src = 'res/d6.png';
let d8White = new Image();
d8White.src = 'res/d8.png';
let d10White = new Image();
d10White.src = 'res/d10.png';
//d100?
let d12White = new Image();
d12White.src = 'res/d12.png';
let d20White = new Image();
d20White.src = 'res/d20.png';

let d4Space = new Image();
d4Space.src = 'res/space4.png';
let d6Space = new Image();
d6Space.src = 'res/space6.png';
let d8Space = new Image();
d8Space.src = 'res/space8.png';
let d10Space = new Image();
d10Space.src = 'res/space10.png';
let d12Space = new Image();
d12Space.src = 'res/space12.png';
let d20Space = new Image();
d20Space.src = 'res/space20.png';

let d4Trans = new Image();
d4Trans.src = 'res/trans4.png';
let d6Trans = new Image();
d6Trans.src = 'res/trans6.png';
let d8Trans = new Image();
d8Trans.src = 'res/trans8.png';
let d10Trans = new Image();
d10Trans.src = 'res/trans10.png';
let d12Trans = new Image();
d12Trans.src = 'res/trans12.png';
let d20Trans = new Image();
d20Trans.src = 'res/trans20.png';

let d4BeeHive = new Image();
d4BeeHive.src = 'res/honey4.png';
let d6BeeHive = new Image();
d6BeeHive.src = 'res/honey6.png';
let d8BeeHive = new Image();
d8BeeHive.src = 'res/honey8.png';
let d10BeeHive = new Image();
d10BeeHive.src = 'res/honey10.png';
let d12BeeHive = new Image();
d12BeeHive.src = 'res/honey12.png';
let d20BeeHive = new Image();
d20BeeHive.src = 'res/honey20.png';

let d4Eye = new Image();
d4Eye.src = 'res/eye4.png';
let d6Eye = new Image();
d6Eye.src = 'res/eye6.png';
let d8Eye = new Image();
d8Eye.src = 'res/eye8.png';
let d10Eye = new Image();
d10Eye.src = 'res/eye10.png';
let d12Eye = new Image();
d12Eye.src = 'res/eye12.png';
let d20Eye = new Image();
d20Eye.src = 'res/eye20.png';

let d4 = [d4White, d4Space, d4Trans, d4BeeHive, d4Eye];
let d6 = [d6White, d6Space, d6Trans, d6BeeHive, d6Eye];
let d8 = [d8White, d8Space, d8Trans, d8BeeHive, d8Eye];
let d10 = [d10White, d10Space, d10Trans, d10BeeHive, d10Eye];
let d12 = [d12White, d12Space, d12Trans, d12BeeHive, d12Eye];
let d20 = [d20White, d20Space, d20Trans, d20BeeHive, d20Eye];
let background = ["gray","black","white","orange","black"];
let accent = ["red","blue","pink","yellow","purple"];

const canvas = document.querySelector(".canvas");
const c = canvas.getContext("2d");

var dice;
var page;
var buttons;
var set;

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

(function setup(){
  dice = [];
  buttons = [];
  set = 0;
  if (canvas.width > canvas.height){
    dice[0] = new Die(canvas.width/2-182,100,d4,4);
    dice[1] = new Die(canvas.width/2-82,100,d6,6);
    dice[2] = new Die(canvas.width/2+18,100,d8,8);
    dice[3] = new Die(canvas.width/2+118,100,d10,10);
    dice[4] = new Die(canvas.width/2-132,200,d10,10);
    dice[5] = new Die(canvas.width/2-32,200,d12,12);
    dice[6] = new Die(canvas.width/2+68,200,d20,20);
  }
  else if (canvas.height >= canvas.width*1.5){
    dice[0] = new Die(canvas.width/2-82,100,d4,4);
    dice[1] = new Die(canvas.width/2+18,100,d6,6);
    dice[2] = new Die(canvas.width/2-82,200,d8,8);
    dice[3] = new Die(canvas.width/2+18,200,d10,10);
    dice[4] = new Die(canvas.width/2-82,300,d10,10);
    dice[5] = new Die(canvas.width/2+18,300,d12,12);
    dice[6] = new Die(canvas.width/2-32,400,d20,20);
  }
  buttons[0] = new Die(canvas.width/2-132,100,d20,20);
  buttons[1] = new Die(canvas.width/2-32,100,d20,20);
  buttons[2] = new Die(canvas.width/2+68,100,d20,20);
  buttons[3] = new Die(canvas.width/2-82,200,d20,20);
  buttons[4] = new Die(canvas.width/2+18,200,d20,20);
  page = "menu";
	window.setInterval(() => {
		c.clearRect(0,0,canvas.width,canvas.height);
    if (page == "menu"){
      for (let i = 0; i < buttons.length; i++){
        set = i;
        buttons[i].update();
      }
      c.fillStyle = "black";
      c.fillText("Pick a set of dice!",canvas.width/2-96,75);
    }
    else if (page == "dice") {
      c.fillStyle = background[set];
      c.fillRect(0,0,canvas.width,canvas.height);
      for (let i = 0; i < dice.length; i++){
        dice[i].update();
      }
      c.fillStyle = accent[set];
      c.fillRect(canvas.width-200,canvas.height-50,150,35);
      c.fillStyle = "white";
      c.fillText("Back to Menu",canvas.width-200,canvas.height-25);
    }
	},50);
}());


window.addEventListener('resize',function(event){
  canvas.width=window.innerWidth;
  canvas.height=window.innerHeight;
});

window.addEventListener('click',function(event){
  if (page=="menu"){
    for (let i = 0; i < buttons.length; i++){
      let die = buttons[i];
      if (event.x >= die.x && event.x <= die.x + 64 && event.y >= die.y && event.y <= die.y + 64) {
        page = "dice";
        set = i;
      }
    }
  }
  if (page=="dice"){
    for (let i = 0; i < dice.length; i++){
      let die = dice[i];
      if (event.x >= die.x && event.x <= die.x + 64 && event.y >= die.y && event.y <= die.y + 64) {
        die.num = "";
        die.draw();
        die.num = Math.floor(Math.random()*die.max + 1);
      }
    }
    if (event.x >= canvas.width-200 && event.y >= canvas.height-50 && event.x <= canvas.width-50 && event.y <= canvas.height-15) page = "menu";
  }
});