import React, { FunctionComponent, useState, useEffect, useCallback } from 'react';
import '../styles/bpm-component.scss';
import plusIcon from '../../../images/plus-icon.png';
import minusIcon from '../../../images/minus-icon.png';

const MIN_BPM = 20;
const MAX_BPM = 260;

const INCREMENT = 'increment';
const DECREMENT = 'decrement';

interface Props {
    bpm: number;
    setBPM: (bpm: number) => void;
}

const BPMSliderComponent: FunctionComponent<Props> = (props: Props) => {
    const setStartLongPressForIncrement = useHandleLongPress();
    type IncrementOrDecrement = typeof INCREMENT | typeof DECREMENT;
    const incrementDecrementBPMButton = (incrementOrDecrement: IncrementOrDecrement): JSX.Element => {
        let className: string;
        let imageSource: string;
        let altTag: string;

        if (incrementOrDecrement === INCREMENT) {
            className = 'bpm-slider-increment-button';
            imageSource = plusIcon;
            altTag = 'increment button';
        } else {
            className = 'bpm-slider-decrement-button';
            imageSource = minusIcon;
            altTag = 'decrement button';
        }

        const onClick = () => {
            if (incrementOrDecrement === INCREMENT && props.bpm < MAX_BPM) {
                props.setBPM(props.bpm + 1);
            } else if (props.bpm > MIN_BPM) {
                props.setBPM(props.bpm - 1);
            }
        };

        return (
            <img
                className={className}
                src={imageSource}
                alt={altTag}
                onClick={onClick}
                onMouseDown={() => setStartLongPressForIncrement(true)}
                onMouseUp={() => setStartLongPressForIncrement(false)}
                onMouseLeave={() => setStartLongPressForIncrement(false)}
                onTouchStart={() => setStartLongPressForIncrement(true)}
                onTouchEnd={() => setStartLongPressForIncrement(false)}
            />
        );
    };

    const { bpm } = props;
    return (
        <div className="bpm-slider-container">
            {incrementDecrementBPMButton(DECREMENT)}
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
            {incrementDecrementBPMButton(INCREMENT)}
        </div>
    );
};

function useHandleLongPress() {
    const [startLongPress, setStartLongPress] = useState(false);
    const [update1, setUpdate1] = useState(false);
    const [update2, setUpdate2] = useState(false);
    const [update3, setUpdate3] = useState(false);
    useEffect(() => {
        let timerId: NodeJS.Timeout;
        if (startLongPress) {
            let timeElapsed = 0;
            const interval = 10;
            timerId = setInterval(() => {
                if (timeElapsed >= 2000) {
                    setUpdate3(true);
                } else if (timeElapsed >= 1000) {
                    if (timeElapsed % 250 === 0) setUpdate2(true);
                } else if (timeElapsed >= 500) {
                    if (timeElapsed % 500) setUpdate1(true);
                }
                timeElapsed += interval;
            }, interval);
            return () => {
                console.log('clear');
                clearInterval(timerId);
            };
        }
    }, [startLongPress]);
    return [setStartLongPress, update1, update2, update3];
}

export default BPMSliderComponent;
