export interface Timecode {
  hours: number;
  minutes: number;
  seconds: number;
  frames: number;
}

export interface Clip {
  name: string;
  description: string;
  standard: 'PAL' | 'NTSC';
  definition: 'SD' | 'HD';
  startTimecode: Timecode;
  endTimecode: Timecode;
}

export interface ShowReel {
  name: string;
  standard: 'PAL' | 'NTSC';
  definition: 'SD' | 'HD';
  clips: Clip[];
  totalDuration: Timecode;
}

export interface TimecodeInputProps {
  label: string;
  timecode: { hours: number; minutes: number; seconds: number; frames: number };
  onChange: (timecode: { hours: number; minutes: number; seconds: number; frames: number }) => void;
}

export interface ShowReel {
  name: string;
  standard: 'PAL' | 'NTSC';
  definition: 'SD' | 'HD';
  clips: Clip[];
  selectedClip?: Clip;
}
