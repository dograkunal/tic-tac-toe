function Tile({className, value, onClick, playerTurn}) {
    let hoverCls = null;
    if(value == null && playerTurn !== null){
        hoverCls = `${playerTurn.toLowerCase()}-hover`
    }
    return (<div className={`tile ${className} ${hoverCls}`} onClick={onClick}>{value}</div> );
}

export default Tile;