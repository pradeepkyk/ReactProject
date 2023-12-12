import React, { useContext, useState } from 'react';
import ShowReelContext from '../Context/ShowReelContext';
import { Clip } from '../Interfaces/ShowReelInterfaces';
import '../App.css';
import { calculateTotalDuration } from '../Assets/timecodeCalculations';



const ClipList: React.FC<{ clipsData: Clip[] }> = ({ clipsData }) => {
  const [showReel, setShowReel] = useContext(ShowReelContext); 

  const removeClip = (clipToRemove: Clip) => {
    const updatedClips = showReel.clips.filter(clip => clip.name !== clipToRemove.name);
    const updatedTotalDuration = calculateTotalDuration(updatedClips, 25);
  
    setShowReel({ ...showReel, clips: updatedClips, totalDuration: updatedTotalDuration });
  };
  

  return (
    <div className="clip-list">
      {showReel.clips.map((clip, index) => (
        <div key={index} className="clip-item">
          <span>{clip.name}</span>
          <div className="clip-item-buttons">            
            <button className="button-remove" onClick={() => removeClip(clip)}>Remove</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ClipList;
