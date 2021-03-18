let seleccionar = document.querySelector("select");
let titulo = document.querySelector("h1");
let parrafo = document.querySelector("p");
let imagen=document.querySelector("div")

seleccionar.addEventListener("change", escogercancion);

function escogercancion() {
  let eleccion = seleccionar.value;
  let letras_canciones=["Lately, I've been, I've been losing sleep Dreaming about the things that we could be  But baby, I've been, I've been praying hard Said no more counting dollars We'll be counting stars  Yeah, we'll be counting stars I see this life, like a swinging vine  Swing my heart across the line And in my face is flashing signs Seek it out and ye shall find Old, but I'm not that old Young, but I'm not that bold And I don't think the world is sold On just doing what we're tol I feel something so right Doing the wrong thing And I feel something so wrong Doing the right thing I couldn't lie, couldn't lie, couldn't lie Everything that kills me makes me fgiteel alive Lately, I've been, I've been losing sleep Dreaming about the things that we could be But baby, I've been, I've been…","I'm at a payphone trying to call home All of my change I spent on you Where have the times gone        Baby it's all wrong       Where are the plans we made for two?      Yeah, I, I know it's hard to remember       The people we used to be      It's even harder to picture       That you're not here next to me        You say it's too late to make it       But is it too late to try?     And in our time that you wasted       All of our bridges burned down        I've wasted my nights       You turned out the lights        Now I'm paralyzed       Still stuck in that time when we called it love       But even the sun sets in paradise", "Where there's a will, there's a way, kind of beautiful        And every night has its day, so magical        And if there's love in this life, there's no obstacle        That can't be defeated        For every tyrant, a tear for the vulnerable        In every lost soul, the bones of a miracle        For every dreamer, a dream, we're unstoppable        With something to believe in        Monday left me broken        Tuesday, I was through with hoping        Wednesday, my empty arms were open        Thursday, waiting for love, waiting for love","First things first       I'm going to say all the words        Inside my head        I'm fired up and tired       Of the way that things have been       The way that things have been        Second things second        Don't you tell me what you think that I could be        I'm the one at the sail        I'm the master of my sea        The master of my sea        I was broken from a young age        Taken my sulking to the masses       Writing my poems for the few       That look to me, took to me      Shook to me, feeling me       Singing from heartache from the pain        Taking my message from the veins        Speaking my lesson from the brain        Seeing the beauty through the..        n!made me a, you made me a believer, believer  Pain!    You break me down and build me up        Believer, believer        Pain!        I let the bullets fly, oh let them rain        My life my love my drive it came from...        Pain!        You made me a, you made me a believer, believer"]

  switch(eleccion){
    case "Counting stars": 
    parrafo.textContent = letras_canciones[0];
    titulo.textContent="Counting stars";
    break;
    
  case "Payphone":
    parrafo.textContent =letras_canciones[1]
      titulo.textContent="Payphone";
      break;
  case "Waiting for love":
    parrafo.textContent =letras_canciones[2];
      titulo.textContent="Waiting for love";
      break;
  case "Believer":
     parrafo.textContent = letras_canciones[3];
      titulo.textContent="Believer";
      break;
  default :
    parrafo.textContent = "Debe seleccionar una cancion";

  }
}
