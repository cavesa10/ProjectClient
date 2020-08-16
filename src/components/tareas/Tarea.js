import React, { useContext } from "react";

import { TareaContext } from "../../context/tareas/tareaContext";

export const Tarea = ({ tarea }) => {
  const { eliminarTarea, selectTareas, cambiarEstadoTarea, guardarTareaActual } = useContext(
    TareaContext
  );

  const handleClickEliminar = () => {
    eliminarTarea(tarea.id);
    selectTareas(tarea.pryectoId);
  };

  const handleClickEstado = () => {

    if(tarea.estado) {
      tarea.estado= false
    }else{
      tarea.estado = true
    }
    cambiarEstadoTarea(tarea)
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
          onClick={handleClickEliminar}
          type="button"
          className="btn btn-secundario"
        >
          Eliminar
        </button>
      </div>
    </li>
  );
};
