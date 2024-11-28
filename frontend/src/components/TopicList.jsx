import React from "react";
import TopicListItem from "./TopicListItem"
import "../styles/TopicList.scss";

const TopicList = (props) => {
  const { topics, selectTopic } = props;

  const mappedTopics = topics.map(topic => {
    return <TopicListItem key={topic.id} id={topic.id} label={topic.title} link="placeholder" selectTopic={selectTopic} />;
  });

  return (
    <div className="top-nav-bar-topic-list">
      {mappedTopics}
    </div>
  );
};

export default TopicList;
