import * as actions from '../actionTypes/metronomeActionTypes';

export interface MetronomeState {
    bpm: number;
}

const initialState: MetronomeState = {
    bpm: 140,
};

export default function metronomeReducer(
    state: MetronomeState = initialState,
    action: actions.MetronomeAction,
): MetronomeState {
    switch (action.type) {
        case actions.SET_BPM:
            return {
                bpm: action.bpm,
            };
        default:
            return state;
    }
}
