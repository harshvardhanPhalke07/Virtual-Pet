//Create variables here
var dog,happyDog,database,foodS,FoodStock
function preload()
{
	//load images here
  dog.loadImage("images/Dog.png")
  happyDog.loadImage("images/happydog.png")
}

function setup() {
	createCanvas(500, 500);
  FoodStock=database.ref('Food')
  FoodStock.on('value',readStock)
  dog=createSprite(10,10,250,250)
}


function draw() {  
if (keyWentDown(UP_ARROW)){
  writeStock(foodS)
  dog.addImage(happyDog)
}
Text("Press UP_ARROW to feed this dog!",15,15)
fill("black")
textSize=15
text("you have"+FoodStock +"packets of food remaining",450,10)
  drawSprites();
  //add styles here

}
function readStock(data){
  foodS=data.val();


}
function writeStock(x){
  if (x<=0){
    x=0
  }else{
    x=x-1
  }
  database.ref('/').update({
   Food:x
  })
}


