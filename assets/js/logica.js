const URL_BASE = 'https://digimon-api.vercel.app/api/digimon';
let contenido;
let hoja;
let dataImagenes;
let dataNivel;
let data;



function tabla(datos) {
  
    contenido.innerHTML = ''
    for (let valor of datos) {
        contenido.innerHTML += `<tr>
        <th scope="row">${valor.name}</ th> 
        <td><img width="75px" height="75px" src="${valor.img}"></td> 
        <td>${valor.level}</td>
    </tr> `;
    }
};

function Nivel(dataNivel) {
  posicion.innerHTML = ''
  for (let lev of dataNivel ) {
    lev.innerHTML += ` <tr>
    <th scope="row">${valor.name}</ th>
    <td>${valor.level}</td>
    </tr> `
  }
}
function tarjeta(data) {
    hoja.innerHTML = "";

    for (let temp of data) {
        hoja.innerHTML += ` 
          <div id="tarjSola" class="card mb-3 container" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${temp.img}" class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">"NOMBRE: ${temp.name}"</h5>
          <p class="card-text">NIVEL: "${temp.level}"</p>
         </div>
      </div>
    </div>
  </div>
     `
    }
};
function mostrarNivel() {
  let lev = document.getElementById("posicion");
  document.getElementById("tabla_primaria").style.display = "block";
  document.getElementById("hoja").style.display = "none";
  document.getElementById("galeria").style.display = "none";
  fetch(URL_BASE + '/name/' + lev)
        .then(res => res.json())
        .then(datos => {
            Nivel(datos);
        });
};

function mostrarImagenes() {
    let img = document.getElementById("galeria");
    document.getElementById("tabla_primaria").style.display = "none";
    document.getElementById("hoja").style.display = "none";
    document.getElementById("galeria").style.display = "block";
    img.innerHTML = "";
    for (let temp of dataImagenes) {
    img.innerHTML += ` 
         <div id="card" class="card">
        <img src="${temp.img}" class="card-img-top" alt=" imagen ${temp.name}">
        <div class="card-body">
          <h6 class="card-title">${temp.name}
          <p class="card-text">${temp.level}</p>
        </div>
      </div>
      `
    }
  }

  



function tomaDato() {
    let nombreCaracter = document.getElementById("dato").value;
    nombreCaracter = nombreCaracter.toLowerCase();
    document.getElementById("tabla_primaria").style.display = "none";
    document.getElementById("hoja").style.display = "block";
    document.getElementById("galeria").style.display = "none";

    fetch(URL_BASE + '/name/' + nombreCaracter)
        .then(res => res.json())
        .then(datos => {
            Nivel(datos);
        });
};

$(document).ready(function () {
    contenido = document.getElementById("contenido");
    hoja = document.getElementById("hoja");
    fetch(URL_BASE)
        .then(res => res.json())
        .then(datos => {
            tabla(datos);
            dataImagenes = datos;
        });
});