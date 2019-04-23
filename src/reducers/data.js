import * as ActionTypes from '../constants/ActionTypes'

const initialState = {
    loading: false
};

export default (state = initialState, action = {}) => {
  switch(action.type) {
  case ActionTypes.LOADING_CHANGE:
    return {
      ...state,
      loading: !state.loading
    }
  default: return state;
  }
}
