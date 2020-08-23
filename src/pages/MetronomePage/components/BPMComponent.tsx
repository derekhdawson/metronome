import React, { FunctionComponent } from 'react';
import '../styles/bpm-component.css';

interface Props {
    bpm: number;
    setBPM: (bpm: number) => void;
}

const BPMComponent: FunctionComponent<Props> = (props: Props) => {
    const { bpm } = props;
    return (
        <div className="bpm-container">
            <span className="bpm-num">{bpm}</span>
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
    );
};

export default BPMComponent;
