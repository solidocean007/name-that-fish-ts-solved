import { Component } from "react";
import "./styles/game-board.css";
import { TFish } from "../../types";

type ClassGameBoardProps = {
  fish: TFish[];
  handleScore: (userGuess: string, fishName: string) => void;
};

export class ClassGameBoard extends Component<ClassGameBoardProps> {
  state = { userInput: "" };
  render() {
    const { fish } = this.props;
    const { handleScore } = this.props;

    let nextFishToName: TFish | null = null;

    if (fish && fish.length > 0) {
      nextFishToName = fish[0];
    }
    return (
      <div id="game-board">
        {nextFishToName && (
          <>
            <div id="fish-container">
              <img src={nextFishToName.url} alt={nextFishToName.name} />
            </div>
            <form
              id="fish-guess-form"
              onSubmit={(e) => {
                if (nextFishToName) {
                  e.preventDefault();
                  this.setState({ userInput: "" });
                  handleScore(this.state.userInput, nextFishToName.name);
                }
              }}
            >
              <label htmlFor="fish-guess">What kind of fish is this?</label>
              <input
                type="text"
                name="fish-guess"
                onChange={(e) => {
                  this.setState({ userInput: e.target.value });
                }}
                value={this.state.userInput}
              />
              <input type="submit" />
            </form>
          </>
        )}
      </div>
    );
  }
}
