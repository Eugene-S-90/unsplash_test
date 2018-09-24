import { combineReducers } from 'redux';
import getListImg from './reducer_getListImg';
import addTofav from './reducer_addTofav';
import drawFavoritesImg from './reducer_drawFavoritesImg';
import deleteAllFavsImg from './reducer_deleteAllFavsImg';

const rootReducer = combineReducers({
    getListImg,
    addTofav,
    drawFavoritesImg,
    deleteAllFavsImg
})
export default rootReducer;