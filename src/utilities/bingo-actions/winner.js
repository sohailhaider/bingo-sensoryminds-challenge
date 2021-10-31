export const checkWinConditions = (data, cardDimension = 5) => {
  let isWon = false;

  let commulativeDiagonal1Marked = true;
  let commulativeDiagonal2Marked = true;
  for (let i = 0; i < cardDimension; i++) {
    let commulativeHorizentalMarked = true;
    let commulativeVerticalMarked = true;
    for (let j = 0; j < cardDimension; j++) {
      //checking horizentalMarked
      commulativeHorizentalMarked =
        data[i][j].isMarked && commulativeHorizentalMarked;
      commulativeVerticalMarked =
        data[j][i].isMarked && commulativeVerticalMarked;
    }
    if (commulativeHorizentalMarked) {
      return true;
    }
    if (commulativeVerticalMarked) {
      return true;
    }
    //will check diagonal
    commulativeDiagonal1Marked =
    commulativeDiagonal1Marked && data[i][i].isMarked;
    commulativeDiagonal2Marked =
      commulativeDiagonal2Marked && data[i][cardDimension-1-i].isMarked;
  }
  if (commulativeDiagonal1Marked) {
    return true;
  }
  if (commulativeDiagonal2Marked) {
    return true;
  }

  return isWon;
};
