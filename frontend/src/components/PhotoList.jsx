import React from "react";
import PhotoListItem from './PhotoListItem';
import "../styles/PhotoList.scss";




const PhotoList = (props) => {
  const {photos} = props;
  const mappedPhotos = photos.map((photo, index) => {
    return (
      <PhotoListItem username={photo.user.name}
        imageSource={photo.urls.regular}
        key={index}
        id={photo.id}
        like = {true}
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
