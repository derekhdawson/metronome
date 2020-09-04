import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { AppState } from '../reducers/rootReducer';
import ControlStartStopComponent from '../components/ControlStartStopComponent';
import { MetronomeSoundAction, toggleMetronomeSoundIsActive } from '../actions/metronomeSoundActions';

const mapDispatchToProps = (dispatch: Dispatch<MetronomeSoundAction>) => ({
    toggleMetronomeSoundIsActive: () => {
        dispatch(toggleMetronomeSoundIsActive());
    },
});

const mapStateToProps = (state: AppState) => ({
    isActive: state.metronomeSound.isActive,
});

export default connect(mapStateToProps, mapDispatchToProps)(ControlStartStopComponent);
