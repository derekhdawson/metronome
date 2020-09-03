import React, { FunctionComponent } from 'react';
import '../styles/bpm-component.scss';
import plusIcon from '../images/plus-icon.png';
import minusIcon from '../images/minus-icon.png';
import { MIN_BPM, MAX_BPM } from '../constants/metronomeConstants';

type Props = {
    bpm: number;
    setBPM: (bpm: number) => void; // used by slider
    updateBPM: (shouldIncrement: boolean, isActive: boolean, lastActiveUpdate: number) => void; // used by plus minus buttons
};

const BPMSliderComponent: FunctionComponent<Props> = (props: Props) => {
    const { bpm, setBPM, updateBPM } = props;
    return (
        <div className="bpm-slider-container">
            {getIncrementDecrementBPMButton(false, updateBPM)}
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
                    setBPM(parseInt(event.target.value, 10));
                }}
            ></input>
            {getIncrementDecrementBPMButton(true, updateBPM)}
        </div>
    );
};

function getIncrementDecrementBPMButton(
    shouldIncrement: boolean,
    updateBPM: (shouldIncrement: boolean, isActive: boolean, lastActiveUpdate: number) => void,
): JSX.Element {
    let className: string;
    let imageSource: string;
    let altTag: string;

    if (shouldIncrement) {
        className = 'bpm-slider-increment-button';
        imageSource = plusIcon;
        altTag = 'increment button';
    } else {
        className = 'bpm-slider-decrement-button';
        imageSource = minusIcon;
        altTag = 'decrement button';
    }

    return (
        <img
            className={className}
            src={imageSource}
            alt={altTag}
            draggable={false}
            onMouseDown={() => {
                updateBPM(shouldIncrement, true, Date.now());
            }}
            onMouseUp={() => {
                updateBPM(shouldIncrement, false, Date.now());
            }}
            onMouseLeave={() => {
                updateBPM(shouldIncrement, false, Date.now());
            }}
            onTouchStart={() => {
                updateBPM(shouldIncrement, true, Date.now());
            }}
            onTouchEnd={() => {
                updateBPM(shouldIncrement, false, Date.now());
            }}
        />
    );
}

export default BPMSliderComponent;
