import { combineReducers } from 'redux';
import metronomeReducer from './metronomeReducer';

const rootReducer = combineReducers({
    metronome: metronomeReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
