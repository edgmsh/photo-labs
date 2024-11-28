import React from 'react';
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {

  const { id, like, location, imageSource, username, profile } = props.photo;

  const clickHandler = () => {
   // toggleModalState();
  //  clickImgSetID(id);
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
        <span className="photo-list--username">{username}</span><br/>
          <div className="photo-list--user-location">
            {location.city}, {location.country}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
