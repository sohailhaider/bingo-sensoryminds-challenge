import React from "react";
// import { Col, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import styled from "styled-components";

const BingoCardCol = styled.td`
  height: 100px;
  border: 1px solid grey;
  cursor: pointer;
  :hover {
    background-color: grey;
  }
`;

const BingoCard = ({ text, handleOnClick, icon, isMarked }) => {
  React.useEffect(() => {
    console.log("Me amrked");
  }, [isMarked]);
  return (
    <BingoCardCol className="align-middle" onClick={handleOnClick}>
      {text}
    </BingoCardCol>
  );
};

BingoCard.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string,
  handleOnClick: PropTypes.func.isRequired,
  isMarked: PropTypes.bool,
};

BingoCard.defaultProps = {
  text: "somedefaultValue",
};

export default BingoCard;
