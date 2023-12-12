import React, { useContext } from 'react';
import { Clip } from '../../Interfaces/ShowReelInterfaces';
import ShowReelContext from '../../Context/ShowReelContext';

interface ClipDetailsProps {
  clip: Clip | null;
}

const ClipDetails: React.FC = () => {
    const [showReel] = useContext(ShowReelContext);
  
    if (!showReel.selectedClip) {
      return <p>No clip selected</p>;
    }
  
    const { selectedClip } = showReel;

  return (
    <div className="clip-details">
      <h3>{selectedClip.name}</h3>
      <p>{selectedClip.description}</p>
      <p>Standard: {selectedClip.standard}</p>
      <p>Definition: {selectedClip.definition}</p>
      <p>Start Timecode: {`${selectedClip.startTimecode.hours}:${selectedClip.startTimecode.minutes}:${selectedClip.startTimecode.seconds}:${selectedClip.startTimecode.frames}`}</p>
      <p>End Timecode: {`${selectedClip.endTimecode.hours}:${selectedClip.endTimecode.minutes}:${selectedClip.endTimecode.seconds}:${selectedClip.endTimecode.frames}`}</p>
    </div>
  );
};

export default ClipDetails;
