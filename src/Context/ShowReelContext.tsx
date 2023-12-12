import React, { createContext, useState, ReactNode } from 'react';
import { Clip, ShowReel } from '../Interfaces/ShowReelInterfaces';
import clipsData from '../Data/mockData'; 

const defaultShowReel: ShowReel = {
  name: '',
  standard: 'PAL',
  definition: 'SD',
  clips: clipsData,
  selectedClip: undefined,
  totalDuration: { hours: 0, minutes: 0, seconds: 0, frames: 0 }
};

// Extend the context type to include a method for updating selectedClip
const ShowReelContext = createContext<[ShowReel, React.Dispatch<React.SetStateAction<ShowReel>>, (clip: Clip) => void]>([defaultShowReel, () => {}, () => {}]);

interface ShowReelProviderProps {
  children: ReactNode;
}

export const ShowReelProvider: React.FC<ShowReelProviderProps> = ({ children }) => {
  const [showReel, setShowReel] = useState<ShowReel>(defaultShowReel);

  const selectClip = (clip: Clip) => {
    setShowReel(current => ({ ...current, selectedClip: clip }));
  };

  return (
    <ShowReelContext.Provider value={[showReel, setShowReel, selectClip]}>
      {children}
    </ShowReelContext.Provider>
  );
};

export default ShowReelContext;
