import React, { useReducer } from "react";

import { proyectoContext } from "./proyectoContext";
import proyectoReducer from "./proyectoReducer";
import {
  FORMULARIO_PROYECTO,
  OBTENER_PROYECTOS,
  AGREGAR_PROYECTOS,
  PROYECTO_ERROR,
  VALIDAR_FORMULARIO,
  PROYECTO_ACTUAL,
  ELIMINAR_PROYECYO,
  LIMPIAR_PROYECTOS
} from "../../types";

import {clienteAxios} from '../../config/axios'

export const ProyectoState = (props) => {

  const initialState = {
    proyectos: [],
    formulario: false,
    errorFormulario: false,
    proyecto: null,
    mensaje: null
  };

  // dispatch para ejecutar las acciones

  const [state, dispatch] = useReducer(proyectoReducer, initialState);

  // serie de funciones para el CRUD
  const mostrarFormulario = () => {
    dispatch({
      type: FORMULARIO_PROYECTO,
    });
  };

  // obtener los proyectos

  const obtenerProyectos = async () => {
    try {
      const  resultado = await clienteAxios.get('/api/proyectos')
      dispatch({
        type: OBTENER_PROYECTOS,
        payload: resultado.data.proyectos
      });
      
    } catch (error) {
      const alerta = {
        msg: 'Hubo un errors',
        categoria: 'alerta-error'
      }
      dispatch({
        type: PROYECTO_ERROR,
        payload: alerta
      })
    }
  };

  // Agregar nuevo proyecto
  const agregarProyecto = async (proyecto) => {
    // insertar el proyecto al state
    try {
      const resultado = await clienteAxios.post('/api/proyectos',proyecto)
      dispatch({
        type: AGREGAR_PROYECTOS,
        payload: resultado.data
      })
    } catch (error) {
      const alerta = {
        msg: 'Hubo un error',
        categoria: 'alerta-error'
      }
      dispatch({
        type: PROYECTO_ERROR,
        payload: alerta
      })
    }

  };

  // MOSTAR SI HAY ERROR AL AÑADIR UNA NUEVO PROYECTO 

  const mostrarError = () => {
    dispatch({
      type: VALIDAR_FORMULARIO
    })
  }
  // selecciona el proyecto que el usuario dio click
  const proyectoActual = proyectoId => {
    dispatch({
      type: PROYECTO_ACTUAL,
      payload: proyectoId
    })
  }
  const eliminarProyecto = async (proyectoId) => {
    try {
      await clienteAxios.delete(`/api/proyectos/${proyectoId}`)
      dispatch({
        type: ELIMINAR_PROYECYO,
        payload: proyectoId
      })
    } catch (error) {
      const alerta = {
        msg: 'Hubo un error',
        categoria: 'alerta-error'
      }
      dispatch({
        type: PROYECTO_ERROR,
        payload: alerta
      })
    }
  }
  const limpiarProyecto = () => {
    dispatch({
      type: LIMPIAR_PROYECTOS
    })

  }

  return (
    <proyectoContext.Provider
      value={{
        proyectos: state.proyectos,
        formulario: state.formulario,
        errorFormulario: state.errorFormulario,
        proyecto: state.proyecto,
        mensaje: state.mensaje,
        mostrarFormulario,
        obtenerProyectos,
        agregarProyecto,
        mostrarError,
        proyectoActual,
        eliminarProyecto,
        limpiarProyecto
      }}
    >
      {props.children}
    </proyectoContext.Provider>
  );
};
