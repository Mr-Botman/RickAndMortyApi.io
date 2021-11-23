var peticion = 0;
$(document).ready(() => {
  consultandoApi(peticion);
});

function consultandoApi(param) {
  $.ajax({
    url: "https://rickandmortyapi.com/api/character/" + createArrayof15(param).toString() + "",
    type: "GET",
    datatype: "JSON",
    success: (data) => {
      console.log(data);
      createCards2(data);
    }
  });
}
function createCards2(dataArray) {
  let divAll = document.getElementById("conteiner-card");
  for (let i = 0; i < dataArray.length; i++) {
    let div_card = document.createElement("DIV");
    div_card.className = "div-card-content";
    let lista = document.createElement("UL");
    let itemUL = document.createElement("LI");
    itemUL.innerHTML =
      `<li>Id: ${dataArray[i]["id"]}</li>
          <li>Name: ${dataArray[i]["name"]}</li>
          <li>Status: ${dataArray[i]["status"]}</li>
          <li>Spacies: ${dataArray[i]["species"]}</li>
          <li>Gender: ${dataArray[i]["gender"]}</li>
          <li>Origin: ${dataArray[i]["origin"].name}</li>`

    let img = document.createElement("IMG");
    img.setAttribute("src", `${dataArray[i]["image"]}`);
    div_card.appendChild(img);
    lista.appendChild(itemUL);
    div_card.appendChild(lista);
    divAll.appendChild(div_card);

  }
}

function createArrayof15(inicio) {
  let array = [];
  for (let i = 1; i <= 15; i++) {
    array.push(inicio + i);
  }
  peticion += 15;
  return array;
}



function boton() {
  consultandoApi(peticion);
}