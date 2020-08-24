import { get } from 'shared/services/api/posts'
import {
  GET_POSTS_BEGIN,
  GET_POSTS_REQUEST,
  GET_POSTS_FAILURE
} from 'shared/state/types'

export const begin = () => ({
  type: GET_POSTS_BEGIN
})

export const request = data => ({
  type: GET_POSTS_REQUEST,
  payload: data
})

export const failure = error => ({
  type: GET_POSTS_FAILURE,
  error
})

export const fetchData = () => {
  return async dispatch => {
    dispatch(begin())

    try {
      const data = await get()

      dispatch(request(data))
    } catch (error) {
      dispatch(failure(error))
    }
  }
}
