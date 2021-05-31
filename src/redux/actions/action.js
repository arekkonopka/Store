//fetch

export const fetch_data_request = () => {
  return {
    type: "FETCH_DATA_REQUEST"
  }
}
export const fetch_data_success = (data) => {
  return {
    type: "FETCH_DATA_SUCCESS",
    payload: data
  }
}

export const fetch_data_failure = (error) => {
  return {
    type: "FETCH_DATA_FAILURE",
    payload: error
  }
}


//navBar

export const hideNavBar = () => {
  return {
    type: "HIDE_NAVBAR"
  }
}
export const showNavBar = () => {
  return {
    type: "SHOW_NAVBAR"
  }
}
export const usdCurrency = () => {
  return {
    type: "USD_CURRENCY"
  }
}
export const plnCurrency = () => {
  return {
    type: "PLN_CURRENCY"
  }
}

//basket

export const addToBasket = (item) => {
  return {
    type: "ADD_TO_BASKET",
    payload: item
  }
}


export const removFromBasket = () => {
  return {
    type: "REMOVE_FROM_BASKET"
  }
}
