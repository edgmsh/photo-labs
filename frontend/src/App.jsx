import React from 'react';
import PhotoListItem from './components/PhotoListItem';
import PhotoList from './components/PhotoList';
import './App.scss';

const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};

const photosList = new Array(3);
photosList.push(sampleDataForPhotoListItem);
photosList.push(sampleDataForPhotoListItem);
photosList.push(sampleDataForPhotoListItem);

// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      <PhotoListItem key={sampleDataForPhotoListItem.id} photo={sampleDataForPhotoListItem} />
      <PhotoList photos={photosList} />
    </div>
  );
};

export default App;
