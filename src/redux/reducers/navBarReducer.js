
const initialState = {
  isHide: false
}

const navBarReducer = (state = initialState, action) => {
  switch (action.type) {
    case "HIDE_NAVBAR":
      return { ...state, isHide: true }
    case "SHOW_NAVBAR":
      return { ...state, isHide: false }
    default:
      return { ...state }
  }
}

export default navBarReducer