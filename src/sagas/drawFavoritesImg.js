import { call, put, takeEvery } from 'redux-saga/effects';
import { access_key, secret_key } from '../config/config'

export function* createRequest(action) {
    console.log('sagas');
    try {
        yield put({ type: "DRAW_FAVORITES_IMG_BEGIN" });
        const response = yield call(fetch, 'https://api.mlab.com/api/1/databases/unsplash_api/collections/unsplash_favorites?apiKey=h0wNitZSLer0T8vVl1QwY-NOERfUSoXw');
        const favorites = yield call([response, response.json]);
        console.log('favorites',favorites)
        yield put({
            type: "DRAW_FAVORITES_IMG_SUCCESS", payload: {
                favs: favorites,
            }
        });
    } catch (error) {
        console.log('createRequest error', error);
    }
}
export default function* drawFavoritesImg() {
    yield takeEvery("DRAW_FAVORITES_IMG", createRequest);
}