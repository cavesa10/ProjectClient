import React, {useContext, useEffect} from 'react'
import {CSSTransition,TransitionGroup} from 'react-transition-group'
 
import {Proyecto} from './Proyecto'
import {proyectoContext} from '../../context/proyectos/proyectoContext'
import {alertaContext} from '../../context/alertas/alertaContex'


export const ListadoProyectos = () => {
  // Extraemos el state proyecto del context 
  const proyectosContex = useContext(proyectoContext)
  const {mensaje,proyectos, obtenerProyectos} = proyectosContex
  const {alerta, mostrarAlerta} = useContext(alertaContext)

  // 
  useEffect( () => {
    if(mensaje){
      mostrarAlerta(mensaje.msg, mensaje.categoria)
    }
    obtenerProyectos()
    // eslint-disable-next-line
  },[mensaje])
  
  // validación si hay proyectos
  if(proyectos.length === 0) {return <p>No hay proyecto, comienza agregando un nuevo proyecto</p>}
  return (
    <ul className="listado-proyectos" >
      {alerta ? (<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>):null}
      <TransitionGroup>
        {proyectos.map( proyecto => (
          <CSSTransition
            classNames="proyecto"
            timeout={500}
            key={proyecto._id}
          >
            <Proyecto proyecto={proyecto}/>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  )
}
