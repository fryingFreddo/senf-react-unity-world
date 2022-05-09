/** @format */

import React from "react";
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
  { name: "Alle", color: "green" },
  { name: "Pflanzen", color: "green" },
  { name: "Mobiliar", color: "green" },
  { name: "Gebäude", color: "green" },
  { name: "Spielplatz", color: "green" },
];
const ModelsList = () => {
  return (
    <div>
      <FlexWrapper
        gap="10px"
        width="calc(100% - 20px)"
        margin="10px"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
      >
        {tags.map(({ name, color }) => (
          <Tag icon="dot" color={color} text={name} />
        ))}
      </FlexWrapper>

     <List
        CardType={ObjectCard}
        loading={false}
        data={[
          {
            objectId: "sadasd",
            title: "Blumenkübel",
            subTitle: "Kleingarten Sacshen",
            objectType: "Vereine",
            imgUrl:
              "https://firebasestorage.googleapis.com/v0/b/senf-dev.appspot.com/o/organizationsData%2FQO0SOuQBIc9wEjpayU9e%2Flogo%2Flogo?alt=media&token=131ee6fa-19a0-4ee9-b8c0-43909e2373d6",
          },
          {
            objectId: "xyz",
            title: "Blumenkübel 1",
            subTitle: "Kleingarten Sacshen",
            objectType: "Vereine",
            imgUrl:
              "https://firebasestorage.googleapis.com/v0/b/senf-dev.appspot.com/o/organizationsData%2FQO0SOuQBIc9wEjpayU9e%2Flogo%2Flogo?alt=media&token=131ee6fa-19a0-4ee9-b8c0-43909e2373d6",
          },
        ]}
      /> 
    </div>
  );
};

export default ModelsList;
