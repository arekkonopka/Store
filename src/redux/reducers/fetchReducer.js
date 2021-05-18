import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from '../actions/action'

const initState = {
  data: [],
  loading: false,
  error: ''
}

export const fetchReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return { ...state, loading: true }
    case FETCH_DATA_SUCCESS:
      return { ...state, data: action.payload }
    case FETCH_DATA_FAILURE:
      return { ...state, error: action.payload }
    default:
      return state
  }
}