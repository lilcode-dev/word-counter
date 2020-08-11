const textArea = document.getElementById("input");
const countWords = document.getElementById("counter-words");
const countCarac = document.getElementById("counter-carac");
const countOra = document.getElementById("counter-ora");
const countPa = document.getElementById("counter-pa");

const counter = ( e ) => {
  e.preventDefault();
  let text = textArea.value;
  // countCarac.textContent = textArea.value.length;
  text = text.replace(/[ ]+/g," "); 
  // text = text.replace(/[.]+/g, "."); elimina dos o mas puntos y los reemplaza por (.)
  text = text.replace(/^[ .,\n]/g,"");
  // text = text.replace(/[,]+/g,/./g);
  //text = text.replace(/[,]+/,""); // que lo remplaze y pongo solo un caracter TEST
  text = text.replace(/\.\.\.\.+/g,"..."); // elimina 4 puntos seguidos y lo sustituye por los 3 puntos suspensivos
  text = text.replace(/[\n]+/g, "\n");
  // text = text.replace(/^[.]/g,""); // reducido
  // text = text.replace(/^[.]/g,"");// reducido
  textArea.value = text;
  console.log(textArea.value.length);
  countCarac.textContent = textArea.value.length;

	
  if ( text.split(" ") == "" || text.split(".") == "" || text.split(/\n/g) == "" ) {
      countWords.textContent = 0;
      countOra.textContent = 0;
      countPa.textContent = 0;
      // textArea.value = text;

  } else {
      // countWords.textContent = (text.split(" ")).length;// corregir palabras de mas por el espacio
      countWords.textContent = (text.split(/ ./g)).length;
      countOra.textContent = ((text.split(/\. /g)).length) - 1;
      countPa.textContent = ((text.split(/\n/g)).length) - 1;
      // textArea.value = text;

  }
};

const loadEvents = () => textArea.addEventListener('keyup', counter); 

loadEvents();
