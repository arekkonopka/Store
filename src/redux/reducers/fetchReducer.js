const initState = {
  products: [],
  loading: false,
  error: ''
}

export const fetchReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_DATA_REQUEST":
      return { ...state, loading: true }
    case "FETCH_DATA_SUCCESS":
      const pricePln = action.payload.map(product => ({
        ...product,
        pricePln: Math.round(product.price * 3.6)
      }))
      return { ...state, products: pricePln, loading: false }
    case "FETCH_DATA_FAILURE":
      return { ...state, error: action.payload }
    default:
      return state
  }
}