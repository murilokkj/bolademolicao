const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var chao;
var bloco1, bloco2, bloco3;
var bola;
var corda;

function setup(){
  createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;

  chao = new Chao(600,550,1200,100);
  bloco1 = new Bloco(700,400);
  bloco2 = new Bloco(700,350);
  bloco3 = new Bloco(700,300);
  bola = new Bola(300,300);
  corda = new Corda(bola.body,{x: 300,y: 100});

}
function draw(){
  background("black");

  Engine.update(engine);

  Coordenadas();

  chao.display();
  bloco1.display();
  bloco2.display();
  bloco3.display();
  bola.display();
  corda.display();

}

function Coordenadas(){
  fill("white");
  text("X: "+mouseX,10,10);
  text("Y: "+mouseY,10,20);
}
