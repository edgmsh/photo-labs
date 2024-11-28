import React from "react";

import "../styles/TopicListItem.scss";

const sampleDataForTopicListItem = {
  id: "1",
  slug: "topic-1",
  label: "Nature",
};

const TopicListItem = (props) => {
  const {id, label, link, selectTopic} = props;
  return (
  <div className="topic-list--item" onClick={() => selectTopic(id)}>
    <span>{label}</span>
  </div>
  )
}
TopicListItem.defaultProps = {
  id: 1,
  label: 'Nature',
  link: 'link placeholder' 
}

export default TopicListItem;
