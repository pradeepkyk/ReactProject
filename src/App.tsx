import React, { useState } from 'react';
import './App.css';
import ShowReelCreator from './Components/ShowReelCreator';
import ClipList from './Components/ClipList';
import TotalDurationDisplay from './Components/TotalDurationDisplay';
import { ShowReelProvider } from './Context/ShowReelContext';
import clipsData from './Data/mockData';
import './App.css';
import ClipDetails from './Components/Form/ClipDetails';

const App = () => {
  
  return (
    <ShowReelProvider>
      <div className="App">
        <header className="App-header">
          <h1>Show Reel</h1>
          <ClipDetails/>
        </header>
        <ShowReelCreator />
        <ClipList clipsData={clipsData} />
        <TotalDurationDisplay />
      </div>
    </ShowReelProvider>
  );
};

export default App;
