import React, {useContext, useEffect} from 'react'
 
import {Proyecto} from './Proyecto'
import {proyectoContext} from '../../context/proyectos/proyectoContext'

export const ListadoProyectos = () => {
  // Extraemos el state proyecto del context 
  const proyectosContex = useContext(proyectoContext)
  const {proyectos, obtenerProyectos} = proyectosContex
  // 
  useEffect( () => {
    obtenerProyectos()
  },[])
  
  // validación si hay proyectos
  if(proyectos.length === 0) {return null}
  
  return (
    <ul className="listado-proyectos" >
      {proyectos.map( proyecto => (
        <Proyecto key={proyecto.id} proyecto={proyecto} />
      ))}
    </ul>
  )
}
