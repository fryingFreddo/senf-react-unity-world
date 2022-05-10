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

const FormsList = ({ spawnObject }) => {
  return (
    <List
      CardType={ObjectCard}
      loading={false}
      handleButtonClick={spawnObject}
      data={[
        {
          objectId: 0,
          title: "Cube",
          subTitle: "Kleingarten Sacshen",
          objectType: "Vereine",
          imgUrl:
            "https://drive.google.com/file/d/1UEkNBJXU5dLYDbuyfrBWyCyq8MZIPUHk/view?usp=sharing",
        },
        {
          objectId: 1,
          title: "Ball",
          subTitle: "Kleingarten Sacshen",
          objectType: "Vereine",
          imgUrl:
            "https://firebasestorage.googleapis.com/v0/b/senf-dev.appspot.com/o/organizationsData%2FQO0SOuQBIc9wEjpayU9e%2Flogo%2Flogo?alt=media&token=131ee6fa-19a0-4ee9-b8c0-43909e2373d6",
        },
        {
          objectId: 2,
          title: "Zylinder",
          subTitle: "Kleingarten Sacshen",
          objectType: "Vereine",
          imgUrl:
            "https://firebasestorage.googleapis.com/v0/b/senf-dev.appspot.com/o/organizationsData%2FQO0SOuQBIc9wEjpayU9e%2Flogo%2Flogo?alt=media&token=131ee6fa-19a0-4ee9-b8c0-43909e2373d6",
        },
      ]}
    />
  );
};

export default FormsList;
