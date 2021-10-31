import { Col, Table } from "react-bootstrap";
import React from "react";
import { completeDataSet } from "../../utilities/data";
// import { generateGameCardBoard } from "../../utilities/generator";
import BingoCardItem from "../../components/BingoCardItem";
import BingoGameController from "../../utilities/BingoGameController";

const BingoGameBoard = () => {
  const [cardsData, setCardsData] = React.useState(
    BingoGameController.generateGameCardBoard(completeDataSet)
  );

  //single responsibility says it it should have only 1 purpose.
  const toggleMarked = (i, j) => {
    cardsData[i][j].isMarked = !cardsData[i][j].isMarked;
    setCardsData([...cardsData]);
  };

  // this will mark and do everything related to this click event.
  const handleOnClick = (i, j) => {
    toggleMarked(i, j);
    console.log(BingoGameController.checkWinConditions(cardsData));
  };

  return (
    <Col>
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
