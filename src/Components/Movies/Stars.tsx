import React, { Fragment } from "react";
const startEnabledIcon = require("../../Assets/Icons/Star3.png");
const startDisabledIcon = require("../../Assets/Icons/Star5.png");

interface Props {
  puntuation: number;
}

const Stars = ({ puntuation }: Props) => {
  const BuildStars = () => {
    puntuation = Math.round(puntuation);
    if (puntuation <= 2) {
      return (
        <Fragment>
          <img src={startEnabledIcon} alt="star" />
          <img src={startDisabledIcon} alt="star" />
          <img src={startDisabledIcon} alt="star" />
          <img src={startDisabledIcon} alt="star" />
          <img src={startDisabledIcon} alt="star" />
        </Fragment>
      );
    } else if (puntuation > 2 && puntuation <= 4) {
      return (
        <Fragment>
          <img src={startEnabledIcon} alt="star" />
          <img src={startEnabledIcon} alt="star" />
          <img src={startDisabledIcon} alt="star" />
          <img src={startDisabledIcon} alt="star" />
          <img src={startDisabledIcon} alt="star" />
        </Fragment>
      );
    } else if (puntuation > 4 && puntuation <= 6) {
      return (
        <Fragment>
          <img src={startEnabledIcon} alt="star" />
          <img src={startEnabledIcon} alt="star" />
          <img src={startEnabledIcon} alt="star" />
          <img src={startDisabledIcon} alt="star" />
          <img src={startDisabledIcon} alt="star" />
        </Fragment>
      );
    } else if (puntuation > 6 && puntuation <= 8) {
      return (
        <Fragment>
          <img src={startEnabledIcon} alt="star" />
          <img src={startEnabledIcon} alt="star" />
          <img src={startEnabledIcon} alt="star" />
          <img src={startEnabledIcon} alt="star" />
          <img src={startDisabledIcon} alt="star" />
        </Fragment>
      );
    } else if (puntuation > 8 && puntuation <= 10) {
      return (
        <Fragment>
          <img src={startEnabledIcon} alt="star" />
          <img src={startEnabledIcon} alt="star" />
          <img src={startEnabledIcon} alt="star" />
          <img src={startEnabledIcon} alt="star" />
          <img src={startEnabledIcon} alt="star" />
        </Fragment>
      );
    }

    return <div></div>;
  };

  return (
    <Fragment>
      {puntuation} <BuildStars />
    </Fragment>
  );
};

export default Stars;
