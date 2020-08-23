import { combineReducers } from 'redux';
import { metronomeReducer, MetronomeState } from './metronome-reducer';

export interface State {
    metronome: MetronomeState;
}

export const rootReducers = combineReducers<State>({
    metronome: metronomeReducer,
});
