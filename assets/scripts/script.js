const listaParty = ["Smirnoff", "Campari", "Gray Goose", "Baileys", "Jaegermeister", "Limoncelo"];
let counter = 0;
const divParty = document.getElementById(`listaParty`);
let i = 0;


while(counter < listaParty.length){

    console.log(counter);
    console.log(listaParty[i]);

    let listElement = document.createElement(`p`)

    divParty.innerHTML += `<p> ${listaParty[i]} <p>`;

    counter++;
    i++;
  
  }
