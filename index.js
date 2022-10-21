const cardName = document.querySelector("#name");
const cardNumber = document.querySelector("#cardNumber");
const mm = document.querySelector("#mm");
const yy = document.querySelector("#yy");
const cvc = document.querySelector("#cvc");

const form = document.querySelector("#form");


const url_api = "http://127.0.0.1:7000";

// console.log(url_api);

async function leerApi(url) {
    const data = await fetch(url + "/datos");
    // console.log(data);
    const jsonData = await data.json();
    console.log(jsonData);
    
    return jsonData;
}




let apiDatos = leerApi(url_api);

let datosDeApi;

form.addEventListener('submit', e => {
    e.preventDefault();

    const datas = Object.fromEntries(new FormData(e.target));

    datosDeApi = JSON.stringify(datas);
})


//YA RECUPERAMOS LOS DATOS CON GET
console.log(datosDeApi);


