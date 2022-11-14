import React from "react";
import '../css/Tarea.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';

function Tarea ({ id, texto, completada, completarTarea,  eliminarTarea }){
    return(
        <div className={completada ? 'contenedor completada' : 'contenedor'}>
          <div 
            className="texto"
            onClick={ () => completarTarea(id) }>
            { texto }
          </div>
          <div 
            className="contenedor-icono"
            onClick={ () => eliminarTarea(id) }>
            <AiOutlineCloseCircle className="icono" />
          </div>
        </div>
    );
}

export default Tarea;