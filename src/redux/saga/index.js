import { all, takeLatest } from 'redux-saga/effects';

import { handleGetList } from './listSaga';

import { START_FETCH_LIST } from '../actions/list';

export default function* rootSaga() {
  yield all([
    takeLatest(START_FETCH_LIST, handleGetList)
  ]);
}
