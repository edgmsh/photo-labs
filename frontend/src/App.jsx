import React from 'react';
import './App.scss';
import useApplicationData from 'hooks/useApplicationData';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

const App = () => {
  const {
    state,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
    setPhotoSelected,
    onTopicSelect,
  } = useApplicationData();

  return (
    <div className='App'>
      <HomeRoute
        onTopicSelect={onTopicSelect}
        photos={state.photoData}
        topics={state.topicData}
        setDisplayModal={setPhotoSelected}
        favourites={state.favourites}
        toggleFavourite={updateToFavPhotoIds}
      />
      {state.displayModal && (
        <PhotoDetailsModal
          closeDisplayModal={onClosePhotoDetailsModal}
          singlePhotoDetail={state.displayModal}
          toggleFavourite={updateToFavPhotoIds}
          favourites={state.favourites}
        />
      )}
    </div>
  );
};

export default App;