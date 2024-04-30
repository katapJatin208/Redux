import {createStore} from 'redux';
import rootReducer from '../redux/employeeReducer';
const store = createStore(rootReducer);

export default store;
