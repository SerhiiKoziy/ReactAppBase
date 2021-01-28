import { all, fork } from 'redux-saga/effects';

import userSagas from './user/sagas';
import formSaga from './form/sagas';

const sagas = [
  userSagas,
  formSaga,
];

export default function* rootSaga() {
  yield all(sagas.map(saga => fork(saga)));
}
