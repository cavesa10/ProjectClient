import React, {useReducer, useContext} from 'react'
import {authContext} from './authContext'
import authReducer from './authReducer'

import {clienteAxios} from '../../config/axios'
import {tokenAuth} from '../../config/token'
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
    mensaje: null,
    cargando: true
  }
  const [state, dispatch] = useReducer(authReducer, initialState)
  

  const registrarUsuario = async datos => {
    try {
      const respuesta = await clienteAxios.post('/api/usuarios', datos)
      console.log(respuesta)
      dispatch({
        type: REGISTRO_EXITOSO,
        payload: respuesta.data
      })
      // Obtener el usuario
      usuarioAutenticado()
    } catch (error) {
      console.log(error.response.data.msg)
      const alerta = {
        msg: error.response.data.msg,
        categoria: 'alerta-error'
      }
      dispatch({
        type: REGISTRO_ERROR,
        payload: alerta
      })
    }
  }

  // retorna el usuario autenticado
  const usuarioAutenticado = async () => {
    const token = localStorage.getItem('token')
    if(token){
      // Todo: funcion para enviera el token por headers
      tokenAuth(token);
    }
    try {
      const respuesta = await clienteAxios.get('/api/auth')
      console.log(respuesta.data.usuario)
      dispatch({
        type: OBTENER_USUARIO,
        payload: respuesta.data.usuario
      })
    } catch (error) {
      // console.log(error.response)
      dispatch({
        type: LOGIN_ERROR,
      })
    }
  }

   // Usuario inicia sesión
   const iniciarSesion = async datos => {
     try {
       const respuesta = await clienteAxios.post('/api/auth', datos)
       dispatch({
         type: LOGIN_EXITOSO,
         payload: respuesta.data
       })
      //  Obtener el usuario
       usuarioAutenticado()
     } catch (error) {
      const alerta = {
        msg: error.response.data.msg,
        categoria: 'alerta-error'
      }
      dispatch({
        type: LOGIN_ERROR,
        payload: alerta
      })
     }
   }
  //  Cerrar Sesión
  const cerrarSesion = () => {
    dispatch({
      type: CERRAR_SESION
    })
  }
  return(
    <authContext.Provider
      value={{
        token: state.token,
        autenticado: state.autenticado,
        usuario: state.usuario,
        mensaje: state.mensaje,
        cargando: state.cargando,
        registrarUsuario,
        usuarioAutenticado,
        iniciarSesion,
        cerrarSesion
      }}
    >
      {props.children}
    </authContext.Provider>
  )
}
