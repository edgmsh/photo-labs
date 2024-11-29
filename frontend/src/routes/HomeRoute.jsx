import React from 'react';
import '../styles/HomeRoute.scss';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';


function HomeRoute(props) {

  const {favPhotoExist, like, toggleModalState, PhotoData, clickImgSetID, TopicData, selectTopic} = props;

  return (
    <div className="home-route">
      <TopNavigationBar favPhotoExist={favPhotoExist} TopicData={TopicData} selectTopic={selectTopic} />
      <PhotoList photos={PhotoData} 
      like={like} 
      toggleModalState={toggleModalState}
      clickImgSetID={clickImgSetID} />
    </div>
  );
}

export default HomeRoute;