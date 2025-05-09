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

let ataque = false;
let randomEnemigo = 0;

let congelado = false;

let ime=0;

let randomMedusa=1;
let imedusa=0;
let animacion_medusa = false;
let medusa1;
let medusa2;
let medusa3;
let medusa4;
let medusa5;
let medusa6; 
let medusa7;
let medusa8;

let randomMago=2;
let imago=0;
let animacion_mago = false;
let mago1;
let mago2;
let mago3;
let mago4;
let mago5;
let mago6;
let mago7;

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

  medusa1 = loadImage('./images/unomedu.png');
  medusa2 = loadImage('./images/dosmedu.png');
  medusa3 = loadImage('./images/tresmedu.png');
  medusa4 = loadImage('./images/cuatromedu.png');
  medusa5 = loadImage('./images/cincomedu.png');
  medusa6 = loadImage('./images/seismedu.png');
  medusa7 = loadImage('./images/sietemedu.png');
  medusa8 = loadImage('./images/ochomedu.png'); 

  
  mago1 = loadImage('./images/mago1.png');
  mago2 = loadImage('./images/mago2.png');
  mago3 = loadImage('./images/mago3.png');
  mago4 = loadImage('./images/mago4.png');
  mago5 = loadImage('./images/mago5.png');
  mago6 = loadImage('./images/mago6.png');
  mago7 = loadImage('./images/mago7.png');
}

function setup() {
  // put setup code here
  createCanvas(1000,480)
  noCursor()
  textFont(fuente)
}

function draw() {
  // put drawing code here
  console.log(posY);
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
            estado=0;
          } 
    }

    //Personaje
  dragon_volando(100, posY, 60, 60);
  text("Puntaje: " + puntaje, width/2, 100);

  //Enemigos
  if(ataque==false){
    randomEnemigo = Math.floor(random(0, 10));
    //console.log("ataque false")
    animacion_medusa = false;
    animacion_mago = false;
    
    //console.log(randomEnemigo);
  }

  switch(randomEnemigo){
    case randomMedusa:
    ataque = true;
    if(animacion_medusa==false){
    ataqueMedusa( 1000-imedusa, 460, 60, 60);
    //console.log("ataque medusa");
    imedusa+=5;
    }
    if(1000-imedusa<140 && posY>400){
      congelado = true;
      estado=0;
      console.log("congelado");
        console.log(posY);

    }
    break;
    case randomMago:
    ataque = true;
    //console.log("ataque mago");
    if(animacion_mago==false){
    ataqueMago( 1000-imago, 440, 180,180);
    //console.log("ataque mago");
    imago+=4;
    }
    if(1000-imago<140 && posY>400){
      congelado = true;
      estado=0;
      console.log("asesinado");
        console.log(posY);
    }
    break;
  }

} else if(estado === 0){
  ataque = false;
  congelado = false;
  animacion_medusa = false;
  animacion_mago = true;
  ime = 0;
  imago = 0;
  aux = 0;
  imedusa = 0;
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
    i++;
  }else if(i<10*v){
    i=1;
  }
}
  function ataqueMedusa(x, y, w, h){
  if(ime<v){
    image(medusa1, x, y, w, h);
  }else if(ime<2*v){
    image(medusa2, x, y, w, h);
  }else if(ime<3*v){
    image(medusa3, x, y, w, h);
  }else if(ime<4*v){
    image(medusa4, x, y, w, h);
  }else if(ime<5*v){
    image(medusa5, x, y, w, h);
  }else if(ime<6*v){
    image(medusa6, x, y, w, h);
  }else if(ime<7*v){
    image(medusa7, x, y, w, h);
  }else if(ime<30*v){
    image(medusa8, x, y, w, h);
  }else if(ime<31*v){
    ime=1;
    animacion_medusa = true;
    ataque = false;
    ataque = false; 
    imedusa = 0;
  }
  ime++;
  }

  function ataqueMago(x, y, w, h){
  if(imago<v){
    image(mago1, x, y, w, h);
  }else if(imago<100*v){
    image(mago2, x, y, w, h);
  }else if(imago<104*v){
    image(mago3, x, y, w, h);
  }else if(imago<108*v){
    image(mago4, x, y, w, h);
  }else if(imago<112*v){
    image(mago5, x, y, w, h);
  }else if(imago<124*v){
    image(mago6, x, y, w, h);
  }else if(imago<126*v){
    image(mago7, x, y, w, h);
  }else if(imago<128*v){
    image(mago6, x, y, w, h);  
  }else if(imago<130*v){
    image(mago5, x, y, w, h);
  }else if(imago<142*v){
    image(mago4, x, y, w, h);
  }else if(imago<164*v){
    image(mago3, x, y, w, h);
  }else if(imago<300*v){
    image(mago2, x, y, w, h);
  }else if(imago<380*v){
    imago=1;
    animacion_mago = true;
    ataque = false; 
    imedusa = 0;
  }
  imago++;
  console.log(x+", "+y+", "+w+", "+h);
  }
