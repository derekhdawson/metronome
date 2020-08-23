import * as actions from '../actionTypes/metronomeActionTypes';

export function setBPM(bpm: number): actions.SetBPMAction {
    return {
        type: actions.SET_BPM,
        bpm,
    };
}
