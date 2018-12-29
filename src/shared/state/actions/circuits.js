import { CIRCUIT_GET_BEGIN, CIRCUIT_GET, CIRCUIT_GET_FAILURE } from 'shared/state/types'
import { fetchCircuits } from 'shared/api'

export const fetchData = () => {
    return async dispatch => {
      dispatch({ type: CIRCUIT_GET_BEGIN })
      try {
        const data = await fetchCircuits()

        dispatch({
            type: CIRCUIT_GET, 
            payload: data
        })

      } catch (error) {
        dispatch({
            type: CIRCUIT_GET_FAILURE,
            error
        });
      }
    }
  }