let imagenFondo;
let imagenInicio;
let personaje;
let x = 0;
let posY = 100;
let dY = 3;
let estado = 0; //0: menu, 1: jugando, 2: gameOver
let wallX = [];
let wallY = [];
let pared;
let puntaje = 0;
let puntajeMax = 0;
let recordAnterior = 0;
let musicaJuego;
let fuente;

//New
let i=0;
let aux=0;
let v=8;
let dv1;
let dv2;
let dv3;
let dv4;
let dv5;
let dv6;

function preload() {
  // put preload code here
  imagenFondo = loadImage('./images/fondojuego00.png');
  imagenInicio = loadImage('./images/fondoInicio.jpg');
  personaje = loadImage('./images/bird.png');
  pared = loadImage('./images/torre.png');
  musicaTrompeta = loadSound('./sounds/trompeta.mp3')
  musicaCuerno = loadSound('./sounds/cuerno.mp3')
  musicaJuego = loadSound('./sounds/musicafondo.mp3')
  fuente = loadFont('./fonts/MedievalSharp-Bold.ttf')

  //New
  dv1 = loadImage('./images/volando1.png');
  dv2 = loadImage('./images/volando2.png');
  dv3 = loadImage('./images/volando3.png');
  dv4 = loadImage('./images/volando4.png');
  dv5 = loadImage('./images/volando5.png');
  dv6 = loadImage('./images/volando6.png');
}

function setup() {
  // put setup code here
  createCanvas(1000,480)
  noCursor()
  textFont(fuente)
}

function draw() {
  // put drawing code here
  if(estado === 1){
    if(aux==0){
    musicaCuerno.play();
    aux=1;
    }
    imageMode(CORNER);
    background(255)
    image(imagenFondo, x, 0);
    image(imagenFondo, x+imagenFondo.width, 0);
    x-=5;
    dY=dY +1;
    posY = posY + dY;
    if(x <= -imagenFondo.width){
      x = 0;
    }
    //Obstaculos
    for(let i=0;i<wallX.length; i++){
      imageMode(CENTER);
      image(pared, wallX[i], wallY[i]-260, 100, 300);
      image(pared, wallX[i], wallY[i]+240, 100, 300);
      if(wallX[i] < 0){
        wallX[i] = width;
        wallY[i] = random(150, 350);
      }

    //Puntaje
    if(wallX[i] === 100){
      puntaje = puntaje + 1;
      puntajeMax = max(puntaje, puntajeMax);
    }
        wallX[i] = wallX[i] - 5;
          if(posY < -60 || posY > height+60  
            || (abs(wallX[i]-100)<60 
            && abs(wallY[i]-posY)>100)){
            musicaJuego.stop();
            estado=2;
          } 
    }

    //Personaje
  dragon_volando(100, posY, 60, 60);

  text("Puntaje: " + puntaje, width/2, 100);
} else if(estado === 0){
  background(0);
  imageMode(CORNER);
  cursor();
  image(imagenInicio, 0, 0, 728, 408);
  textSize(20);
  fill(255);
  text("Puntaje Maximo: "+puntajeMax, 750, 100);
  text("Haga clic para comenzar", 750, 200);
  if(puntajeMax > recordAnterior){
    if(!musicaTrompeta.isPlaying()){
    musicaTrompeta.play();
    }
  }
}
  
  if(estado === 2){
    aux==0;
    image(imagenInicio, 0, 0, width, height);
    textSize(32);
    fill(255);
    text("Game Over", width/2-50, height/2-50);
    text("Puntaje: " + puntaje, width/2-50, height/2);
    text("Haga clic para reiniciar", width/2-50, height/2+50);
  }
}

function mousePressed(){
  if(estado === 0){
    estado = 1;
    posY = 100;
    x = 0;
    dY = 3;
    wallX = [500, 800, 1100];
    wallY [0] = random(200, 300);
    wallY [1] = random(200, 300);
    wallY [2] = random(200, 300);
    puntaje = 0;
    recordAnterior = puntajeMax;
    noCursor();

    if(musicaTrompeta.isPlaying()){
      musicaTrompeta.stop();
    }
    musicaJuego.loop();
  }
  dY = -15;

}

function dragon_volando(x, y, w, h){
  if(i<v){  
    image(dv1, x, y, w, h);  
    i++;
  }else if(i<v){
    image(dv2, x, y, w, h);
    i++;
  }else if(i<2*v){
    image(dv3, x, y, w, h);
    i++;
  }else if(i<3*v){
    image(dv4, x, y, w, h);
    i++;
  }else if(i<4*v){
    image(dv5, x, y, w, h);
    i++;
  }else if(i<5*v){
    image(dv6, x, y, w, h);
   i++;
  }else if(i<6*v){
    image(dv5, x, y, w, h);
    i++;
  }else if(i<7*v){
    image(dv4, x, y, w, h);
    i++;
  }else if(i<8*v){
    image(dv3, x, y, w, h);
    i++;
  }else if(i<9*v){
    image(dv2, x, y, w, h);
    i=1;
  }
  }