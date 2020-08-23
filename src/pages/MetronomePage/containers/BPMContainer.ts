import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { setBPM } from '../../../actionCreators/metronomeActionCreators';
import { MetronomeAction } from '../../../actionTypes/metronomeActionTypes';
import BPMComponent from '../components/BPMComponent';

const mapDispatchToProps = (dispatch: Dispatch<MetronomeAction>) => ({
    setBPM: (bpm: number) => {
        dispatch(setBPM(bpm));
    },
});

export default connect(null, mapDispatchToProps)(BPMComponent);
