import {AGREGAR_TAREA,OBTENER_TAREA} from '../../types'

export default (state, action) => {
  switch (action.type) {
    case OBTENER_TAREA: 
      return {
        ...state,
        tareas: action.payload
      }
    
    case AGREGAR_TAREA:
      return {
        ...state,
        tareas: action.payload
      }

    default:
      return state;
  }
}