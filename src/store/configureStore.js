import { createStore, combineReducers, compose } from 'redux';
import placesReducer from '../reducers/root';

const rootReducer = combineReducers({
  places: placesReducer,
  selectedPlace: placesReducer
})

let composEnhancers = compose;

if (__DEV__) {
  composEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => {
  return createStore(rootReducer, composEnhancers());
}

export default configureStore;
