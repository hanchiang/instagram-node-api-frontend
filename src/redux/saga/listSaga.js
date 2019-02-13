import { call, put, delay } from 'redux-saga/effects';

import * as Api from '../../api';

import { setList } from '../actions/list';

export function* handleGetList(/* action */) {
  try {
    yield delay(2000);
    const todos = yield call(Api.getList);
    yield put(setList(todos.data));
  } catch (err) {
    console.log(err);
  }
}
