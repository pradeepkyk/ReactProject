// utils/formatTimecode.ts

import { Timecode } from '../Interfaces/ShowReelInterfaces';

export const formatTimecode = (timecode: Timecode): string => {
  const pad = (num: number) => num.toString().padStart(2, '0');
  return `${pad(timecode.hours)}:${pad(timecode.minutes)}:${pad(timecode.seconds)}:${pad(timecode.frames)}`;
};
