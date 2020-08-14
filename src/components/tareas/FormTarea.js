import React, {useContext} from "react";

import {proyectoContext} from '../../context/proyectos/proyectoContext'

export const FormTarea = () => {
  const {proyecto} = useContext(proyectoContext)

  if(!proyecto) return null

  // const [proyectoActual] = proyecto

  return (
    
    <div className="formulario">
      <form action="">
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Nombre Tarea..."
            name="nombre"
          />
        </div>
        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-block btn-submit btn-primario"
            value="Agregar Tarea"
          />
        </div>
      </form>
    </div>
  );
};
