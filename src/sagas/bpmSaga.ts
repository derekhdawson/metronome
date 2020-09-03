import { put, select, takeLatest, delay } from 'redux-saga/effects';
import { UPDATE_BPM, INCREMENT_BPM, DECREMENT_BPM } from '../actions/bpmActions';
import { AppState } from '../reducers/rootReducer';
import {
    BPM_UPDATE_INTERVAL_TIME_1,
    BPM_UPDATE_INTERVAL_TIME_2,
    BPM_UPDATE__DELAY_TIME_1,
    BPM_UPDATE__DELAY_TIME_2,
    BPM_UPDATE__DELAY_TIME_3,
} from '../constants/metronomeConstants';

export function* updateBPM() {
    const state: AppState = yield select();
    const bpmLastActiveUpdate = state.bpm.bpmLastActiveUpdate;
    let delayTime = BPM_UPDATE__DELAY_TIME_1;
    while (true) {
        const state: AppState = yield select();
        const { bpmIsUpdating, bpmShouldIncrement } = state.bpm;
        if (bpmIsUpdating) {
            if (bpmShouldIncrement) {
                yield put({ type: INCREMENT_BPM });
            } else {
                yield put({ type: DECREMENT_BPM });
            }
        } else {
            break;
        }
        yield delay(delayTime);
        const elapsedTime = (Date.now() - bpmLastActiveUpdate) / 1000;
        if (elapsedTime >= BPM_UPDATE_INTERVAL_TIME_2) {
            delayTime = BPM_UPDATE__DELAY_TIME_3;
        } else if (elapsedTime >= BPM_UPDATE_INTERVAL_TIME_1) {
            delayTime = BPM_UPDATE__DELAY_TIME_2;
        }
    }
}

export function* watchUpdateBPM() {
    yield takeLatest(UPDATE_BPM, updateBPM);
}
