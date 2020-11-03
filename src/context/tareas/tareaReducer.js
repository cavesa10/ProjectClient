import {
  AGREGAR_TAREA,
  LIMPIAR_TAREA,
  TAREA_PROYECTO,
  VALIDAR_TASK,
  ELIMINAR_TAREA,
  TAREA_ACTUAL,
  ACTUALIZA_TAREA,
  LIMPIAR_STATE
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case VALIDAR_TASK:
      return {
        ...state,
        errorFormulario: true,
      };
    case AGREGAR_TAREA:
      return {
        ...state,
        tareasproyecto: [...state.tareasproyecto, action.payload],
        errorFormulario: false,
      };

    case TAREA_PROYECTO:
      return {
        ...state,
        tareasproyecto: action.payload
      };

    case ELIMINAR_TAREA:
      return {
        ...state,
        tareasproyecto: state.tareasproyecto.filter(
          (tarea) => tarea._id !== action.payload
        ),
      };
    case TAREA_ACTUAL:
      return {
        ...state,
        tareaSeleccionada: action.payload
      }
    case ACTUALIZA_TAREA:
      return {
        ...state,
        tareasproyecto: state.tareasproyecto.map(tarea => tarea._id === action.payload._id ? action.payload : tarea),
        tareaSeleccionada: null
      }
    case LIMPIAR_TAREA:
      return {
          ...state,
          tareaseleccionada: null
      }
    case LIMPIAR_STATE:
      return {
          ...state,
          tareasproyecto: []
      }

    default:
      return state;
  }
};
