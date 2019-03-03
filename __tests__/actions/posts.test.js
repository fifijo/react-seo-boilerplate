import configureStore from 'redux-mock-store'
import * as actions from 'shared/state/actions/posts'
import thunk from 'redux-thunk'
import { 
    GET_POSTS_BEGIN, 
    GET_POSTS_REQUEST, 
    GET_POSTS_FAILURE 
} from 'shared/state/types'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

describe('Action posts fetchData', () => {
    
    beforeEach(() => {
        
    })

    afterEach(() => {
    })

    it('should create begin action', () => {
        const expectedAction = {
            type: GET_POSTS_BEGIN,
        }
        expect(actions.begin()).toEqual(expectedAction);
    })

    it('should create request action', () => {
        const expectedAction = {
            type: GET_POSTS_REQUEST,
        }
        expect(actions.request()).toEqual(expectedAction);
    })

    // it('should execute fetch data', () => {
    //     const expectedActions = [
    //         { type: GET_POSTS_BEGIN },
    //         { type: GET_POSTS_REQUEST,  payload: [{}] },
    //       ];

    //     const store = mockStore({ payload: [{}]})
    //     return (
    //         store.dispatch(actions.fetchData()).then(() => {
    //           expect(store.getActions()).toEqual(expectedActions);
    //         })
    //     );

    // })

  })