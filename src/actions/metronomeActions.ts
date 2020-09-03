export const SET_BPM = 'metronome/SET_BPM_ACTION';
export const SET_BPM_LONG_PRESS = 'metronome/SET_BPM_LONG_PRESS';

interface SetBPMAction {
    type: typeof SET_BPM;
    bpm: number;
}

interface SetBPMLongPressAction {
    type: typeof SET_BPM_LONG_PRESS;
    shouldIncrement: boolean;
}

export const setBPM = (bpm: number): SetBPMAction => ({ type: SET_BPM, bpm });

export const setBPMLongPress = (shouldIncrement: boolean): SetBPMLongPressAction => ({
    type: SET_BPM_LONG_PRESS,
    shouldIncrement,
});

export type MetronomeAction = SetBPMAction | SetBPMLongPressAction;
