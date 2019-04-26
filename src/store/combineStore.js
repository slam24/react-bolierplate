import { combineReducers } from 'redux';

import data from '../reducers/data';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  data,
  form: formReducer
});
