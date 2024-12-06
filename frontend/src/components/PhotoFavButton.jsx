import React from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const toggleFavouritePhoto = () => {
    props.toggleFavourite(props.photoId);
  };

  const colorCheck = props.favourites.includes(props.photoId);

  return (
    <div onClick={toggleFavouritePhoto} className='photo-list--fav-icon'>
      <div className='photo-list--fav-icon-svg'>
        <FavIcon selected={colorCheck} />
      </div>
    </div>
  );
}

export default PhotoFavButton;