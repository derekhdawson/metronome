import React, { FunctionComponent } from 'react';
import playIcon from '../images/play-icon.png';
import pauseIcon from '../images/pause-icon.png';
import '../styles/metronome-controls.scss';

interface Props {
    isActive: boolean;
    toggleMetronomeSoundIsActive: () => void;
}

const ControlStartStopComponent: FunctionComponent<Props> = (props: Props) => {
    return (
        <div className="control-start-stop-container">
            <div className="control-start-stop-button-container" onClick={props.toggleMetronomeSoundIsActive}>
                {props.isActive ? (
                    <img className="metronome-stop-button" src={pauseIcon} alt="metronome stop button" />
                ) : (
                    <img className="metronome-play-button" src={playIcon} alt="metronome play button" />
                )}
            </div>
        </div>
    );
};

export default ControlStartStopComponent;
