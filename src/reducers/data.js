import * as ActionTypes from '../constants/ActionTypes'

const initialState = {
    loading: false,
    data: "old"
};

export default (state = initialState, action = {}) => {
  switch(action.type) {
  case ActionTypes.LOADING_CHANGE:
    return {
      ...state,
      loading: !state.loading
    }
  case ActionTypes.CHANGE_DATA:
    return {
      ...state,
      data: action.data
    }
  default: return state;
  }
}
