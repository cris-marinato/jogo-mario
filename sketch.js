let personagem
let grama
let princesa
let tamanho = 64
let andarX = 0
let andarY = 0
let velocidade = 64
let restartGame = 0


function setup() {
  createCanvas(576, 576);
  personagem = loadImage("mario.png")
  grama = loadImage("grama.jpg")
  princesa = loadImage("princesa.png")
}

function draw() {
  if(andarX < 0){
    andarX = 0
  }
  if(andarY < 0){
    andarY = 0
  }
  if(andarX > tamanho * 8 ) {
     andarX = tamanho * 8
     }
  if(andarY > tamanho * 8 ){
     andarY = tamanho * 8
     }

  

  background(220);

for (let i = 0; i < 9; i++){
  for (let j = 0; j < 9; j++){
    image (grama, tamanho * i, tamanho * j, tamanho, tamanho)
  }
}
  image(princesa, tamanho*8, tamanho*8, tamanho, tamanho)
  image(personagem, andarX, andarY, tamanho, tamanho)
  if(andarX === tamanho*8 && andarY === tamanho*8){
    rect(130, 270, 330, 55)
    textSize(20)
    text("Parabens, você salvou a Princesa!", 140, 300)
    restart = createButton ("Reiniciar")
    restart.mousePressed(resetGame)
    noLoop()
    }    
     }
function resetGame() {
  andarX = 0
  andarY = 0
  restart.remove()
  loop()
  
}

function keyPressed() {
  if(keyIsDown(UP_ARROW)){
    andarY -= velocidade     
     }
  if(keyIsDown(DOWN_ARROW)){
    andarY += velocidade
     }
  if(keyIsDown(LEFT_ARROW)){
    andarX -= velocidade
     }
  if(keyIsDown(RIGHT_ARROW)) {
    andarX+= velocidade
  }
}







