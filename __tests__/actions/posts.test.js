import configureStore from 'redux-mock-store'
import * as actionCreators from 'shared/state/actions/posts'
import thunk from 'redux-thunk'
import { 
    GET_POSTS_BEGIN, 
    GET_POSTS_REQUEST
} from 'shared/state/types'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

describe('Action posts fetchData', () => {

    it('should create begin action', () => {
        expect(actionCreators.begin().type).toEqual(GET_POSTS_BEGIN);
    })

    it('should create request action', () => {
        expect(actionCreators.request().type).toEqual(GET_POSTS_REQUEST);
    })

    it('should execute fetchData', () => {
        const store = mockStore({})
        const actions = store.getActions()

        const expectedActions = [
            { type: GET_POSTS_BEGIN },
            { type: GET_POSTS_REQUEST }
        ]

        return store.dispatch(actionCreators.fetchData())
            .then(() => {
                expect(actions).toMatchObject(expectedActions)
            })
    })
  })