import React from 'react';
import PhotoList from './components/PhotoList';
import TopicList from "./components/TopicList"
import TopNavigationBar from "./components/TopNavigationBar"
import './App.scss';
import PhotoData from './mocks/photos.js';

// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
        <PhotoList photos={PhotoData}/> 
    </div>
  );
};

export default App;
