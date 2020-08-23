import { connect } from 'react-redux';
import { AppState } from '../../../reducers/rootReducer';
import MetronomePageComponent from '../components/MetronomePageComponent';

const mapStateToProps = (state: AppState) => {
    return {
        bpm: state.metronome.bpm,
    };
};

export default connect(mapStateToProps, null)(MetronomePageComponent);
