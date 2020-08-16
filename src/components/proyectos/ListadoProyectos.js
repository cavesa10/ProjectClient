import React, {useContext, useEffect} from 'react'
import {CSSTransition,TransitionGroup} from 'react-transition-group'
 
import {Proyecto} from './Proyecto'
import {proyectoContext} from '../../context/proyectos/proyectoContext'

export const ListadoProyectos = () => {
  // Extraemos el state proyecto del context 
  const proyectosContex = useContext(proyectoContext)
  const {proyectos, obtenerProyectos} = proyectosContex
  // 
  useEffect( () => {
    obtenerProyectos()
    // eslint-disable-next-line
  },[])
  
  // validación si hay proyectos
  if(proyectos.length === 0) {return <p>No hay proyecto, comienza agregando un nuevo proyecto</p>}
  
  return (
    <ul className="listado-proyectos" >
      <TransitionGroup>
        {proyectos.map( proyecto => (
          <CSSTransition
            key={proyecto.id}
            classNames="proyecto"
            timeout={500}
          >
            <Proyecto  proyecto={proyecto} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  )
}
