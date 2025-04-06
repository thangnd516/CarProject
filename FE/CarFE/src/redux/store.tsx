import { combineReducers, createStore } from 'redux';
import userReducer from './reducer/userReducer';
import counterReducer from './reducer/counterReducer'; // nếu có

const rootReducer = combineReducers({
  user: userReducer,
  counter: counterReducer, 
});

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;

