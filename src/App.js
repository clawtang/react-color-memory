import React, { Component } from 'react';
import Navbar from './Navbar';
import GameBoard from './GameBoard';
import './App.css';

const NUM_TILES = 16;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: [
        'blue', 'green', 'red', 'orange', 'purple', 'yellow', 'brown', 'white',
        'blue', 'green', 'red', 'orange', 'purple', 'yellow', 'brown', 'white'
      ],
      tiles: [],
      show: [],
      matched: [],
      shown: true,
      lastTile: undefined
    };
    this.makeTiles = this.makeTiles.bind(this);
    this.shuffleTiles = this.shuffleTiles.bind(this);
    this.updateGame = this.updateGame.bind(this);
  }

  makeTiles() {
    const tiles = this.shuffleTiles([...this.state.colors]);
    const show = new Array(NUM_TILES).fill(false);
    const matched = new Array(NUM_TILES).fill(false);
    const shown = true;
    this.setState({tiles, show, matched, shown});
  }

  shuffleTiles(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  updateGame(tileIndex) {
    const {tiles} = this.state;

    // check if a tile is shown, and show a tile
    let shown = this.state.shown ? false: true;
    if (shown) {
      setTimeout(() => {
        show.fill(false);
        this.setState({show});
      }, 500);
    }
    let show = [...this.state.show];
    show[tileIndex] = true;

    // get matches and check for a match
    let lastTile = tileIndex;
    let matched = [...this.state.matched];
    if (tiles[this.state.lastTile] === tiles[tileIndex] && this.state.lastTile !== tileIndex && shown) {
      matched[this.state.lastTile] = true;
      matched[tileIndex] = true;
    }


    this.setState({show, shown, matched, lastTile});
  }

  render() {
    return (
      <div className="app">
        <Navbar makeTiles={this.makeTiles}/>
        <GameBoard
          tiles={this.state.tiles}
          show={this.state.show}
          matched={this.state.matched}
          updateGame={this.updateGame}/>
      </div>
    );
  }
}

export default App;
