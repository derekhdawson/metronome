import { combineReducers } from 'redux';
import bpmReducer from './bpmReducer';

const rootReducer = combineReducers({
    bpm: bpmReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
