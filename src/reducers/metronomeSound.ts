import { TOGGLE_METRONOME_SOUND_IS_ACTIVE, MetronomeSoundAction } from '../actions/metronomeSoundActions';

export interface MetronomeSoundState {
    isActive: boolean;
}

const initialState: MetronomeSoundState = {
    isActive: false,
};

export default function metronomeSoundReducer(
    state: MetronomeSoundState = initialState,
    action: MetronomeSoundAction,
): MetronomeSoundState {
    const newState = { ...state };
    switch (action.type) {
        case TOGGLE_METRONOME_SOUND_IS_ACTIVE:
            newState.isActive = !newState.isActive;
            return newState;
        default:
            return state;
    }
}
