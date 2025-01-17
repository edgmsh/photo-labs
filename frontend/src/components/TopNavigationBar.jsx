import React from 'react';
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss';

const TopNavigation = (props) => {
  return (
    <div className='top-nav-bar'>
      <span className='top-nav-bar__logo'>PhotoLabs</span>
      <TopicList topics={props.topics} onTopicSelect={props.onTopicSelect} />
      <FavBadge isFavPhotoExist={props.isFavPhotoExist} />
    </div>
  );
};

export default TopNavigation;