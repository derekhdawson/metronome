export const SET_BPM = 'bpm/SET_BPM_ACTION';
export const UPDATE_BPM = 'bpm/UPDATE_BPM';
export const INCREMENT_BPM = 'bpm/INCREMENT_BPM';
export const DECREMENT_BPM = 'bpm/DECREMENT_BPM';

interface SetBPMAction {
    type: typeof SET_BPM;
    bpm: number;
}

interface UpdateBPMAction {
    type: typeof UPDATE_BPM;
    shouldIncrement: boolean;
    isActive: boolean;
    lastActiveUpdate: number;
}

interface IncrementBPMAction {
    type: typeof INCREMENT_BPM;
}

interface DecrementBPMAction {
    type: typeof DECREMENT_BPM;
}

export const setBPM = (bpm: number): SetBPMAction => ({ type: SET_BPM, bpm });

export const incrementBPM = (): IncrementBPMAction => ({ type: INCREMENT_BPM });

export const decrementBPM = (): DecrementBPMAction => ({ type: DECREMENT_BPM });

export const updateBPM = (shouldIncrement: boolean, isActive: boolean, lastActiveUpdate: number): UpdateBPMAction => ({
    type: UPDATE_BPM,
    shouldIncrement,
    isActive,
    lastActiveUpdate,
});

export type BPMAction = SetBPMAction | IncrementBPMAction | DecrementBPMAction | UpdateBPMAction;
