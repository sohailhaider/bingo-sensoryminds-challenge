import { Row, Col } from "react-bootstrap";
import React from "react";
import BingoGameBoard from "../BingoGameBoard";

const BingoHomePage = () => {
  return (
    <>
      <Row>
        <Col span={24} align="center">
          <h1 className="animate__animated animate__bounce">
            Simple Bingo Cards
          </h1>
        </Col>
      </Row>
      <Row>
        <BingoGameBoard />
      </Row>
    </>
  );
};

export default BingoHomePage;
