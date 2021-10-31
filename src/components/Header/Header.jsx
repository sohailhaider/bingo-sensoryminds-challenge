import React from "react";
import { Col } from "react-bootstrap";

function Header() {
  return (
    <Col span={24} align="center">
      <h1 className="animate__animated animate__bounce">Simple Bingo Cards</h1>
      <h5>
        This is a basic Bingo card, where user can select the output based on
        some random call.
      </h5>
    </Col>
  );
}

export default Header;
