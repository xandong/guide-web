import React from "react";
import { CardSection } from "../../utils/model/CardSection";

const CardSingle: React.FC<CardSection> = (props: CardSection) => {
  const { label } = props;
  return (
    <React.Fragment>
      <label htmlFor="">{label}</label>
    </React.Fragment>
  );
};

export default CardSingle;
