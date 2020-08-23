import { all, fork } from 'redux-saga/effects';
import MetronomeSaga from './metronomeSaga';

export default function* rootSaga() {
    yield all([fork(MetronomeSaga)]);
}
