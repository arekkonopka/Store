export const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST"
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS"
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE"

export const fetch_data_request = () => {
  return {
    type: FETCH_DATA_REQUEST
  }
}

export const fetch_data_success = (data) => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: data
  }
}

export const fetch_data_failure = (error) => {
  return {
    type: FETCH_DATA_FAILURE,
    payload: error
  }
}