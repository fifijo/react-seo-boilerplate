
import { get } from 'shared/services/api/posts'
import { 
    GET_POSTS_BEGIN, 
    GET_POSTS_REQUEST, 
    GET_POSTS_FAILURE 
} from 'shared/state/types'

export const fetchData = () => {
    return async dispatch => {
      dispatch({ type: GET_POSTS_BEGIN })

      try {
        const data = await get()

        dispatch({
            type: GET_POSTS_REQUEST, 
            payload: data
        })
      } 
      catch (error) {
        dispatch({
            type: GET_POSTS_FAILURE,
            error
        });
      }
    }
  }