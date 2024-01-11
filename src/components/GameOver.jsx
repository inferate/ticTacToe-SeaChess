function GameOver({ winner, reset }) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner && <p>{winner} won!</p>}
      {!winner && <p>It`s A Draw</p>}
      <p>
        <button onClick={reset}>Rematch !</button>
      </p>
    </div>
  );
}

export default GameOver;
