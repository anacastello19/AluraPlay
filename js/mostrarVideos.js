//llamamos la conexion con API
import { conexionAPI } from "./conexionAPI.js";

//Llamamos al identificador data-list
const lista = document.querySelector("[data-lista]")
//Funcion para crear videos
export default function crearCard(titulo,descripcion,url,imagen){
    //constante que crea elemento tipo li
    const video = document.createElement("li");
    //Usamos la propiedad de videos
    video.className="videos__item";

    //indicamos la estructura que vamos a colocar en el nuevo video
    video.innerHTML=`<iframe width="100%" height="72%" src="${url}"
    title="${titulo}" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>
    <div class="descripcion-video">
        <img src="${imagen}" alt="logo canal alura">
        <h3>${titulo}</h3>
        <p>${descripcion}</p>
    </div>`;

//retornamos el vide
    return video;
}
//Creamos una funcuion asincrona para listar los videos
async function listarVideos(){
    //Siempre que usamos una funcion asincrona usamos awair
        const listaAPI = await conexionAPI.listarVideos()
     listaAPI.forEach(video=>lista.appendChild(crearCard(video.titulo,video.descripcion,video.url,video.imagen)))
   
}

listarVideos()
