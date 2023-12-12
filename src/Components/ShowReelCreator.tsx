import React, { useContext, useState } from 'react';
import ShowReelContext from '../Context/ShowReelContext';
import ClipModal from '../Components/Form/ClipModal';

const ShowReelCreator: React.FC = () => {
  const [showReel, setShowReel, selectClip] = useContext(ShowReelContext); 
  const [name, setName] = useState(showReel.name);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    const clipToSelect = showReel.clips.find(clip => clip.name === e.target.value);
    if (clipToSelect) {
      selectClip(clipToSelect);
    } else {
      console.log("Clip not found");
    }

  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowReel({ ...showReel, name });
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="App-header">
      <form onSubmit={handleSubmit} className="show-reel-name-container">
        <label className="show-reel-name-group">Show Reel:</label>
        <input
          type="text"
          value={name}
          placeholder="Enter Show Reel Name"
          onChange={handleNameChange}
        />
        {/* <button type="submit">Show</button> */}
        <button onClick={openModal}>Add New Clip</button>
      </form>
      <div className="clip-list"> 
      {isModalOpen && <ClipModal closeModal={closeModal} />}
      </div>
    </div>
  );
};

export default ShowReelCreator;
