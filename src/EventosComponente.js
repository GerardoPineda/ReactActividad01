import React from "react";


export const EventosComponente = () => {

    const hasDadoClick=(e)=>{
        alert("Hasdado click en el boton.....");
    }

    const hasDadoDobleClick=(e)=>{
        alert("Has dado doble click en el boton.....");
    }

    const hasEntrado=()=>{
        console.log("Has entrado");
    }

    const hasSalido=()=>{
        console.log("Has salido");
    }

    return(
            <div>
                <h1>Eventos en react</h1>
                <button onClick={() =>{
                    console.log("Hola soy evento click")
                }} >Dame click </button>
                <button onClick={hasDadoClick}>Dame click 1</button>
                <button onClick={hasDadoDobleClick}>Dame doble click</button>
                <div id="caja" onMouseEnter={hasEntrado} onMouseLeave={hasSalido}>
                    Pasa por encima!
                </div>
               
            </div>
        )

};