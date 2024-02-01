import { useState, useEffect } from "react";
import Board from "./Board";
import GameOver from "./GameOver"
import { GAME_STATE } from "../GameConstant"
import Reset from "./Reset"


const PLAYER_X = "X";
const PLAYER_O = "O";

const winnningCombinations = [
    //Rows
    {combo:[0,1,2], strikeCls:"strike-row-1"},
    {combo:[3,4,5], strikeCls:"strike-row-2"},
    {combo:[6,7,8], strikeCls:"strike-row-3"},

    //Columns
    {combo:[0,3,6], strikeCls:"strike-column-1"},
    {combo:[1,4,7], strikeCls:"strike-column-2"},
    {combo:[2,5,8], strikeCls:"strike-column-3"},

    //Diagonals
    {combo:[0,4,8], strikeCls:"strike-diagonal-1"},
    {combo:[2,4,6], strikeCls:"strike-diagonal-2"},
]

const checkWinner = (tiles, strikeCls, setStrikeClas, setGameState)=> {
for(const {combo, strikeCls} of winnningCombinations){
  const tileVal1 = tiles[combo[0]];
  const tileVal2 = tiles[combo[1]];
  const tileVal3 = tiles[combo[2]];

  if(tileVal1 !== null && tileVal1 === tileVal2 && tileVal1 === tileVal3){
    setStrikeClas(strikeCls)
    if(tileVal1 === PLAYER_X){
        setGameState(GAME_STATE.playerXWin)
    }else{
        setGameState(GAME_STATE.playerOWin)
    }
    return;
  }
}

const areAllTilesFilled = tiles.every(el=> el !== null);
if(areAllTilesFilled){
    setGameState(GAME_STATE.draw)
}
}

export default function TicTacToe(){
    const initialGameState = Array(9).fill(null)
    const [tiles, setTiles] = useState(initialGameState)
    const [playerTurn, setPlayerTurn] = useState(PLAYER_X)
    const [strikeCls, setStrikeClas] = useState()
    const [gameState, setGameState] = useState(GAME_STATE.inProgress)

    const handleTileClick = (index) => {
        if(gameState !== GAME_STATE.inProgress ) return
        if(tiles[index] !== null) return
        const newTiles = [...tiles];
        newTiles[index] = playerTurn;
        setTiles(newTiles)
        if(playerTurn === PLAYER_X){
            setPlayerTurn(PLAYER_O)
        }else{
            setPlayerTurn(PLAYER_X)
        }
    }

const handleReset = () => {
    setGameState(GAME_STATE.inProgress)
    setTiles(initialGameState)
    setPlayerTurn(PLAYER_X)
    setStrikeClas(null)
}

    useEffect(()=>{
    checkWinner(tiles, strikeCls, setStrikeClas, setGameState)
    },[tiles])

    return(<div>
        <Board strikeCls={strikeCls} playerTurn={playerTurn} tiles={tiles} onTileClick={handleTileClick}/>
       <GameOver gameState={gameState}/>
       <Reset gameState={gameState} handleReset={handleReset}/>
        </div>)
}