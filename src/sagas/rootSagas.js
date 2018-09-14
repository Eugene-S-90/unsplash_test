import { all } from 'redux-saga/effects';

import getListImg from './getListImgs';


export default function* rootSaga() {
    yield all([
        getListImg(),
    ])
}