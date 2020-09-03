import { takeEvery } from 'redux-saga/effects';
import { SET_BPM_LONG_PRESS } from '../actions/metronomeActions';

export function* setBPMLongPress() {
    console.log(SET_BPM_LONG_PRESS);
    yield 1;
}

export function* watchSetBPMLongPress() {
    yield takeEvery(SET_BPM_LONG_PRESS, setBPMLongPress);
}
