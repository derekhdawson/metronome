import { connect } from 'react-redux';

import { AppState } from '../reducers/rootReducer';
import BPMComponent from '../components/BPMComponent';

const mapStateToProps = (state: AppState) => {
    return {
        bpm: state.bpm.bpm,
    };
};

export default connect(mapStateToProps, {})(BPMComponent);
