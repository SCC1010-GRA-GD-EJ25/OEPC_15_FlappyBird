let imagenFondo;
let imagenInicio;
let personaje;
let x = 0;
let posY = 100;
let dY = 3;
let estado = 0; //0: menu, 1: jugando, 2: gameOver

function preload() {
  // put preload code here
  imagenFondo = loadImage('./images/fondojuego00.png');
  personaje = loadImage('./images/bird.png');
}

function setup() {
  // put setup code here
  createCanvas(1000,512)
}

function draw() {
  // put drawing code here
  if(estado === 1){
    //jugar();    
    background(255)
    image(imagenFondo, x, 0);
    image(imagenFondo, x+imagenFondo.width, 0);
    x-=5;
    dY=dY +1;
    posY = posY + dY;
    if(x <= -imagenFondo.width){
      x = 0;
    }
  image(personaje, 100, posY, 60, 60); 
} else if(estado === 0){
  cursor();
  image(imagenFondo, 0, 0);
  textSize(50);
  fill(255);
  text("Haga clic para comenzar", 100, 100);
}
}

function mousePressed(){
  dY = -15;
  if(estado === 0){
    estado = 1;
    posY = 100;
    x = 0;
    dY = 3;
    noCursor();
  }
}