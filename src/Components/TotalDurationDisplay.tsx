import React, { useContext } from 'react';
import { calculateTotalDuration, framesToTimecode } from '../Assets/timecodeCalculations';
import { Timecode } from '../Interfaces/ShowReelInterfaces';
import ShowReelContext from '../Context/ShowReelContext';

const TotalDurationDisplay: React.FC = () => {
  const [showReel] = useContext(ShowReelContext);
  const totalDuration = calculateTotalDuration(showReel.clips, 25);

  // Formatting function to convert the timecode into a string
  const formatTimecode = (timecode: Timecode): string => {
    const pad = (num: number) => num.toString().padStart(2, '0');
    return `${pad(timecode.hours)}:${pad(timecode.minutes)}:${pad(timecode.seconds)}:${pad(timecode.frames)}`;
  };

  const totalDurationDisplay = formatTimecode(totalDuration);

  return (
    <div className="duration-display">
      Total Duration: {totalDurationDisplay}
    </div>
  );
};

export default TotalDurationDisplay;
