import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import ModalPhotoList from '../components/ModalPhotoList';
import PhotoFavButton from '../components/PhotoFavButton';

export const PhotoDetailsModal = (props) => {

  const { closeModal, like, PhotoData, clickedImgID } = props;
  console.log(PhotoData);
  console.log("hello", clickedImgID);
  console.log(PhotoData[0].id);

  const displayOneImg = () => {

    const clickedImageInfo = PhotoData.filter(photo => photo.id === clickedImgID);
    return (
      <div className="card">
        <PhotoFavButton like={like} photo_id={clickedImageInfo[0].id} />
        <img src={clickedImageInfo[0].urls.full} />
        <div className='photo-list--user-details'>
        <img className="photo-list--user-profile" src={clickedImageInfo[0].user.profile} />
          <div className='photo-list--user-info'>
            <span>{clickedImageInfo[0].user.name}</span>
            <div className="photo-list--user-location">
              {clickedImageInfo[0].location.city}, {clickedImageInfo[0].location.country}
            </div>
          </div>
        </div>
      </div>
    );

  };

  return (
    <div className='photo-details-modal'>
      <button className='photo-details-modal--close-button'
        onClick={closeModal}>
        <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_428_287)">
            <path d="M14.0625 3.9375L3.9375 14.0625" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14.0625 14.0625L3.9375 3.9375" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <defs>
            <clipPath id="clip0_428_287">
              <rect width="18" height="18" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>

      {displayOneImg()}

      <span>Similar Photos:</span>

      <ModalPhotoList photos={PhotoData} like={like} />
    </div>
  );
};

export default PhotoDetailsModal;