import React, { useState, useContext } from 'react';
import ShowReelContext from '../../Context/ShowReelContext';
import { Clip, TimecodeInputProps } from '../../Interfaces/ShowReelInterfaces';
import TimecodeInput from './TimecodeInput';


const ClipModal: React.FC<{ closeModal: () => void }> = ({ closeModal }) => {
  const [showReel, setShowReel] = useContext(ShowReelContext);
  const [clip, setClip] = useState<Clip>({
    name: '',
    description: '',
    standard: 'PAL',
    definition: 'SD',
    startTimecode: { hours: 0, minutes: 0, seconds: 0, frames: 0 },
    endTimecode: { hours: 0, minutes: 0, seconds: 0, frames: 0 },
  });

  const [error, setError] = useState('');

  const handleTimecodeChange = (type: 'start' | 'end', timecode: { hours: number; minutes: number; seconds: number; frames: number }) => {
    setClip({ ...clip, [type + 'Timecode']: timecode });
  };

  const canAddClip = (newClip: Clip): boolean => {
    if (showReel.clips.length > 0) {
      const firstClip = showReel.clips[0];
      if (firstClip.standard !== newClip.standard) {
        setError('Cannot mix PAL and NTSC clips in the same showreel.');
        return false;
      }
      if (firstClip.definition !== newClip.definition) {
        setError('Cannot mix SD and HD clips in the same showreel.');
        return false;
      }
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (canAddClip(clip)) {
      setShowReel({ ...showReel, clips: [...showReel.clips, clip] });
      closeModal();
    }
  };

  return (
<div className="modal">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="clip-name">Clip Name:</label>
          <input
            id="clip-name"
            type="text"
            value={clip.name}
            onChange={(e) => setClip({ ...clip, name: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="clip-description">Description:</label>
          <textarea
            id="clip-description"
            value={clip.description}
            onChange={(e) => setClip({ ...clip, description: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="clip-standard">Standard:</label>
          <select
            id="clip-standard"
            value={clip.standard}
            onChange={(e) => setClip({ ...clip, standard: e.target.value as 'PAL' | 'NTSC' })}
          >
            <option value="PAL">PAL</option>
            <option value="NTSC">NTSC</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="clip-definition">Definition:</label>
          <select
            id="clip-definition"
            value={clip.definition}
            onChange={(e) => setClip({ ...clip, definition: e.target.value as 'SD' | 'HD' })}
          >
            <option value="SD">SD</option>
            <option value="HD">HD</option>
          </select>
        </div>
        <TimecodeInput
          label="Start Timecode"
          timecode={clip.startTimecode}
          onChange={(timecode) => handleTimecodeChange('start', timecode)}
        />
        <TimecodeInput
          label="End Timecode"
          timecode={clip.endTimecode}
          onChange={(timecode) => handleTimecodeChange('end', timecode)}
        />
        {error && <label className="error-message">{error}</label>}
        <button type="submit">Add Clip</button>
        <button onClick={closeModal}>Cancel</button>
      </form>
    </div>
  );
};

export default ClipModal;
