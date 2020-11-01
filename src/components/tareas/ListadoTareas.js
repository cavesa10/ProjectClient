import React, { Fragment, useContext, useEffect } from "react";
import {CSSTransition, TransitionGroup} from 'react-transition-group'

import { Tarea } from "./Tarea";
import { proyectoContext } from "../../context/proyectos/proyectoContext";
import { TareaContext } from "../../context/tareas/tareaContext";
import {alertaContext} from '../../context/alertas/alertaContex'

export const ListadoTareas = () => {
  const { mensaje, proyecto, eliminarProyecto } = useContext(proyectoContext);

  const { obtenerTareas, tareasproyecto } = useContext(TareaContext);
  const {alerta, mostrarAlerta} = useContext(alertaContext)
  useEffect(() => {
    if(mensaje){
      mostrarAlerta(mensaje.msg, mensaje.categoria)
    }
    obtenerTareas();
    // eslint-disable-next-line
  }, []);

  // si no hay proyecto seleccionado
  if (!proyecto) {
    return <h2>Selecciona un proyecto</h2>;
  }
  const [proyectoActual] = proyecto;

  // extraer el proyecto actual

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
                key={tarea.id}
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
