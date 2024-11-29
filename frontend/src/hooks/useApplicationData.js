import React, {useState} from 'react';

function useApplicationData() {

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
    like,
    toggleModalState,
    modalState,
    closeModal,
    clickImgSetID,
    clickedImgID
  }

  return object;
}

export default useApplicationData;