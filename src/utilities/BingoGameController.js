import { generateGameCardBoard } from "./bingo-actions/generator";
import { checkWinConditions } from "./bingo-actions/winner";

class BingoGameController {}

// BingoGameController.__proto__.generateGameCardBoard = generateGameCardBoard;
BingoGameController.generateGameCardBoard = generateGameCardBoard;
BingoGameController.checkWinConditions = checkWinConditions;

export default BingoGameController;
