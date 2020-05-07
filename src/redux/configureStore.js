import { createStore } from 'redux';
import { Reducer, initialState } from '../redux/reducer';

export const ConfigureStore = () => {
  const store = createStore(
    Reducer,
    initialState
  );

  return store;
}
