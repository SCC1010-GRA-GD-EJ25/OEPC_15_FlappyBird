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

//Medusa
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

//Mago
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

//Gladiadora
let randomGladiadora=3;
let gladiadora1;
let gladiadora2;  
let gladiadora3;
let gladiadora4;
let gladiadora5;
let gladiadora6;
let gladiadora7;
let gladiadora8;

//Duende
let randomDuende=4;
let duende1;
let duende2;
let duende3;
let duende4;
let duende5;
let duende6;
let duende7;
let duende8;
let duende9;
let duende10;
let duende11;
let duende12;
let duende13;
let duende14;

//Golem
let randomGolem=5;
let golem1;
let golem2;
let golem3;
let golem4;
let golem5;
let golem6;

//Lobo
let randomLobo=6;
let lobo1;
let lobo2;
let lobo3;
let lobo4;
let lobo5;
let lobo6;


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

  gladiadora1 = loadImage('./images/gladiadora/gladiadora1.png');
  gladiadora2 = loadImage('./images/gladiadora/gladiadora2.png');
  gladiadora3 = loadImage('./images/gladiadora/gladiadora3.png');
  gladiadora4 = loadImage('./images/gladiadora/gladiadora4.png');
  gladiadora5 = loadImage('./images/gladiadora/gladiadora5.png');
  gladiadora6 = loadImage('./images/gladiadora/gladiadora6.png');
  gladiadora7 = loadImage('./images/gladiadora/gladiadora7.png');
  gladiadora8 = loadImage('./images/gladiadora/gladiadora8.png');
  
  duende1 = loadImage('./images/duende/duende1.png');
  duende2 = loadImage('./images/duende/duende2.png');
  duende3 = loadImage('./images/duende/duende3.png');
  duende4 = loadImage('./images/duende/duende4.png');
  duende5 = loadImage('./images/duende/duende5.png');
  duende6 = loadImage('./images/duende/duende6.png');
  duende7 = loadImage('./images/duende/duende7.png'); 
  duende8 = loadImage('./images/duende/duende8.png');
  duende9 = loadImage('./images/duende/duende9.png');
  duende10 = loadImage('./images/duende/duende10.png');
  duende11 = loadImage('./images/duende/duende11.png');
  duende12 = loadImage('./images/duende/duende12.png');
  duende13 = loadImage('./images/duende/duende13.png');
  duende14 = loadImage('./images/duende/duende14.png');

  golem1 = loadImage('./images/golem/golem1.png');
  golem2 = loadImage('./images/golem/golem2.png');
  golem3 = loadImage('./images/golem/golem3.png');
  golem4 = loadImage('./images/golem/golem4.png');
  golem5 = loadImage('./images/golem/golem5.png');
  golem6 = loadImage('./images/golem/golem6.png');

  lobo1 = loadImage('./images/lobo/lobo1.png');
  lobo2 = loadImage('./images/lobo/lobo2.png');
  lobo3 = loadImage('./images/lobo/lobo3.png');
  lobo4 = loadImage('./images/lobo/lobo4.png');
  lobo5 = loadImage('./images/lobo/lobo5.png');
  lobo6 = loadImage('./images/lobo/lobo6.png');
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
      image(pared, wallX[i], wallY[i]-260, 100, 300); //Arriba
      image(pared, wallX[i], wallY[i]+240, 100, 300); //Abajo
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
  randomEnemigo = Math.floor(random(0, 7));
    console.log(randomEnemigo);
    animacion_medusa = false;
    animacion_mago = false;
  }

  switch(randomEnemigo){
    case randomMedusa:
    ataque = true;
    if(animacion_medusa==false){
    ataqueMedusa( 1067-imedusa, 405 , 60, 60);
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
    if(animacion_mago==false){
    ataqueMago( 1000-imago,400, 90,90);
    imago+=4;
    }
   if(1000-imago<180 && posY>400){
      congelado = true;
      estado=0;
      console.log("asesinado");
    }
    break;

    case randomGladiadora: 
    ataque = true;
    if(animacion_mago==false){
    ataqueGladiadora( 1000-imago,390, 90,90);
    imago+=4;
    }
   if(1000-imago<140 && posY>400){
      congelado = true;
      estado=0;
      console.log("gladiadorizado");
    }
    break;

    case randomDuende: 
    ataque = true;
    if(animacion_mago==false){
    ataqueDuende( 1000-imago,400, 60,60);
    imago+=4;
    }
   if(1000-imago<100 && posY>400){
      congelado = true;
      estado=0;
      console.log("duendeizado");
    }
    break;

    case randomGolem: 
    ataque = true;
    if(animacion_mago==false){
    ataqueGolem( 1000-imago,365, 150,150);
    imago+=4;
    }
   if(1000-imago<180 && posY>400){
      congelado = true;
      estado=0;
      console.log("golemitizado");
    }
    break;

    case randomLobo: 
    ataque = true;
    if(animacion_mago==false){
    ataqueLobo( 1000-imago,400, 70,70);
    imago+=4;
    }
   if(1000-imago<160 && posY>400){
      congelado = true;
      estado=0;
      console.log("loboizado");
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
    auxSonido=0;
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

function touchStarted(){
  mousePressed();
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
  if(ime<10*v){
    image(medusa1, x, y, w, h);
  }else if(ime<10.5*v){
    image(medusa2, x, y, w, h);
  }else if(ime<11*v){
    image(medusa3, x, y, w, h);
  }else if(ime<11.5*v){
    image(medusa4, x, y, w, h);
  }else if(ime<12*v){
    image(medusa5, x, y, w, h);
  }else if(ime<12.8*v){
    image(medusa6, x, y, w, h);
  }else if(ime<13.6*v){
    image(medusa7, x, y, w, h);
  }else if(ime<20*v){
    image(medusa8, x, y, w, h);
  }else if(ime<20*v){
    image(medusa7, x, y, w, h);  
  }else if(ime<21*v){
    image(medusa6, x, y, w, h);
  }else if(ime<22*v){
    image(medusa5, x, y, w, h);
  }else if(ime<23*v){
    image(medusa4, x, y, w, h);
  }else if(ime<24*v){
    image(medusa3, x, y, w, h);    
  }else if(ime<50*v){
    image(medusa2, x, y, w, h);
  }else if(ime>50*v){
    ime=1;
    animacion_medusa = true;
    ataque = false;
    imedusa = 0;
  }
  ime++;
  }

  function ataqueMago(x, y, w, h){
  if(imago<v){
    image(mago1, x, y, w, h);
  }else if(imago<50*v){
    image(mago2, x, y, w, h);
  }else if(imago<54*v){
    image(mago3, x, y, w, h);
  }else if(imago<58*v){
    image(mago4, x, y, w, h);
  }else if(imago<62*v){
    image(mago5, x, y, w, h);
  }else if(imago<66*v){
    image(mago6, x, y, w, h);
  }else if(imago<70*v){
    image(mago7, x, y, w, h);
  }else if(imago<74*v){
    image(mago6, x, y, w, h);
  }else if(imago<78*v){
    image(mago7, x, y, w, h);
  }else if(imago<82*v){
    image(mago6, x, y, w, h);  
 }else if(imago<86*v){
    image(mago7, x, y, w, h);
  }else if(imago<90*v){
    image(mago6, x, y, w, h);  
 }else if(imago<94*v){
    image(mago7, x, y, w, h);
  }else if(imago<98*v){
    image(mago6, x, y, w, h);  
  }else if(imago<102*v){
    image(mago7, x, y, w, h);
  }else if(imago<106*v){
    image(mago6, x, y, w, h);    
  }else if(imago<110*v){
    image(mago5, x, y, w, h);
  }else if(imago<112*v){
    image(mago4, x, y, w, h);
  }else if(imago<114*v){
    image(mago3, x, y, w, h);
  }else if(imago<150*v){
    image(mago2, x, y, w, h);
  }else if(imago>150*v){
    imago=1;
    animacion_mago = true;
    ataque = false; 
  }
  imago++;
  }

  function ataqueGladiadora(x, y, w, h){
if(imago<v){
    image(gladiadora1, x, y, w, h);
  }else if(imago<50*v){
    image(gladiadora2, x, y, w, h);
  }else if(imago<54*v){
    image(gladiadora3, x, y, w, h);
  }else if(imago<58*v){
    image(gladiadora4, x, y, w, h);
  }else if(imago<62*v){
    image(gladiadora5, x, y, w, h);
  }else if(imago<66*v){
    image(gladiadora6, x, y, w, h);
  }else if(imago<70*v){
    image(gladiadora7, x, y, w, h);
  }else if(imago<150*v){
    image(gladiadora8, x, y, w, h);
   }else if(imago>150*v){
    imago=1;
    animacion_mago = true;
    ataque = false; 
  }
  imago++;
  }

function ataqueDuende(x, y, w, h){
if(imago<v){
    image(duende1, x, y, w, h);
  }else if(imago<60*v){
    image(duende2, x, y, w, h);
  }else if(imago<64*v){
    image(duende3, x, y, w, h);
  }else if(imago<68*v){
    image(duende4, x, y, w, h);
  }else if(imago<72*v){
    image(duende5, x, y, w, h);
  }else if(imago<76*v){
    image(duende6, x, y, w, h);
  }else if(imago<80*v){
    image(duende7, x, y, w, h);
  }else if(imago<84*v){
    image(duende8, x, y, w, h);
  }else if(imago<88*v){
    image(duende9, x, y, w, h);
  }else if(imago<92*v){
    image(duende10, x, y, w, h); 
  }else if(imago<96*v){
    image(duende11, x, y, w, h);
  }else if(imago<100*v){
    image(duende12, x, y, w, h);
  }else if(imago<104*v){
    image(duende13, x, y, w, h);
  }else if(imago<210*v){
    image(duende14, x, y, w, h);
   }else if(imago>210*v){
    imago=1;
    animacion_mago = true;
    ataque = false; 
  }
  imago++;
  }

  function ataqueGolem(x, y, w, h){
if(imago<v){
    image(golem1, x, y, w, h);
  }else if(imago<80*v){
    image(golem2, x, y, w, h);
  }else if(imago<84*v){
    image(golem3, x, y, w, h);
  }else if(imago<88*v){
    image(golem4, x, y, w, h);
  }else if(imago<92*v){
    image(golem5, x, y, w, h);
  }else if(imago<96*v){
    image(golem6, x, y, w, h);
  }else if(imago<100*v){
    image(golem5, x, y, w, h);
  }else if(imago<104*v){
    image(golem4, x, y, w, h);
  }else if(imago<108*v){
    image(golem3, x, y, w, h);
  }else if(imago<112*v){
    image(golem2, x, y, w, h); 
  }else if(imago<150*v){
    image(golem1, x, y, w, h);
   }else if(imago>150*v){
    imago=1;
    animacion_mago = true;
    ataque = false; 
  }
  imago++;
  }

function ataqueLobo(x, y, w, h){
if(imago<v){
    image(lobo1, x, y, w, h);
  }else if(imago<80*v){
    image(lobo2, x, y, w, h);
  }else if(imago<84*v){
    image(lobo3, x, y, w, h);
  }else if(imago<88*v){
    image(lobo4, x, y, w, h);
  }else if(imago<92*v){
    image(lobo5, x, y, w, h);
  }else if(imago<96*v){
    image(lobo6, x, y, w, h);
  }else if(imago<100*v){
    image(lobo5, x, y, w, h);
  }else if(imago<104*v){
    image(lobo4, x, y, w, h);
  }else if(imago<108*v){
    image(lobo3, x, y, w, h);
  }else if(imago<112*v){
    image(lobo2, x, y, w, h); 
  }else if(imago<150*v){
    image(lobo1, x, y, w, h);
   }else if(imago>150*v){
    imago=1;
    animacion_mago = true;
    ataque = false; 
  }
  imago++;
  }