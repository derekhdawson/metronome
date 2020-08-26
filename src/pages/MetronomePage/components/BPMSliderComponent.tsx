import React, { FunctionComponent } from 'react';
import '../styles/bpm-component.scss';

const MIN_BPM = 20;
const MAX_BPM = 260;

interface Props {
    bpm: number;
    setBPM: (bpm: number) => void;
}

const BPMSliderComponent: FunctionComponent<Props> = (props: Props) => {
    const { bpm } = props;
    return (
        <div className="bpm-slider-container">
            <input
                className="bpm-slider"
                id="bpm-slider"
                name="bpm-slider"
                type="range"
                min={MIN_BPM}
                max={MAX_BPM}
                step="1"
                value={bpm}
                onChange={(event) => {
                    props.setBPM(parseInt(event.target.value, 10));
                }}
            ></input>
        </div>
    );
};

export default BPMSliderComponent;
