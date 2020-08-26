import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { AppState } from '../../../reducers/rootReducer';
import { setBPM } from '../../../actionCreators/metronomeActionCreators';
import { MetronomeAction } from '../../../actionTypes/metronomeActionTypes';
import BPMSliderComponent from '../components/BPMSliderComponent';

const mapStateToProps = (state: AppState) => {
    return {
        bpm: state.metronome.bpm,
    };
};

const mapDispatchToProps = (dispatch: Dispatch<MetronomeAction>) => ({
    setBPM: (bpm: number) => {
        dispatch(setBPM(bpm));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(BPMSliderComponent);
