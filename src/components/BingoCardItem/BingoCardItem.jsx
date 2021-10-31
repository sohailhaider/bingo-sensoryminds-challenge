import React from "react";
// import { Col, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import styled from "styled-components";

const BingoCardCol = styled.td`
  height: 100px;
  width: 20%;
  border: 1px dashed grey;
  cursor: pointer;
  transition: ${(props) => (props.isMarked ? "color 0.3s linear" : "")};
  transition: ${(props) => (props.isMarked ? "background 0.3s linear" : "")};
  :hover {
    background-color: grey;
  }
  background-color: ${(props) =>
    props.isMarked ? "#72c32a !important" : "inherit"};
  animation: ${(props) => (props.isMarked ? "flipInX" : "")};
  animation-duration: 1s;
`;

const BingoCardItem = ({ text, handleOnClick, icon, isMarked, isDisabled }) => {
  return (
    <>
      <BingoCardCol
        className="align-middle"
        onClick={isDisabled ? () => {} : handleOnClick}
        isMarked={isMarked}
      >
        {text}
      </BingoCardCol>
    </>
  );
};

BingoCardItem.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string,
  handleOnClick: PropTypes.func.isRequired,
  isMarked: PropTypes.bool,
};

BingoCardItem.defaultProps = {
  text: "somedefaultValue",
};

export default BingoCardItem;
