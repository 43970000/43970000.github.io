let aventura;
let gato = []; 
let img,jug,fondo,saco;
let contador = 0;
let contadorConejosNegros = 0;
let contadorMostrar = contador - contadorConejosNegros;
let timer = 10;

function setup() {
  
  createCanvas(600, 600);
  
  aventura = new Aventura();
  
}

function draw() {
  
  aventura.mostrar();
}

function preload() {

for (let i = 0; i < 12; i++) {
    gato[i] = loadImage("data/gato" + i + ".jpeg");
  }
  
  
saco = loadImage("./data/saco.png");
fondo = loadImage("./data/pradera.png");  
img = loadImage ("./data/conejo.png");
negro = loadImage ("./data/conejonegro.png");
reglas = loadImage ("./data/reglass.jpg");
ganaste = loadImage ("./data/ganaste.jpeg");
perdiste = loadImage ("./data/perdiste.jpeg")
  
  
}
