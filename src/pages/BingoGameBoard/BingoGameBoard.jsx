import { Col, Table } from "react-bootstrap";
import React, { useState } from "react";
import { completeDataSet } from "../../utilities/data";
import BingoCardItem from "../../components/BingoCardItem";
import BingoGameController from "../../utilities/BingoGameController";
import BingoWinner from "../../components/BingoWinner";

const BingoGameBoard = () => {
  const [cardsData, setCardsData] = useState(
    BingoGameController.generateGameCardBoard(completeDataSet)
  );
  const [isWon, setIsWon] = useState();

  //single responsibility says it it should have only 1 purpose.
  const toggleMarked = (i, j) => {
    cardsData[i][j].isMarked = !cardsData[i][j].isMarked;
    setCardsData([...cardsData]);
  };

  // this will mark and do everything related to this click event.
  const handleOnClick = (i, j) => {
    toggleMarked(i, j);
    setIsWon(BingoGameController.checkWinConditions(cardsData));
  };

  return (
    <Col>
      {isWon && <BingoWinner />}
      <Table responsive>
        <tbody>
          {cardsData &&
            cardsData.map((row, indexI) => {
              return (
                <tr align="center" key={`row-${indexI}`}>
                  {row.map((col, indexJ) => (
                    <BingoCardItem
                      key={`col-${indexJ}`}
                      {...col}
                      handleOnClick={() => handleOnClick(indexI, indexJ)}
                    />
                  ))}
                </tr>
              );
            })}
        </tbody>
      </Table>
    </Col>
  );
};

export default BingoGameBoard;
