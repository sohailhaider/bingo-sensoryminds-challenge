import { Row } from "react-bootstrap";
import React from "react";
import BingoGameBoard from "../BingoGameBoard";
import Header from "../../components/Header";

const BingoHomePage = () => {
  return (
    <>
      <Row>
        <Header />
      </Row>
      <Row>
        <BingoGameBoard />
      </Row>
    </>
  );
};

export default BingoHomePage;
