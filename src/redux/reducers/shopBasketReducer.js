const initialState = {
  basket: {
    quantity: 0,
    total: 0,
    items: []
  }
}

const shopBasketReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      const item = {
        id: action.payload.id,
        product: action.payload
      }

      return {
        ...state,
        basket: {
          ...state.basket,
          quantity: state.basket.quantity + 1,
          // total: state.basket.items.reduce((result, price) => result += price),
          // zrobic total
          items: state.basket.items.concat(item)
        }
      }
    default:
      return { ...state }
  }
}

export default shopBasketReducer
