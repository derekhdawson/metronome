import React, { FunctionComponent } from 'react';
import '../styles/metronome-page.scss';
import BPMComponent from '../containers/BPMContainer';

interface Props {
    bpm: number;
}

const MetronomePageComponent: FunctionComponent<Props> = (props: Props) => (
    <div className="home-page-container">
        <div className="home-page-center-content">
            <BPMComponent bpm={props.bpm} />
        </div>
    </div>
);

export default MetronomePageComponent;
