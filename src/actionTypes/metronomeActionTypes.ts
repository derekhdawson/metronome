export const SET_BPM = 'metronome/SET_BPM';
export interface SetBPMAction {
    type: typeof SET_BPM;
    bpm: number;
}

export type MetronomeAction = SetBPMAction;
