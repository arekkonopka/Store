

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