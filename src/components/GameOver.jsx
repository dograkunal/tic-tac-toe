import { GAME_STATE } from "../GameConstant"

function GameOver({gameState}) {
switch (gameState){
    case GAME_STATE.inProgress: return <></>;
    case GAME_STATE.playerOWin: return <div className="game-over">O Wins</div>
    case GAME_STATE.playerXWin: return <div className="game-over">X Wins</div>
    case GAME_STATE.draw: return <div className="game-over">Draw</div>

    default: return <></>
}


  
}

export default GameOver;