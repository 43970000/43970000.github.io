
class Aventura {
  
  constructor() {
    
    this.estado = 0;
    
    this.botones = new Boton(550,300,50);
    
    this.botonPlay = new Boton (530, 530, 55);
    
    this.botonA = new Boton (50, 300, 50);
    
    this.jug = new Juego();
  }

  mostrar() {
    
    
    
    switch (this.estado) {
      
     case 0:
        image(gato[0], 0, 0);
        fill(255);
        rect(0, 0, 600, 125);
        this.botones.dibujar();
        this.planillabase(
          "Érase una vez un molinero muy pobre que dejó a sus tres hijos por herencia\nun molino, un asno y un gato. En el reparto, el molino fue para el hijo mayor,\nel asno para el segundo y el gato para el más joven. El joven amo lamentó su\nsuerte al darse cuenta de que solo tenía un gato mientras sus hermanos\ntrabajarían juntos y harían fortuna.", 10, 20);
        
        break;
      case 1:
       image(gato[1], 0, 0);
       fill(255);
       rect(0, 0, 600, 105);
       
       this.botones.dibujar();
        this.planillabase(
          "El gato, escuchando las preocupaciones de su joven amo, decidió ayudarlo y le\npidió un saco y un par de botas para andar entre los matorrales. Aunque el\njoven amo dudaba de las palabras del gato, decidió concederle lo que pedía\ndebido a la astucia que le reconocía.", 10, 20);

        break;
        
         case 2:
      image(gato[2], 0, 0);
      fill(255);
      rect(0, 0, 600, 70);
      
      this.botones.dibujar();
      this.planillabase("El gato puso en marcha su plan y se dirgio hacia el bosque con un saco, ahora tu tienes\nque cazar 10 conejos blancos para entregarle al rey", 10, 20);

      break;
    case 3:
      image(gato[3], 0, 0);
      fill(255);
      rect(0, 0, 600, 80);
      
      this.botones.dibujar();
      this.planillabase("El gato continuó capturando animales para presentarlos como regalos al rey\ndurante varias semanas. El rey se mostraba cada vez más satisfecho con el\nsupuesto marqués de Carabás y sus generosos obsequios.", 10, 20);

      break;
    case 4:
      image(gato[4], 0, 0);
      this.botones.dibujar();
      circle(50, 300, 50);
      fill(255);
      text("A", 45, 305);
      text("B", 545, 305);
      rect(0, 0, 600, 145);
      fill(0);
      this.planillabase("El gato se enteró de que el rey y su hija, la princesa, irían de visita al río. El gato \nle pidió a su amo que se bañara en el río en un lugar específico y le aseguró que\nse ocuparía del resto. Cuando la carroza del rey pasó junto al río, el gato empezó\na gritar pidiendo socorro, asegurando que el marqués de Carabás se estaba\nahogando.\nDECIDI SI a) dejar que el marqués se ahogue b) ayudar al marqués", 10, 20);

      break;
    case 5:
      image(gato[5], 0, 0);
      fill(255);
      rect(0, 520, 600, 80);
     
      this.botones.dibujar();
      this.planillabase("Recordando los regalos recibidos, el rey ordenó a su guarda ayudar al joven amo\ny lo vistió con el traje más elegante. En el carruaje, la princesa se enamoró de\ninmediato del apuesto marqués de Carabás.", 10, 540);

      break;
    case 6:
      image(gato[6], 0, 0);
      fill(255);
      rect(0, 480, 600, 120);
     
      this.botones.dibujar();
      this.planillabase("El gato, encantado de ver que su plan funcionaba, caminó delante de ellos hasta\nencontrarse con campesinos cortando el prado. Les indicó que respondieran al\nrey que las tierras pertenecían al marqués de Carabás, prometiéndoles una gran\nrecompensa. Los campesinos obedecieron y al escuchar sus respuestas, el rey\nquedó asombrado por la riqueza del supuesto marqués. ", 10, 500);

      break;
    case 7:
      image(gato[7], 0, 0);
      this.botones.dibujar();
      circle(50, 300, 50);
      fill(255);
      text("A", 45, 305);
      text("B", 545, 305);
      rect(0, 0, 600, 80);
      fill(0);
      this.planillabase("Finalmente, el gato llevó a su amo hasta el majestuoso castillo del ogro,\nque poseía todas las tierras.\nDECIDE SI a) el ogro se transforma en león o b) el ogro se transforma en ratón.", 10, 20);

      break;
    case 8:
      image(gato[8], 0, 0);
      fill(255);
      rect(0, 0, 600, 80);
      
      this.botones.dibujar();
      this.planillabase("El gato logró que el ogro se convirtiera en ratón, lo atrapó y lo comió. Luego dio\nla bienvenida al rey al castillo y este, deslumbrado por la fortuna del marqués\nde Carabás, le dio su consentimiento para casarse con la princesa. FIN", 10, 20);

      break;
    case 9:
      image(gato[9], 0, 0);
      fill(255);
      rect(0, 0, 600, 80);
      
      this.botones.dibujar();
      this.planillabase("El rey decide no ayudar al marqués y deja que se ahogue en el río. El gato con\nbotas queda muy triste por la muerte de su amo y decide vengarse del rey,\ncaza conejos y los envenena.", 10, 20);

      break;
    case 10:
      image(gato[10], 0, 0);
      fill(255);
      rect(0, 0, 600, 50);
      
      this.botones.dibujar();
      this.planillabase("El gato le entrega los conejos envenenados al rey y este muere, después de esto\nel gato se va a recorrer el mundo en busca de un nuevo amo. FIN", 10, 20);

      break;
    case 11:
      image(gato[11], 0, 0);
      fill(255);
      rect(0, 0, 600, 50);
      
      this.botones.dibujar();
      this.planillabase("El ogro furioso de que el gato entró en su castillo se transforma en un león y se\ncome al gato. FIN", 10, 20);

      break;
    case 12:
      background(255);
      this.botones.dibujar();
      this.planillabase("CREDITOS:\nAlumno: Valentin Ledesma\nLegajo: 94772/5\nAutor: Charles Perrault\nCuento: El Gato Con Botas", 200, 250);
      
     break;
     case 13:
    image(reglas,0,0,600,600);
    push();
    fill(255);
    circle( 530, 530, 110, 110 );
    fill(0);
    textSize(30);
    text("PLAY",495,540);
    pop();

     break;
     case 14:
      image(fondo,0,0,600,600);
 
   aventura.jug.jugar();
  
     push();
     fill(255);
     textSize(20);
     text("Tiempo restante: " + timer, 340, 30);
     pop();
     image(saco, mouseX, mouseY, 120, 120);
     textSize(24);
     fill(0);
     text('Conejos capturados: ' + contador, 10, 30);
   
  if (frameCount % 60 == 0 && timer > 0){
     
    timer--; 
   
}
  



  if (timer == 0) {
   
    aventura.estado = 16;
  
}

  if (contador >= 10) {
    
    aventura.estado = 15;
    contador = 0; 
  
}   
      break;
      case 15: 
      
    image(ganaste,0,0,600,600);  
    push();
    this.botones.dibujar();
    rect(0,0,600,65);
    fill(255);
    text("EL GATO CON BOTA LE ENTREGA LOS CONEJOS \nAL REY Y SE LOGRA GANAR SU APRECIO",10,30 );
    
    pop();
    
    break;
    case 16:
     
    image(perdiste,0,0,600,600);
    push();
    fill(0);
    rect(0,0,600,90);
    fill(255);
    text("EL DUEÑO DEL GATO CON BOTAS SE \nDECEPCIONA DE ESTE YA QUE NO LE FUE UTIL \nPARA NADA Y LO ABANDONA",10,30 );
    circle( 530, 530, 90, 90 );
    fill(0);
    textSize(20);
    text("RESET",495,540);
    pop();

      break;
      default:
      console.log("Fuera de la aventura");

      break;
      
    }
      
     
  }

   planillabase(mitexto, e, t) {
    let eltexto = mitexto;
    text(eltexto, e, t);
    textSize(15);
}




}


function mousePressed() {
  
 

  if (aventura.estado == 0 && aventura.botones.click()) {
    
    aventura.estado = 1;
    
  } else if (aventura.estado == 1 && aventura.botones.click()) {
    
    aventura.estado = 2;
    
  } else if (aventura.estado == 2 && aventura.botones.click()) {
    
    aventura.estado = 13;
    
  } else if (aventura.estado == 3 && aventura.botones.click()) {
    
    aventura.estado = 4;
    
  }
  
  else if (aventura.estado == 4 && aventura.botones.click()) {
    
    aventura.estado = 5;
    
  }
  
  else if (aventura.estado == 4 && aventura.botonA.click()) {
    
    aventura.estado = 9;
    
  }
  
  else if (aventura.estado == 5 && aventura.botones.click()) {
    
    aventura.estado = 6;
  }
  else if (aventura.estado == 6 && aventura.botones.click()) {
    
    aventura.estado = 7;
  }
  
  else if (aventura.estado == 7 && aventura.botones.click()) {
    
    aventura.estado = 8;
    
  }
  
  else if (aventura.estado == 3 && aventura.botonA.click()) {
    
    aventura.estado = 11;
    
  }
  
  
   else if (aventura.estado == 9 && aventura.botones.click()) {
    
    aventura.estado = 10;
  }
  
   else if (aventura.estado == 10 && aventura.botones.click()) {
    
    aventura.estado = 12;
  }
  
   else if (aventura.estado == 11 && aventura.botones.click()) {
    
    aventura.estado = 12;
  }
  
   else if (aventura.estado == 8 && aventura.botones.click()) {
    
    aventura.estado = 12;
    
  }
   
   else if (aventura.estado == 12 && aventura.botones.click()) {
    
    aventura.estado = 0;
    timer = 10;
    contador = 0;
  }




 else if ( aventura.estado == 13  && aventura.botonPlay.click()) {
    
    aventura.estado = 14;
}
  
  
  else if ( aventura.estado == 15  && aventura.botones.click() ) {
    
    aventura.estado = 3;
    
}
  
  
  else if ( aventura.estado == 16  && aventura.botonPlay.click() ) {
    
    aventura.estado = 0;
    timer = 10;
    contador = 0;
}
  
  
  
  aventura.jug.bolsa();

}  
