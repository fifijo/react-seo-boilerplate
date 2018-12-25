import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { fetchCircuits } from 'shared/api'

const storeData = ( data ) => ( {
    type: 'STORE_DATA',
    data,
} );

export const fetchData = () => (dispatch) =>
    fetchCircuits().then(res => dispatch(storeData(res )));


const dataReducer = (state = [], action) => {
    switch (action.type) {
        case 'STORE_DATA':
            return action.data
        default: return state
    }
};

const reducer = combineReducers( {
    data: dataReducer,
} );

export default (initialState) => createStore(reducer, initialState, applyMiddleware(thunkMiddleware))
