import { all } from 'redux-saga/effects';

import getListImg from './getListImgs';
import addToFavorites from './addToFavorites';
import drawFavoritesImg from './drawFavoritesImg';
import deleteFavs from './deleteAllFavsImg';



export default function* rootSaga() {
    yield all([
        getListImg(),
        drawFavoritesImg(),
        addToFavorites(),
        deleteFavs(),
        
    ])
}