import * as ActionTypes from '../constants/ActionTypes'

const loading = () => {
  return {
    type: ActionTypes.LOADING_CHANGE
  }
}

const changeLoading = () => {
  return (dispatch) => {
    dispatch(loading());
  }
}

export default {
  loading,
  changeLoading
}