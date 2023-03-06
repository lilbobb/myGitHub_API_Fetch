import React from "react";
import ErrorBound from "./errorboundary";

class Bomb extends React.Component {
  render() {
    return this["💣"].caboom();
  }
}

class BombButton extends React.Component {
  state = { renderBomb: false };
  handleBombClick = () => this.setState({ renderBomb: true });
  render() {
    return (
      <ErrorBound>
        {this.state.renderBomb ? (
          <Bomb />
        ) : (
          <button onClick={this.handleBombClick} className="bomb">
            <span role="img" aria-label="bomb">
              💣
            </span>
            Click Me to test ErrorBoundary
          </button>
        )}
      </ErrorBound>
    );
  }
}
export default BombButton;
