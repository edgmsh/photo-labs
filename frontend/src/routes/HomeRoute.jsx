import React from 'react';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  return (
    <div className='home-route'>
      <TopNavigation
        topics={props.topics}
        isFavPhotoExist={props.favourites.length > 0}
        onTopicSelect={props.onTopicSelect}
      />
      <PhotoList
        photos={props.photos}
        favourites={props.favourites}
        toggleFavourite={props.toggleFavourite}
        setDisplayModal={props.setDisplayModal}
      />
    </div>
  );
};

export default HomeRoute;