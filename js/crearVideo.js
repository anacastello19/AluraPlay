import {conexionAPI} from "./conexionAPI.js";

//capturamos el formulario
const formulario=document.querySelector(["data-formulario"]);

 async function crearVideo(evento){

    evento.preventDefault();

    const titulo= document.querySelector("[data-titulo]").value;
    const url= document.querySelector("[data-url]").value;
    const imagen= document.querySelector("[data-imagen]").value;

    const descripcion= Math.floor(Math.random*10).toString()

    await conexionAPI.enviarVideo(titulo,descripcion,url,imagen)

    window.location.href="../pages/envio-concluido.html";
}
//Esta funcion va a estar atenta a un primer parametro
formulario.addEventListener("submit", evento => crearVideo(evento));