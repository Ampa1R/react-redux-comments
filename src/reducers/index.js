import { combineReducers } from 'redux';
import comments from './comments';
import author from './author';
import text from './text';
import error from './error';

const rootReducer = combineReducers({
  comments,
  author,
  text,
  error
});

export default rootReducer;
