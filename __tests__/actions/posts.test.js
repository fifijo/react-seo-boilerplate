import configureStore from 'redux-mock-store'
import * as actionCreators from 'shared/state/actions/posts'
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
        expect(actionCreators.begin().type).toEqual(GET_POSTS_BEGIN);
    })

    it('should create request action', () => {
        expect(actionCreators.request().type).toEqual(GET_POSTS_REQUEST);
    })

    it('should execute fetch data action then dispatch begin and request', () => {
        const store = mockStore({})
        const actions = store.getActions()

        return store.dispatch(actionCreators.fetchData())
            .then(() => {
                expect(actions[0].type).toEqual(GET_POSTS_BEGIN)
                expect(actions[1].type).toEqual(GET_POSTS_REQUEST)
            })
    })
  })