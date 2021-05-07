//Create variables here
var dog,happyDog,database,foods,foodStock
var gameState = 0

function preload()
{
	//load images here
  dog = loadImage("sprites/dogImg.png");
  happyDog = loadImage("sprites/dogImg1.png");
}

var fedTime,lastFed
var foodObj

function setup() {
  database = firebase.database();
  console.log(database);

	createCanvas(500, 500);
  
  food = new Food();

  feedPet = createButton("FeedPet");
  feedPet.mousePreesed(feedDog);
  feedPet.position(700,95);

   addFood = createButton("AddFood");
  addFood.mousePressed(addFoods);
  addFood.position(800,95);


  dog = createSprite(100,100,100,100);
  dog.addImage("dog",dog);
  foodStock = database.ref('food');
  foodStock.on("value",readStock);
  lastFed=data.val();
}


function draw() {  

  backGround(46,139,87)

  

  drawSprites();
  //add styles here

 // var title = createElement('h2');
  //title.html("Note: Press UP_ARROW To Feed Soufie Milk!!:)");
  //title.position(130,0);

  if(lastFed>=12){
    text("LastFed :"+ lastFed%12 +"PM",350,30);
  }else if(lastFed==0){
    text("LastFed : 12AM",350,30);
  }else{
    text("LastFed :"+ lastFed+"AM",350,30);
  }
   

  

}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){

  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}

