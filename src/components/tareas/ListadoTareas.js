import React, { Fragment, useContext} from "react";
import {CSSTransition, TransitionGroup} from 'react-transition-group'

import { Tarea } from "./Tarea";
import { proyectoContext } from "../../context/proyectos/proyectoContext";
import { TareaContext } from "../../context/tareas/tareaContext";

export const ListadoTareas = () => {
  // extraer el proyecto de state inicial
  const {proyecto, eliminarProyecto } = useContext(proyectoContext);

  // obtener tareas del proyecto
  const {tareasproyecto } = useContext(TareaContext);

  // si no hay proyecto seleccionado
  if (!proyecto) {
    return <h2>Selecciona un proyecto</h2>;
  }
  // array destructuring para extraer el proyecto actual
  const [proyectoActual] = proyecto;


  const handleClick = () => {
    eliminarProyecto(proyectoActual._id);
  };

  return (
    <Fragment>
      <h2>Proyectos: {proyectoActual.nombre}</h2>
      <ul className="listado-tareas">
        {tareasproyecto.length === 0 ? (
          <li className="tarea">
            <p>No hay tareas</p>
          </li>
        ) : (
          <TransitionGroup>
            {tareasproyecto.map((tarea) => (
              <CSSTransition
                key={tarea._id}
                timeout={500}
                classNames="tarea"
              >
                <Tarea tarea={tarea}/>
              </CSSTransition>
            ))}
          </TransitionGroup>
        )
        }
      </ul>
      <button type="button" className="btn btn-eliminar" onClick={handleClick}>
        Eliminar Proyecto &times;
      </button>
    </Fragment>
  );
};
