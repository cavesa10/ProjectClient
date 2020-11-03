import React, {useReducer} from 'react'
import alertaReducer from './alertaReducer'
import {alertaContext} from './alertaContex'


import {MOSTRAR_ALERTA, OCULTAR_ALERTA} from '../../types'

export const AlertaState = props => {
  const initialState = {
    alerta: null
  }

  const [state, dispatch] = useReducer(alertaReducer, initialState)

  // Funciones
  const mostrarAlerta = (msg, categoria) => {
    dispatch({
      type: MOSTRAR_ALERTA,
      payload: {
        msg,
        categoria
      }
    })
    // Despues de 5 segundos limpiar la alerta
    setTimeout(() => {
      dispatch({
        type: OCULTAR_ALERTA
      })
    }, 1000)
  }


  return (
    <alertaContext.Provider
      value = {{
        alerta: state.alerta,
        mostrarAlerta
      }}
    >
      {props.children}
    </alertaContext.Provider>
  )
}