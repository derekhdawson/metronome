import { all, fork } from 'redux-saga/effects';
import { watchUpdateBPM } from './bpmSaga';

export default function* rootSaga() {
    yield all([fork(watchUpdateBPM)]);
}
