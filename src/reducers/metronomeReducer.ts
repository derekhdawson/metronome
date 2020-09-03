import { MetronomeAction, SET_BPM } from '../actions/metronomeActions';

export interface MetronomeState {
    bpm: number;
}

const initialState: MetronomeState = {
    bpm: 140,
};

export default function metronomeReducer(
    state: MetronomeState = initialState,
    action: MetronomeAction,
): MetronomeState {
    switch (action.type) {
        case SET_BPM:
            return {
                bpm: action.bpm,
            };
        default:
            return state;
    }
}
