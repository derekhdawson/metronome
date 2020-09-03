import React, { FunctionComponent } from 'react';
import '../styles/bpm-component.scss';

interface Props {
    bpm: number;
}

const BPMComponent: FunctionComponent<Props> = (props: Props) => {
    const { bpm } = props;
    return (
        <div className="bpm-container">
            <div className="bpm-num-container">
                <div className="bpm-num">{bpm}</div>
                <div className="bpm-label">BPM</div>
            </div>
        </div>
    );
};

export default BPMComponent;
