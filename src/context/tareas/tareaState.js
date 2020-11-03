import React, { useReducer } from "react";

import { TareaContext } from "./tareaContext";
import TareaReducer from "./tareaReducer";
import {clienteAxios} from '../../config/axios'

import {
  AGREGAR_TAREA,
  TAREA_PROYECTO,
  VALIDAR_TASK,
  LIMPIAR_TAREA,
  ELIMINAR_TAREA,
  TAREA_ACTUAL,
  ACTUALIZA_TAREA,
  LIMPIAR_STATE
} from "../../types";


export const TareaState = (props) => {
  const initialState = {
    tareasproyecto: [],
    errorFormulario: false,
    tareaSeleccionada: null
  };

  // crear dispatch y state
  const [state, dispatch] = useReducer(TareaReducer, initialState);

  const obtenerTareas = async (proyecto) => {
    try {
      const respuesta = await clienteAxios.get('/api/tareas',{params: {proyecto}})
      dispatch({
        type: TAREA_PROYECTO,
        payload: respuesta.data.tareas,
      });
    } catch (error) {
      console.log(error)
    }

  };

  const agregarTarea = async(tarea) => {
    try {
      const resultado = await clienteAxios.post('/api/tareas', tarea)
      console.log(resultado)
      dispatch({
        type: AGREGAR_TAREA,
        payload: tarea,
      });
    } catch (error) {
      console.log(error)
    }
  };

  const mostrarError = () => {
    dispatch({
      type: VALIDAR_TASK,
    });
  };
  const eliminarTarea = async (id, proyecto) => {
    try {
      await clienteAxios.delete(`/api/tareas/${id}`,{params:{proyecto}})
      dispatch({
        type: ELIMINAR_TAREA,
        payload: id,
      });
    } catch (error) {
      console.log(error)
    }
  };

// edita o modifica una tarea
const actualizarTarea = async (tarea) => {
  try {
    const resultado = await clienteAxios.put(`/api/tareas/${tarea._id}`, tarea)
    console.log(resultado)
    dispatch({
      type: ACTUALIZA_TAREA,
      payload: resultado.data.tarea
    })
  } catch (error) {
    console.log(error)
  }
}
// Extrae una tarea para edición
const guardarTareaActual = tarea => {
  dispatch({
    type: TAREA_ACTUAL,
    payload: tarea
  })
}
const limpiarTarea = () => {
  dispatch({
      type: LIMPIAR_TAREA
  })
}
const limpiarState = () => {
  dispatch({
      type: LIMPIAR_STATE
  })
}


  return (
    <TareaContext.Provider
      value={{
        tareasproyecto: state.tareasproyecto,
        errorFormulario: state.errorFormulario,
        tareaSeleccionada: state.tareaSeleccionada,
        agregarTarea,
        obtenerTareas,
        mostrarError,
        eliminarTarea,
        guardarTareaActual,
        limpiarTarea,
        actualizarTarea,
        limpiarState
      }}
    >
      {props.children}
    </TareaContext.Provider>
  );
};
