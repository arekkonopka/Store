
const initialState = {
  isHide: false,
  isUsdCurrency: true
}

const navBarReducer = (state = initialState, action) => {
  switch (action.type) {
    case "HIDE_NAVBAR":
      return { ...state, isHide: true }
    case "SHOW_NAVBAR":
      return { ...state, isHide: false }
    case "USD_CURRENCY":
      return { ...state, isUsdCurrency: true }
    case "PLN_CURRENCY":
      return { ...state, isUsdCurrency: false }
    default:
      return { ...state }
  }
}

export default navBarReducer