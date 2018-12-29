import { 
    GET_CIRCUIT_BEGIN, 
    GET_CIRCUIT_REQUEST, 
    GET_CIRCUIT_FAILURE 
} from 'shared/state/types'

import { fetchCircuits } from 'shared/api'

export const fetchData = () => {
    return async dispatch => {
      dispatch({ type: GET_CIRCUIT_BEGIN })
      try {
        const data = await fetchCircuits()

        dispatch({
            type: GET_CIRCUIT_REQUEST, 
            payload: data
        })

      } catch (error) {
        dispatch({
            type: GET_CIRCUIT_FAILURE,
            error
        });
      }
    }
  }