import React from 'react'
import {Proyecto} from './Proyecto'

export const ListadoProyectos = () => {

  const proyectos = [
    {nombre: 'Tienda Vitual'},
    {nombre: 'Intranet'},
    {nombre: 'Diseño web'},
  ]

  return (
    <ul className="listado-proyectos" >
      {proyectos.map( proyecto => (
        <Proyecto proyecto={proyecto} />
      ))}
    </ul>
  )
}
