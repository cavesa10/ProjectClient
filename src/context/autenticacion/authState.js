import React, {useReducer} from 'react'
import {authContexT} from './authContext'
import authReducer from './authReducer'

import {
  LOGIN_ERROR,
  LOGIN_EXITOSO,
  REGISTRO_ERROR,
  REGISTRO_EXITOSO,
  CERRAR_SESION,
  OBTENER_USUARIO,
} from "../../types";

export const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem('token'),
    autenticado: null,
    usuario: null,
    mensaje: null
  }
  const [state, dispatch] = useReducer(authReducer, initialState)
  return(
    <authContexT.Provider
      value={{
        token: state.token,
        autenticado: state.autenticado,
        usuario: state.usuario,
        mensaje: state.mensaje
      }}
    >
      {props.children}
    </authContexT.Provider>
  )
}
