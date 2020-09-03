import React, { FunctionComponent } from 'react';
import '../styles/bpm-component.scss';
import plusIcon from '../../../images/plus-icon.png';
import minusIcon from '../../../images/minus-icon.png';

const MIN_BPM = 20;
const MAX_BPM = 260;

type Props = {
    bpm: number;
    setBPM: (bpm: number) => void;
    setBPMLongPress: () => void;
};

const BPMSliderComponent: FunctionComponent<Props> = (props: Props) => {
    const { bpm } = props;
    return (
        <div className="bpm-slider-container">
            {getIncrementDecrementBPMButton(false, props.bpm, props.setBPM, props.setBPMLongPress)}
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
            {getIncrementDecrementBPMButton(true, props.bpm, props.setBPM, props.setBPMLongPress)}
        </div>
    );
};

function getIncrementDecrementBPMButton(
    shouldIncrement: boolean,
    bpm: number,
    setBPM: (bpm: number) => void,
    setBPMLongPress: () => void,
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

    const onClick = () => {
        if (shouldIncrement && bpm < MAX_BPM) {
            setBPM(bpm + 1);
        } else if (bpm > MIN_BPM) {
            setBPM(bpm - 1);
        }
    };

    return (
        <img
            className={className}
            src={imageSource}
            alt={altTag}
            onClick={onClick}
            onMouseDown={() => {
                setBPMLongPress();
            }}
            onMouseUp={() => {
                console.log('test');
            }}
            onMouseLeave={() => {
                console.log('test');
            }}
            onTouchStart={() => {
                console.log('test');
            }}
            onTouchEnd={() => {
                console.log('test');
            }}
        />
    );
}

export default BPMSliderComponent;
