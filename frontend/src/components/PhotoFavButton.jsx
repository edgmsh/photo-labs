import React, { useCallback, useState } from 'react';

import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {

  const { like, photo_id } = props;
  const [heartStat, setHeartStat] = useState(false);

  const clickHandler = () => {
    setHeartStat(!heartStat);
    like(photo_id);
  };

  return (
    <div className="photo-list--fav-icon" onClick={clickHandler}>
      <div className="photo-list--fav-icon-svg">
        <FavIcon fill={heartStat ? "red" : "white"} />
      </div>
    </div>
  );
}

export default PhotoFavButton;