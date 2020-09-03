import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { AppState } from '../../../reducers/rootReducer';
import { setBPM, setBPMLongPress, MetronomeAction } from '../../../actions/metronomeActions';
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
    setBPMLongPress: () => {
        dispatch(setBPMLongPress(true));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(BPMSliderComponent);
