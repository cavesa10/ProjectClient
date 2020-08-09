import React, {Fragment, useContext} from 'react'

import {Tarea} from './Tarea'
import {proyectoContext} from '../../context/proyectos/proyectoContext'

export const ListadoTareas = () => {

  const {tareasProyecto} = useContext(proyectoContext)
  
  return (
    <Fragment>
      <h2>Proyectos: Tienda Virtual</h2>
      <ul className="listado-tareas" >
        {tareasProyecto.length === 0
          ? ( <li className="tarea" ><p>No hay tareas</p></li> )
          : tareasProyecto.map(tarea => (
            <Tarea key={tarea.id} tarea={tarea} />
          ))
        }
        
      </ul>
      <button type="button" className="btn btn-eliminar" > Eliminar Proyecto &times; </button>
    </Fragment>
    
  )
}
