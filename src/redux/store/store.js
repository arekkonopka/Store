import { createStore } from 'redux'
import { fetchReducer } from '../reducers/fetchReducer'

const store = createStore(
  fetchReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

)

export default store