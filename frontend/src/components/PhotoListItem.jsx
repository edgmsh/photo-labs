import React from "react";

import "../styles/PhotoListItem.scss";


const PhotoListItem = (props) => {
  /* Insert React */
  const { id, location, imageSource, username, profile } = props.photo;

  return (
    <div>
      <img src={imageSource} alt="Photo"/>
      <p>
        <img src={profile} alt="Profile"/>
      </p>  
      
        <div>
          <p>{username} </p>
          <p>{location.city} {location.country}</p>
        </div>
    </div>
  )
};

export default PhotoListItem;
