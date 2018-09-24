import { call, put, takeEvery } from 'redux-saga/effects';
import { mlabApi_key } from '../config/config'

export function* createRequest(action) {
    try {
        const responseFav = yield call(fetch, `https://api.mlab.com/api/1/databases/unsplash_api/collections/unsplash_favorites?apiKey=${mlabApi_key}`);
        const favorites = yield call([responseFav, responseFav.json]);
        let checkIfExistInArray = favorites.some(function (element, index) {
            return element.id == action.payload.id
        })
        if (checkIfExistInArray) {
            let filteredItem = favorites.filter(function (item) {
                return item.id == action.payload.id;
            })
            let filteredItemMLabId = filteredItem[0]._id.$oid
            yield call(fetch, `https://api.mlab.com/api/1/databases/unsplash_api/collections/unsplash_favorites/${filteredItemMLabId}/?apiKey=${mlabApi_key}`, {
                method: 'delete',
                async: true,
            });
        } else {
            yield call(fetch, `https://api.mlab.com/api/1/databases/unsplash_api/collections/unsplash_favorites?apiKey=${mlabApi_key}`, {
                method: 'post',
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(action.payload)
            });
        }
    } catch (error) {
        console.log('createRequest error', error);
    }
}
export default function* addToFavorites() {
    yield takeEvery("ADD_TO_FAV", createRequest);
}