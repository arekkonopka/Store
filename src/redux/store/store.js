import { createStore, combineReducers } from 'redux'
import { fetchReducer } from '../reducers/fetchReducer'
import navBarReducer from '../reducers/navBarReducer'

const combine = combineReducers({ fetchReducer, navBarReducer })

const store = createStore(
  combine,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

)

export default store