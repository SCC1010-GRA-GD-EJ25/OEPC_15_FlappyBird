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
let musicaRecord;
let musicaJuego;
let fuente;

//New
let i=0;
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
  pared = loadImage('./images/pared.png');
  musicaRecord = loadSound('./sounds/aplauso.wav')
  musicaJuego = loadSound('./sounds/musicafondo.mp3')
  fuente = loadFont('./fonts/PetLove.ttf')

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
  createCanvas(1000,512)
  noCursor()
  textFont(fuente)
}

function draw() {
  // put drawing code here
  if(estado === 1){
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
      image(pared, wallX[i], wallY[i]-500);
      image(pared, wallX[i], wallY[i]+500);
      if(wallX[i] < 0){
        wallX[i] = width;
        wallY[i] = random(200, 300);
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
            estado=0;
          } 
    }

    //Personaje
  //image(personaje, 100, posY, 60, 60); 
  dragon_volando(100, posY, 60, 60);

  text("Puntaje: " + puntaje, width/2, 100);
} else if(estado === 0){
  background(0);
  imageMode(CORNER);
  cursor();
  image(imagenInicio, 0, 0, 450, 600);
  textSize(24);
  fill(255);
  text("Puntaje Maximo: "+puntajeMax, 600, 100);
  text("Haga clic para comenzar", 600, 200);
  if(puntajeMax > recordAnterior){
    if(!musicaRecord.isPlaying()){
    musicaRecord.play();
    }
  }
}
  
  if(estado === 2){
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

    if(musicaRecord.isPlaying()){
      musicaRecord.stop();
    }
    musicaJuego.loop();
  }
  dY = -15;

}

function dragon_volando(x, y, w, h){
  if(i<30){  
    image(dv1, x, y, w, h);  
    i++;
  }else if(i<60){
    image(dv2, x, y, w, h);
    i++;
  }else if(i<90){
    image(dv3, x, y, w, h);
    i=1;
  }else if(i<120){
    image(dv4, x, y, w, h);
    i++;
  }else if(i<150){
    image(dv5, x, y, w, h);
    i++;
  }else if(i<180){
    image(dv6, x, y, w, h);
    i=0;
  }else if(i<210){
  image(dv6, x, y, w, h);
  i++;
  }else if(i<240){
    image(dv5, x, y, w, h);
    i=1;
  }else if(i<270){
    image(dv4, x, y, w, h);
    i++;
  }else if(i<300){
    image(dv3, x, y, w, h);
    i++;
  }else if(i<330){
    image(dv2, x, y, w, h);
    i=0;
  }
  }