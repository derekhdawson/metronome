import { all, fork } from 'redux-saga/effects';
import { watchUpdateBPM } from './bpmSaga';
import { watchPlayMetronomeSound } from './metronomeSoundSaga';

export default function* rootSaga() {
    yield all([fork(watchUpdateBPM), fork(watchPlayMetronomeSound)]);
}
