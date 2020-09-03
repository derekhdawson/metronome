import React from 'react';
import '../styles/metronome-page.scss';
import BPM from '../containers/BPMContainer';
import BPMSlider from '../containers/BPMSliderContainer';

const MetronomePageComponent = () => (
    <div className="metronome-page-center-content">
        <div className="metronome-container">
            <BPM />
            <BPMSlider />
        </div>
    </div>
);

export default MetronomePageComponent;
