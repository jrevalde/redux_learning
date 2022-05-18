
import {configureStore} from 'redux';
import reducer from './reducer'; //because it was a default export we don't have to wrap it in braces.

const store = configureStore(reducer);

export default store;

