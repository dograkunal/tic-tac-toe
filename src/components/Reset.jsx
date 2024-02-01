import { GAME_STATE } from "../GameConstant"

function Reset({gameState, handleReset}) {
    if(gameState === GAME_STATE.inProgress){return};
    return (<button className="reset-button" onClick={handleReset}>Reset</button>);
}

export default Reset;