import { select, call, delay } from 'redux-saga/effects';
import { TOGGLE_METRONOME_SOUND_IS_ACTIVE } from '../actions/metronomeSoundActions';

import { take } from 'redux-saga/effects';
import { AppState } from '../reducers/rootReducer';

const metronomeSound = new Audio('/click.m4a');

function* playMetronomeSound() {
    while (true) {
        const state: AppState = yield select();
        if (!state.metronomeSound.isActive) {
            break;
        }
        metronomeSound.play();
        const beatsPerSecond = 60 / state.bpm.bpm;
        yield delay(beatsPerSecond * 1000);
    }
}

export function* watchPlayMetronomeSound() {
    while (true) {
        yield take(TOGGLE_METRONOME_SOUND_IS_ACTIVE);
        const state: AppState = yield select();
        if (state.metronomeSound.isActive) {
            yield call(playMetronomeSound);
        }
    }
}
