import { Clip, Timecode } from '../Interfaces/ShowReelInterfaces';

// Function to convert a timecode to total frames
export const timecodeToFrames = (timecode: Timecode, frameRate: number): number => {
  return (
    timecode.hours * 3600 * frameRate +
    timecode.minutes * 60 * frameRate +
    timecode.seconds * frameRate +
    timecode.frames
  );
};

// Function to convert total frames to a timecode
export const framesToTimecode = (totalFrames: number, frameRate: number): Timecode => {
  const hours = Math.floor(totalFrames / (3600 * frameRate));
  const minutes = Math.floor((totalFrames % (3600 * frameRate)) / (60 * frameRate));
  const seconds = Math.floor((totalFrames % (60 * frameRate)) / frameRate);
  const frames = totalFrames % frameRate;
  return { hours, minutes, seconds, frames };
};

// Function to calculate the total duration of an array of clips
export const calculateTotalDuration = (clips: Clip[], frameRate: number): Timecode => {
  let totalFrames = 0;

  clips.forEach(clip => {
    const startFrames = timecodeToFrames(clip.startTimecode, frameRate);
    const endFrames = timecodeToFrames(clip.endTimecode, frameRate);
    totalFrames += endFrames - startFrames;
  });

  return framesToTimecode(totalFrames, frameRate);
};
