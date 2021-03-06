import { put, select, takeLatest, delay } from 'redux-saga/effects';
import { UPDATE_BPM, INCREMENT_BPM, DECREMENT_BPM } from '../actions/bpmActions';
import { AppState } from '../reducers/rootReducer';
import {
    BPM_UPDATE_INTERVAL_TIME_FAST,
    BPM_UPDATE_INTERVAL_TIME_VERY_FAST,
    BPM_UPDATE_DELAY_TIME_NORMAL,
    BPM_UPDATE_DELAY_TIME_FAST,
    BPM_UPDATE_DELAY_VERY_FAST,
} from '../constants/metronomeConstants';

function* updateBPM() {
    const state: AppState = yield select();
    const bpmLastActiveUpdate = state.bpm.bpmLastActiveUpdate;
    let delayTime = BPM_UPDATE_DELAY_TIME_NORMAL;
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
        if (elapsedTime >= BPM_UPDATE_INTERVAL_TIME_VERY_FAST) {
            delayTime = BPM_UPDATE_DELAY_VERY_FAST;
        } else if (elapsedTime >= BPM_UPDATE_INTERVAL_TIME_FAST) {
            delayTime = BPM_UPDATE_DELAY_TIME_FAST;
        }
    }
}

export function* watchUpdateBPM() {
    yield takeLatest(UPDATE_BPM, updateBPM);
}
