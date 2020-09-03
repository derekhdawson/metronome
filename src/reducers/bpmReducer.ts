import { BPMAction, SET_BPM, INCREMENT_BPM, DECREMENT_BPM, UPDATE_BPM } from '../actions/bpmActions';
import { MAX_BPM, MIN_BPM, DEFAULT_BPM } from '../constants/metronomeConstants';

export interface BPMState {
    bpm: number;
    bpmShouldIncrement: boolean;
    bpmIsUpdating: boolean;
    bpmLastActiveUpdate: number;
}

const initialState: BPMState = {
    bpm: DEFAULT_BPM,
    bpmShouldIncrement: false,
    bpmIsUpdating: false,
    bpmLastActiveUpdate: Number.MAX_SAFE_INTEGER,
};

export default function bpmReducer(state: BPMState = initialState, action: BPMAction): BPMState {
    const newState = { ...state };
    switch (action.type) {
        case SET_BPM:
            newState.bpm = action.bpm;
            return newState;
        case INCREMENT_BPM:
            if (state.bpm < MAX_BPM) newState.bpm += 1;
            return newState;
        case DECREMENT_BPM:
            if (state.bpm > MIN_BPM) newState.bpm -= 1;
            return newState;
        case UPDATE_BPM:
            newState.bpmIsUpdating = action.isActive;
            newState.bpmShouldIncrement = action.shouldIncrement;
            newState.bpmLastActiveUpdate = action.lastActiveUpdate;
            return newState;
        default:
            return state;
    }
}
