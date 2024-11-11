import react from "react";
const MiComponente =() =>{
    const nombre = "Gerardo Pineda";
    const direccion = "Zona 13";
    const telefono = " 34343434";
    let usuario = {
        nombre : "Vinicio Garcia",
        direccion : "Zona 14"
    }
    return(
        <div>
            <hi>Información:</hi>
            <ul>
                <li>Nombre: <strong>{nombre}</strong></li>
                <li>Direccion: <strong>{direccion}</strong></li>
                <li>Telefono: <strong>{telefono}</strong></li>
                <li>Nombre Usuario: {usuario.nombre}</li>
                <li>Direccion Usuario: {usuario.direccion}</li>
                <li>Objeto: {JSON.stringify(usuario)}</li>
            </ul>
        </div>
    )
};
export default MiComponente;