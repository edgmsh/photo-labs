import React, {useState} from 'react';

function useApplicationData() {
/*
export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
}
*/
  const [likedPhotos, setLikedPhotos] = useState([]);
  const [favPhotoExist, setFavPhotoExist] = useState(false);
  const [modalState, setModalState] = useState(false);
  const [clickedImgID, setClickedImgID] = useState("");

  const like = (id) => {
    let newArr;
    if (likedPhotos.includes(id)) {
      newArr = likedPhotos.filter(p => p !== id);
    } else {
      newArr = [...likedPhotos, id];
    }
    setLikedPhotos(newArr);
    setFavPhotoExist(newArr.length > 0 ? true : false);
  };

  const toggleModalState = () => {
    setModalState(true);
  }

  const closeModal = () => {
    setModalState(false);
  }

  const clickImgSetID = (id) => {
    setClickedImgID(id);
  }

  const object = {
    favPhotoExist,
    like, //updateToFavPhotoIds
    toggleModalState,
    modalState,
    closeModal,
    clickImgSetID,
    clickedImgID
  }
/*
  const appInitialState = {
    favPhotoIds: [],
    selectedPhoto: {},
    photos: [],
    topics: [],
    selectedPhoto: {},
    displayPhotoDetails: false
  };
  return {
    state,
    onPhotoSelect,
    onLoadTopic,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
  };
*/
  return object;
}

export default useApplicationData;