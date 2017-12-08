import React, { Component } from 'react';
import './GameBoard.css';

// const NUM_TILES = 16;

class GameBoard extends Component {
  static defaultProps = {
    updateGame() {}
  }

  render() {
    const {tiles, show, matched, updateGame} = this.props;
    const newTiles = tiles.map((tile, index) => {
      return (
        <div
          onClick={() => updateGame(index)}
          key={`tile-${index}`}
          className="tile"
          style={{backgroundColor: show[index] || matched[index] ? tile : null }}
          id={index}>
        </div>
      );
    });
    return <div className="gameboard">{newTiles}</div>;
  }
}

export default GameBoard;
