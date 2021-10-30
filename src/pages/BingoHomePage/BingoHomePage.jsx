import { Row, Col } from "react-bootstrap";
import React from "react";
import BingoCardBoard from "../BingoCardBoard";

const BingoHomePage = () => {
  return (
    <>
      <Row>
        <Col span={24} align="center">
          <h1>Simle Bingo Cards</h1>
        </Col>
      </Row>
      <Row>
        <BingoCardBoard />
      </Row>
    </>
  );
};

export default BingoHomePage;
