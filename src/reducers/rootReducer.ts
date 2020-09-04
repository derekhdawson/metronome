import { combineReducers } from 'redux';
import bpmReducer from './bpmReducer';
import metronomeSoundReducer from './metronomeSound';

const rootReducer = combineReducers({
    bpm: bpmReducer,
    metronomeSound: metronomeSoundReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
