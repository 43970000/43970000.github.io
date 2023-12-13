class Juego{
    
constructor() {
    
    this.cons = [];
  
  for (let i = 0; i < 5; i++) {
       
    this.cons.push(new Conejo());
   
}

  this.conejosNegros = [];
  
  for (let i = 0; i < 2; i++) {
       
       
       this.conejosNegros.push(new ConejoNegro());
       
}
}
  
  
jugar(){
    
 for (let i = 0; i < 5; i++) {
    
    this.cons[i].dibujar();

}
  
 for (let i = 0; i < 2; i++) {
   
   
   this.conejosNegros[i].dibujar();
   
}    
}  
  
bolsa(){
  
   for (let i = 0; i < 5; i++) {
     
    this.cons[i].capturar(mouseX,mouseY);
   
}

  for (let i = 0; i < 2; i++) {
    
   this.conejosNegros[i].capturar(mouseX, mouseY);
   
}
}      
}  
