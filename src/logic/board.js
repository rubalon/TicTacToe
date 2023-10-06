import { winnerCombo } from "../constants";

export const checkWinnerFrom = (boardToCheck) => {
  for( let combo of winnerCombo){
    if(boardToCheck[combo[0]] === boardToCheck[combo[1]] &&
       boardToCheck[combo[0]] === boardToCheck[combo[2]] &&
       boardToCheck[combo[0]] ) return boardToCheck[combo[0]];
  }

  return null;
}

export const checkEndGame = (newBoard) => {
  return newBoard.every((square) => square !== null)
}

/*Determina si una combinacion de 3 es ganadora
const winnerCombo = ( combo ) =>{
    if ((combo[0] / 3) | 0 === (combo[1] / 3) | 0 === (combo[2] / 3) | 0) 
      return true;
    if ((combo[0] % 3) === (combo[1] % 3) === (combo[2] % 3)) 
      return true;
    if ((combo[0] / 3) | 0 === (combo[0] % 3) &&
        (combo[1] / 3) | 0 === (combo[1] % 3) &&
        (combo[2] / 3) | 0 === (combo[2] % 3))
      return true;

    return false;

  }
  */