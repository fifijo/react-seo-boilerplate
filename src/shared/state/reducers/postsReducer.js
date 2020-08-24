import {
  GET_POSTS_BEGIN,
  GET_POSTS_REQUEST,
  GET_POSTS_FAILURE
} from 'shared/state/types'

const defaultState = {
  data: [],
  isLoading: false,
  hasError: null
}

export default function postsReducer(state = defaultState, action) {
  switch (action.type) {
    case GET_POSTS_BEGIN:
      return {
        ...state,
        isLoading: true,
        hasError: false
      }

    case GET_POSTS_REQUEST:
      return {
        ...state,
        isLoading: false,
        data: action.payload
      }

    case GET_POSTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        hasError: action.payload,
        data: []
      }

    default:
      return state
  }
}
