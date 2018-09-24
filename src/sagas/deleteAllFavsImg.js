import { call, put, takeEvery } from 'redux-saga/effects';
import { mlabApi_key } from '../config/config'
import { deleteAllFavsImg } from '../actions/action_deleteAllFavs';

export function* createRequest(action) {
    try {
            yield call(fetch, `https://api.mlab.com/api/1/databases/unsplash_api/collections/unsplash_favorites?apiKey=${mlabApi_key}`, {
                method: 'put',
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify([])
            });
    } catch (error) {
        console.log('createRequest error', error);
    }
}
export default function* deleteFavs() {
    yield takeEvery("DELETE_FAVS_IMG", createRequest);
}