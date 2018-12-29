import { CIRCUIT_GET } from 'shared/state/types'

const defaultState = {
  data: []
}
export default function dataReducer (state = defaultState, action) {
  
  switch (action.type) {
      case CIRCUIT_GET:
        return { 
          ...state,
          data: action.payload
        }
      default: return state
      
  }
}