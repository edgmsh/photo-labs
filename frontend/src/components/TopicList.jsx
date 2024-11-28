import React from "react";
import TopicListItem from "./TopicListItem"
import "../styles/TopicList.scss";

const sampleDataForTopicList = [
  {
    id: "1",
    slug: "topic-1",
    title: "Nature",
  },
  {
    id: "2",
    slug: "topic-2",
    title: "Travel",
  },
  {
    id: "3",
    slug: "topic-3",
    title: "People",
  },
];

const TopicList = (props) => {
  const { topics, selectTopic } = props;

  const mappedTopics = sampleDataForTopicList.map(topic => {
    return <TopicListItem key={topic.id} id={topic.id} label={topic.title} link="placeholder" selectTopic={selectTopic} />;
  });

  return (
    <div className="top-nav-bar--topic-list">
      {mappedTopics}
    </div>
  );
};

export default TopicList;
