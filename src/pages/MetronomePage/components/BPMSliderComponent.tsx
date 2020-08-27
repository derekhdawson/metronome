import React, { FunctionComponent } from 'react';
import '../styles/bpm-component.scss';

const MIN_BPM = 20;
const MAX_BPM = 260;

const INCREMENT_STR = 'increment';
const DECREMENT_STR = 'decrement';

interface Props {
    bpm: number;
    setBPM: (bpm: number) => void;
}

const BPMSliderComponent: FunctionComponent<Props> = (props: Props) => {
    type IncrementDecrementButtonType = typeof INCREMENT_STR | typeof DECREMENT_STR;
    const incrementDecrementBPMButton = (typeOfButton: IncrementDecrementButtonType): JSX.Element => {
        const incrementAmount = typeOfButton === INCREMENT_STR ? 1 : -1;
        const buttonText = typeOfButton === INCREMENT_STR ? '+' : '-';
        return (
            <div className="bpm-slider-increment-decrement-button-container">
                <span className="bpm-slider-increment-decrement-button-text">{buttonText}</span>
            </div>
        );
    };

    const { bpm } = props;
    return (
        <div className="bpm-slider-container">
            {incrementDecrementBPMButton(INCREMENT_STR)}
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
            {incrementDecrementBPMButton(DECREMENT_STR)}
        </div>
    );
};

export default BPMSliderComponent;
