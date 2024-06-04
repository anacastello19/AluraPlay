// Funcion asincrona
async function listarVideos(){
    const conexion= await fetch("http://localhost:3001/videos");
    const conexionConvertida= conexion.json();

    return conexionConvertida;
    // console.log(conexionConvertida);
}

//Funcion asincrona crear video
async function crearVideo(titulo, descripcion, url, imagen){
    //llamamos constante, await se coloca para que espere el retorno del metodo
    const conexion= await fetch("http://localhost:3001/videos",{
        method:"POST",
        //Tipo JSON
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({
            titulo:titulo,
            descripcion:descripcion,
            url:url,
            imagen:imagen
        })
        //En body convertimos un elemento de tipo object en un elemento de tipo string
    
    });
    //Cuando nosotros no colocamos mas parametros se asume que estamos haciendo una peticion del tipo GET
    //Pero en este caso vamos a estar haciendo una peticion del tipo POST

    const conexionConvertida=conexion.json();
    return  conexionConvertida;

}

// Exportamos el modulo del proyecto
export const conexionAPI={
    //Exportamos la funcion:
    listarVideos, crearVideo
}

//listarVideos();


//NOTA: LocalHost codigo para la terminal:
// npx json-server --watch db.json --port 3001