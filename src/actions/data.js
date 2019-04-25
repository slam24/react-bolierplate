import * as ActionTypes from '../constants/ActionTypes'

const loading = () => {
  return {
    type: ActionTypes.LOADING_CHANGE
  }
}

const change = (data) => {
  return {
    type: ActionTypes.CHANGE_DATA,
    data
  }
}

const changeLoading = (data) => {
  return (dispatch) => {
    dispatch(loading());
    dispatch(change(data));
  }
}

export default {
  loading,
  changeLoading,
  change
}