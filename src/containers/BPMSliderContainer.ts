import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { AppState } from '../reducers/rootReducer';
import { setBPM, updateBPM, BPMAction } from '../actions/bpmActions';
import BPMSliderComponent from '../components/BPMSliderComponent';

const mapStateToProps = (state: AppState) => ({
    bpm: state.bpm.bpm,
});

const mapDispatchToProps = (dispatch: Dispatch<BPMAction>) => ({
    setBPM: (bpm: number) => {
        dispatch(setBPM(bpm));
    },
    updateBPM: (shouldIncrement: boolean, isActive: boolean, lastActiveUpdate: number) => {
        dispatch(updateBPM(shouldIncrement, isActive, lastActiveUpdate));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(BPMSliderComponent);
