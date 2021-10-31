import React from "react";
import Confetti from "react-confetti";
import useWindowSize from "../../utilities/hooks/useWindowSize";

const BingoWinner = () => {
  const { width, height } = useWindowSize();
  return <Confetti width={width} height={height} />;
  };

export default BingoWinner;
