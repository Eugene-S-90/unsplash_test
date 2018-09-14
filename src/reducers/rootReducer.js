import { combineReducers } from 'redux';
import test from './reducer_test';
import test2 from './reducer_test2';
import getListImg from './getListImg';

const rootReducer = combineReducers({
    test,
    test2,
    getListImg
})
export default rootReducer;