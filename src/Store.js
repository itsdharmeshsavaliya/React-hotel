import rootReducer from './Reducer/index';
import { legacy_createStore as creatStore } from 'redux';

const store = creatStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default store;