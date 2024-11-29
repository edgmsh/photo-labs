import React from 'react';

import PhotoFavButton from './PhotoFavButton';
import '../styles/PhotoListItem.scss';

const ModalPhotoListItem = (props) => {
  const { username, imageSource, id, like, hideUserName, city, country, profile } = props;

  return (
    <div className="photo-list-item">
      <PhotoFavButton photo_id={id} like={like}/>
      <img className="photo-list--image"
        src={imageSource} />
      <div className='photo-list--user-details'>
      <img className="photo-list--user-profile" src={profile} />
        <div className='photo-list--user-info'>
          {!hideUserName && <span>{username}</span>}
          <div className="photo-list--user-location">
            {city}, {country}
          </div>
        </div>
      </div>
    </div>
  );
};


export default ModalPhotoListItem;