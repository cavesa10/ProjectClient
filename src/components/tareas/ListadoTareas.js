import React, {Fragment} from 'react'

import {Tarea} from './Tarea'

export const ListadoTareas = () => {

  const tareasProyecto = [
    {nombre: 'Elegir Plataforma', estado: true},
    {nombre: 'Elegir Colores', estado: true},
    {nombre: 'Elegir Hosting', estado: false},
    {nombre: 'Elegir Pasarela de pago', estado: true}
  ]
  
  return (
    <Fragment>
      <h2>Proyectos: Tienda Virtual</h2>
      <ul className="listado-tareas" >
        {tareasProyecto.length === 0
          ? ( <li className="tarea" ><p>No hay tareas</p></li> )
          : tareasProyecto.map(tarea => (
            <Tarea tarea={tarea} />
          ))
        }
        
      </ul>
      <button type="button" className="btn btn-eliminar" > Eliminar Proyecto &times; </button>
    </Fragment>
    
  )
}
