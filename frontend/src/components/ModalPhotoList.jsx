import React from 'react';

import ModalPhotoListItem from './ModalPhotoListItem';

import '../styles/PhotoList.scss';

const ModalPhotoList = (props) => {

  const { photos, like } = props;

  const mappedPhotos = photos.map(photo => {
    return (
      <ModalPhotoListItem username={photo.user.name}
        imageSource={photo.urls.regular}
        key={photo.id}
        id={photo.id}
        like={like}
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


export default ModalPhotoList;