import { createStore, combineReducers } from 'redux'
import { fetchReducer } from '../reducers/fetchReducer'
import navBarReducer from '../reducers/navBarReducer'
import shopBasketReducer from '../reducers/shopBasketReducer'
import infoReducer from '../reducers/infoReducer'

const combine = combineReducers({ fetchReducer, navBarReducer, infoReducer, shopBasketReducer, })

const store = createStore(
  combine,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

)

export default store