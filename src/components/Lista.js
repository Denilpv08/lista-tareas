import React, { useState } from 'react';
import Formulario from './Formulario';
import Tarea from './Tarea';
import '../css/Lista.css';

function Lista(){

  const [tareas, setTareas] = useState([]);

  const agregarTarea = tarea => {
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      const tareaActualizada = [tarea, ...tareas];
      setTareas(tareaActualizada);
    }
  };

  const completarTarea = (id) =>{
    const tareaActualizada = tareas.map(tarea => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareaActualizada);
  };

  const eliminarTarea = (id) =>{
    const tareaActualizada = tareas.filter(tarea => tarea.id !== id);
    setTareas(tareaActualizada);
  };

  return(
    <>
      <Formulario onSubmit={ agregarTarea } />
      <div className='lista-contenedor'>
        {
          tareas.map((tarea) =>
            <Tarea 
              key={ tarea.id }
              id={ tarea.id }
              texto={ tarea.texto }
              completada={ tarea.completada }
              completarTarea={ completarTarea }
              eliminarTarea={ eliminarTarea }
            />
          )
        }
      </div>
    </>
  );
}

export default Lista;