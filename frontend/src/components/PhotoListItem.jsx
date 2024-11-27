import React from "react";

import "../styles/PhotoListItem.scss";


const PhotoListItem = (props) => {
  /* Insert React */
  const { id, location, imageSource, username, profile } = props.photo;

  return (
    <div className="photo-list__item">
      <img src={imageSource} alt="Photo" className="photo-list__image"/>

      <div className="photo-list__user-details">
        <img src={profile} alt="Profile" className="photo-list__user-profile"/>
        <div className="photo-list__user-info">
          <p>{username}</p>
          <p className="photo-list__user-location ">{location.city}, {location.country}</p>
        </div>
      </div>
    </div>
  )
};

export default PhotoListItem;
