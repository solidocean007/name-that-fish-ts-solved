import { Component } from "react";
import { Fish } from "../../App";
import "./styles/game-board.css";

interface Props {
  initialFishes: Fish[];
}

interface State {
  userGuessInput: string;
}

/* Create a function that will check if users input matches the fishes name currently
  rendered on screen.
*/

export class ClassGameBoard extends Component<Props, State> {
  state = {
    userGuessInput: "",
  };

  checkUserGuess = (input: string) => {
    const nextFishToName = this.props.initialFishes[0];
    const correctGuess = nextFishToName.name === input;
    if (correctGuess) {
      // increment correct score and render next fish 
    } else {
      // increment incorrect score clear input
    }
  }
  render() {
    const { userGuessInput } = this.state;
    const nextFishToName = this.props.initialFishes[0];
    return (
      <div id="game-board">
        <div id="fish-container">
          <img src={nextFishToName.url} alt={nextFishToName.name} />
        </div>
        <form
          id="fish-guess-form"
          onSubmit={(e) => {
            e.preventDefault();
            this.checkUserGuess(userGuessInput);
            this.setState({ userGuessInput: "" });
          }}
        >
          <label htmlFor="fish-guess">What kind of fish is this?</label>
          <input
            type="text"
            name="fish-guess"
            value={userGuessInput}
            onChange={(e) => {
              this.setState({ userGuessInput: e.target.value });
            }}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
