import Strike from "./Strike";
import Tile from "./Tile";
import "../style.css"

function Board() {
    return (<div className="board">
    <Tile className="right-border bottom-border"/>
    <Tile className="right-border bottom-border"/>
    <Tile className="right-border bottom-border"/>
    <Tile className="right-border bottom-border"/>
    <Tile className="right-border bottom-border"/>
    <Tile className="right-border bottom-border"/>
    <Tile className="right-border bottom-border"/>
    <Tile className="right-border bottom-border"/>
    <Tile className="right-border bottom-border"/>
    <Strike />
    </div>);
}

export default Board;