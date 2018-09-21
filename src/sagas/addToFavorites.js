import { call, put, takeEvery } from 'redux-saga/effects';

export function* createRequest(action) {
    try {
        const responseFav = yield call(fetch, 'https://api.mlab.com/api/1/databases/unsplash_api/collections/unsplash_favorites?apiKey=h0wNitZSLer0T8vVl1QwY-NOERfUSoXw');
        const favorites = yield call([responseFav, responseFav.json]);
        let checkIfExistInArray = favorites.some(function (element, index) {
            return element.id == action.payload.id
        })
        if(checkIfExistInArray) {
            let filteredItem = favorites.filter(function (item) {
                return item.id == action.payload.id;
            })
            let filteredItemMLabId = filteredItem[0]._id.$oid
            const deleteItem = yield call(fetch, `https://api.mlab.com/api/1/databases/unsplash_api/collections/unsplash_favorites/${filteredItemMLabId}/?apiKey=h0wNitZSLer0T8vVl1QwY-NOERfUSoXw`, {
                method: 'delete',
                async: true,
            });
        } else {
            const postRequest = yield call(fetch, 'https://api.mlab.com/api/1/databases/unsplash_api/collections/unsplash_favorites?apiKey=h0wNitZSLer0T8vVl1QwY-NOERfUSoXw', {
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