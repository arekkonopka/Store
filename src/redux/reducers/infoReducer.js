
const initState = {
  isTrue: false,
  color: '',
  message: ''
}

const infoReducer = (state = initState, action) => {
  switch (action.type) {
    case "Add-info":
      return {
        ...state,
        isTrue: true,
        color: action.payloadColor,
        message: action.payloadMessage
      }
    case "Remove-info":
      return { ...state, isTrue: false }
    default:
      return { ...state }
  }
}

export default infoReducer
