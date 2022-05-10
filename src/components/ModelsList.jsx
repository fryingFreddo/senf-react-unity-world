/** @format */

import React, { useState, useEffect } from "react";
import {
  FlexWrapper,
  LayerWhiteFirstDefault,
  Typography,
  TertiaryButton,
  Button,
  Icon,
  List,
  ObjectCard,
  Tag,
} from "senf-atomic-design-system";

const tags = [
  { topic: "Alle", color: "green" },
  { topic: "Infrastrukur", color: "green" },
  { topic: "Mobiliar", color: "green" },
  { topic: "Natur", color: "green" },
  { topic: "Gebäude", color: "green" },
  { topic: "Spielen", color: "green" },
  { topic: "Sport", color: "green" },
];

const modelsData = [
  {
    topic: "Mobiliar",
    objectId: "sadasd",
    title: "Blumenkübel",
    subTitle: "Kleingarten Sacshen",
    objectType: "Vereine",
    imgUrl:
      "https://firebasestorage.googleapis.com/v0/b/senf-dev.appspot.com/o/organizationsData%2FQO0SOuQBIc9wEjpayU9e%2Flogo%2Flogo?alt=media&token=131ee6fa-19a0-4ee9-b8c0-43909e2373d6",
  },
  {
    topic: "Mobiliar",
    objectId: "xyz",
    title: "Blumenkübel 1",
    subTitle: "Kleingarten Sacshen",
    objectType: "Vereine",
    imgUrl:
      "https://firebasestorage.googleapis.com/v0/b/senf-dev.appspot.com/o/organizationsData%2FQO0SOuQBIc9wEjpayU9e%2Flogo%2Flogo?alt=media&token=131ee6fa-19a0-4ee9-b8c0-43909e2373d6",
  },
  {
    topic: "Infrastrukur",
    objectId: "sadasd",
    title: "Blumenkübel",
    subTitle: "Kleingarten Sacshen",
    objectType: "Vereine",
    imgUrl:
      "https://firebasestorage.googleapis.com/v0/b/senf-dev.appspot.com/o/organizationsData%2FQO0SOuQBIc9wEjpayU9e%2Flogo%2Flogo?alt=media&token=131ee6fa-19a0-4ee9-b8c0-43909e2373d6",
  },
  {
    topic: "Infrastrukur",
    objectId: "sadasd",
    title: "Blumenkübel",
    subTitle: "Kleingarten Sacshen",
    objectType: "Vereine",
    imgUrl:
      "https://firebasestorage.googleapis.com/v0/b/senf-dev.appspot.com/o/organizationsData%2FQO0SOuQBIc9wEjpayU9e%2Flogo%2Flogo?alt=media&token=131ee6fa-19a0-4ee9-b8c0-43909e2373d6",
  },
];
const ModelsList = ({ spawnObject }) => {
  const [models, setModels] = useState(modelsData);
  const [topicsSelected, setTopicsSelected] = useState([
    "Infrastrukur",
    "Mobiliar",
    "Natur",
    "Gebäude",
    "Spielen",
    "Sport",
  ]);

  useEffect(() => {
    setModels(
      modelsData?.filter(({ topic }) => topicsSelected.includes(topic))
    );
    console.log(modelsData);
  }, [topicsSelected]);

  const handleTopicSelector = (topic) => {
    const index = topicsSelected.indexOf(topic);
    if (topic === "Alle") {
      setTopicsSelected([
        "Infrastrukur",
        "Mobiliar",
        "Natur",
        "Gebäude",
        "Spielen",
        "Sport",
      ]);
    } else if (topicsSelected.length === 6) {
      setTopicsSelected([topic]);
    } else if (index === -1) {
      setTopicsSelected(topicsSelected.concat(topic));
    } else {
      const newTopics = topicsSelected.filter((item) => item !== topic);

      if (newTopics.length === 0) {
        setTopicsSelected([
          "Infrastrukur",
          "Mobiliar",
          "Natur",
          "Gebäude",
          "Spielen",
          "Sport",
        ]);
      } else {
        setTopicsSelected(...[newTopics]);
      }
    }
  };

  return (
    <React.Fragment>
      <FlexWrapper
        gap="10px"
        width="calc(100% - 20px)"
        margin="10px"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
      >
        {tags.map(({ name, color, topic }) => (
          <Tag
            color={color}
            text={topic}
            onClick={() => handleTopicSelector(topic)}
            active={
              (topicsSelected.includes(topic) && topicsSelected.length !== 6) ||
              (topicsSelected.length === 6 && topic === "Alle")
            }
          />
        ))}
      </FlexWrapper>

      {/* <List CardType={ObjectCard} loading={false} data={models} /> */}
    </React.Fragment>
  );
};

export default ModelsList;
