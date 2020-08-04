var fps = 10;
var canvasElement;
var gameContext;
var position = {};
function init(){
   canvasElement = document.getElementById('GameCanvas');
   gameContext = canvasElement.getContext('2d'); 
   setInterval(gameLoop, 1000/fps);
}

 

function gameLoop(){ 
   update();
   display();
}

 

function update(){
   //Set Rectangle Position(Random Positioning In Canvas)
   position.x = Math.floor(Math.random() * (canvasElement.width - 20));  //0~480
   position.y = Math.floor(Math.random() * (canvasElement.height - 20)); //0~380
 
   //Set Random Coloring
   gameContext.fillStyle = 'rgb(' + Math.floor(Math.random() * 255) + ',' 
                       + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ')';  
}

 

function display(){  
   gameContext.fillRect(position.x, position.y, 10, 5);
}

 

window.addEventListener('load', init, false);
