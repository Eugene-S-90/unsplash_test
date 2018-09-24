import { combineReducers } from 'redux';
import getListImg from './reducer_getListImg';
import addTofav from './reducer_addTofav';
import drawFavoritesImg from './reducer_drawFavoritesImg';

const rootReducer = combineReducers({
    getListImg,
    addTofav,
    drawFavoritesImg,
})
export default rootReducer;