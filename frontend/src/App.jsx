import React, { useState, useEffect } from 'react';
import './App.scss';
import HomeRoute from './routes/HomeRoute';
import PhotoData from './mocks/photos.js';
import TopicsData from './mocks/topics.js';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';



const App = () => {

  const [topics, setTopics] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState(null);

  const {
    favPhotoExist,
    like,
    toggleModalState,
    modalState,
    closeModal,
    clickImgSetID,
    clickedImgID
  } = useApplicationData();

  const selectTopic = (id) => {
    setSelectedTopic(id);
  };

  return (
  <div className="App">
  <HomeRoute
    favPhotoExist={favPhotoExist}
    like={like}
    toggleModalState={toggleModalState}
    PhotoData={PhotoData}
    clickImgSetID={clickImgSetID}
    TopicData={TopicsData}
    selectTopic={selectTopic} />
  {modalState && <PhotoDetailsModal closeModal={closeModal}
    PhotoData={PhotoData}
    like={like}
    toggleModalState={toggleModalState}
    clickedImgID={clickedImgID}
    clickImgSetID />}
  </div>
  );
};

export default App;
