export const TOGGLE_METRONOME_SOUND_IS_ACTIVE = 'metronomeSound/TOGGLE_METRONOME_SOUND_IS_ACTIVE';

interface ToggleMetronomeSoundIsActiveAction {
    type: typeof TOGGLE_METRONOME_SOUND_IS_ACTIVE;
}

export const toggleMetronomeSoundIsActive = (): ToggleMetronomeSoundIsActiveAction => ({
    type: TOGGLE_METRONOME_SOUND_IS_ACTIVE,
});

export type MetronomeSoundAction = ToggleMetronomeSoundIsActiveAction;
