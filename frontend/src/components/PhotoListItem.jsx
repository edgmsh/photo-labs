import React from 'react';
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const { username, imageSource, id, like, city, country, profile } = props;

  const clickHandler = () => {
    setCounter(prev => prev + 1);
  };

  return (
    <div className="photo-list-item">
      <PhotoFavButton like={like} photo_id={id} />
      <img className="photo-list--image"
        src={imageSource}
        onClick={clickHandler} />
      <div className='photo-list--user-details'>
        <img className="photo-list--user-profile" src={profile} />
        <div className='photo-list--user-info'>
          <span className="photo-list--username">{username}</span>
          <div className="photo-list--user-location">
            {city}, {country}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
