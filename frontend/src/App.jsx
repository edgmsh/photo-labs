import React from 'react';
import { useState } from "react";
import PhotoListItem from './components/PhotoListItem';
import PhotoList from './components/PhotoList';
import './App.scss';

const [samplePhoto, setPhoto] = useState({
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
});

// Note: Rendering a single component to build components in isolation
const App = () => {
  const photos = new Array(3).fill(samplePhoto);
  return (
    <div className="App">
      {photos.map((photo, index) => (
        <PhotoListItem key={index} photo={photo} />
      ))}
    </div>
  );
};

export default App;
