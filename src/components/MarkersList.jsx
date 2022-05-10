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

const MarkersList = ({ spawnObject }) => {
  return (
    <React.Fragment>
      <ObjectCard
        loading={false}
        handleButtonClick={() => spawnObject(3)}
        data={{
          objectId: "sadasd",
          title: "Marker",
          subTitle: "Für Beschreibungen",
          objectType: "dot",
          imgUrl:
            "https://firebasestorage.googleapis.com/v0/b/senf-dev.appspot.com/o/organizationsData%2FQO0SOuQBIc9wEjpayU9e%2Flogo%2Flogo?alt=media&token=131ee6fa-19a0-4ee9-b8c0-43909e2373d6",
        }}
      />
      {/* <List
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
      /> */}
    </React.Fragment>
  );
};

export default MarkersList;
