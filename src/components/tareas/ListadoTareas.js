import React, { Fragment, useContext, useEffect } from "react";

import { Tarea } from "./Tarea";
import { proyectoContext } from "../../context/proyectos/proyectoContext";
import { TareaContext } from "../../context/tareas/tareaContext";

export const ListadoTareas = () => {
  const {proyecto, eliminarProyecto } = useContext(
    proyectoContext
  );

  const {tareas,obtenerTareas} = useContext(TareaContext)

  useEffect(() => {
    obtenerTareas()
  }, [])

  // si no hay proyecto seleccionado
  if (!proyecto) {
    return <h2>Selecciona un proyecto</h2>;
  }
  const [proyectoActual] = proyecto;

  // extraer el proyecto actual

  const handleClick = () => {
    eliminarProyecto(proyectoActual.id)
  }

  return (
    <Fragment>
      <h2>Proyectos: {proyectoActual.nombre}</h2>
      <ul className="listado-tareas">
        {tareas.length === 0 ? (
          <li className="tarea">
            <p>No hay tareas</p>
          </li>
        ) : (
          tareas.map((tarea) => <Tarea key={tarea.id} tarea={tarea} />)
        )}
      </ul>
      <button type="button" className="btn btn-eliminar" onClick={handleClick}>
        Eliminar Proyecto &times;
      </button>
    </Fragment>
  );
};
