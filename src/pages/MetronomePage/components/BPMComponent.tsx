import React, { FunctionComponent } from 'react';
import '../styles/bpm-component.scss';

interface Props {
    bpm: number;
    setBPM: (bpm: number) => void;
}

const BPMComponent: FunctionComponent<Props> = (props: Props) => {
    const { bpm } = props;
    return (
        <div className="bpm-container">
            <div className="bpm-num-container">
                <div className="bpm-num">{bpm}</div>
                <div className="bpm-label">BPM</div>
            </div>
            <div className="bpm-slider-container">
                <input
                    className="bpm-slider"
                    id="bpm-slider"
                    name="bpm-slider"
                    type="range"
                    min="20"
                    max="260"
                    step="1"
                    value={bpm}
                    onChange={(event) => {
                        props.setBPM(parseInt(event.target.value, 10));
                    }}
                ></input>
            </div>
        </div>
    );
};

export default BPMComponent;
