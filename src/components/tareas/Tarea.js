import React, { useContext } from "react";

import { TareaContext } from "../../context/tareas/tareaContext";
import {proyectoContext} from '../../context/proyectos/proyectoContext';

export const Tarea = ({ tarea }) => {
  const { eliminarTarea, obtenerTareas, actualizarTarea, guardarTareaActual } = useContext(
    TareaContext
  );
  const {proyecto} = useContext(proyectoContext);
  const [proyectoActual] = proyecto

  const handleClickEliminar = _id => {
    eliminarTarea(_id, proyectoActual._id);
    obtenerTareas(proyectoActual._id)
  };

  const handleClickEstado = () => {

    if(tarea.estado) {
      tarea.estado= false
    }else{
      tarea.estado = true
    }
    actualizarTarea(tarea)
  };

  const handleClickEditar = () => {
    guardarTareaActual(tarea)
  }

  return (
    <li className="tarea sombra">
      <p>{tarea.nombre}</p>

      <div className="estado">
        {tarea.estado ? (
          <button
            onClick={handleClickEstado}
            type="button"
            className="completo"
          >
            Completo
          </button>
        ) : (
          <button
            onClick={handleClickEstado}
            type="button"
            className="incompleto"
          >
            Incompleto
          </button>
        )}
      </div>

      <div className="acciones">
        <button onClick={handleClickEditar}type="button" className="btn btn-primario">
          Editar
        </button>
        <button
          onClick={() => handleClickEliminar(tarea._id)}
          type="button"
          className="btn btn-secundario"
        >
          Eliminar
        </button>
      </div>
    </li>
  );
};
