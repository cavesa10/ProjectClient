import React, {useContext} from 'react'
import {proyectoContext} from '../../context/proyectos/proyectoContext'
import {TareaContext} from '../../context/tareas/tareaContext'


export const Proyecto = ({proyecto}) => {

  const proyectosContext = useContext (proyectoContext)
  const { proyectoActual } = proyectosContext

  const {selectTareas} = useContext(TareaContext)

  // funcion para agregar el proyecto actual

  const seleccionarProyecto = (id) => {
    proyectoActual(id) //filtrar un proyecto actual
    selectTareas(id) // filtrar las tareas del proyecto seleccionado
  }

  return (
    <li>
      <button
        type="button"
        className="btn btn-blank"
        onClick= {() =>seleccionarProyecto(proyecto.id)}
      >
        {proyecto.nombre}
      </button>
    </li>
  )
}
