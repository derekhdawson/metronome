import React, { FunctionComponent } from 'react';
import '../styles/metronome-page.scss';
import BPM from '../containers/BPMContainer';
import BPMSlider from '../containers/BPMSliderContainer';

interface Props {}

const MetronomePageComponent: FunctionComponent<Props> = () => (
    <div className="home-page-container">
        <div className="home-page-center-content">
            <div className="bpm-container">
                <BPM />
                <BPMSlider />
            </div>
        </div>
    </div>
);

export default MetronomePageComponent;
