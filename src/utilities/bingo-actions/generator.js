import _ from "lodash";

const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};
export const generateGameCardBoard = (data, cardDimension = 5) => {
  let _data = _.cloneDeep(data);
  if (data.length !== 75) {
    return [];
  }
  let bingoCard = [];
  for (let i = 0; i < cardDimension; i++) {
    bingoCard[i] = [];
    for (let j = 0; j < cardDimension; j++) {
      if (
        i === Math.floor(cardDimension / 2) &&
        j === Math.floor(cardDimension / 2)
      ) {
        bingoCard[i][j] = {
          text: "free slot",
          icon: "",
          isMarked: true,
          isDisabled: true,
        };
      } else {
        let picked = getRandomNumber(0, _data.length);
        bingoCard[i][j] = _data[picked];
        bingoCard[i][j].isMarked = false;
        _data.splice(picked, 1); // REMOVING FOR non-repeating card values.
      }
    }
  }
  return bingoCard;
};
