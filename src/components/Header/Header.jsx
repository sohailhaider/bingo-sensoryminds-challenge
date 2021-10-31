import React from "react";
import { Alert, Col } from "react-bootstrap";

function Header() {
  return (
    <Col span={24} align="center">
      <h1 className="animate__animated animate__bounce">Simple Bingo Cards</h1>
      <h5>
        This is a basic Bingo card, where user can select the output based on
        some random call.
      </h5>
      <Alert variant={"warning"}>
        <i>
          Just one assumptions, for proper multiplayer game I needed a server
          where I could create a game session but here just for demonstration of
          reactjs skills I've limitized the implementation to just frontend.{" "}
        </i>
      </Alert>
    </Col>
  );
}

export default Header;
