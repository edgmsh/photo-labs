import React from "react";
import PhotoListItem from './PhotoListItem';
import "../styles/PhotoList.scss";

const PhotoList = (props) => {

  const { photos, like, toggleModalState, clickImgSetID } = props;

  const mappedPhotos = photos.map(photo => {
    return (
      <PhotoListItem username={photo.user.name}
        imageSource={photo.urls.regular}
        key={photo.id}
        id={photo.id}
        like={like}
        toggleModalState={toggleModalState}
        clickImgSetID={clickImgSetID}
        hideUserName={photo.hideUserName}
        city={photo.location.city}
        country={photo.location.country}
        profile={photo.user.profile} />
    );
  });

  return (
    <ul className="photo-list">
      {mappedPhotos}
    </ul>

  );
};

export default PhotoList;
