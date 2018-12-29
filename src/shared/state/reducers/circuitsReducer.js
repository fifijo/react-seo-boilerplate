import { 
  GET_CIRCUIT_BEGIN, 
  GET_CIRCUIT_REQUEST, 
  GET_CIRCUIT_FAILURE 
} from 'shared/state/types'

const defaultState = {
  data: [],
  isLoading: false,
  hasError: false
}

export default function circuitsReducer(state = defaultState, action) {
  
  switch (action.type) {
      case GET_CIRCUIT_BEGIN:
        return {
          ...state,
          isLoading: true,
          hasError: false
      }

      case GET_CIRCUIT_REQUEST:
        return { 
          ...state,
          isLoading: false,
          data: action.payload
        }

      case GET_CIRCUIT_FAILURE:
        return {
          ...state,
          isLoading: false,
          hasError: action.payload.error,
          data: []
        }

      default: return state
      
  }
}