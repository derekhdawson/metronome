import { all, fork } from 'redux-saga/effects';
import { watchSetBPMLongPress } from './metronomeSaga';

export default function* rootSaga() {
    yield all([fork(watchSetBPMLongPress)]);
}
