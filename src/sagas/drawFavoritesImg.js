import { call, put, takeEvery } from 'redux-saga/effects';
import { mlabApi_key } from '../config/config'

export function* createRequest(action) {
    try {
        yield put({ type: "DRAW_FAVORITES_IMG_BEGIN" });
        const response = yield call(fetch, `https://api.mlab.com/api/1/databases/unsplash_api/collections/unsplash_favorites?apiKey=${mlabApi_key}`);
        const favorites = yield call([response, response.json]);
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