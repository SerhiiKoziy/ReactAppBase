import { put, call, takeLatest } from 'redux-saga/effects';

import { startFetching, stopFetching } from '../loading/actionCreators';

import { setUserMeta } from './actionCreators';

import IUserMeta from '@typing/IUserMeta';

export const USER_REQUESTED = 'USER_REQUESTED';

function* requestUserAsync() {
  try {
    yield put(startFetching());

    const getUserMeta = () => ({
      displayName: 'Mock User',
    });

    const { displayName }: IUserMeta = yield call(getUserMeta);

    yield put(setUserMeta({ displayName }));

    yield put(stopFetching());
  } catch {
    console.error('THE REQUEST HAS FAILED AND THIS IS ERROR HANDLER');
    yield put(stopFetching());
  }
}

export default function* watcher() {
  yield takeLatest(USER_REQUESTED, requestUserAsync);
}
