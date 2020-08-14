import React, { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

import { TareaContext } from "./tareaContext";
import TareaReducer from "./tareaReducer";

import { AGREGAR_TAREA, OBTENER_TAREA } from "../../types";

const tareasProyecto = [
  {id:1, pryectoId: 1, nombre: "Elegir Plataforma", estado: true },
  {id:2, pryectoId: 2, nombre: "Elegir Colores", estado: true },
  {id:3, pryectoId: 3, nombre: "Elegir Hosting", estado: false },
  {id:4, pryectoId: 4, nombre: "Elegir Pasarela de pago", estado: true },
  {id:5, pryectoId: 1, nombre: "Elegir Plataforma", estado: true },
  {id:6, pryectoId: 1, nombre: "Elegir Colores", estado: true },
  {id:7, pryectoId: 2, nombre: "Elegir Hosting", estado: false },
  {id:8, pryectoId: 1, nombre: "Elegir Pasarela de pago", estado: true },
  {id:9, pryectoId: 1, nombre: "Elegir Plataforma", estado: true },
  {id:10, pryectoId: 3, nombre: "Elegir Colores", estado: true },
  {id:11, pryectoId: 2, nombre: "Elegir Hosting", estado: false },
  {id:12, pryectoId: 4, nombre: "Elegir Pasarela de pago", estado: true },
  {id:13, pryectoId: 2, nombre: "Elegir Plataforma", estado: true },
  {id:14, pryectoId: 2, nombre: "Elegir Colores", estado: true },
  {id:15, pryectoId: 4, nombre: "Elegir Hosting", estado: false },
  {id:16, pryectoId: 3, nombre: "Elegir Pasarela de pago", estado: true },
];

export const TareaState = (props) => {
  const initialState = {
    tareas: [],
  };

  // crear dispatch y state
  const [state, dispatch] = useReducer(TareaReducer, initialState);

  const obtenerTareas = () => {
    dispatch({
      type: OBTENER_TAREA,
      payload: tareasProyecto,
    });
  };

  const agregarTarea = (tarea) => {
    tarea.id = uuidv4();
    dispatch({
      type: AGREGAR_TAREA,
      payload: tarea,
    });
  };

  return (
    <TareaContext.Provider
      value={{
        tareas: state.tareas,
        agregarTarea,
        obtenerTareas
      }}
    >
      {props.children}
    </TareaContext.Provider>
  );
};
