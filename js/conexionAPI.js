// Funcion asincrona
async function listarVideos(){
    const conexion= await fetch("http://localhost:3001/videos");
    const conexionConvertida= conexion.json();

    return conexionConvertida;
    // console.log(conexionConvertida);
}
// Exportamos el modulo del proyecto
export const conexionAPI={
    //Exportamos la funcion:
    listarVideos
}

// listarVideos();

