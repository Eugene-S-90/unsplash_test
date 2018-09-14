import { call, put, takeEvery } from 'redux-saga/effects';
import { access_key, secret_key } from '../config/config'
// import API from '../api/api';


// import { IMG_UPLOAD_REQUEST, IMG_UPLOAD_SUCCESS, IMG_UPLOAD_BEGIN } from '../constants/constants';

export function* createRequest(action) {
    console.log('sagas');
    try {
        yield put({ type: "GET_LIST_IMG_BEGIN" });
        let response = yield call(fetch, "https://api.unsplash.com/search/photos/?query=skull&per_page=20&client_id=" + access_key);
        const responseBody = response.json()
        const bb =  responseBody.then(data => {
            console.log("data.results",data.results) 
        })

        console.log('responseBody', bb);
        yield put({
            type: "GET_LIST_IMG_SUCCESS", payload: {
                imgList: bb,
            }
        });
    } catch (error) {
        console.log('createRequest error', error);
    }
}

export default function* watchUploadRequest() {
    console.log('sagas');
    yield takeEvery("GET_LIST_IMG", createRequest);
}