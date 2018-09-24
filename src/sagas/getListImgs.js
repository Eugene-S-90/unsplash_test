import { call, put, takeEvery } from 'redux-saga/effects';
import { access_key, secret_key } from '../config/config'

export function* createRequest(action) {
    let count = action.payload
    try {
        yield put({ type: "GET_LIST_IMG_BEGIN" });
        let response = yield call(fetch, `https://api.unsplash.com/photos/random/?count=${count}&orientation=landscape&client_id=${access_key}`);
        const imgList = yield call([response, response.json]);
        console.log('response',imgList)
        yield put({
            type: "GET_LIST_IMG_SUCCESS", payload: {
                imgList: imgList,
            }
        });
    } catch (error) {
        console.log('createRequest error', error);
    }
}
export default function* watchUploadRequest() {
    yield takeEvery("GET_LIST_IMG", createRequest);
}